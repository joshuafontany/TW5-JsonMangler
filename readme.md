## readme.md

05th November 2019 at 4:20pm

<div class="tc-tiddler-body tc-reveal">

# **Hello There**

TW5-JsonMangler

Complex JSON Support & Tools by [Joshua Fontany](https://github.com/joshuafontany), v 2.0.6

This plugin changes the methods tiddlywiki uses to retrieve and set values in json data tiddlers. It does so in a way that aims for _backwards compatibility_.

It introduces new features, widgets, and filter operators to manage, edit, and view json tiddlers:

*   Allows Tiddlywiki TextReferences to target nested values ("complex json").
*   An automatic **alert** when calling actions on an invalid json data tiddler, or when plugin tiddlers have been edited.
*   New buttons in the **editTemplate** for 'application/json' data tiddlers.
*   **$jsonmangler**, a widget that catches messages to edit json data tiddlers (used in the editTemplate).
*   A new $:/ControlPanel tab, **Plugin Management** which allows plugin creation and editing using the new json libraries.
*   New filter operators:
    *   An updated **indexes[] operator** that can show all index paths. If given the argument `verbose`, it will list all paths, including the root path to nested objects and arrays.
    *   A new **hasindex[] operator** that returns only those input tiddlers that have a value at the index path supplied.
    *   A new **tsort[] operator** that uses a _tokenized sorting method_ to resolve pesky sorting problems.
    *   A new pair of filter operators: **encodeindex[]** and **decodeindex[]**. These are used to "escape" or "unescape" the index path separation character `/` (and the encoding character `~` ). This can be used to build paths with literal `/`s in a key name token. This is very useful and must be studied closely.
    *   A new **encodetiddler[]** operator, which returns each tiddler in the input as a full json object. Used with the previous pair of operators, this can be used to pack plugin tiddlers.

# Installation

[JsonMangler](https://joshuafontany.github.io/TW5-JsonMangler/) requires the following excellent plugins:

*   ModLoader by Evan Balster
*   Action-MakeTid by Matabele.

Thanks you two!

## For Single-file .html wikis / Node served tid files saved to wiki folder:

Go to the [JsonMangler Example Wiki](https://joshuafontany.github.io/TW5-JsonMangler/).
Scroll to the $:/plugins/joshuafontany/jsonmangler tiddler.
Drag and drop the following links to your own wiki to install the plugins.
Restart your server and(or) refresh your wiki.

*   $:/plugins/ebalster/modloader
*   $:/plugins/matabele/action-maketid
*   $:/plugins/joshuafontany/jsonmangler

## For Node served from TiddlyWiki's plugin folder (tiddlywiki on node.js, Bob on node.js, etc):

Use Git to clone my `master` repository into a folder in your TiddlyWiki5 repo's plugin folder, then setup folders for the required plugins or import them as above.

Alternately, you can use the minified single-file `plugin.info` versions under node.js, which are found in the Releases tab.

Go to [Json Mangler Github Releases](https://github.com/joshuafontany/TW5-JsonMangler/releases) and download the latest *.zip file.

Place the *.zip file in your `.\TiddlyWiki5` directory (or the root above your custom `.\plugins` folder), right click and select `Extract Here` (7zip) or `Extract to here` (Winzip).

A series of folders and a plugin.info (json) file containing all the tiddlers for each required plugin will then be placed in  within your `.\plugins` folder.

Edit any wiki's `tiddlywiki.info` file to include the following in the `plugins` array.

    "joshuafontany/jsonmangler",
    "matabele/action-maketid",
    "ebalster/modloader"

Finally, restart your server.

# Important Info

Further documentation is available in the example wiki:

## [https://joshuafontany.github.io/TW5-JsonMangler/](https://joshuafontany.github.io/TW5-JsonMangler/)

This plugin is a work in progress; any suggestions or bug reports are very welcome.

Please report any issues on [GitHub](#GitHub): [https://github.com/joshuafontany/TW5-JsonMangler/issues](https://github.com/joshuafontany/TW5-JsonMangler/issues)

If you find this useful and would care to donate, please use my [PayPal](#PayPal): [https://paypal.me/JoshuaFontany](https://paypal.me/JoshuaFontany)

</div>