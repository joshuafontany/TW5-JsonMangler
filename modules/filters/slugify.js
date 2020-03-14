/*\
title:  $:/plugins/joshuafontany/jsonmangler/modules/filters/slugify.js
type: application/javascript
module-type: filteroperator

Filter operator for slugifying strings.
"slugify" ~ to convert to a 'url-optimized' string. 
In this case, a valid tiddler field-name.
\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Export our filter function
*/
exports.slugify = function(source,operator,options) {
    var results = [];
    source(function(tiddler, title) {
        $tw.utils.pushTop(results, $tw.utils.slugifyText(options.wiki, title));
    });
    return results;
};

})();