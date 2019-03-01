/*\
title:  $:/plugins/joshuafontany/jsonmangler/modules/filters/hasindex.js
type: application/javascript
module-type: filteroperator

Filter operator for checking if a Json data tiddler has the specified index

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Export our filter function
*/
exports.hasindex = function(source,operator,options) {
	var results = [],
		invert = operator.prefix === "!";
		if(invert) {
			source(function(tiddler, title) {
				var obj;
				try {obj = JSON.parse($tw.wiki.getReference(title+"!!text"));
				if(!$tw.utils.jsonHas(obj,operator.operand)) 
				{
					results.push(title);
				}
				} catch (e){};
			});
		} else {
			source(function(tiddler, title) {
				var obj;
				try {obj = JSON.parse(tiddler.fields.text);
				if($tw.utils.jsonHas(obj,operator.operand)) 
				{
					results.push(title);
				}
				} catch (e){};
			});
		}
	return results;
};

})();