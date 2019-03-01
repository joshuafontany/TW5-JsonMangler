## HelloThere

### TW5-JsonManglerPlugin by [Joshua Fontany](https://github.com/joshuafontany), v 2.0.3

This plugin changes the methods tiddlywiki uses to retrieve and set values in json data tiddlers. It does so in a way that aims for backwards compatibility.

It introduces new features, widgets, and filter operators to manage, edit, and view json tiddlers:

* Allows TextReferences to target nested values ("complex json") using a path syntax.
* An automatic alert when calling actions on an invalid json data tiddler, or when plugin tiddlers have been edited.
* New buttons in the editTemplate for 'application/json' data tiddlers.
$jsonmangler, a widget that catches messages to edit json data tiddlers (used in the editTemplate).
* A new $:/ControlPanel tab, Plugin Management which allows plugin creation and editing using the new json libraries.
* New filter operators:
    * An updated indexes[] operator that can show all index paths. If given the argument verbose, it will list all paths, including the root path to nested objects and arrays.
    * A new hasindex[] operator that returns only those input tiddlers that have a value at the index path supplied.
    * A new tsort[] operator that uses a tokenized sorting method to resolve pesky sorting problems.
    * A new pair of filter operators: encodeindex[] and decodeindex[]. These are used to "escape" or "unescape" the index path separation character  /  (and the encoding character  ~ ). This can be used to build paths with literal /s in a key name token. This is very useful and must be studied closely.
    * A new encodetiddler[] operator, which returns each tiddler in the input as a full json object. Used with the previous pair of operators, this can be used to pack plugin tiddlers.

### Installation

**JsonMangler** requires the following excellent plugins:

* **ModLoader** by Evan Balster
* **Action-MakeTid** by Matabele.

Thanks you two!

#### Single-file .html wikis and plugins-as-packed-tiddler node served method

Visit the Example Wiki: https://joshuafontany.github.io/TW5-JsonManglerPlugin/

Follow the instructions within the HelloThere tiddler.


#### Folder-style node served plugin method

Go to the <$link $to="">Json Mangler Github Release</$list> page and download the latest *.zip file.

Place the *.zip file in your `.\TiddlyWiki5` directory, right click and select `Extract Here` (7zip) or `Extract to here` (Winzip).

All of the required tiddlers will then be placed in the right folders within your `.\TiddlyWiki5\plugins` folder.

Edit any wiki's `tiddlywiki.info` file to include the following in the `plugins` array.

```
"joshuafontany/jsonmangler",
"matabele/action-maketid",
"ebalster/modloader"
```

Finally, restart your server.

### Important Info

Further documentation is available in the example wiki: https://joshuafontany.github.io/TW5-JsonManglerPlugin/

This plugin is a work in progress; please report any issues on GitHub: https://github.com/joshuafontany/TW5-JsonMangerPlugin/issues

If you find this useful and would care to donate, please use my PayPal: https://paypal.me/JoshuaFontany