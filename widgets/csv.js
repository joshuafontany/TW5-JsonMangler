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
    this.state = null;
    this.stateTiddler = null;
    this.options = {};
    this.results = {};
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
    // Initialise options from the state tiddler
    this.options = {  
        header: false, //Controls the PapaParse output - false as we are rendering the html from an array
        peek: this.stateTiddler.fields.peek === "yes",
        debug: this.stateTiddler.fields.debug  === "yes",
        preview: 0,
        skipEmptyLines: this.stateTiddler.fields.skip_empty === "yes",
        delimiter: this.stateTiddler.fields.delimiter,
        newline: this.stateTiddler.fields.newline,
        quoteChar: this.stateTiddler.fields.quote_char,
        escapeChar: this.stateTiddler.fields.escape_char
    };
    if (this.options.peek) {
        this.options.preview = parseInt(this.stateTiddler.fields.preview);
        this.options.preview += (this.stateTiddler.fields.headers) ? 1 : 0;
    }
    //Check source
    var source,
        tiddler = this.wiki.getTiddler(this.csvSource);
    if(!tiddler) {
        // The source isn't the title of a tiddler, so we'll assume it's text
        source = this.csvSource;      
    } else if(tiddler.fields.type == "application/csv" && !!tiddler.fields.text){
        source = tiddler.fields.text;
    }        

    this.results = $tw.utils.csvToJson(source, this.options);
    // Create a div to contain the CSV table or error message
    var domNode = this.document.createElement("div");
    // Assign class
    domNode.className = "tc-csv-widget";
    try {
		// Generate content into the div
		if(this.options.debug) {
            console.log("Render Debug CsvWidget");
			this.renderDebug(domNode, source);
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

CsvWidget.prototype.renderDebug = function(div, source) {
    //set the 'csvState' variable
    this.setVariable("csvState",this.state); 
    //Render
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
    // Add the controls and headers to the parseTree
    var cols = 1;
    var controls = {
        "type": "element", "tag": "tr", "children": [{
            "type": "element", "tag": "th", "children": [{
                "type": "transclude", "children": [],
                "attributes":{
                    "tiddler": { 
                        "type": "string", 
                        "value": "$:/plugins/joshuafontany/jsonmangler/ui/viewTemplates/csvControls"
                    }
                }
            }],
            "attributes": {
                "colspan": {"type": "string", "value": cols}
            }
        }]
    };
    tree[0].children[0].children[0].children.push(controls);
    //Table body
    if(source) {
        var row = {
                "type": "element", "tag": "tr", "children": []
            };
        row.children.push({
                "type": "element", "tag": "td", "children": [{
                    "type": "element", "tag": "pre", "children":[{
                        "type": "text",
                        "text": source
                    }]
                }]
            });
        tree[0].children[0].children[1].children.push(row);
    }
        
    this.parseTreeNode.children = tree;
    // Construct the child widgets
	this.makeChildWidgets();
};

CsvWidget.prototype.renderCsv = function(div) {
    var cols = this.results.data[0].length;
    var x = (this.stateTiddler.fields.headers === "yes") ? 1 : 0 ;
    var finalPage = Math.ceil((this.results.data.length-x)/parseInt(this.stateTiddler.fields.per_page)); //Pages are 1 indexed
    var prevPage = (parseInt(this.stateTiddler.fields.start_page) <= 1) ? 1 : parseInt(this.stateTiddler.fields.start_page)-1;
    var nextPage = (parseInt(this.stateTiddler.fields.start_page) >= finalPage) ? finalPage : parseInt(this.stateTiddler.fields.start_page)+1;
    var startLine = ((parseInt(this.stateTiddler.fields.start_page)-1)*parseInt(this.stateTiddler.fields.per_page))+x; //Pages are 1 indexed, lines are 0 indexed
    if (startLine < 0) startLine == 0
    var endLine = startLine + parseInt(this.stateTiddler.fields.per_page);
    if (endLine >= this.results.data.length) endLine = this.results.data.length;
    //set the 'csvState' & 'csvImport' variables
    this.setVariable("csvImport",this.import); 
    this.setVariable("csvState",this.state);    
    this.setVariable("csvFinalPage", finalPage.toString());
    this.setVariable("csvPrevPage", prevPage.toString());
    this.setVariable("csvNextPage", nextPage.toString());
    this.setVariable("csvStartLine", startLine.toString());
    this.setVariable("csvEndLine", (endLine-1).toString());
    this.setVariable("csvLastIndex", (this.results.data.length-1).toString());
    this.setVariable("csvLength", this.results.data.length.toString());
    this.setVariable("csvCols", cols.toString());
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
    if (this.results.data && this.results.data.length > 0) {
        // Add the controls and headers to the parseTree
        var controls = {
            "type": "element", "tag": "tr", "children": [{
                "type": "element", "tag": "th", "children": [{
                    "type": "transclude", "children": [],
                    "attributes":{
                        "tiddler": { 
                            "type": "string", 
                            "value": "$:/plugins/joshuafontany/jsonmangler/ui/viewTemplates/csvControls"
                        }
                    }
                }],
                "attributes": {
                    "colspan": {"type": "string", "value": cols}
                }
            }]
        };
        tree[0].children[0].children[0].children.push(controls);
        if (this.stateTiddler.fields.headers === "yes") {
            var lineArr = this.results.data[0];
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
            var lineArr = this.results.data[line];
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
    var config = $tw.wiki.getTiddler(CSV_CONFIG,{});
    // Get our parameters
    this.csvSource = this.getAttribute("source", this.getVariable("currentTiddler")),
    this.state = this.getAttribute("state","$:/csv/widget/" + encodeURIComponent(this.csvSource) + this.getStateQualifier()),
    this.import = this.getAttribute("state","$:/csv/import/" + encodeURIComponent(this.csvSource) + this.getStateQualifier());
    this.stateTiddler = $tw.wiki.getTiddler(this.state);
    var importTiddler = $tw.wiki.getTiddler(this.import);
    if(!this.stateTiddler){
        var config = $tw.wiki.getTiddler(CSV_CONFIG,{}),
            creationFields = this.wiki.getCreationFields(),
            modificationFields = this.wiki.getModificationFields(),
            fields = {
                //render state
                headers: config.fields.headers || "yes",
                peek: config.fields.peek || "no",
                per_page: config.fields.per_page || "10",
                start_page: config.fields.start_page || "1",
                //parse options
                debug: config.fields.debug || "no",
                preview: config.fields.preview || "0",
                skip_empty: config.fields.skip_empty || "no",
                delimiter: config.delimiter || "",	// "" = auto-detect
                newline: config.newline || "",	// "" = auto-detect
                quote_char: config.quote_char || '"',
                escape_char: config.escape_char || '"'            };
        this.stateTiddler = new $tw.Tiddler(creationFields,fields,modificationFields,{title: this.state});
        this.wiki.addTiddler(this.stateTiddler);
    }
    if(!importTiddler){
        var creationFields = this.wiki.getCreationFields(),
            modificationFields = this.wiki.getModificationFields(),
            fields = {
                //import options
                import_type: config.fields.import_type || "",
                primary_key: config.fields.primary_key || "-1",
                import_title_tiddlers: config.fields.import_title_tiddlers,
                import_title_json: config.fields.import_title_json,
                import_title_array: config.fields.import_title_array,
                import_subtitle_tiddlers: config.fields.import_subtitle_tiddlers,
                import_subtitle_json: config.fields.import_subtitle_json,
                import_named_columns: config.fields.import_named_columns,
                import_numbered_columns: config.fields.import_numbered_columns
            };
        importTiddler = new $tw.Tiddler(creationFields,fields,modificationFields,{title: this.import});
        this.wiki.addTiddler(importTiddler);
    }
};

/*
Selectively refreshes the widget if needed.
Returns true if the widget or any of its children needed re-rendering.
*/
CsvWidget.prototype.refresh = function(changedTiddlers) {
    var changedAttributes = this.computeAttributes();
    var changedState = false;
    if(changedTiddlers[this.state]){
        var newState = $tw.wiki.getTiddler(this.state);
        if (newState) changedState = !$tw.utils.jsonIsEqual(this.stateTiddler.fields, newState.fields);
        else changedState= true;
    }
    var refreshTiddler = Boolean(
        changedAttributes.text || changedTiddlers[CSV_CONFIG] || changedState
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
