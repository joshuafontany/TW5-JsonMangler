/*\
title: $:/core/modules/filters/indexes.js
type: application/javascript
module-type: filteroperator

Filter operator for returning the indexes of a data tiddler

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var pointer = require("$:/plugins/joshuafontany/jsonmangler/modules/libs/json-pointer.js");

/*
Export our filter function
*/
exports.indexes = function(source,operator,options) {
	var results = [], invert = operator.prefix === "!", operand = operator.operand;
	source(function(tiddler,title) {
		var data = options.wiki.getTiddlerDataCached(title);
		if(data) {
			//filter the indexes
			var search = {},
				matches = [],
				pointers = $tw.utils.jsonIndexes(data);
			if(operator.suffixes) {
				var hasFlag = function(flag) {
						return (operator.suffixes[1] || []).indexOf(flag) !== -1;
					};
				search = {
					depth: operator.suffixes[0] || -1,
					terse: hasFlag("terse"),
					verbose: hasFlag("verbose"),
					caseSensitive: hasFlag("casesensitive"),
					literal: hasFlag("literal"),
					anchored: hasFlag("anchored"),
					regexp: hasFlag("regexp")
				};
			}
			else {
				search = {
					depth: -1,
					terse: false,
					verbose: true,
					caseSensitive: false,
					literal: true,
					anchored: false,
					regexp: false
				};
			}
			$tw.utils.each(pointers,function(title) {
				// Convert the search string into a regexp for each term
				var terms, searchTermRegExp,
					flags = search.caseSensitive ? "" : "i",
					anchor = search.anchored ? "^" : "";
				if(search.literal) {
					if(operand.length === 0) {
						searchTermRegExp = null;
					} else {
						searchTermRegExp = new RegExp("(" + anchor + $tw.utils.escapeRegExp(operand) + ")",flags);
					}
				} else if(search.regexp) {
					try {
						searchTermRegExp = new RegExp("(" + operand + ")",flags);			
					} catch(e) {
						searchTermRegExp = null;
						console.log("Regexp error parsing /(" + operand + ")/" + flags + ": ",e);
					}
				}
				if(!searchTermRegExp || searchTermRegExp.test(pointer)) {
					if(search.depth > -1) {
						var pathArray = pointer.parse(title)
						title = pointer.unparse(pathArray.slice(0, depth))
					}
					$tw.utils.pushTop(matches, title);
				}
				else {
					return true;
				}				
			}.bind(this));

			$tw.utils.pushTop(results, matches);
			}
		});
	return results;
};

})();
