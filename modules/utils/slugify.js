/*\
title: $:/plugins/joshuafontany/jsonmangler/modules/utils/slugify.js
type: application/javascript
module-type: utils

https://github.com/Jermolene/TiddlyWiki5/issues/3379

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.slugifyText = function(wiki,title) {
	var tiddler = wiki.getTiddler(title),
		slug;
	if(tiddler && tiddler.fields.slug) {
		slug = tiddler.fields.slug;
	} else {
        slug =
            // $tw.utils.transliterate(title.toString().toLowerCase()) // Replace diacritics with basic lowercase ASCII
            title.toString().toLowerCase()
            .replace(/\s+/g,"-")                                       // Replace spaces with -
			.replace(/[^\w\-\.]+/g,"")                                 // Remove all non-word chars except dash and dot
			.replace(/\-\-+/g,"-")                                     // Replace multiple - with single -
			.replace(/^-+/,"")                                         // Trim - from start of text
            .replace(/-+$/,"")                                        // Trim - from end of text
            .replace(/^[^a-z0-9]+$/g, "_");                            // Remove diacritics
	}
	// If the resulting slug is blank (eg because the title is just punctuation characters)
	if(!slug) {
		// ...then just use the character codes of the title
		slug = title.split("").map(function(char) {
			return char.charCodeAt(0).toString();
		}).join("-");
	}
	return slug;
};

})();
