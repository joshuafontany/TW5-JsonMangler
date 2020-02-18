/*\
title: $:/plugins/joshuafontany/jsonmangler/modules/parsers/csvparser.js
type: application/javascript
module-type: parser

The CSV text parser inserts a $csv widget into the parse-tree, which
processes CSV files into a table wrapped in a scrollable div using
the PapaParse library

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var AppCsvParser = function(type,text,options) {
    // Invoke the widget into the parse-tree
    var element = {
        type: "csv",
        tag: "$csv"
    };
    this.tree = [element];
};

exports["application/csv"] = AppCsvParser;

})();

