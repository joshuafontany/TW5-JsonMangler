@@ -72,33 +72,35 @@
 type: wikimethod
-%0A
+%0D%0A%0D
 %0AExtension metho
@@ -117,33 +117,35 @@
  $tw.Wiki object
-%0A
+%0D%0A%0D
 %0AAdds the follow
@@ -170,33 +170,35 @@
 the wiki object:
-%0A
+%0D%0A%0D
 %0A* %60eventListene
@@ -893,33 +893,35 @@
 er change occurs
-%0A
+%0D%0A%0D
 %0A%5C*/%0A(function()
@@ -913,33 +913,35 @@
 %5C*/%0A(function()%7B
-%0A
+%0D%0A%0D
 %0A/*jslint node: 
@@ -991,33 +991,35 @@
 */%0A%22use strict%22;
-%0A
+%0D%0A%0D
 %0Avar widget = re
@@ -1053,33 +1053,35 @@
 ets/widget.js%22);
-%0A
+%0D%0A%0D
 %0Avar USER_NAME_T
@@ -1157,33 +1157,35 @@
 mestampDisable%22;
-%0A
+%0D%0A%0D
 %0A/*%0AAdd availabl
@@ -1389,33 +1389,35 @@
 ),name);%0A%09%7D);%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AGet the valu
@@ -2244,33 +2244,35 @@
 aultText);%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.setText
@@ -2455,33 +2455,35 @@
 index,value);%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.setText
@@ -2877,74 +2877,150 @@
 d) %7B%0A%09%09%09
+$tw.utils.jsonSet(
 data
-%5B
+, 
 index
-%5D =
+,
  value
+)
 ;%0A%09%09%7D else %7B%0A%09%09%09
-delete 
+$tw.utils.jsonRemove(
 data
-%5B
+, 
 index
-%5D
+)
 ;%0A%09%09%7D
+; $tw.utils.jsonIsPlugin(title, %22setText%22);
 %0A%09%09this.
@@ -3262,33 +3262,35 @@
 nFields));%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.deleteT
@@ -3862,33 +3862,35 @@
 s()));%0A%09%09%7D%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.addEven
@@ -4078,33 +4078,35 @@
 h(listener);%09%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.removeE
@@ -4290,33 +4290,35 @@
 (p,1);%0A%09%09%7D%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.dispatc
@@ -4575,33 +4575,35 @@
 args);%0A%09%09%7D%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0ACauses a tid
@@ -5881,33 +5881,35 @@
 ed = true;%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.getSize
@@ -5984,33 +5984,35 @@
 gedTiddlers);%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.clearTi
@@ -6122,33 +6122,35 @@
 create(null);%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.getChan
@@ -6336,33 +6336,35 @@
 %09return 0;%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AGenerate an 
@@ -6686,33 +6686,35 @@
 return title;%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.isSyste
@@ -6781,33 +6781,35 @@
 %22$:/%22) === 0;%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.isTempo
@@ -6884,33 +6884,35 @@
 emp/%22) === 0;%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.isImage
@@ -7192,33 +7192,35 @@
 turn null;%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.isBinar
@@ -7493,33 +7493,35 @@
 turn null;%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0ALike addTidd
@@ -8233,33 +8233,35 @@
 %09return true;%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AReturn a has
@@ -8631,33 +8631,35 @@
 return %7B%7D;%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AReturn a has
@@ -9059,33 +9059,35 @@
 return %7B%7D;%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AReturn a sor
@@ -9984,33 +9984,35 @@
 eturn titles;%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.countTi
@@ -10132,33 +10132,35 @@
 nt(tiddlers);%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AReturns a fu
@@ -10571,33 +10571,35 @@
 e);%0A%09%09%7D);%0A%09%7D;%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0ASort an arra
@@ -12147,33 +12147,35 @@
 (b);%0A%09%09%7D%0A%09%7D);%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AFor every ti
@@ -12756,33 +12756,35 @@
 dler);%0A%09%09%7D%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AReturn an ar
@@ -13457,33 +13457,35 @@
 return links;%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AReturn an ar
@@ -13894,33 +13894,35 @@
 turn %5B%5D;%0A%09%7D);%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AReturn an ar
@@ -14174,33 +14174,35 @@
 up(targetTitle);
-%0A
+%0D%0A%0D
 %0A%09if(!backlinks)
@@ -14411,33 +14411,35 @@
 rn backlinks;%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AReturn a has
@@ -15027,33 +15027,35 @@
 turn missing;%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.getOrph
@@ -15370,33 +15370,35 @@
 hans; // Todo%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0ARetrieves a 
@@ -15882,33 +15882,35 @@
 turn results;%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AGet a hashma
@@ -16688,33 +16688,35 @@
 rn tags;%0A%09%7D);%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0ALookup a giv
@@ -17125,33 +17125,35 @@
 eturn titles;%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0ASorts an arr
@@ -19513,33 +19513,35 @@
 rn titles;%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.getSubT
@@ -19835,33 +19835,35 @@
 %09return null;%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0ARetrieve a t
@@ -20228,33 +20228,35 @@
 : title%7D);%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.getTidd
@@ -20722,33 +20722,35 @@
 null,spaces);%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AGet the cont
@@ -20834,33 +20834,35 @@
  of the tiddler:
-%0A
+%0D%0A%0D
 %0Aapplication/jso
@@ -20985,33 +20985,35 @@
 name:value pairs
-%0A
+%0D%0A%0D
 %0AOther types cur
@@ -21028,33 +21028,35 @@
 ust return null.
-%0A
+%0D%0A%0D
 %0AtitleOrTiddler:
@@ -21179,33 +21179,35 @@
 n't contain data
-%0A
+%0D%0A%0D
 %0ANote that the s
@@ -21863,33 +21863,35 @@
 faultData;%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AAlternative,
@@ -22299,32 +22299,67 @@
 %0A%09%09%09%09try %7B%0A%09%09%09%09%09
+if($tw.utils.jsonIsValid(tiddler))%7B
 data = JSON.pars
@@ -22373,32 +22373,108 @@
 er.fields.text);
+%7Delse%7Bthrow %22Invalid application/json tiddler text: %22+tiddler.fields.title;%7D
 %0A%09%09%09%09%7D catch(ex)
@@ -22645,33 +22645,35 @@
  defaultData;%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AExtract an i
@@ -22868,33 +22868,36 @@
 null)),%0A%09%09text;%0A
-%09
+    
 if(data && $tw.u
@@ -22901,55 +22901,83 @@
 w.utils.
-hop
+jsonHas
 (data,index)) %7B%0A
-%09%09text = 
+        text = $tw.utils.jsonGet(
 data
-%5B
+,
 index
-%5D
+)
 ;%0A%09%7D%0A%09if
@@ -23088,33 +23088,35 @@
 faultText;%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0ASet a tiddle
@@ -23949,33 +23949,35 @@
 onFields()));%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AReturn the c
@@ -24351,33 +24351,35 @@
 %7D%0A%09return %5B%5D;%0A%7D;
-%0A
+%0D%0A%0D
 %0A// Return a nam
@@ -24767,33 +24767,35 @@
 acheName%5D;%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.clearGl
@@ -24854,33 +24854,35 @@
 create(null);%0A%7D;
-%0A
+%0D%0A%0D
 %0A// Return the n
@@ -25369,33 +25369,35 @@
 acheName%5D;%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A// Clear all ca
@@ -25730,33 +25730,35 @@
 ate(null);%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.initPar
@@ -26448,33 +26448,35 @@
 %09%7D%0A%09%09%7D);%09%09%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AParse a bloc
@@ -27320,33 +27320,35 @@
 ical_uri%0A%09%7D);%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AParse a tidd
@@ -27863,33 +27863,35 @@
 %0A%09%09%7D) : null;%0A%7D;
-%0A
+%0D%0A%0D
 %0Aexports.parseTe
@@ -28960,33 +28960,35 @@
 ,options);%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AMake a widge
@@ -29992,33 +29992,35 @@
 ntWidget%0A%09%7D);%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AMake a widge
@@ -31990,33 +31990,35 @@
 Div,options);%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AParse text i
@@ -32668,33 +32668,35 @@
 .textContent;%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AParse text f
@@ -33388,33 +33388,35 @@
 textContent);%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AReturn an ar
@@ -36604,33 +36604,35 @@
 RegExps.slice();
-%0A
+%0D%0A%0D
 %0A%09%09var tiddler =
@@ -38806,33 +38806,35 @@
 turn results;%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0ATrigger a lo
@@ -39445,33 +39445,35 @@
 turn null;%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0ACheck whethe
@@ -39936,33 +39936,35 @@
 == targetText;%0A%7D
-%0A
+%0D%0A%0D
 %0A/*%0ARead an arra
@@ -40584,33 +40584,35 @@
 files.length;%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0ARead a brows
@@ -41824,33 +41824,35 @@
 callback);%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0ALower level 
@@ -43003,33 +43003,35 @@
 ext(file);%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AFind any exi
@@ -43339,33 +43339,35 @@
 rn draftTitle;%0A%7D
-%0A
+%0D%0A%0D
 %0A/*%0ACheck whethe
@@ -43994,33 +43994,35 @@
 noredFields);%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AAdd a new re
@@ -44417,33 +44417,35 @@
 mPageRect);%09%09%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AAdd a new ti
@@ -44854,33 +44854,35 @@
 e,options);%09%09%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AGenerate a t
@@ -45260,33 +45260,35 @@
 n draftTitle;%0A%7D;
-%0A
+%0D%0A%0D
 %0A/*%0AInvoke the a
@@ -46338,33 +46338,35 @@
 urn messages;%0A%7D;
-%0A
+%0D%0A%0D
 %0A// Determine wh
@@ -46564,33 +46564,35 @@
 ched(title));%0A%7D;
-%0A
+%0D%0A%0D
 %0A// Determine wh
@@ -46986,17 +46986,21 @@
 l;%0A%09%7D%0A%7D;
-%0A
+%0D%0A%0D
 %0A%7D)();
-%0A
+%0D%0A%0D
 %0A
