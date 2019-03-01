/*\
title:  $:/plugins/joshuafontany/jsonmangler/modules/filters/encodetiddler.js
type: application/javascript
module-type: filteroperator

Filter operator for encoding a tiddler in order to store it as a json value string

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var pointer = require("$:/plugins/joshuafontany/jsonmangler/modules/libs/json-pointer.js");

/*
Export our filter function
*/
exports.encodetiddler = function(source,operator,options) {
    var results = [];
    source(function(tiddler, title) {
        var tiddler = $tw.wiki.getTiddler(title),
        fields = {};
        if(tiddler){
            try {
                $tw.utils.each(tiddler.fields,function (value,name) {
                    fields[name] = tiddler.getFieldString(name);
                    
                });
                results.push(JSON.stringify(fields, null, 0));
            } catch (e){};
        }
        
    });
    return results;
};

})();