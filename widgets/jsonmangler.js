/*\
title: $:/plugins/joshuafontany/jsonmangler/widgets/jsonmangler.js
type: application/javascript
module-type: widget

Json mangler widget

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget;

var JsonManglerWidget = function(parseTreeNode,options) {
	this.initialise(parseTreeNode,options);
	this.addEventListeners([
        { type: "tm-json-convert", handler: "handleJsonConvertEvent" },
		{type: "tm-json-refresh", handler: "handleJsonRefreshEvent"},
		{type: "tm-json-flatten", handler: "handleJsonFlattenEvent"},
        { type: "tm-json-expand", handler: "handleJsonExpandEvent" },
        { type: "tm-json-splice", handler: "handleJsonSpliceEvent" },
        { type: "tm-json-insert", handler: "handleJsonInsertEvent" },
        { type: "tm-json-push", handler: "handleJsonPushEvent" },
        { type: "tm-json-pop", handler: "handleJsonPopEvent" },
        { type: "tm-json-shift", handler: "handleJsonShiftEvent" },
        { type: "tm-json-unshift", handler: "handleJsonUnshiftEvent" },
        { type: "tm-json-toschema", handler: "handleJsonToSchemaEvent" },
        { type: "tm-json-tocsv", handler: "handleJsonToCsvEvent" },
        { type: "tm-json-fromcsv", handler: "handleJsonFromCSVEvent" }
	]);
};

/*
Inherit from the base widget class
*/
JsonManglerWidget.prototype = new Widget();

/*
Render this widget into the DOM
*/
JsonManglerWidget.prototype.render = function (parent, nextSibling) {
    //console.log("Render JsonMangler");
    //Save the parent dom node
    this.parentDomNode = parent;
    //Compute Attributes
    this.computeAttributes();
    //Execute logic
    this.execute();
    //Insert the warning if it exists into the DOM and render any children
    var domNode = this.document.createElement("div");
    // Assign class
    domNode.className = "json-mangler";
    //Insert
    parent.insertBefore(domNode, nextSibling);
    this.renderChildren(domNode,null);
    this.domNodes.push(domNode);    
};

/*
Compute the internal state of the widget
*/
JsonManglerWidget.prototype.execute = function() {
	// Get our parameters
    this.mangleTitle = this.getAttribute("tiddler", this.getVariable("currentTiddler"));
    // Construct the child widgets
	this.makeChildWidgets();
};

/*
Selectively refreshes the widget if needed.
Returns true if the widget or any of its children needed re-rendering.
*/
JsonManglerWidget.prototype.refresh = function(changedTiddlers) {
	var changedAttributes = this.computeAttributes();
	if(changedAttributes.tiddler) {
		this.refreshSelf();
		return true;
	} else {
		return this.refreshChildren(changedTiddlers);		
	}
};

/* Event Functions */
JsonManglerWidget.prototype.handleJsonConvertEvent = function(event) {
    var tiddler = this.wiki.getTiddler(this.mangleTitle);
    var padding = event.paramObject["padding"] || tiddler.fields.padding;
    if (!padding || typeof padding === "undefined") padding = 4;
    if(typeof padding == "string")
    {
        if(padding && !(padding === ''+parseInt(padding, 10))) throw "tm-json-refresh error, invalid padding";
        padding = parseInt(padding, 10);
    }
    var sort = event.paramObject["sort"];
    if (typeof sort === "undefined") sort = false
    else{ sort = (sort === "true") };
    
    if (tiddler && tiddler.fields.text) {
        var result, jsonObj,
            a = tiddler.fields.title,
            b = this.wiki.getTextReference(a+"!!text");
        if (!b || 0 == b.length) {
            b = "{}"
        }
        if(!$tw.utils.jsonIsValid(a, b)) {
            return false;
        }
        jsonObj = JSON.parse(b);
        if(!$tw.utils.jsonIsObjArray(jsonObj)) {
            var e = "Unable to convert this Object.\n\nAll root level keys must be integers.";
            $tw.utils.jsonError(e, tiddler.fields.title);
            return false;
        }
        /*Refresh*/
        var modification = this.wiki.getModificationFields();
        result = $tw.utils.jsonConvert(jsonObj);
        modification.text = sort ? $tw.utils.jsonOrderedStringify(result, padding): JSON.stringify(result, null, padding);
        modification.flat = $tw.utils.jsonIsFlat(result);
        this.wiki.addTiddler(new $tw.Tiddler(tiddler, modification));
    }
    $tw.utils.jsonIsPlugin(this.mangleTitle, this.getVariable("currentTiddler"), "tm-json-convert");
	return true;
};

JsonManglerWidget.prototype.handleJsonRefreshEvent = function(event) {
    var tiddler = this.wiki.getTiddler(this.mangleTitle);
    var padding = event.paramObject["padding"];
    if (!padding || typeof padding === "undefined") padding = 4;
    if(typeof padding == "string")
    {
        if(padding && !(padding === ''+parseInt(padding, 10))) throw "tm-json-refresh error, invalid padding";
        padding = parseInt(padding, 10);
    }
    var sort = event.paramObject["sort"];
    if (typeof sort === "undefined") sort = false
    else{ sort = (sort === "true") };
    
    if (tiddler && tiddler.fields.text) {
        var result, jsonObj,
            a = tiddler.fields.title,
            b = this.wiki.getTextReference(a+"!!text");
        if (!b || 0 == b.length) {
            b = "{}"
        }
        if(!$tw.utils.jsonIsValid(a, b)) {
            return false;
        }
        jsonObj = JSON.parse(b);

        /*Refresh*/
        var modification = this.wiki.getModificationFields();
        result = $tw.utils.jsonDedupe(jsonObj);
        modification.text = sort ? $tw.utils.jsonOrderedStringify(result, padding): JSON.stringify(result, null, padding);
        modification.flat = $tw.utils.jsonIsFlat(result);
        this.wiki.addTiddler(new $tw.Tiddler(tiddler, modification));
    }
    $tw.utils.jsonIsPlugin(this.mangleTitle, this.getVariable("currentTiddler"), "tm-json-refresh");
	return true;
};

JsonManglerWidget.prototype.handleJsonFlattenEvent= function(event) {
	var tiddler = this.wiki.getTiddler(this.mangleTitle), padding = event.paramObject["padding"] || tiddler.fields.padding;
    if (!padding || typeof padding === "undefined") padding = 4;
    if(typeof padding == "string")
    {
        if(padding && !(padding === ''+parseInt(padding, 10))) throw "tm-json-refresh error, invalid padding";
        padding = parseInt(padding, 10);
    }
    var sort = event.paramObject["sort"];
    if (typeof sort === "undefined") sort = false
    else{ sort = (sort === "true") };

	if(tiddler && tiddler.fields.text) {
		var result, jsonObj,
            a = tiddler.fields.title,
            b = this.wiki.getTextReference(a+"!!text");
        if (!b || 0 == b.length) {
            b = "{}"
        }
       if(!$tw.utils.jsonIsValid(a, b)) {
            return false;
        }
        jsonObj = JSON.parse(b);

       	/*Flatten*/
        var modification = this.wiki.getModificationFields();
        result = $tw.utils.jsonFlatten($tw.utils.jsonDedupe(jsonObj));
        modification.text = sort ? $tw.utils.jsonOrderedStringify(result, padding): JSON.stringify(result, null, padding);
        modification.flat = $tw.utils.jsonIsFlat(result);
        this.wiki.addTiddler(new $tw.Tiddler(tiddler,modification));		
    }
    $tw.utils.jsonIsPlugin(this.mangleTitle, this.getVariable("currentTiddler"), "tm-json-flatten");
	return true;
};

JsonManglerWidget.prototype.handleJsonExpandEvent= function(event) {
	var tiddler = this.wiki.getTiddler(this.mangleTitle), padding = event.paramObject["padding"] || tiddler.fields.padding;
    if (!padding || typeof padding === "undefined") padding = 4;
    if(typeof padding == "string")
    {
        if(padding && !(padding === ''+parseInt(padding, 10))) throw "tm-json-refresh error, invalid padding";
        padding = parseInt(padding, 10);
    }
    var sort = event.paramObject["sort"];
    if (typeof sort === "undefined") sort = false
    else{ sort = (sort === "true") };

	if(tiddler && tiddler.fields.text) {
		var result, jsonObj,
            a = tiddler.fields.title,
            b = this.wiki.getTextReference(a+"!!text");
        if (!b || 0 == b.length) {
            b = "{}"
        }
       if(!$tw.utils.jsonIsValid(a, b)) {
            return false;
        }
        jsonObj = JSON.parse(b);

		/*Expand*/
        var modification = this.wiki.getModificationFields();
        result = $tw.utils.jsonExpand($tw.utils.jsonDedupe(jsonObj));
        modification.text = sort ? $tw.utils.jsonOrderedStringify(result, padding): JSON.stringify(result, null, padding);
        modification.flat = $tw.utils.jsonIsFlat(result);
        this.wiki.addTiddler(new $tw.Tiddler(tiddler,modification));		
    }
    $tw.utils.jsonIsPlugin(this.mangleTitle, this.getVariable("currentTiddler"), "tm-json-expand");
	return true;
};

JsonManglerWidget.prototype.handleJsonSpliceEvent = function(event) {
    var tiddler = this.wiki.getTiddler(this.mangleTitle);
    var setReference = event.paramObject["set"], index = event.paramObject["index"],
    deleteCount = event.paramObject["delete"], value = event.paramObject["value"], 
    padding = event.paramObject["padding"] || tiddler.fields.padding;
    if (!padding || typeof padding === "undefined") padding = 0;
    if(typeof padding == "string")
    {
        if(padding && !(padding === ''+parseInt(padding, 10))) throw "tm-json-refresh error, invalid padding";
        padding = parseInt(padding, 10);
    }
    var sort = event.paramObject["sort"];
    if (typeof sort === "undefined") sort = false
    else{ sort = (sort === "true") };

    if(!index) index = "";
    if(!/\d$/.test(index)) index += "0";
    if(!deleteCount) deleteCount = 0;
    if (typeof value != "undefined") {
        try {
            //test if an object/array
            value = JSON.parse(value);
        } catch (e) {
            // not a valid object, use it as is
        }
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

        /*DeDupe, Splice, and Refresh Formatting*/
        if (typeof value == "undefined") {
            var {data, remArr} = $tw.utils.jsonSplice($tw.utils.jsonDedupe(jsonObj), index, deleteCount, false);
        }
        else {
            var {data, remArr} = $tw.utils.jsonSplice($tw.utils.jsonDedupe(jsonObj), index, deleteCount, false, value);
        }
        var modification = this.wiki.getModificationFields();
        modification.text = sort ? $tw.utils.jsonOrderedStringify(data, padding): JSON.stringify(data, null, padding);
        modification.flat = $tw.utils.jsonIsFlat(data);
        this.wiki.addTiddler(new $tw.Tiddler(tiddler, modification));
        if(Array.isArray(remArr) && typeof setReference != 'undefined'){
            this.wiki.setTextReference(setReference, $tw.utils.jsonOrderedStringify(remArr, null, 0), this.getVariable("currentTiddler"));
        };
        $tw.utils.jsonIsPlugin(this.mangleTitle, this.getVariable("currentTiddler"), "tm-json-splice");
        return true;
    }
    return false;
};

JsonManglerWidget.prototype.handleJsonInsertEvent = function(event) {
    var tiddler = this.wiki.getTiddler(this.mangleTitle);
    var setReference = event.paramObject["set"], index = event.paramObject["index"],
    deleteCount = event.paramObject["delete"], value = event.paramObject["value"], 
    padding = event.paramObject["padding"] || tiddler.fields.padding;
    if (!padding || typeof padding === "undefined") padding = 0;
    if(typeof padding == "string")
    {
        if(padding && !(padding === ''+parseInt(padding, 10))) throw "tm-json-refresh error, invalid padding";
        padding = parseInt(padding, 10);
    }
    var sort = event.paramObject["sort"];
    if (typeof sort === "undefined") sort = false
    else{ sort = (sort === "true") };
    if (typeof value == "undefined") {
        return false;
    }
    if(!index) index = "";
    if(!/\d$/.test(index)) index += "0";
    if(!deleteCount) deleteCount = 0;
    var insert = false;
    try {
        //test if an object/array
        value = JSON.parse(value);
        if (Array.isArray(value)) insert = true;
        if(value.length && value.length > 120000) $tw.utils.log("jsonMangler Error: value array to insert is too large.");
    } catch (e) {
        // not a valid object, use it as is
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
        /*DeDupe, Insert (Splice with spread syntax), and Refresh Formatting*/
        var {data, remArr} = $tw.utils.jsonSplice(...[$tw.utils.jsonDedupe(jsonObj), index, deleteCount, insert].concat(value));
        var modification = this.wiki.getModificationFields();
        modification.text = sort ? $tw.utils.jsonOrderedStringify(data, padding): JSON.stringify(data, null, padding);
        modification.flat = $tw.utils.jsonIsFlat(data);
        this.wiki.addTiddler(new $tw.Tiddler(tiddler, modification));
        if(Array.isArray(remArr) && typeof setReference != 'undefined'){
            this.wiki.setTextReference(setReference, JSON.stringify(remArr, null, 0), this.getVariable("currentTiddler"));
        };
        $tw.utils.jsonIsPlugin(this.mangleTitle, this.getVariable("currentTiddler"), "tm-json-insert");
        return true;
    }
    return false;
};

JsonManglerWidget.prototype.handleJsonPushEvent = function(event) {
       var tiddler = this.wiki.getTiddler(this.mangleTitle);
    var index = event.paramObject["index"], value = event.paramObject["value"], 
    setReference = event.paramObject["set"], padding = event.paramObject["padding"] || tiddler.fields.padding;
    if (!padding || typeof padding === "undefined") padding = 0;
    if(typeof padding == "string")
    {
        if(padding && !(padding === ''+parseInt(padding, 10))) throw "tm-json-refresh error, invalid padding";
        padding = parseInt(padding, 10);
    }
    var sort = event.paramObject["sort"];
    if (typeof sort === "undefined") sort = false
    else{ sort = (sort === "true") };
    if(!index) index = "";
    if (!value) return false;
    try {
        //test if an object/array
        value = JSON.parse(value);
    } catch (e) {
        // not a valid object, use it as is
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

        /*DeDupe, Push, and Refresh Formatting*/
        let {data, newLength} = $tw.utils.jsonPush($tw.utils.jsonDedupe(jsonObj), index, value);
        var modification = this.wiki.getModificationFields();
        modification.text = sort ? $tw.utils.jsonOrderedStringify(data, padding): JSON.stringify(data, null, padding);
        modification.flat = $tw.utils.jsonIsFlat(data);
        this.wiki.addTiddler(new $tw.Tiddler(tiddler, modification));
        if(typeof setReference != 'undefined'){
            this.wiki.setTextReference(setReference, newLength, this.getVariable("currentTiddler"));
        };
        $tw.utils.jsonIsPlugin(this.mangleTitle, this.getVariable("currentTiddler"), "tm-json-push");
        return true;
    }
    return false;
};

JsonManglerWidget.prototype.handleJsonPopEvent = function(event) {
    var tiddler = this.wiki.getTiddler(this.mangleTitle);
    var setReference = event.paramObject["set"], index = event.paramObject["index"], 
    padding = event.paramObject["padding"] || tiddler.fields.padding;
    if (!padding || typeof padding === "undefined") padding = 0;
    if(typeof padding == "string")
    {
        if(padding && !(padding === ''+parseInt(padding, 10))) throw "tm-json-refresh error, invalid padding";
        padding = parseInt(padding, 10);
    }
    var sort = event.paramObject["sort"];
    if (typeof sort === "undefined") sort = false
    else{ sort = (sort === "true") };
    if(!index) index = "";
    
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

        /*DeDupe, Pop, and Refresh Formatting*/
        var {data, dataItem} = $tw.utils.jsonPop($tw.utils.jsonDedupe(jsonObj), index);
        var modification = this.wiki.getModificationFields();
        modification.text = sort ? $tw.utils.jsonOrderedStringify(data, padding): JSON.stringify(data, null, padding);
        modification.flat = $tw.utils.jsonIsFlat(data, padding);
        this.wiki.addTiddler(new $tw.Tiddler(tiddler, modification));
        if(typeof setReference != 'undefined'){
            this.wiki.setTextReference(setReference, dataItem, this.getVariable("currentTiddler"));
        };
        $tw.utils.jsonIsPlugin(this.mangleTitle, this.getVariable("currentTiddler"), "tm-json-pop");
        return true;
    }
    return false;
};

JsonManglerWidget.prototype.handleJsonShiftEvent = function(event) {
    var tiddler = this.wiki.getTiddler(this.mangleTitle);
    var setReference = event.paramObject["set"], index = event.paramObject["index"], 
    padding = event.paramObject["padding"] || tiddler.fields.padding;
    if (!padding || typeof padding === "undefined") padding = 0;
    if(typeof padding == "string")
    {
        if(padding && !(padding === ''+parseInt(padding, 10))) throw "tm-json-refresh error, invalid padding";
        padding = parseInt(padding, 10);
    }
    var sort = event.paramObject["sort"];
    if (typeof sort === "undefined") sort = false
    else{ sort = (sort === "true") };
    if(!index) index = "";
    
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

        /*DeDupe, Shift, and Refresh Formatting*/
        var {data, dataItem} = $tw.utils.jsonShift($tw.utils.jsonDedupe(jsonObj), index);
        var modification = this.wiki.getModificationFields();
        modification.text = sort ? $tw.utils.jsonOrderedStringify(data, padding): JSON.stringify(data, null, padding);
        modification.flat = $tw.utils.jsonIsFlat(data);
        this.wiki.addTiddler(new $tw.Tiddler(tiddler, modification));
        if(typeof setReference != 'undefined'){
            this.wiki.setTextReference(setReference, dataItem, this.getVariable("currentTiddler"));
        };
        $tw.utils.jsonIsPlugin(this.mangleTitle, this.getVariable("currentTiddler"), "tm-json-shift");
        return true;
    }
    return false;
};

JsonManglerWidget.prototype.handleJsonUnshiftEvent = function(event) {
    var tiddler = this.wiki.getTiddler(this.mangleTitle);
    var index = event.paramObject["index"], value = event.paramObject["value"], 
    setReference = event.paramObject["set"], padding = event.paramObject["padding"] || tiddler.fields.padding;
    if (!padding || typeof padding === "undefined") padding = 0;
    if(typeof padding == "string")
    {
        if(padding && !(padding === ''+parseInt(padding, 10))) throw "tm-json-refresh error, invalid padding";
        padding = parseInt(padding, 10);
    }
    var sort = event.paramObject["sort"];
    if (typeof sort === "undefined") sort = false
    else{ sort = (sort === "true") };
    if(!index) index = "";
    if (!value) return false;
    try {
        //test if an object/array
        value = JSON.parse(value);
    } catch (e) {
        // not a valid object, use it as is
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

        /*DeDupe, Unshift, and Refresh Formatting */
        var {data, newLength} = $tw.utils.jsonUnshift($tw.utils.jsonDedupe(jsonObj), index, value);
        var modification = this.wiki.getModificationFields();
        modification.text = sort ? $tw.utils.jsonOrderedStringify(data, padding): JSON.stringify(data, null, padding);
        modification.flat = $tw.utils.jsonIsFlat(data);
        this.wiki.addTiddler(new $tw.Tiddler(tiddler, modification));
        if(typeof setReference != 'undefined'){
            this.wiki.setTextReference(setReference, newLength, this.getVariable("currentTiddler"));
        };
        $tw.utils.jsonIsPlugin(this.mangleTitle, this.getVariable("currentTiddler"), "tm-json-unshift");
        return true;
    }
    return false;
};

JsonManglerWidget.prototype.handleJsonToSchemaEvent = function(event) {
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

JsonManglerWidget.prototype.handleJsonToCSVEvent = function(event) {
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

JsonManglerWidget.prototype.handleJsonFromCSVEvent = function(event) {
    var CSV_CONFIG = "$:/config/type/application/csv";
    var title = event.paramObject["title"] || this.mangleTitle;
    var tiddler = this.wiki.getTiddler(title);
    var optionsTitle = event.paramObject["options"] || CSV_CONFIG;
    var optionsTiddler = this.wiki.getTiddler(optionsTitle);
    if (tiddler && optionsTiddler) {
        var options = $tw.utils.jsonMerge({}, optionsTiddler.fields, {
            header: (optionsTiddler.fields.headers === "yes") || false,
            skipEmptyLines: (optionsTiddler.fields.skip_empty === "yes") || true,
            primary_key: parseInt(optionsTiddler.fields.primary_key)
        });
        var importText = "[]";
        var results = $tw.utils.csvToJson(tiddler.fields.text, options);
        //grab row 0 as an array to use as headers if needed
        var headers = $tw.utils.csvToJson(tiddler.fields.text, {header: false, preview: 1, skipEmptyLines: true}).data[0];
        if (results.data) {
            if (optionsTiddler.fields["import_as"] == "array") {
                var tiddlersArray = [];
                var tidNameFilter = optionsTiddler.fields["import_title_array"];
                var tidName = this.wiki.filterTiddlers(tidNameFilter, this)[0] || "Json/Data/"+tiddler.fields.title;
                var tid = {
                    title: tidName,
                    type: "application/json",
                    text: JSON.stringify(results.data)
                };
                tiddlersArray[0] = tid;
                importText = JSON.stringify(tiddlersArray);
            }
            if (optionsTiddler.fields["import_as"] == "json") {
                var tiddlersArray = [];
                for (let i = 0; i < results.data.length; i++) {
                    var row = results.data[i];
                    var tidNameFilter = optionsTiddler.fields["import_title_json"];
                    var pk = i.toString();
                    if(options.primary_key >= 0 && !options.header) pk = row[options.primary_key];
                    if(options.primary_key >= 0 && options.header) {
                        var path = headers[options.primary_key];
                        pk = row[path];
                    }
                    this.parentWidget.setVariable("primaryKey", pk);
                    var tidName = this.wiki.filterTiddlers(tidNameFilter, this)[0] || "Json/Data/"+tiddler.fields.title+"/"+i.toString();
                    var tid = {
                        title: tidName,
                        type: "application/json",
                        text: JSON.stringify(row)
                    }; 
                    tiddlersArray[i] = tid;
                }
                importText = JSON.stringify(tiddlersArray);
            }
            if (optionsTiddler.fields["import_as"] == "tiddlers") {
                var tiddlersArray = [];
                for (let i = 0; i < results.data.length; i++) {
                    var row = results.data[i];
                    var tidNameFilter = optionsTiddler.fields["import_title_json"];
                    var pk = i.toString();
                    if(options.primary_key >= 0 && !options.header) pk = row[options.primary_key];
                    if(options.primary_key >= 0 && options.header) {
                        var path = headers[options.primary_key];
                        pk = row[path];
                    }
                    this.parentWidget.setVariable("primaryKey", pk);
                    var tidName = this.wiki.filterTiddlers(tidNameFilter, this)[0] || "Json/Data/"+tiddler.fields.title+"/"+i.toString();
                    var tid = {
                        title: tidName
                    };
                    for (let f = 0; f < headers.length; f++) {
                        var fString = $tw.utils.slugifyText(this.wiki, headers[f]);
                        var importType = (options.header) ? "named" : "numbered";
                        var fPath = "import_" + importType + "_tiddlers";
                        var colFilter = optionsTiddler.fields[fPath];
                        if (!options.header){
                            this.parentWidget.setVariable("columnNumber", f);
                        }
                        if (options.header){
                            this.parentWidget.setVariable("columnName", fString);
                        }                        
                        var val, fName = this.wiki.filterTiddlers(colFilter, this)[0] || "field_"+i.toString();
                        if(!options.header) val = row[f];
                        if(options.header) {
                            var path = headers[f];
                            val = row[path];
                        }
                        tid[fName] = val
                        tiddlersArray[i] = tid;
                    }
                }
                if (options.header) {
                    this.parentWidget.setVariable("primaryKey", "Headers_Tiddler");
                    var tidName = this.wiki.filterTiddlers(tidNameFilter, this)[0] || "Json/Data/"+tiddler.fields.title+"/Headers_Tiddler";
                    var tid = {
                        title: tidName
                    };
                    for (let f = 0; f < headers.length; f++) {
                        var fString = $tw.utils.slugifyText(this.wiki, headers[f]);
                        var importType = (options.header) ? "named" : "numbered";
                        var fPath = "import_" + importType + "_tiddlers";
                        var colFilter = optionsTiddler.fields[fPath];
                        if (!options.header){
                            this.parentWidget.setVariable("columnNumber", f);
                        }
                        if (options.header){
                            this.parentWidget.setVariable("columnName", fString);
                        }                        
                        var val = headers[f], fName = this.wiki.filterTiddlers(colFilter, this)[0] || "field_"+i.toString();
                        tid[fName] = val
                    }
                    tiddlersArray.push(tid)
                }
                importText = JSON.stringify(tiddlersArray);
            }
        }
        
        /* Send the Import Message */
        this.dispatchEvent({type: "tm-import-tiddlers", param: importText});
    }
	return true;
};

exports.jsonmangler = JsonManglerWidget;

})();
