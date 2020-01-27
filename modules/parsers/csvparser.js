/*\
title: $:/plugins/joshuafontany/jsonmangler/modules/parsers/csvparser.js
type: application/javascript
module-type: parser

The CSV text parser processes CSV files into a table wrapped in a scrollable widget
by calling $tw.utils.csvToJson - which calls the PaaParse library

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var AppCsvParser = function(type,text,options) {
    // Invoke the widget into the parse-tree
    var element = {
        type: "csv",
        tag: "$csv",
        text: text
    };
    this.tree = [element];
};

exports["application/csv"] = AppCsvParser;

})();

