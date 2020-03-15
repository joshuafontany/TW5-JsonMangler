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
	var results = [], descend = true, path = operator.operand || "";
	source(function(tiddler,title) {
		var data = options.wiki.getTiddlerDataCached(title);
		if(data) {
			if (path !== "") data = $tw.utils.jsonGet(data, path);
			//descend defaults to true
			if(operator.suffixes) {
				if ((operator.suffixes[0] || []).indexOf("root") !== -1 ) descend = false;
			}
			var pointers = $tw.utils.jsonIndexes(data, descend);
			$tw.utils.pushTop(results, pointers);
			}
		});
	return results;
};

})();
