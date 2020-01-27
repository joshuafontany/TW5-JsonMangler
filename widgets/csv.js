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
	this.addEventListeners([
        { type: "tm-csv-tidders", handler: "handleCsvImportEvent" }
	]);
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
		domNode.textContent = ex;
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
        var tiddler = $tw.wiki.getTiddler(this.options.title);
        if(tiddler.field.text.length > 0 && source == "") source = tiddler.fields.text;
    }
    
    // Generate a table to display the Csv
    var results = $tw.utils.csvToJson(source, this.options);
    var cols = results.data[0].length;

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
        // Add the data to the parseTree
        var tag = "th";
        for(var line=0; line<results.data.length; line++) {
            var lineArr = results.data[line];
            if(lineArr) {
                var row = {
                        "type": "element", "tag": "tr", "children": []
                    };
                for(var column=0; column<lineArr.length; column++) {
                    row.children.push({
                            "type": "element", "tag": tag, "children": [{
                                "type": "text",
                                "text": lineArr[column]
                            }]
                        });
                }
                tag = "td";
                if(line == 0){
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
                    tree[0].children[0].children[0].children.push(row);
                }
                else {
                    tree[0].children[0].children[1].children.push(row);
                }
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
    this.options.title = this.getAttribute("tiddler", this.getVariable("currentTiddler"))
    var tiddler = $tw.wiki.getTiddler(this.options.title);
    // Initialise options from the config tiddler or widget attributes
    var config = $tw.wiki.getTiddler(CSV_CONFIG,{});
    var previewVal = this.getAttribute("preview", tiddler.fields.preview || config.fields.preview || "0");
    this.options = {        
        debug: this.getAttribute("debug", tiddler.fields.debug || config.fields.debug || "no") === "yes",
        preview: parseInt(previewVal),
        skipEmptyLines: this.getAttribute("skip_empty", tiddler.fields.skip_empty || config.skip_empty || "no") === "yes",
        header: false
    };
};

/*
Selectively refreshes the widget if needed.
Returns true if the widget or any of its children needed re-rendering.
*/
CsvWidget.prototype.refresh = function(changedTiddlers) {
	var changedAttributes = this.computeAttributes();
	if(changedAttributes.text || changedAttributes.debug || changedAttributes.preview || changedTiddlers[CSV_CONFIG]) {
		this.refreshSelf();
		return true;
	} else {
		return this.refreshChildren(changedTiddlers);		
	}
};

/* Event Functions */
CsvWidget.prototype.handleCsvImportEvent = function(event) {
    var tiddler = this.wiki.getTiddler(this.mangleTitle);
    var schemaTitle = event.paramObject["schema"];
    if (!schemaTitle || typeof schemaTitle === "undefined" || schemaTitle == "") {
        schemaTitle = "$:/schema/"+this.mangleTitle;
    }
    if (tiddler && tiddler.fields.text) {
        var jsonObj,
            a = tiddler.fields.title,
            b = this.wiki.getTextReference(a+"!!text");
        if (!b || 0 == b.length) {
            b = "{}"
        }
        if(!$tw.utils.jsonIsValid(a, b)) {
            return false;
        }
        jsonObj = JSON.parse(b);

        /*Generate the Schema*/
        var jsonSchema = $tw.utils.jsonToSchema(jsonObj),
        fields = {},
		creationFields = this.wiki.getCreationFields(),
        modificationFields  = this.wiki.getModificationFields();
        fields["type"] = "application/json";
        fields["text"] = JSON.stringify(jsonSchema);
        var tiddler = this.wiki.addTiddler(new $tw.Tiddler(creationFields,fields,modificationFields,{title: schemaTitle}));
        this.wiki.setTextReference(this.mangleTitle+"!!schema",schemaTitle,this.getVariable("currentTiddler"));
        this.dispatchEvent({
            type: "tm-navigate",
            navigateTo: schemaTitle,
            navigateFromTitle: this.mangleTitle,
            navigateFromNode: this,
            navigateFromClientRect: {}
        });
    }
	return true;
};

exports.csv = CsvWidget;

})();
