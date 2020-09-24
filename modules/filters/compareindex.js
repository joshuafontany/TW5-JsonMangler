/*\
title: $:/plugins/joshuafontany/jsonmangler/modules/filters/compareindex.js
type: application/javascript
module-type: filteroperator

General purpose index comparison operator

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.compareindex = function(source,operator,options) {
    var suffixes = operator.suffixes || [],
        index = (suffixes[0] || [])[0],
		type = (suffixes[1] || [])[0],
		mode = (suffixes[2] || [])[0],
		typeFn = types[type] || types.number,
		modeFn = modes[mode] || modes.eq,
		invert = operator.prefix === "!",
		results = [];
	source(function(tiddler,title) {
        if(tiddler) {
            title = tiddler ? tiddler.fields.title : title;
			var value = options.wiki.extractTiddlerDataItem(tiddler,index);
            if (value && value !== "") {
                if(modeFn(typeFn(value,operator.operand)) !== invert) {
                    results.push(title);
                }
            }
        }
	});
	return results;
};

var types = {
	"number": function(a,b) {
		return compare($tw.utils.parseNumber(a),$tw.utils.parseNumber(b));
	},
	"integer": function(a,b) {
		return compare($tw.utils.parseInt(a),$tw.utils.parseInt(b));
	},
	"string": function(a,b) {
		return compare("" + a,"" +b);
	},
	"date": function(a,b) {
		var dateA = $tw.utils.parseDate(a),
			dateB = $tw.utils.parseDate(b);
		if(!isFinite(dateA)) {
			dateA = new Date(0);
		}
		if(!isFinite(dateB)) {
			dateB = new Date(0);
		}
		return compare(dateA,dateB);
	},
	"version": function(a,b) {
		return $tw.utils.compareVersions(a,b);
	}
};

function compare(a,b) {
	if(a > b) {
		return +1;
	} else if(a < b) {
		return -1;
	} else {
		return 0;
	}
};

var modes = {
	"eq": function(value) {return value === 0;},
	"ne": function(value) {return value !== 0;},
	"gteq": function(value) {return value >= 0;},
	"gt": function(value) {return value > 0;},
	"lteq": function(value) {return value <= 0;},
	"lt": function(value) {return value < 0;}
}

})();
