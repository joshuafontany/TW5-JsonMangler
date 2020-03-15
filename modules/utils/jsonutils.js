/*\
title: $:/plugins/joshuafontany/jsonmangler/modules/utils/jsonutils.js
type: application/javascript
module-type: utils

Various json utility functions added to $tw.utils

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var pointer = require("$:/plugins/joshuafontany/jsonmangler/modules/libs/json-pointer.js");
var alphanum = require("$:/plugins/joshuafontany/jsonmangler/modules/libs/alphanum.js");

/* Import the json schema helper methods */
var jsonFactory = require("$:/plugins/joshuafontany/jsonmangler/modules/libs/jsonschema_instantiator.js");
var toJsonSchema = require("$:/plugins/joshuafontany/jsonmangler/modules/libs/tojsonschema.js");

/* Import the lodash _.isEqual(), _.merge(), and _.xor() methods */
exports.jsonIsEqual = require("$:/plugins/joshuafontany/jsonmangler/modules/libs/lodash/isEqual.js"); 
exports.jsonMerge = require("$:/plugins/joshuafontany/jsonmangler/modules/libs/lodash/merge.js");
exports.jsonXor = require("$:/plugins/joshuafontany/jsonmangler/modules/libs/lodash/xor.js");

/*
JSON Schema methods
*/
exports.jsonSchemaInstance = function(schema) {
	if (typeof schema == "undefined" ) throw "jsonSchemaInstance: invalid schema";
	return jsonFactory.instantiate(schema);
}
exports.jsonToSchema = function(obj) {
	if (typeof obj == "undefined" ) throw "jsonToSchema: invalid schema";
	return toJsonSchema(obj);
}

/*
Displays a Json Error alert to the user.
*/
exports.jsonError = function(e, title){
	if(!title) title = "unknown tiddler";
	var jsonError = "$:/temp/jsonError/"+title.replace(/^(\$\:\/)/,"");
	var error = $tw.wiki.getTiddler(jsonError);
	if (typeof error == "undefined") {
		var error = new $tw.Tiddler($tw.wiki.getCreationFields(),{},{
			title: jsonError,
			"draft.title": undefined,
			"draft.of": undefined
		},$tw.wiki.getModificationFields());
	}
	var modification = $tw.wiki.getModificationFields();
	modification.text = "<div class='json-error'>{{$:/core/images/warning}} ''JSON Error''</div>\n\n"+
	"[["+title+"]]\n\n"+e.toString();
	modification.tags = "$:/tags/Alert"
	$tw.wiki.addTiddler(new $tw.Tiddler(error, modification));
}

/*
Tests a json tiddler for valid json syntax.
*/
exports.jsonIsValid = function(titleOrTiddler, data) {
	var tiddler = titleOrTiddler;
	if(!(tiddler instanceof $tw.Tiddler)) {
		tiddler = $tw.wiki.getTiddler(tiddler);	
	}
	if(!(data)){
		data = tiddler.fields.text;
	}
	if(tiddler && data) {
		try {
			if(/^\s*[{[]/.test(data.toString())){
				JSON.parse(data);
			}
			else{
				throw "Json tiddlers must be objects or arrays at the root level.";
			}
		} catch (e) {
			$tw.utils.jsonError(e, tiddler.fields.title);
			return false;
		}
		return true;
	}
	return false;
};

/*
Tests a json tiddler for a possible numerals-as-key-names array in the root object.
*/
exports.jsonIsObjArray = function(data) {
    if(data.constructor === Array){
        return true;    
	}
    var allInts = true, allKeys = Object.keys(data);
    for (let i = 0; i < allKeys.length; i++) {
        const key = allKeys[i];
        if(!((key % 1) === 0)){
            allInts = false;
        }
    }
    return allInts;
};

/*
Tests if the current tiddler's type is 'application/json', and if the tiddler has a 'plugin-type' field.
Displays a warning alert if true.
*/
exports.jsonIsPlugin = function(tiddler, context) {
	if($tw.wiki.getTiddlerText("$:/config/JsonPluginChangeAlerts") == "no") return;
	var target = $tw.wiki.getTiddler(tiddler);
    try {
	   if(!(target.fields["draft.of"]) && (target.fields.type == 'application/json' && target.fields["plugin-type"])) throw ""+
	   "JsonMangler just modified a plugin tiddler.\n\n"+
	   "If you did not intend this to happen, it may be time to revert to a backup,"+
	   "or manually inspect the affected plugin tiddler.\n\nYour wiki will error on loading "+
	   "if it does not have valid Json syntax in the text field.\n\n"+
	   "Context: "+context;
    } catch (e) {
		$tw.utils.jsonError(e, target.fields.title);
    }	
};

/*
Tests for existence of an index
Returns true if the literal index (leading "/" optional) exists in 
the top level keys, else returns true if the index (leading "/" optional) 
is a valid json-pointer path in the object.
*/
exports.jsonHas= function(obj, index) {
	if(!obj) throw "jsonHas error, no object";
	if(!index || index.length == 0 || index == "" || index == "/") throw "jsonHas error, missing or invalid index";

	if (!(index.charAt( 0 ) == '/')) {
		index = "/" + index;
	};
	var legacyIndexEsc = "/" + pointer.escape(index.substring(1));
	var indexEsc = "/" + pointer.escape(index);
	if(pointer.has(obj, legacyIndexEsc)) {
		return true;
	}
	if(pointer.has(obj, indexEsc)) {
		return true;
	}
	if(!pointer.has(obj, legacyIndexEsc) && !pointer.has(obj, indexEsc)){
		var value = pointer.has(obj,index);
	return value;
	};
	
};

/*
Reads and returns data from an index path, prefers leading "/" (optional)
Tests to see if literal key exists at the top level, and returns that value
Else, returns 'nested' data located at index via json-pointer get().
*/
exports.jsonGet= function(obj, index) {
	if(!obj) throw "jsonGet error, no object";
	if(!index || index.length == 0 || index == "" || index == "/") throw "jsonGet error, missing or invalid index";

	var value;
	if (!(index.charAt( 0 ) == '/')) {
		index = "/" + index;
	};
	if($tw.utils.hop(obj, index.substring(1))) {
		value = obj[index.substring(1)];
	}
	else if($tw.utils.hop(obj, index)) {
		value = obj[index] || "";
	}
	else if(pointer.has(obj,index)){
		value = pointer.get(obj,index); 
	}
	else {value = "";}
	return String(value) === value ? value : JSON.stringify(value, null, 2);	
};

/*
Sets a value at an index path, prefers leading "/" (optional).
Tests if the string value passed is an integer, or a valid json  
object/array, and if so calls the appropriate parse() method.
Tests to see if a literal key exists at the top level, and sets 
the value there, else we set the value at the 'nested' location.
*/
exports.jsonSet= function(obj, index, value) {
	if(!obj) throw "jsonSet error, no obj";
	if(!index || index.length == 0 || index == "" || index == "/") throw "jsonSet error, missing or invalid index";
	if (!(index.charAt( 0 ) == '/')) {
		index = "/" + index;
	};
	if(typeof value == "undefined") value = null;

	//fix for blank root obj and numeral index/array init
	if (JSON.stringify(obj) === "{}") {
		var pathArray = pointer.parse(index)
		if(/^(?:\d+|-)$/.test(pathArray[0])) obj = [];
	}
	
	var setValue;
	if(String(value) === value && !(value === "")){
		if(!isNaN(parseFloat(value)) && isFinite(value)){
			if(parseInt(value) % 1 === 0){
				//Int
				try{
					var i = parseInt(value);
					if (i && typeof i === "number") {
						setValue = i;
					}
				}
				catch(e){};
			}
			if (parseFloat(value) % 1 !== 0) {
				//Float
				try {
					var f = parseFloat(value);
					if (f && typeof f === "number") {
						setValue = f;
					}
				} catch (e) {}
			}
		}
		if (setValue === undefined) {
			try{
				var o = JSON.parse(value);
				if ((o && typeof(o) === "object") || o === null || typeof(o) == typeof(true)) {
					setValue = o;
				}
			}
			catch(e){};
		}	
	}
	
	if (setValue === undefined) { setValue = value };
	
	var legacyIndex = index.substring(1);
	var legacyIndexEsc = "/" + pointer.escape(legacyIndex);
	var indexEsc = "/" + pointer.escape(index);
	if(pointer.has(obj, legacyIndexEsc)) {
		obj[legacyIndex] = setValue;
		return;
	}
	if(!pointer.has(obj, legacyIndexEsc) && pointer.has(obj, indexEsc)) {
		obj[index] = setValue;
		return;
	}
	if(!pointer.has(obj, legacyIndexEsc) && !pointer.has(obj, indexEsc)){
		pointer.set(obj,index,setValue);
	};	
};

/*
Deletes all keys that match the specified index.
*/
exports.jsonRemove= function(obj, index) {
	if(!obj) throw "jsonRemove error, no object";
	if(!index || index.length == 0 || index == "" || index == "/") throw "jsoRemove error, missing or invalid index";

	if (!(index.charAt( 0 ) == '/')) {
		index = "/" + index;
	};
	var legacyIndexEsc = "/" + pointer.escape(index.substring(1));
	var indexEsc = "/" + pointer.escape(index);
	if(pointer.has(obj, legacyIndexEsc)) {
		pointer.remove(obj,legacyIndexEsc);
	}
	if(!pointer.has(obj, legacyIndexEsc) && pointer.has(obj, indexEsc)) {
		pointer.remove(obj,indexEsc);
	}
	if(pointer.has(obj, index)){
		pointer.remove(obj,index);
	};
};

/* JSON Utility Functions */

exports.jsonFlatten = function (data) {
	if(!data) throw "jsonFlatten error, no data object";
	if ($tw.utils.jsonIsFlat(data)) {
		return data;
	}
    var surfaceKeys = {}, nestedKeys = {};
    pointer.walk(data, function (value, path) {
		//Count instances of '/'
		var match = path.match(/\//g);
		var count = match ? match.length : 0;
		if (count <= 1) {
			path = pointer.parse(path)[0];
			surfaceKeys[path] = value;
		}
	}, false);
	pointer.walk(data, function (value, path) {
		//Count instances of '/'
		var match = path.match(/\//g);
		var count = match ? match.length : 0;
		if (count > 1) {
			nestedKeys[path] = value;
		}        
	}, undefined);	
	var result = Object.assign({}, surfaceKeys, nestedKeys);
    //console.log("Json Flatten");
    return result;
};

exports.jsonExpand = function (data) {
	if(!data) throw "jsonExpand error, no object";
	if (Object(data) !== data || Array.isArray(data)) return data;
	try {
		//validate json obj here
		pointer.walk(data, function (value, path) {
			//get value & parse path
			path = pointer.parse(path)[0];
			//Count instances of '/'
			var match = path.match(/\//g);
			var count = match ? match.length : 0;
			if (count > 0) {
				value = pointer.get(data, pointer.compile([path]));
				if (!(path.charAt( 0 ) == '/')) {
					path = "/" + path;
				};
				var refTokens = pointer.parse(path);
				pointer.set(data, refTokens, value);
				pointer.remove(data, "/"+pointer.escape(path));
			};
		}, false);
		return data;
	} catch (e) {
		throw 	"jsonExpand error: "+e.toString();
	}
};

exports.jsonIsFlat = function (data) {
    var objKeys = Object.keys(data),
        flat = true;
    if (objKeys) {
        objKeys.forEach(function (d) {
            var a = data[d];
            if ((!!a) && (a.constructor === Array)) {
                flat = false;
            }
            if ((!!a) && (a.constructor === Object)) {
                flat = false;
            }
        })
    }
    return flat;
};

/*
Returns a list of all keys on the object.
Top level keys are returned as-is.
Nested keys are returned as an index/pointer.
*/
exports.jsonIndexes = function (data, decend) {

    var objKeys = Object.keys(pointer.dict(data, decend)),
        results = [];
    if (objKeys) { 
		// Convert top level keys with '~1' back into their literal form.
        objKeys.forEach(function (key) {
			//Count instances of '/'
			var match = key.match(/\//g);
			var count = match ? match.length : 0;
			if (count == 1) {
				results.push(pointer.unescape(key.substring(1)))
			}
			else{
				results.push(key);
			}
        })
	}
	results.sort(alphanum.alphanumCS);
    return results;
};

/* Sorts strings in an array, gets longest & shortest, then gets longest common prefix */
exports.longestCommonPrefix = function (strs) {
	if (!strs)
	return '';

	let smallest = strs.reduce( (min, str) => min < str ? min : str, strs[0] );
	let largest  = strs.reduce( (min, str) => min > str ? min : str, strs[0] );

	for (let i=0; i<smallest.length; i++) {
		if (smallest[i] != largest[i])
			return smallest.substr(0,i);
	}

	return '';
};

/* Recurses through a path and finds the longest valid prefix */
exports.longestValidPrefix = function (data, str, sep) {
	if (!str)
	return '';
	if(!sep) sep = "/";
	var escStr = (sep && sep != '/') ? pointer.escape(str).replace(sep, '/') : str;
	var tokens = pointer.parse(escStr);
	var results = [];

	for (let i=0; i<tokens.length; i++) {
		if ($tw.utils.jsonHas(data, tokens.slice(0, i))) results.push(tokens[i]);
	}
	var finalStr;
	if (results.length > 0) finalStr = pointer.unescape(results.join(sep))
	return (finalStr) ? finalStr : '';
};

/* Sorts object by top level keys, using custom alphanum tokenized sorting */
exports.jsonSort = function (data) {
	return data.sort(alphanum.alphanum);
};

/* Sorts object by top level keys, using custom alphanum tokenized sorting, returns string */
exports.jsonOrderedStringify = function (data, padding) {
	if(!padding) padding = 0;
	const allKeys = [];
	JSON.stringify(data, (k, v) => { allKeys.push(k); return v; });
	allKeys.sort(alphanum.alphanum);
	return JSON.stringify(data, allKeys, padding);
};

/* https://stackoverflow.com/users/4079235/johan-persson
 * Compare two objects by reducing an array of keys in obj1, having the
 * keys in obj2 as the intial value of the result. Key points:
 * - All keys of obj2 are initially in the result.
 * - If the loop finds a key (from obj1, remember) not in obj2, it adds
 *   it to the result.
 * - If the loop finds a key that are both in obj1 and obj2, it compares
 *   the value. If it's the same value, the key is removed from the result.
 */
exports.jsonDiff = function(obj1, obj2) {
	if(typeof obj1 == "undefined" || typeof obj2 == "undefined") throw "jsonDiff: invalid object reference";
    const diff = Object.keys(obj1).reduce((result, key) => {
        if (!obj2.hasOwnProperty(key)) {
            result.push(key);
        } else if (this.jsonIsEqual(obj1[key], obj2[key])) {
            const resultKeyIndex = result.indexOf(key);
            result.splice(resultKeyIndex, 1);
        }
        return result;
    }, Object.keys(obj2));

    return diff;
}

/* 	
Resolves all top level keys that have '/' in them.
The values of these top level keys are set to the 'nested' location,
and this overwrites the existing values at those locations.
This method should only be called for user-called(button driven, etc)
actions until debugged.
*/
exports.jsonDedupe = function (data) {
	if(!data) throw "jsonDedupe error, no data object";
	var allKeys = [];
	//Get top-level keys
	JSON.stringify(data, (k, v) => { allKeys.push(k); return v; });
	for (let i = 0; i < allKeys.length; i++) {
		const key = allKeys[i];
		//Count instances of '/'
		var match = key.match(/\//g);
		var count = match ? match.length : 0;
		//Test for leading '/'
		var path = (key.charAt( 0 ) == '/') ? key : '/' + key;
		if (count > 0 && pointer.has(data, path)) {
			//If the key is a path (count > 0), and the object has data at that path,
			//set the data there and delete the top level key.
			pointer.set(data, path, data[key]);
			delete data [key];
		};
	}
	return data;
};

/* 	
Tests the object to see if all key names are integers.
If so, the root object is converted into a 0 index array.
If the object is already an array, it is converted into
an object where all key names are integers.
*/
exports.jsonConvert = function (data) {
	if(!data) throw "jsonConvert error, no data object";
	data = pointer.reassign(data);
	return data;
};

/* 	
Calls the .splice() method at a specific pointer location.
'startIndex' is a path that needs to end in an Int,
'deleteCount' needs to be an Int.
Supports multiple values in array form.
Returns the updated data object, and an array of any removed elements.
*/
exports.jsonSplice = function (data, startIndex, deleteCount, insert, ...value) {
	if(!data) throw "jsonSplice error, no data object";
	if(!startIndex) throw "jsonSplice error, no startIndex";
	deleteCount = parseInt(deleteCount, 10) || 0;

	var refTokens = pointer.parse(startIndex), i, arrayPath, modArr, remArr;
	if (refTokens && refTokens.length > 0) {
		i = refTokens[refTokens.length - 1];
		refTokens.splice(refTokens.length - 1, 1);
		if (refTokens.length === 0) { arrayPath = ''; }
		else{
			arrayPath = '/' + refTokens.map(pointer.escape).join('/');
		}
		try {
			modArr = (arrayPath === '') ? data : pointer.get(data, arrayPath);
			if(!Array.isArray(modArr)) throw "jsonSplice error, data is not an array";
			if (value.length == 0)
			{
				remArr = modArr.splice(i, deleteCount);
			}
			else if(value.length > 0 && insert == true)
			{
				remArr = modArr.splice(...[i, deleteCount].concat(value));
			}
			else if(value.length > 1 && insert == false)
			{
				remArr = modArr.splice(i, deleteCount, value);
			}
			else {
				remArr = modArr.splice(i, deleteCount, value[0]);
			}
			if (arrayPath === ''){ data = modArr; }
			else{ pointer.set(data, arrayPath, modArr);	}
		} catch (e) {
			throw "jsonSplice error: " + e.toString();
		}
	}
	return {data, remArr};
};

/* 	
Calls the .push() method at a specific pointer location, 'arrPath'.
Supports multiple values in array form.
Returns the updated data object, and the new length of the array.
*/
exports.jsonPush = function (data, arrPath, values) {
	if(!data) throw "jsonPush error, no data object";	
	var modArr, newLength;
	try {
		if (arrPath === '') {
			modArr = data;
			if(!Array.isArray(modArr)) throw "jsonPush error, data is not an array";
			newLength = modArr.push(values);
			data = modArr;
		}
		else{
			modArr = pointer.get(data, arrPath);
			if(!Array.isArray(modArr)) throw "jsonPush error, no array found at arrayPath";
			newLength = modArr.push(values);
			pointer.set(data, arrPath, modArr);
		}
	} catch (e) {
		throw "jsonPush error: " + e.toString();
	}
	return {data, newLength};
};

/* 	
Calls the .pop() method at a specific pointer location, 'arrPath'.
Returns the updated data object and the last item of the array.
*/
exports.jsonPop = function (data, arrPath) {
	if(!data) throw "jsonPop error, no data object";	
	var modArr, dataItem;
	try {
		if (arrPath === '') {
			modArr = data;
			if(!Array.isArray(modArr)) throw "jsonPop error, data is not an array";
			dataItem = modArr.pop();
			data = modArr;
		}
		else{
			modArr = pointer.get(data, arrPath);
			if(!Array.isArray(modArr)) throw "jsonPop error, no array found at arrayPath";
			dataItem = modArr.pop();
			pointer.set(data, arrPath, modArr);
		}
	} catch (e) {
		throw "jsonPop error: " + e.toString();
	}
	return {data, dataItem};
};

/* 	
Calls the .shift() method at a specific pointer location.
Returns the new data object and the first item of the array.
*/
exports.jsonShift = function (data, arrPath) {
	if(!data) throw "jsonShift error, no data object";	
	var modArr, dataItem;
	try {
		if (arrPath === '') {
			modArr = data;
			if(!Array.isArray(modArr)) throw "jsonShift error, data is not an array";
			dataItem = modArr.shift();
			data = modArr;
		}
		else{
			modArr = pointer.get(data, arrPath);
			if(!Array.isArray(modArr)) throw "jsonShift error, no array found at arrayPath";
			dataItem = modArr.shift();
			pointer.set(data, arrPath, modArr);
		}
	} catch (e) {
		throw "jsonShift error: " + e.toString();
	}
	return {data, dataItem};
};

/* 	
Calls the .unshift() method at a specific pointer location.
Supports multiple values in array form.
Returns the new data object and the new kength of the array.
*/
exports.jsonUnshift = function (data, arrPath, values) {
	if(!data) throw "jsonUnshift error, no data object";
	var modArr, newLength;
	try {
		if (arrPath === '') {
			modArr = data;
			if(!Array.isArray(modArr)) throw "jsonUnshift error, data is not an array";
			newLength = modArr.unshift(values);
			data = modArr;
		}
		else{
			modArr = pointer.get(data, arrPath);
			if(!Array.isArray(modArr)) throw "jsonUnshift error, no array found at arrayPath";
			newLength = modArr.unshift(values);
			pointer.set(data, arrPath, modArr);
		}
	} catch (e) {
		throw "jsonUnshift error: " + e.toString();
	}
	return {data, newLength};
};

})();