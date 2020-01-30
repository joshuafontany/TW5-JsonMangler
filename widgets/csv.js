/*\
title: $:/plugins/joshuafontany/jsonmangler/widgets/csv.js
type: application/javascript
module-type: widget

A wrapper that provides the `<$csv>` widget.
Called by the csv parser:
$:/plugins/joshuafontany/jsonmangler/modules/parsers/csvparser.js

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget;

var CsvWidget = function(parseTreeNode,options) {
    this.options = {};
	this.initialise(parseTreeNode,options);
	//this.addEventListeners([]);
};

var CSV_CONFIG = "$:/config/type/application/csv";

/*
Inherit from the base widget class
*/
CsvWidget.prototype = new Widget();

/*
Render this widget into the DOM
*/
CsvWidget.prototype.render = function (parent, nextSibling) {
    //Save the parent dom node
    this.parentDomNode = parent;
    //Compute Attributes
    this.computeAttributes();
    //Execute logic
    this.execute();
    // Create a div to contain the CSV table or error message
    var domNode = this.document.createElement("div");
    // Assign class
    domNode.className = "tc-csv-widget";
    try {
		// Generate content into the div
		if(this.options.debug) {
            console.log("Render CsvWidget");
			this.renderDebug(domNode);
		} else {
			this.renderCsv(domNode);
		}
	} catch(ex) {
		domNode.className = "tc-csv-error";
		domNode.textContent = ex.toString();
	}
    //Insert
    parent.insertBefore(domNode, nextSibling);
    this.renderChildren(domNode,null);
    this.domNodes.push(domNode);    
};

CsvWidget.prototype.renderDebug = function(div) {
	var output = ["<pre>"];
	output.push(text)
	output.push("</pre>");
	div.innerHTML = output.join("");
};

CsvWidget.prototype.renderCsv = function(div) {
    // Get the source text
    var source = this.getAttribute("text",this.parseTreeNode.text || "");
    if (source === "") {
        var tiddler = $tw.wiki.getTiddler(this.state.tiddler);
        if(tiddler.field.text.length > 0 && source == "") source = tiddler.fields.text;
    }

    //get the stateTiddler
    var stateTiddler = $tw.wiki.getTiddler(this.state);

    //Calculate table specific variable
    var match = source.match(/\r?\n/g);
    var l = match.length;
    var results = $tw.utils.csvToJson(source, this.options);

    var x = (stateTiddler.fields.headers === "yes") ? 1 : 0 ;
    var finalPage = Math.ceil((results.data.length-x)/parseInt(stateTiddler.fields.per_page)); //Pages are 1 indexed
    var prevPage = (parseInt(stateTiddler.fields.start_page) <= 1) ? 1 : parseInt(stateTiddler.fields.start_page)-1;
    var nextPage = (parseInt(stateTiddler.fields.start_page) >= finalPage) ? finalPage : parseInt(stateTiddler.fields.start_page)+1;
    var startLine = ((parseInt(stateTiddler.fields.start_page)-1)*parseInt(stateTiddler.fields.per_page))+x; //Pages are 1 indexed, lines are 0 indexed
    if (startLine < 0) startLine == 0
    var endLine = startLine + parseInt(stateTiddler.fields.per_page);
    if (endLine >= results.data.length) endLine = results.data.length;
    this.setVariable("csvState",this.state);       
    this.setVariable("csvFinalPage", finalPage.toString());
    this.setVariable("csvPrevPage", prevPage.toString());
    this.setVariable("csvNextPage", nextPage.toString());
    this.setVariable("csvStartLine", startLine.toString());
    this.setVariable("csvEndLine", (endLine-1).toString());
    this.setVariable("csvLastIndex", (results.data.length-1).toString());
    this.setVariable("csvLength", l.toString());

    // Table framework
    var tree = [{
		"type": "scrollable", "children": [
            {
			"type": "element", "tag": "table", "children": [
            {
                "type": "element", "tag": "thead", "children": []
            },
            {
                "type": "element", "tag": "tbody", "children": []
            }
            ], "attributes": {
				"class": {"type": "string", "value": "tc-csv-table"}
			}
		}], "attributes": {
            "class": {"type": "string", "value": "tc-csv-scrollable"},
            "fallthrough": "no"
        }
    }];
    if (results.data && results.data.length > 0) {
        // Add the controls and headers to the parseTree
        var cols = results.data[0].length;
        var controls = {
            "type": "element", "tag": "tr", "children": [{
                "type": "element", "tag": "th", "children": [{
                    "type": "transclude", "children": [],
                    "attributes":{
                        "tiddler": { 
                            "type": "string", 
                            "value": "$:/plugins/joshuafontany/jsonmangler/ui/viewTemplates/csvControls.tid"
                        }
                    }
                }],
                "attributes": {
                    "colspan": {"type": "string", "value": cols}
                }
            }]
        };
        tree[0].children[0].children[0].children.push(controls);
        if (stateTiddler.fields.headers === "yes") {
            var lineArr = results.data[0];
            var row = {
                "type": "element", "tag": "tr", "children": []
            };
            for(var column=0; column<lineArr.length; column++) {
                row.children.push({
                        "type": "element", "tag": "th", "children": [{
                            "type": "text",
                            "text": lineArr[column]
                        }]
                    });
            }
            tree[0].children[0].children[0].children.push(row);
        }
        //Table body
        for(var line=startLine; line<endLine; line++) {
            var lineArr = results.data[line];
            if(lineArr) {
                var row = {
                        "type": "element", "tag": "tr", "children": []
                    };
                for(var column=0; column<lineArr.length; column++) {
                    row.children.push({
                            "type": "element", "tag": "td", "children": [{
                                "type": "text",
                                "text": lineArr[column]
                            }]
                        });
                }
                tree[0].children[0].children[1].children.push(row);
            }
        }
    }    
    this.parseTreeNode.children = tree;
    // Construct the child widgets
	this.makeChildWidgets();
};

/*
Compute the internal state of the widget
*/
CsvWidget.prototype.execute = function() {
    // Get our parameters
    var config = $tw.wiki.getTiddler(CSV_CONFIG,{});
    var title = this.getAttribute("tiddler", this.getVariable("currentTiddler")),
        stateTitle = "$:/state/tiddler/csv/" + title  + this.getStateQualifier();
    var stateTiddler = $tw.wiki.getTiddler(stateTitle);
    if(!stateTiddler){
        var creationFields = this.wiki.getCreationFields(),
            modificationFields = this.wiki.getModificationFields(),
            fields = {
                tiddler: title,
                start_page: this.getAttribute("start_page", config.fields.start_page || "1"),
                delimiter: this.getAttribute("delimiter", config.delimiter || ""),	// "" = auto-detect
                newline: this.getAttribute("newline", config.newline || ""),	// "" = auto-detect
                quoteChar: this.getAttribute("quote_char", config.quote_char || '"'),
                escapeChar: this.getAttribute("escape_char", config.escape_char || '"'),
                peek: this.getAttribute("peek", config.fields.peek || "no"),
                preview: this.getAttribute("preview", config.fields.preview || "0"),
                skip_empty: this.getAttribute("skip_empty", config.fields.skip_empty || "no"),
                debug: this.getAttribute("debug", config.fields.debug || "no"),
                headers: this.getAttribute("headers", config.fields.headers || "yes"),
                per_page: this.getAttribute("per_page", config.fields.per_page || "10")
            };
        stateTiddler = new $tw.Tiddler(creationFields,fields,modificationFields,{title: stateTitle});
        this.wiki.addTiddler(stateTiddler);   
    }
    this.state = stateTitle;

    // Initialise options from the config tiddler or widget attributes
    this.options = {  
        header: false, //Controls the PapaParse output
        peek: stateTiddler.fields.peek === "yes",
        debug: stateTiddler.fields.debug  === "yes",
        skipEmptyLines: stateTiddler.fields.skip_empty === "yes",
        preview: 0
    };
    if (this.options.peek) {
        this.options.preview = parseInt(stateTiddler.fields.preview);
        this.options.preview += (stateTiddler.fields.headers) ? 1 : 0;
    }

};

/*
Selectively refreshes the widget if needed.
Returns true if the widget or any of its children needed re-rendering.
*/
CsvWidget.prototype.refresh = function(changedTiddlers) {
    var changedAttributes = this.computeAttributes();
    var refreshTiddler = Boolean(
        changedAttributes.text || changedTiddlers[CSV_CONFIG] || changedTiddlers[this.state]
    )
	if(refreshTiddler) {
		this.refreshSelf();
		return true;
	} else {
		return this.refreshChildren(changedTiddlers);		
	}
};

exports.csv = CsvWidget;

})();
