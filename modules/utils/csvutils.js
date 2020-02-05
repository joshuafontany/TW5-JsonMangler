/*\
title: $:/plugins/joshuafontany/jsonmangler/modules/utils/csvutils.js
type: application/javascript
module-type: utils

Various csv utility functions added to $tw.utils

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

$tw.utils.registerFileType("application/csv","utf8",".csv");

var pointer = require("$:/plugins/joshuafontany/jsonmangler/modules/libs/json-pointer.js");
var alphanum = require("$:/plugins/joshuafontany/jsonmangler/modules/libs/alphanum.js");

/* Import the csv parser methods */
var Papa = require("$:/plugins/joshuafontany/jsonmangler/modules/libs/csv/papaparse.min.js");

/* Default Papa Config */
var default_config = {
	delimiter: "",	// auto-detect
	newline: "",	// auto-detect
	quoteChar: '"',
	escapeChar: '"',
	header: false,
	transformHeader: undefined,
	dynamicTyping: false,
	preview: 0,
	encoding: "",
	worker: false,
	comments: false,
	step: undefined,
	complete: undefined,
	error: undefined,
	download: false,
	downloadRequestHeaders: undefined,
	skipEmptyLines: false,
	chunk: undefined,
	fastMode: undefined,
	beforeFirstChunk: undefined,
	withCredentials: undefined,
	transform: undefined,
	delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
}

/* CSV to JSON and JSON to CSV methods */
exports.csvToJson = function (csv_text, papa_config) {
	if (!csv_text) return;
	papa_config = $tw.utils.jsonMerge({}, default_config, papa_config);

	var results = Papa.parse(csv_text, papa_config);
	if (results){return results;}
};

exports.csvFromJson = function (csv_text, papa_config) {
	if (!csv_text) return;
	papa_config = $tw.utils.jsonMerge({}, default_config, papa_config);

	var results = Papa.unparse(csv_text, papa_config);
	if (results){return results;}
};

// Room here for implementing the other PapaParse methods
// Remote reads for database-exports?
// https://www.papaparse.com/docs


})();