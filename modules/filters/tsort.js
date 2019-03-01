/*\
title:  $:/plugins/joshuafontany/jsonmangler/modules/filters/tsort.js
type: application/javascript
module-type: filteroperator

Filter operator for sorting via tokenization

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var alphanum = require("$:/plugins/joshuafontany/jsonmangler/modules/libs/alphanum.js");

/*
Export our filter function
*/
exports.tsort = function(source,operator,options) {
	var results = prepare_results(source),
	invert = operator.prefix === "!",
	cs = operator.operand === "true";
	cs ? results.sort(alphanum.alphanumCS): results.sort(alphanum.alphanum);
	if(invert) results.reverse();
	return results;
};

var prepare_results = function (source) {
	var results = [];
	source(function(tiddler,title) {
		results.push(title);
	});
	return results;
};

})();