@@ -1,20 +1,19 @@
 /*%5C
-%0D
 %0Atitle: $:/core/
@@ -19,33 +19,32 @@
 /modules/wiki.js
-%0D
 %0Atype: applicati
@@ -48,33 +48,32 @@
 ation/javascript
-%0D
 %0Amodule-type: wi
@@ -245,33 +245,32 @@
 stener functions
-%0D
 %0A* %60changedTiddl
@@ -409,33 +409,32 @@
 ning two fields:
-%0D
 %0A%09modified: true
@@ -431,33 +431,32 @@
 fied: true/false
-%0D
 %0A%09deleted: true/
@@ -452,33 +452,32 @@
 eted: true/false
-%0D
 %0A* %60changeCount%60
@@ -616,33 +616,32 @@
 anged or deleted
-%0D
 %0A* %60caches%60 is a
@@ -781,33 +781,32 @@
 ified or deleted
-%0D
 %0A* %60globalCache%60
@@ -900,33 +900,32 @@
 ge occurs%0D%0A%0D%0A%5C*/
-%0D
 %0A(function()%7B%0D%0A%0D
@@ -954,33 +954,32 @@
 browser: true */
-%0D
 %0A/*global $tw: f
@@ -977,33 +977,32 @@
 al $tw: false */
-%0D
 %0A%22use strict%22;%0D%0A
@@ -1100,33 +1100,32 @@
 tatus/UserName%22,
-%0D
 %0A%09TIMESTAMP_DISA
@@ -1163,33 +1163,32 @@
 pDisable%22;%0D%0A%0D%0A/*
-%0D
 %0AAdd available i
@@ -1199,37 +1199,35 @@
 ers to this wiki
-%0D
 %0A*/
-%0D
 %0Aexports.addInde
@@ -1243,33 +1243,32 @@
 i = function() %7B
-%0D
 %0A%09var self = thi
@@ -1261,33 +1261,32 @@
 var self = this;
-%0D
 %0A%09$tw.utils.each
@@ -1338,33 +1338,32 @@
 (Indexer,name) %7B
-%0D
 %0A%09%09self.addIndex
@@ -1389,33 +1389,30 @@
 ),name);
-%0D
 %0A%09%7D);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AGet the
@@ -1483,34 +1483,32 @@
 e forms:
-%0D
 %0A%09%3Ctiddlertitle%3E
-%0D
 %0A%09%3Ctiddl
@@ -1520,33 +1520,32 @@
 le%3E!!%3Cfieldname%3E
-%0D
 %0A%09!!%3Cfieldname%3E 
@@ -1579,33 +1579,32 @@
 current tiddlers
-%0D
 %0A%09%3Ctiddlertitle%3E
@@ -1604,37 +1604,35 @@
 rtitle%3E##%3Cindex%3E
-%0D
 %0A*/
-%0D
 %0Aexports.getText
@@ -1683,33 +1683,32 @@
 rTiddlerTitle) %7B
-%0D
 %0A%09var tr = $tw.u
@@ -1732,33 +1732,32 @@
 erence(textRef),
-%0D
 %0A%09%09title = tr.ti
@@ -1780,34 +1780,32 @@
 erTitle;
-%0D
 %0A%09if(tr.field) %7B
-%0D
 %0A%09%09var t
@@ -1828,33 +1828,32 @@
 tTiddler(title);
-%0D
 %0A%09%09if(tr.field =
@@ -1926,33 +1926,32 @@
 existent tiddler
-%0D
 %0A%09%09%09return title
@@ -1943,33 +1943,32 @@
 %09%09%09return title;
-%0D
 %0A%09%09%7D else if(tid
@@ -2008,33 +2008,32 @@
 lds,tr.field)) %7B
-%0D
 %0A%09%09%09return tiddl
@@ -2052,45 +2052,43 @@
 tring(tr.field);
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09return defau
@@ -2086,38 +2086,36 @@
 urn defaultText;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D else if(tr.i
@@ -2113,33 +2113,32 @@
 e if(tr.index) %7B
-%0D
 %0A%09%09return this.e
@@ -2179,44 +2179,42 @@
 ex,defaultText);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return this.g
@@ -2238,37 +2238,35 @@
 le,defaultText);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.s
@@ -2317,33 +2317,32 @@
 rTiddlerTitle) %7B
-%0D
 %0A%09var tr = $tw.u
@@ -2366,33 +2366,32 @@
 erence(textRef),
-%0D
 %0A%09%09title = tr.ti
@@ -2406,33 +2406,32 @@
 urrTiddlerTitle;
-%0D
 %0A%09this.setText(t
@@ -2452,33 +2452,32 @@
 tr.index,value);
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.s
@@ -2520,33 +2520,32 @@
 value,options) %7B
-%0D
 %0A%09options = opti
@@ -2546,33 +2546,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var creationFi
@@ -2627,33 +2627,32 @@
 reationFields(),
-%0D
 %0A%09%09modificationF
@@ -2713,33 +2713,32 @@
 icationFields();
-%0D
 %0A%09// Check if it
@@ -2763,47 +2763,45 @@
  a tiddler field
-%0D
 %0A%09if(index) %7B
-%0D
 %0A%09%09var data = th
@@ -2837,33 +2837,32 @@
 t.create(null));
-%0D
 %0A%09%09if(value !== 
@@ -2873,83 +2873,154 @@
 fined) %7B
-%0D
 %0A%09%09%09
+$tw.utils.jsonSet(
 data
-%5B
+, 
 index
-%5D =
+,
  value
+)
 ;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09
-delete 
+$tw.utils.jsonRemove(
 data
-%5B
+, 
 index
-%5D;%0D
+);
 %0A%09%09%7D
-%0D
+; $tw.utils.jsonIsPlugin(title, %22setText%22);
 %0A%09%09this.
@@ -3057,44 +3057,42 @@
 ficationFields);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09var tiddler =
@@ -3107,33 +3107,32 @@
 tTiddler(title),
-%0D
 %0A%09%09%09fields = %7Bti
@@ -3135,33 +3135,32 @@
  %7Btitle: title%7D;
-%0D
 %0A%09%09fields%5Bfield 
@@ -3170,33 +3170,32 @@
 %22text%22%5D = value;
-%0D
 %0A%09%09this.addTiddl
@@ -3256,37 +3256,35 @@
 icationFields));
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.d
@@ -3332,33 +3332,32 @@
 rTiddlerTitle) %7B
-%0D
 %0A%09var tr = $tw.u
@@ -3381,33 +3381,32 @@
 erence(textRef),
-%0D
 %0A%09%09title,tiddler
@@ -3405,33 +3405,32 @@
 ,tiddler,fields;
-%0D
 %0A%09// Check if it
@@ -3449,33 +3449,32 @@
 nce to a tiddler
-%0D
 %0A%09if(tr.title &&
@@ -3478,33 +3478,32 @@
  && !tr.field) %7B
-%0D
 %0A%09%09this.deleteTi
@@ -3510,33 +3510,32 @@
 ddler(tr.title);
-%0D
 %0A%09// Else check 
@@ -3547,33 +3547,32 @@
  field reference
-%0D
 %0A%09%7D else if(tr.f
@@ -3570,33 +3570,32 @@
 e if(tr.field) %7B
-%0D
 %0A%09%09title = tr.ti
@@ -3610,33 +3610,32 @@
 urrTiddlerTitle;
-%0D
 %0A%09%09tiddler = thi
@@ -3646,33 +3646,32 @@
 tTiddler(title);
-%0D
 %0A%09%09if(tiddler &&
@@ -3704,33 +3704,32 @@
 lds,tr.field)) %7B
-%0D
 %0A%09%09%09fields = Obj
@@ -3737,33 +3737,32 @@
 ct.create(null);
-%0D
 %0A%09%09%09fields%5Btr.fi
@@ -3770,33 +3770,32 @@
 ld%5D = undefined;
-%0D
 %0A%09%09%09this.addTidd
@@ -3852,42 +3852,39 @@
 ationFields()));
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.a
@@ -3918,33 +3918,32 @@
 type,listener) %7B
-%0D
 %0A%09this.eventList
@@ -3968,33 +3968,32 @@
 Listeners %7C%7C %7B%7D;
-%0D
 %0A%09this.eventList
@@ -4031,33 +4031,32 @@
 rs%5Btype%5D  %7C%7C %5B%5D;
-%0D
 %0A%09this.eventList
@@ -4075,33 +4075,32 @@
 push(listener);%09
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.r
@@ -4137,33 +4137,32 @@
 type,listener) %7B
-%0D
 %0A%09var listeners 
@@ -4181,33 +4181,32 @@
 Listeners%5Btype%5D;
-%0D
 %0A%09if(listeners) 
@@ -4198,33 +4198,32 @@
 %09if(listeners) %7B
-%0D
 %0A%09%09var p = liste
@@ -4237,33 +4237,32 @@
 dexOf(listener);
-%0D
 %0A%09%09if(p !== -1) 
@@ -4254,33 +4254,32 @@
 %09%09if(p !== -1) %7B
-%0D
 %0A%09%09%09listeners.sp
@@ -4280,42 +4280,39 @@
 ers.splice(p,1);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.d
@@ -4346,33 +4346,32 @@
 e /*, args */) %7B
-%0D
 %0A%09var args = Arr
@@ -4399,33 +4399,32 @@
 ll(arguments,1),
-%0D
 %0A%09%09listeners = t
@@ -4440,33 +4440,32 @@
 Listeners%5Btype%5D;
-%0D
 %0A%09if(listeners) 
@@ -4457,33 +4457,32 @@
 %09if(listeners) %7B
-%0D
 %0A%09%09for(var p=0; 
@@ -4499,33 +4499,32 @@
 s.length; p++) %7B
-%0D
 %0A%09%09%09var listener
@@ -4531,33 +4531,32 @@
  = listeners%5Bp%5D;
-%0D
 %0A%09%09%09listener.app
@@ -4573,36 +4573,32 @@
 r,args);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ACauses 
@@ -4683,33 +4683,32 @@
  event handlers.
-%0D
 %0AThis method sho
@@ -4788,33 +4788,32 @@
 iddlers%5B%5D array.
-%0D
 %0A%09title: Title o
@@ -4813,33 +4813,32 @@
 Title of tiddler
-%0D
 %0A%09isDeleted: def
@@ -4895,33 +4895,32 @@
 ed or modified),
-%0D
 %0A%09%09true if the t
@@ -4934,37 +4934,35 @@
 has been deleted
-%0D
 %0A*/
-%0D
 %0Aexports.enqueue
@@ -4995,33 +4995,32 @@
 tle,isDeleted) %7B
-%0D
 %0A%09// Record the 
@@ -5048,33 +5048,32 @@
 changed tiddlers
-%0D
 %0A%09this.changedTi
@@ -5117,33 +5117,32 @@
 ct.create(null);
-%0D
 %0A%09this.changedTi
@@ -5200,33 +5200,32 @@
 ct.create(null);
-%0D
 %0A%09this.changedTi
@@ -5273,33 +5273,32 @@
 dified%22%5D = true;
-%0D
 %0A%09// Increment t
@@ -5304,33 +5304,32 @@
 the change count
-%0D
 %0A%09this.changeCou
@@ -5365,33 +5365,32 @@
 ct.create(null);
-%0D
 %0A%09if($tw.utils.h
@@ -5410,33 +5410,32 @@
 eCount,title)) %7B
-%0D
 %0A%09%09this.changeCo
@@ -5439,44 +5439,42 @@
 eCount%5Btitle%5D++;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09this.changeCo
@@ -5480,37 +5480,35 @@
 ount%5Btitle%5D = 1;
-%0D
 %0A%09%7D
-%0D
 %0A%09// Trigger eve
@@ -5502,33 +5502,32 @@
 / Trigger events
-%0D
 %0A%09this.eventList
@@ -5552,33 +5552,32 @@
 Listeners %7C%7C %7B%7D;
-%0D
 %0A%09if(!this.event
@@ -5581,33 +5581,32 @@
 entsTriggered) %7B
-%0D
 %0A%09%09var self = th
@@ -5600,33 +5600,32 @@
 var self = this;
-%0D
 %0A%09%09$tw.utils.nex
@@ -5634,33 +5634,32 @@
 ick(function() %7B
-%0D
 %0A%09%09%09var changes 
@@ -5673,33 +5673,32 @@
 changedTiddlers;
-%0D
 %0A%09%09%09self.changed
@@ -5720,33 +5720,32 @@
 ct.create(null);
-%0D
 %0A%09%09%09self.eventsT
@@ -5753,33 +5753,32 @@
 iggered = false;
-%0D
 %0A%09%09%09if($tw.utils
@@ -5791,33 +5791,32 @@
 (changes) %3E 0) %7B
-%0D
 %0A%09%09%09%09self.dispat
@@ -5833,46 +5833,43 @@
 hange%22,changes);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09this.eventsTr
@@ -5875,37 +5875,35 @@
 riggered = true;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -5934,33 +5934,32 @@
 e = function() %7B
-%0D
 %0A%09return $tw.uti
@@ -5981,33 +5981,32 @@
 hangedTiddlers);
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.c
@@ -6033,33 +6033,32 @@
 e = function() %7B
-%0D
 %0A%09this.changedTi
@@ -6078,33 +6078,32 @@
 ct.create(null);
-%0D
 %0A%09this.changeCou
@@ -6119,33 +6119,32 @@
 ct.create(null);
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -6168,33 +6168,32 @@
 unction(title) %7B
-%0D
 %0A%09this.changeCou
@@ -6229,33 +6229,32 @@
 ct.create(null);
-%0D
 %0A%09if($tw.utils.h
@@ -6274,33 +6274,32 @@
 eCount,title)) %7B
-%0D
 %0A%09%09return this.c
@@ -6316,55 +6316,50 @@
 %5Btitle%5D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return 0;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AGenerat
@@ -6391,37 +6391,35 @@
 e specified base
-%0D
 %0A*/
-%0D
 %0Aexports.generat
@@ -6451,33 +6451,32 @@
 Title,options) %7B
-%0D
 %0A%09options = opti
@@ -6477,46 +6477,44 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var c = 0,
-%0D
 %0A%09%09title = baseT
@@ -6510,33 +6510,32 @@
 tle = baseTitle;
-%0D
 %0A%09while(this.tid
@@ -6602,33 +6602,32 @@
 dDraft(title)) %7B
-%0D
 %0A%09%09title = baseT
@@ -6625,33 +6625,32 @@
 e = baseTitle + 
-%0D
 %0A%09%09%09(options.pre
@@ -6663,48 +6663,44 @@
  %22 %22) + 
-%0D
 %0A%09%09%09(++c);
-%0D
 %0A%09%7D
-%0D
 %0A%09return title;
-%0D
 %0A%7D;%0D%0A%0D%0Ae
@@ -6733,33 +6733,32 @@
 unction(title) %7B
-%0D
 %0A%09return title &
@@ -6778,33 +6778,32 @@
 Of(%22$:/%22) === 0;
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.i
@@ -6831,33 +6831,32 @@
 unction(title) %7B
-%0D
 %0A%09return title &
@@ -6881,33 +6881,32 @@
 :/temp/%22) === 0;
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.i
@@ -6930,33 +6930,32 @@
 unction(title) %7B
-%0D
 %0A%09var tiddler = 
@@ -6969,33 +6969,32 @@
 tTiddler(title);
-%0D
 %0A%09if(tiddler) %7B%09
@@ -6986,33 +6986,32 @@
 %09if(tiddler) %7B%09%09
-%0D
 %0A%09%09var contentTy
@@ -7084,33 +7084,32 @@
 nd.tiddlywiki%22%5D;
-%0D
 %0A%09%09return !!cont
@@ -7169,48 +7169,44 @@
  !== -1;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return null;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Ae
@@ -7239,33 +7239,32 @@
 unction(title) %7B
-%0D
 %0A%09var tiddler = 
@@ -7278,33 +7278,32 @@
 tTiddler(title);
-%0D
 %0A%09if(tiddler) %7B%09
@@ -7295,33 +7295,32 @@
 %09if(tiddler) %7B%09%09
-%0D
 %0A%09%09var contentTy
@@ -7393,33 +7393,32 @@
 nd.tiddlywiki%22%5D;
-%0D
 %0A%09%09return !!cont
@@ -7470,58 +7470,53 @@
 base64%22;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return null;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ALike ad
@@ -7659,37 +7659,35 @@
 ler was imported
-%0D
 %0A*/
-%0D
 %0Aexports.importT
@@ -7706,33 +7706,32 @@
 ction(tiddler) %7B
-%0D
 %0A%09var existingTi
@@ -7768,33 +7768,32 @@
 r.fields.title);
-%0D
 %0A%09// Check if we
@@ -7809,33 +7809,32 @@
 ng with a plugin
-%0D
 %0A%09if(tiddler && 
@@ -7991,33 +7991,32 @@
 ld(%22version%22)) %7B
-%0D
 %0A%09%09// Reject the
@@ -8038,33 +8038,32 @@
 n if it is older
-%0D
 %0A%09%09if(!$tw.utils
@@ -8126,33 +8126,32 @@
 elds.version)) %7B
-%0D
 %0A%09%09%09return false
@@ -8143,42 +8143,39 @@
 %09%09%09return false;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09// Fall throug
@@ -8189,33 +8189,32 @@
 ding the tiddler
-%0D
 %0A%09this.addTiddle
@@ -8224,42 +8224,39 @@
 iddler);
-%0D
 %0A%09return true;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn 
@@ -8315,37 +8315,35 @@
 ddler is created
-%0D
 %0A*/
-%0D
 %0Aexports.getCrea
@@ -8359,33 +8359,32 @@
 s = function() %7B
-%0D
 %0A%09if(this.getTid
@@ -8438,33 +8438,32 @@
 e() !== %22yes%22) %7B
-%0D
 %0A%09%09var fields = 
@@ -8455,33 +8455,32 @@
 %09%09var fields = %7B
-%0D
 %0A%09%09%09%09created: ne
@@ -8479,40 +8479,38 @@
 ated: new Date()
-%0D
 %0A%09%09%09%7D,
-%0D
 %0A%09%09%09creator = th
@@ -8544,34 +8544,32 @@
 _TITLE);
-%0D
 %0A%09%09if(creator) %7B
-%0D
 %0A%09%09%09fiel
@@ -8581,38 +8581,36 @@
 eator = creator;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09return fields
@@ -8610,56 +8610,51 @@
  fields;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return %7B%7D;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn 
@@ -8714,37 +8714,35 @@
 dler is modified
-%0D
 %0A*/
-%0D
 %0Aexports.getModi
@@ -8762,33 +8762,32 @@
 s = function() %7B
-%0D
 %0A%09if(this.getTid
@@ -8841,33 +8841,32 @@
 e() !== %22yes%22) %7B
-%0D
 %0A%09%09var fields = 
@@ -8877,33 +8877,32 @@
 ct.create(null),
-%0D
 %0A%09%09%09modifier = t
@@ -8929,33 +8929,32 @@
 SER_NAME_TITLE);
-%0D
 %0A%09%09fields.modifi
@@ -8961,33 +8961,32 @@
 ed = new Date();
-%0D
 %0A%09%09if(modifier) 
@@ -8978,33 +8978,32 @@
 %09%09if(modifier) %7B
-%0D
 %0A%09%09%09fields.modif
@@ -9009,38 +9009,36 @@
 fier = modifier;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09return fields
@@ -9038,56 +9038,51 @@
  fields;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return %7B%7D;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn 
@@ -9124,33 +9124,32 @@
 Options include:
-%0D
 %0AsortField: fiel
@@ -9152,33 +9152,32 @@
 field to sort by
-%0D
 %0AexcludeTag: tag
@@ -9179,33 +9179,32 @@
 : tag to exclude
-%0D
 %0AincludeSystem: 
@@ -9249,37 +9249,35 @@
 faults to false)
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -9294,33 +9294,32 @@
 ction(options) %7B
-%0D
 %0A%09options = opti
@@ -9337,33 +9337,32 @@
 ct.create(null);
-%0D
 %0A%09var self = thi
@@ -9355,33 +9355,32 @@
 var self = this,
-%0D
 %0A%09%09sortField = o
@@ -9399,33 +9399,32 @@
 ield %7C%7C %22title%22,
-%0D
 %0A%09%09tiddlers = %5B%5D
@@ -9432,33 +9432,32 @@
  t, titles = %5B%5D;
-%0D
 %0A%09this.each(func
@@ -9469,33 +9469,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09if(options.in
@@ -9531,33 +9531,32 @@
 iddler(title)) %7B
-%0D
 %0A%09%09%09if(!options.
@@ -9599,33 +9599,32 @@
 s.excludeTag)) %7B
-%0D
 %0A%09%09%09%09tiddlers.pu
@@ -9635,34 +9635,30 @@
 iddler);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09tiddle
@@ -9672,33 +9672,32 @@
 (function(a,b) %7B
-%0D
 %0A%09%09var aa = a.fi
@@ -9724,33 +9724,32 @@
 werCase() %7C%7C %22%22,
-%0D
 %0A%09%09%09bb = b.field
@@ -9781,61 +9781,57 @@
 ) %7C%7C %22%22;
-%0D
 %0A%09%09if(aa %3C bb) %7B
-%0D
 %0A%09%09%09return -1;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09if(a
@@ -9839,77 +9839,70 @@
  %3E bb) %7B
-%0D
 %0A%09%09%09%09return 1;
-%0D
 %0A%09%09%09%7D else %7B
-%0D
 %0A%09%09%09%09return 0;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09for(t=
@@ -9921,33 +9921,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09titles.push(t
@@ -9970,38 +9970,35 @@
 .title);
-%0D
 %0A%09%7D
-%0D
 %0A%09return titles;
-%0D
 %0A%7D;%0D%0A%0D%0Ae
@@ -10034,33 +10034,32 @@
 on(excludeTag) %7B
-%0D
 %0A%09var tiddlers =
@@ -10094,33 +10094,32 @@
 g: excludeTag%7D);
-%0D
 %0A%09return $tw.uti
@@ -10129,43 +10129,41 @@
 count(tiddlers);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturns a funct
@@ -10274,37 +10274,35 @@
 k(tiddler,title)
-%0D
 %0A*/
-%0D
 %0Aexports.makeTid
@@ -10326,33 +10326,32 @@
 nction(titles) %7B
-%0D
 %0A%09var self = thi
@@ -10344,33 +10344,32 @@
 var self = this;
-%0D
 %0A%09if(!$tw.utils.
@@ -10378,33 +10378,32 @@
 Array(titles)) %7B
-%0D
 %0A%09%09titles = Obje
@@ -10410,44 +10410,42 @@
 ct.keys(titles);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09titles = titl
@@ -10448,37 +10448,35 @@
 titles.slice(0);
-%0D
 %0A%09%7D
-%0D
 %0A%09return functio
@@ -10480,33 +10480,32 @@
 tion(callback) %7B
-%0D
 %0A%09%09titles.forEac
@@ -10515,33 +10515,32 @@
 unction(title) %7B
-%0D
 %0A%09%09%09callback(sel
@@ -10566,39 +10566,35 @@
 ,title);
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ASort an
@@ -10630,33 +10630,32 @@
  specified field
-%0D
 %0A%09titles: array 
@@ -10673,33 +10673,32 @@
 sorted in place)
-%0D
 %0A%09sortField: nam
@@ -10710,33 +10710,32 @@
 field to sort by
-%0D
 %0A%09isDescending: 
@@ -10763,33 +10763,32 @@
 ld be descending
-%0D
 %0A%09isCaseSensitiv
@@ -10859,37 +10859,35 @@
  to be different
-%0D
 %0A*/
-%0D
 %0Aexports.sortTid
@@ -10968,33 +10968,32 @@
 sAlphaNumeric) %7B
-%0D
 %0A%09var self = thi
@@ -10986,33 +10986,32 @@
 var self = this;
-%0D
 %0A%09titles.sort(fu
@@ -11023,29 +11023,27 @@
 n(a,b) %7B
-%0D
 %0A%09%09var x,y,
-%0D
 %0A%09%09%09comp
@@ -11062,33 +11062,32 @@
  function(x,y) %7B
-%0D
 %0A%09%09%09%09var result 
@@ -11080,33 +11080,32 @@
 %09%09%09var result = 
-%0D
 %0A%09%09%09%09%09isNaN(x) &
@@ -11135,33 +11135,32 @@
 ding ? -1 : 1) :
-%0D
 %0A%09%09%09%09%09!isNaN(x) 
@@ -11190,33 +11190,32 @@
 ding ? 1 : -1) :
-%0D
 %0A%09%09%09%09%09%09%09%09%09%09%09(isD
@@ -11234,33 +11234,32 @@
 y - x :  x - y);
-%0D
 %0A%09%09%09%09return resu
@@ -11261,24 +11261,22 @@
  result;
-%0D
 %0A%09%09%09%7D;
-%0D
 %0A%09%09if(so
@@ -11289,33 +11289,32 @@
 d !== %22title%22) %7B
-%0D
 %0A%09%09%09var tiddlerA
@@ -11327,33 +11327,32 @@
 f.getTiddler(a),
-%0D
 %0A%09%09%09%09tiddlerB = 
@@ -11362,33 +11362,32 @@
 f.getTiddler(b);
-%0D
 %0A%09%09%09if(tiddlerA)
@@ -11380,33 +11380,32 @@
 %09%09if(tiddlerA) %7B
-%0D
 %0A%09%09%09%09a = tiddler
@@ -11430,49 +11430,45 @@
 %5D %7C%7C %22%22;
-%0D
 %0A%09%09%09%7D else %7B
-%0D
 %0A%09%09%09%09a = %22%22;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09if(t
@@ -11469,33 +11469,32 @@
 %09%09if(tiddlerB) %7B
-%0D
 %0A%09%09%09%09b = tiddler
@@ -11519,54 +11519,49 @@
 %5D %7C%7C %22%22;
-%0D
 %0A%09%09%09%7D else %7B
-%0D
 %0A%09%09%09%09b = %22%22;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09x = N
@@ -11561,33 +11561,32 @@
 %09%09x = Number(a);
-%0D
 %0A%09%09y = Number(b)
@@ -11578,33 +11578,32 @@
 %09%09y = Number(b);
-%0D
 %0A%09%09if(isNumeric 
@@ -11624,33 +11624,32 @@
 %7C%7C !isNaN(y))) %7B
-%0D
 %0A%09%09%09return compa
@@ -11655,33 +11655,32 @@
 areNumbers(x,y);
-%0D
 %0A%09%09%7D else if(isA
@@ -11685,33 +11685,32 @@
 sAlphaNumeric) %7B
-%0D
 %0A%09%09%09return isDes
@@ -11843,33 +11843,32 @@
 ivity: %22base%22%7D);
-%0D
 %0A%09%09%7D else if($tw
@@ -11901,33 +11901,32 @@
 ils.isDate(b)) %7B
-%0D
 %0A%09%09%09return isDes
@@ -11941,45 +11941,43 @@
 ? b - a : a - b;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09a = String(a
@@ -11970,33 +11970,32 @@
 %09%09a = String(a);
-%0D
 %0A%09%09%09b = String(b
@@ -11988,33 +11988,32 @@
 %09%09b = String(b);
-%0D
 %0A%09%09%09if(!isCaseSe
@@ -12014,33 +12014,32 @@
 CaseSensitive) %7B
-%0D
 %0A%09%09%09%09a = a.toLow
@@ -12039,33 +12039,32 @@
 a.toLowerCase();
-%0D
 %0A%09%09%09%09b = b.toLow
@@ -12064,39 +12064,37 @@
 b.toLowerCase();
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09return isDes
@@ -12143,38 +12143,34 @@
 pare(b);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AFor eve
@@ -12257,33 +12257,32 @@
 Options include:
-%0D
 %0AsortField: fiel
@@ -12285,33 +12285,32 @@
 field to sort by
-%0D
 %0AexcludeTag: tag
@@ -12312,33 +12312,32 @@
 : tag to exclude
-%0D
 %0AincludeSystem: 
@@ -12382,37 +12382,35 @@
 faults to false)
-%0D
 %0A*/
-%0D
 %0Aexports.forEach
@@ -12455,32 +12455,30 @@
 ck */) %7B
-%0D
 %0A%09var arg = 0,
-%0D
 %0A%09%09optio
@@ -12520,33 +12520,32 @@
 nts%5Barg++%5D : %7B%7D,
-%0D
 %0A%09%09callback = ar
@@ -12551,33 +12551,32 @@
 rguments%5Barg++%5D,
-%0D
 %0A%09%09titles = this
@@ -12597,32 +12597,30 @@
 ptions),
-%0D
 %0A%09%09t, tiddler;
-%0D
 %0A%09for(t=
@@ -12637,33 +12637,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09tiddler = thi
@@ -12685,34 +12685,32 @@
 les%5Bt%5D);
-%0D
 %0A%09%09if(tiddler) %7B
-%0D
 %0A%09%09%09call
@@ -12754,36 +12754,32 @@
 iddler);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn 
@@ -12857,22 +12857,20 @@
 rse tree
-%0D
 %0A */
-%0D
 %0Aexports
@@ -12902,33 +12902,32 @@
 parseTreeRoot) %7B
-%0D
 %0A%09// Count up th
@@ -12925,33 +12925,32 @@
 unt up the links
-%0D
 %0A%09var links = %5B%5D
@@ -12942,33 +12942,32 @@
 %09var links = %5B%5D,
-%0D
 %0A%09%09checkParseTre
@@ -12983,33 +12983,32 @@
 ion(parseTree) %7B
-%0D
 %0A%09%09%09for(var t=0;
@@ -13026,33 +13026,32 @@
 e.length; t++) %7B
-%0D
 %0A%09%09%09%09var parseTr
@@ -13064,33 +13064,32 @@
  = parseTree%5Bt%5D;
-%0D
 %0A%09%09%09%09if(parseTre
@@ -13184,33 +13184,32 @@
  === %22string%22) %7B
-%0D
 %0A%09%09%09%09%09var value 
@@ -13236,33 +13236,32 @@
 ibutes.to.value;
-%0D
 %0A%09%09%09%09%09if(links.i
@@ -13275,33 +13275,32 @@
 value) === -1) %7B
-%0D
 %0A%09%09%09%09%09%09links.pus
@@ -13308,32 +13308,29 @@
 (value);
-%0D
 %0A%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%09if(
@@ -13346,33 +13346,32 @@
 Node.children) %7B
-%0D
 %0A%09%09%09%09%09checkParse
@@ -13399,36 +13399,32 @@
 ildren);
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D;
-%0D
 %0A%09checkP
@@ -13447,43 +13447,40 @@
 eeRoot);
-%0D
 %0A%09return links;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn 
@@ -13549,37 +13549,35 @@
 pecified tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -13596,33 +13596,32 @@
 unction(title) %7B
-%0D
 %0A%09var self = thi
@@ -13614,33 +13614,32 @@
 var self = this;
-%0D
 %0A%09// We'll cache
@@ -13689,33 +13689,32 @@
  tiddler changes
-%0D
 %0A%09return this.ge
@@ -13748,33 +13748,32 @@
 ks%22,function() %7B
-%0D
 %0A%09%09// Parse the 
@@ -13771,33 +13771,32 @@
 arse the tiddler
-%0D
 %0A%09%09var parser = 
@@ -13820,33 +13820,31 @@
 (title);
-%0D
 %0A%09%09if(parser) %7B
-%0D
 %0A%09%09%09retu
@@ -13877,52 +13877,47 @@
 r.tree);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09return %5B%5D;
-%0D
 %0A%09%7D);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn 
@@ -13969,37 +13969,35 @@
 pecified tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -14026,33 +14026,32 @@
 n(targetTitle) %7B
-%0D
 %0A%09var self = thi
@@ -14044,33 +14044,32 @@
 var self = this,
-%0D
 %0A%09%09backlinksInde
@@ -14102,33 +14102,32 @@
 klinksIndexer%22),
-%0D
 %0A%09%09backlinks = b
@@ -14195,33 +14195,32 @@
 if(!backlinks) %7B
-%0D
 %0A%09%09backlinks = %5B
@@ -14213,33 +14213,32 @@
 %09backlinks = %5B%5D;
-%0D
 %0A%09%09this.forEachT
@@ -14261,33 +14261,32 @@
 title,tiddler) %7B
-%0D
 %0A%09%09%09var links = 
@@ -14305,33 +14305,32 @@
 lerLinks(title);
-%0D
 %0A%09%09%09if(links.ind
@@ -14348,33 +14348,32 @@
 Title) !== -1) %7B
-%0D
 %0A%09%09%09%09backlinks.p
@@ -14383,34 +14383,30 @@
 (title);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D
-%0D
 %0A%09return
@@ -14408,43 +14408,41 @@
 eturn backlinks;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn a hashma
@@ -14557,37 +14557,35 @@
 er is referenced
-%0D
 %0A*/
-%0D
 %0Aexports.getMiss
@@ -14600,33 +14600,32 @@
 s = function() %7B
-%0D
 %0A%09var self = thi
@@ -14626,34 +14626,32 @@
  = this,
-%0D
 %0A%09%09missing = %5B%5D;
-%0D
 %0A// We s
@@ -14737,33 +14737,32 @@
 dler is modified
-%0D
 %0A%09this.forEachTi
@@ -14784,33 +14784,32 @@
 title,tiddler) %7B
-%0D
 %0A%09%09var links = s
@@ -14827,33 +14827,32 @@
 lerLinks(title);
-%0D
 %0A%09%09$tw.utils.eac
@@ -14867,33 +14867,32 @@
 function(link) %7B
-%0D
 %0A%09%09%09if((!self.ti
@@ -14967,33 +14967,32 @@
 (link) === -1) %7B
-%0D
 %0A%09%09%09%09missing.pus
@@ -14999,36 +14999,32 @@
 h(link);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D);
-%0D
 %0A%09return
@@ -15024,33 +15024,32 @@
 %09return missing;
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -15069,33 +15069,32 @@
 s = function() %7B
-%0D
 %0A%09var self = thi
@@ -15087,33 +15087,32 @@
 var self = this,
-%0D
 %0A%09%09orphans = thi
@@ -15119,33 +15119,32 @@
 s.getTiddlers();
-%0D
 %0A%09this.forEachTi
@@ -15166,33 +15166,32 @@
 title,tiddler) %7B
-%0D
 %0A%09%09var links = s
@@ -15209,33 +15209,32 @@
 lerLinks(title);
-%0D
 %0A%09%09$tw.utils.eac
@@ -15249,33 +15249,32 @@
 function(link) %7B
-%0D
 %0A%09%09%09var p = orph
@@ -15283,33 +15283,32 @@
 s.indexOf(link);
-%0D
 %0A%09%09%09if(p !== -1)
@@ -15301,33 +15301,32 @@
 %09%09if(p !== -1) %7B
-%0D
 %0A%09%09%09%09orphans.spl
@@ -15334,36 +15334,32 @@
 ce(p,1);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D);
-%0D
 %0A%09return
@@ -15367,43 +15367,41 @@
 orphans; // Todo
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ARetrieves a lis
@@ -15448,37 +15448,35 @@
 with a given tag
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -15496,33 +15496,32 @@
  function(tag) %7B
-%0D
 %0A%09// Try to use 
@@ -15523,33 +15523,32 @@
  use the indexer
-%0D
 %0A%09var self = thi
@@ -15541,33 +15541,32 @@
 var self = this,
-%0D
 %0A%09%09tagIndexer = 
@@ -15587,33 +15587,32 @@
 r(%22TagIndexer%22),
-%0D
 %0A%09%09results = tag
@@ -15660,34 +15660,32 @@
 up(tag);
-%0D
 %0A%09if(!results) %7B
-%0D
 %0A%09%09// If
@@ -15713,33 +15713,32 @@
 rm a manual scan
-%0D
 %0A%09%09results = thi
@@ -15775,33 +15775,32 @@
 tag,function() %7B
-%0D
 %0A%09%09%09var tagmap =
@@ -15809,33 +15809,32 @@
 elf.getTagMap();
-%0D
 %0A%09%09%09return self.
@@ -15853,44 +15853,41 @@
 agmap%5Btag%5D,tag);
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D
-%0D
 %0A%09return results
@@ -15879,43 +15879,41 @@
 %09return results;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AGet a hashmap b
@@ -15937,37 +15937,35 @@
 f tiddler titles
-%0D
 %0A*/
-%0D
 %0Aexports.getTagM
@@ -15973,33 +15973,32 @@
 p = function() %7B
-%0D
 %0A%09var self = thi
@@ -15991,33 +15991,32 @@
 var self = this;
-%0D
 %0A%09return this.ge
@@ -16041,33 +16041,32 @@
 ap%22,function() %7B
-%0D
 %0A%09%09var tags = Ob
@@ -16075,33 +16075,32 @@
 ct.create(null),
-%0D
 %0A%09%09%09storeTags = 
@@ -16117,33 +16117,32 @@
 agArray,title) %7B
-%0D
 %0A%09%09%09%09if(tagArray
@@ -16136,33 +16136,32 @@
 %09%09if(tagArray) %7B
-%0D
 %0A%09%09%09%09%09for(var in
@@ -16192,33 +16192,32 @@
 ngth; index++) %7B
-%0D
 %0A%09%09%09%09%09%09var tag =
@@ -16225,33 +16225,32 @@
 tagArray%5Bindex%5D;
-%0D
 %0A%09%09%09%09%09%09if($tw.ut
@@ -16261,33 +16261,32 @@
 hop(tags,tag)) %7B
-%0D
 %0A%09%09%09%09%09%09%09tags%5Btag
@@ -16299,33 +16299,31 @@
 (title);
-%0D
 %0A%09%09%09%09%09%09%7D else %7B
-%0D
 %0A%09%09%09%09%09%09%09
@@ -16342,48 +16342,43 @@
 %5Btitle%5D;
-%0D
 %0A%09%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%7D,
-%0D
 %0A%09%09%09titl
@@ -16380,33 +16380,32 @@
 %09title, tiddler;
-%0D
 %0A%09%09// Collect up
@@ -16409,33 +16409,32 @@
  up all the tags
-%0D
 %0A%09%09self.eachShad
@@ -16453,33 +16453,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09%09if(!self.tid
@@ -16489,33 +16489,32 @@
 Exists(title)) %7B
-%0D
 %0A%09%09%09%09tiddler = s
@@ -16527,33 +16527,32 @@
 tTiddler(title);
-%0D
 %0A%09%09%09%09storeTags(t
@@ -16569,46 +16569,43 @@
 lds.tags,title);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09self.each(fun
@@ -16618,33 +16618,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09%09storeTags(ti
@@ -16667,56 +16667,51 @@
 ,title);
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09return tags;
-%0D
 %0A%09%7D);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ALookup 
@@ -16799,37 +16799,35 @@
 ified list field
-%0D
 %0A*/
-%0D
 %0Aexports.findLis
@@ -16868,33 +16868,32 @@
 tle,fieldName) %7B
-%0D
 %0A%09fieldName = fi
@@ -16902,33 +16902,32 @@
 dName %7C%7C %22list%22;
-%0D
 %0A%09var titles = %5B
@@ -16920,33 +16920,32 @@
 var titles = %5B%5D;
-%0D
 %0A%09this.each(func
@@ -16957,33 +16957,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09var list = $t
@@ -17025,33 +17025,32 @@
 lds%5BfieldName%5D);
-%0D
 %0A%09%09if(list && li
@@ -17074,33 +17074,32 @@
 Title) !== -1) %7B
-%0D
 %0A%09%09%09titles.push(
@@ -17105,55 +17105,50 @@
 (title);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09return titles;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ASorts a
@@ -17193,37 +17193,35 @@
  an ordered list
-%0D
 %0A*/
-%0D
 %0Aexports.sortByL
@@ -17245,33 +17245,32 @@
 ray,listTitle) %7B
-%0D
 %0A%09var self = thi
@@ -17263,33 +17263,32 @@
 var self = this,
-%0D
 %0A%09%09replacedTitle
@@ -17303,33 +17303,32 @@
 ct.create(null);
-%0D
 %0A%09// Given a tit
@@ -17374,33 +17374,32 @@
 correct location
-%0D
 %0A%09// within titl
@@ -17393,33 +17393,32 @@
 / within titles.
-%0D
 %0A%09function moveI
@@ -17427,33 +17427,32 @@
 mInList(title) %7B
-%0D
 %0A%09%09if(!$tw.utils
@@ -17473,33 +17473,32 @@
 itles, title)) %7B
-%0D
 %0A%09%09%09replacedTitl
@@ -17506,33 +17506,32 @@
 s%5Btitle%5D = true;
-%0D
 %0A%09%09%09var newPos =
@@ -17526,33 +17526,32 @@
 var newPos = -1,
-%0D
 %0A%09%09%09%09tiddler = s
@@ -17564,33 +17564,32 @@
 tTiddler(title);
-%0D
 %0A%09%09%09if(tiddler) 
@@ -17581,33 +17581,32 @@
 %09%09%09if(tiddler) %7B
-%0D
 %0A%09%09%09%09var beforeT
@@ -17634,33 +17634,32 @@
 %5B%22list-before%22%5D,
-%0D
 %0A%09%09%09%09%09afterTitle
@@ -17682,33 +17682,32 @@
 s%5B%22list-after%22%5D;
-%0D
 %0A%09%09%09%09if(beforeTi
@@ -17711,33 +17711,32 @@
 eTitle === %22%22) %7B
-%0D
 %0A%09%09%09%09%09newPos = 0
@@ -17728,33 +17728,32 @@
 %09%09%09%09%09newPos = 0;
-%0D
 %0A%09%09%09%09%7D else if(a
@@ -17763,33 +17763,32 @@
 rTitle === %22%22) %7B
-%0D
 %0A%09%09%09%09%09newPos = t
@@ -17792,33 +17792,32 @@
 = titles.length;
-%0D
 %0A%09%09%09%09%7D else if(b
@@ -17821,33 +17821,32 @@
 f(beforeTitle) %7B
-%0D
 %0A%09%09%09%09%09// if this
@@ -17862,33 +17862,32 @@
  placed relative
-%0D
 %0A%09%09%09%09%09// to anot
@@ -17903,33 +17903,32 @@
 , make sure that
-%0D
 %0A%09%09%09%09%09// title i
@@ -17943,33 +17943,32 @@
  before we place
-%0D
 %0A%09%09%09%09%09// this on
@@ -17961,33 +17961,32 @@
 %09%09%09%09// this one.
-%0D
 %0A%09%09%09%09%09moveItemIn
@@ -17995,33 +17995,32 @@
 st(beforeTitle);
-%0D
 %0A%09%09%09%09%09newPos = t
@@ -18038,33 +18038,32 @@
 Of(beforeTitle);
-%0D
 %0A%09%09%09%09%7D else if(a
@@ -18066,33 +18066,32 @@
 if(afterTitle) %7B
-%0D
 %0A%09%09%09%09%09// Same de
@@ -18084,33 +18084,32 @@
 %09%09%09%09// Same deal
-%0D
 %0A%09%09%09%09%09moveItemIn
@@ -18117,33 +18117,32 @@
 ist(afterTitle);
-%0D
 %0A%09%09%09%09%09newPos = t
@@ -18159,33 +18159,32 @@
 xOf(afterTitle);
-%0D
 %0A%09%09%09%09%09if(newPos 
@@ -18190,49 +18190,45 @@
  %3E= 0) %7B
-%0D
 %0A%09%09%09%09%09%09++newPos;
-%0D
 %0A%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%09// 
@@ -18264,33 +18264,32 @@
 d, let's move it
-%0D
 %0A%09%09%09%09if (newPos 
@@ -18289,33 +18289,32 @@
 newPos !== -1) %7B
-%0D
 %0A%09%09%09%09%09// get its
@@ -18332,33 +18332,32 @@
 s, and make sure
-%0D
 %0A%09%09%09%09%09// sure th
@@ -18378,33 +18378,32 @@
 lly_ in the list
-%0D
 %0A%09%09%09%09%09// and tha
@@ -18420,33 +18420,32 @@
  _actually_ move
-%0D
 %0A%09%09%09%09%09// (#4275)
@@ -18460,33 +18460,32 @@
 t bother calling
-%0D
 %0A%09%09%09%09%09//        
@@ -18505,33 +18505,32 @@
 ss we have a new
-%0D
 %0A%09%09%09%09%09//        
@@ -18543,33 +18543,32 @@
 ion to work with
-%0D
 %0A%09%09%09%09%09var currPo
@@ -18585,33 +18585,32 @@
 .indexOf(title);
-%0D
 %0A%09%09%09%09%09if(currPos
@@ -18631,33 +18631,32 @@
 s !== currPos) %7B
-%0D
 %0A%09%09%09%09%09%09// move i
@@ -18649,33 +18649,32 @@
 %09%09%09%09%09// move it!
-%0D
 %0A%09%09%09%09%09%09titles.sp
@@ -18681,33 +18681,32 @@
 lice(currPos,1);
-%0D
 %0A%09%09%09%09%09%09if(newPos
@@ -18711,33 +18711,32 @@
 os %3E= currPos) %7B
-%0D
 %0A%09%09%09%09%09%09%09newPos--
@@ -18728,42 +18728,40 @@
 %09%09%09%09%09%09%09newPos--;
-%0D
 %0A%09%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%09%09titles.sp
@@ -18781,47 +18781,41 @@
 ,title);
-%0D
 %0A%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09var li
@@ -18842,33 +18842,32 @@
 List(listTitle);
-%0D
 %0A%09if(!array %7C%7C a
@@ -18886,42 +18886,39 @@
 === 0) %7B
-%0D
 %0A%09%09return %5B%5D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09var t
@@ -18930,33 +18930,32 @@
  = %5B%5D, t, title;
-%0D
 %0A%09%09// First plac
@@ -18988,33 +18988,32 @@
 sent in the list
-%0D
 %0A%09%09for(t=0; t%3Cli
@@ -19021,33 +19021,32 @@
 t.length; t++) %7B
-%0D
 %0A%09%09%09title = list
@@ -19041,33 +19041,32 @@
 title = list%5Bt%5D;
-%0D
 %0A%09%09%09if(array.ind
@@ -19078,33 +19078,32 @@
 title) !== -1) %7B
-%0D
 %0A%09%09%09%09titles.push
@@ -19102,44 +19102,41 @@
 les.push(title);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09// Then place
@@ -19149,33 +19149,32 @@
 emaining entries
-%0D
 %0A%09%09for(t=0; t%3Car
@@ -19183,33 +19183,32 @@
 y.length; t++) %7B
-%0D
 %0A%09%09%09title = arra
@@ -19204,33 +19204,32 @@
 itle = array%5Bt%5D;
-%0D
 %0A%09%09%09if(list.inde
@@ -19240,33 +19240,32 @@
 title) === -1) %7B
-%0D
 %0A%09%09%09%09titles.push
@@ -19264,44 +19264,41 @@
 les.push(title);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09// Finally ob
@@ -19353,33 +19353,32 @@
  tiddler in turn
-%0D
 %0A%09%09var sortedTit
@@ -19391,33 +19391,32 @@
 titles.slice(0);
-%0D
 %0A%09%09for(t=0; t%3Cso
@@ -19432,33 +19432,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09%09title = sort
@@ -19460,33 +19460,32 @@
 sortedTitles%5Bt%5D;
-%0D
 %0A%09%09%09moveItemInLi
@@ -19486,38 +19486,36 @@
 emInList(title);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09return titles
@@ -19507,37 +19507,35 @@
 %09%09return titles;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -19574,33 +19574,32 @@
 bTiddlerTitle) %7B
-%0D
 %0A%09var bundleInfo
@@ -19655,33 +19655,32 @@
 taCached(title);
-%0D
 %0A%09if(bundleInfo 
@@ -19696,33 +19696,32 @@
 Info.tiddlers) %7B
-%0D
 %0A%09%09var subTiddle
@@ -19753,33 +19753,32 @@
 ubTiddlerTitle%5D;
-%0D
 %0A%09%09if(subTiddler
@@ -19772,33 +19772,32 @@
 if(subTiddler) %7B
-%0D
 %0A%09%09%09return new $
@@ -19819,51 +19819,46 @@
 iddler);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09return null;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ARetriev
@@ -19891,37 +19891,35 @@
 ng of the fields
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -19939,33 +19939,32 @@
 unction(title) %7B
-%0D
 %0A%09var tiddler = 
@@ -19986,33 +19986,31 @@
 (title);
-%0D
 %0A%09if(tiddler) %7B
-%0D
 %0A%09%09var f
@@ -20029,33 +20029,32 @@
 ct.create(null);
-%0D
 %0A%09%09$tw.utils.eac
@@ -20084,33 +20084,32 @@
 on(value,name) %7B
-%0D
 %0A%09%09%09fields%5Bname%5D
@@ -20132,40 +20132,38 @@
 eldString(name);
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09return JSON.s
@@ -20171,44 +20171,42 @@
 ringify(fields);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return JSON.s
@@ -20222,37 +20222,35 @@
 %7Btitle: title%7D);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -20285,33 +20285,32 @@
 filter,spaces) %7B
-%0D
 %0A%09var tiddlers =
@@ -20330,33 +20330,32 @@
 iddlers(filter),
-%0D
 %0A%09%09spaces = (spa
@@ -20418,31 +20418,29 @@
  spaces,
-%0D
 %0A%09%09data = %5B%5D;
-%0D
 %0A%09for(va
@@ -20462,33 +20462,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09var tiddler =
@@ -20516,34 +20516,32 @@
 ers%5Bt%5D);
-%0D
 %0A%09%09if(tiddler) %7B
-%0D
 %0A%09%09%09var 
@@ -20554,33 +20554,32 @@
  = new Object();
-%0D
 %0A%09%09%09for(var fiel
@@ -20592,33 +20592,32 @@
 iddler.fields) %7B
-%0D
 %0A%09%09%09%09fields%5Bfiel
@@ -20643,39 +20643,37 @@
 ldString(field);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09data.push(fi
@@ -20670,42 +20670,39 @@
 ta.push(fields);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09return JSON.st
@@ -20719,43 +20719,41 @@
 ta,null,spaces);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AGet the content
@@ -20897,33 +20897,32 @@
 d into an object
-%0D
 %0Aapplication/x-t
@@ -21088,33 +21088,32 @@
 a tiddler object
-%0D
 %0AdefaultData: de
@@ -21366,37 +21366,35 @@
 e to all callers
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -21439,33 +21439,32 @@
 r,defaultData) %7B
-%0D
 %0A%09var self = thi
@@ -21457,33 +21457,32 @@
 var self = this,
-%0D
 %0A%09%09tiddler = tit
@@ -21485,33 +21485,32 @@
  titleOrTiddler;
-%0D
 %0A%09if(!(tiddler i
@@ -21526,33 +21526,32 @@
  $tw.Tiddler)) %7B
-%0D
 %0A%09%09tiddler = thi
@@ -21573,37 +21573,34 @@
 ddler);%09
-%0D
 %0A%09%7D
-%0D
 %0A%09if(tiddler) %7B
-%0D
 %0A%09%09retur
@@ -21657,33 +21657,32 @@
 ta%22,function() %7B
-%0D
 %0A%09%09%09// Return th
@@ -21687,33 +21687,32 @@
 the frozen value
-%0D
 %0A%09%09%09var value = 
@@ -21755,33 +21755,32 @@
 itle,undefined);
-%0D
 %0A%09%09%09$tw.utils.de
@@ -21787,33 +21787,32 @@
 epFreeze(value);
-%0D
 %0A%09%09%09return value
@@ -21804,33 +21804,32 @@
 %09%09%09return value;
-%0D
 %0A%09%09%7D) %7C%7C default
@@ -21825,44 +21825,42 @@
  %7C%7C defaultData;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return defaul
@@ -21857,47 +21857,44 @@
 urn defaultData;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AAlternative, un
@@ -21976,37 +21976,35 @@
 reely and reused
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -22043,33 +22043,32 @@
 r,defaultData) %7B
-%0D
 %0A%09var tiddler = 
@@ -22082,26 +22082,24 @@
 Tiddler,
-%0D
 %0A%09%09data;
-%0D
 %0A%09if(!(t
@@ -22123,33 +22123,32 @@
  $tw.Tiddler)) %7B
-%0D
 %0A%09%09tiddler = thi
@@ -22162,37 +22162,35 @@
 ddler(tiddler);%09
-%0D
 %0A%09%7D
-%0D
 %0A%09if(tiddler && 
@@ -22203,33 +22203,32 @@
 r.fields.text) %7B
-%0D
 %0A%09%09switch(tiddle
@@ -22235,33 +22235,32 @@
 r.fields.type) %7B
-%0D
 %0A%09%09%09case %22applic
@@ -22263,33 +22263,32 @@
 plication/json%22:
-%0D
 %0A%09%09%09%09// JSON tid
@@ -22291,34 +22291,67 @@
  tiddler
-%0D
 %0A%09%09%09%09try %7B
-%0D
 %0A%09%09%09%09%09
+if($tw.utils.jsonIsValid(tiddler))%7B
 data = J
@@ -22373,33 +22373,108 @@
 er.fields.text);
-%0D
+%7Delse%7Bthrow %22Invalid application/json tiddler text: %22+tiddler.fields.title;%7D
 %0A%09%09%09%09%7D catch(ex)
@@ -22467,33 +22467,32 @@
 %09%09%09%7D catch(ex) %7B
-%0D
 %0A%09%09%09%09%09return def
@@ -22492,40 +22492,38 @@
 urn defaultData;
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%09return data
@@ -22515,33 +22515,32 @@
 %09%09%09%09return data;
-%0D
 %0A%09%09%09case %22applic
@@ -22559,33 +22559,32 @@
 ler-dictionary%22:
-%0D
 %0A%09%09%09%09return $tw.
@@ -22614,42 +22614,39 @@
 er.fields.text);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09return default
@@ -22642,43 +22642,41 @@
 urn defaultData;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AExtract an inde
@@ -22703,37 +22703,35 @@
 n a data tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.extract
@@ -22784,33 +22784,32 @@
 x,defaultText) %7B
-%0D
 %0A%09var data = thi
@@ -22867,28 +22867,29 @@
 (null)),
-%0D
 %0A%09%09text;
-%0D%0A%09
+%0A    
 if(data 
@@ -22901,62 +22901,87 @@
 w.utils.
-hop
+jsonHas
 (data,index)) %7B
-%0D%0A%09%09text = 
+%0A        text = $tw.utils.jsonGet(
 data
-%5B
+,
 index
-%5D;%0D
+);
 %0A%09%7D
-%0D
 %0A%09if(typ
@@ -23024,33 +23024,32 @@
  === %22number%22) %7B
-%0D
 %0A%09%09return text.t
@@ -23050,44 +23050,42 @@
 text.toString();
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return defaul
@@ -23082,47 +23082,44 @@
 urn defaultText;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ASet a tiddlers 
@@ -23267,33 +23267,32 @@
 ext of the data.
-%0D
 %0Atitle: title of
@@ -23291,33 +23291,32 @@
 title of tiddler
-%0D
 %0Adata: object th
@@ -23335,33 +23335,32 @@
 rialised to JSON
-%0D
 %0Afields: optiona
@@ -23399,37 +23399,35 @@
 fields to be set
-%0D
 %0A*/
-%0D
 %0Aexports.setTidd
@@ -23457,33 +23457,32 @@
 e,data,fields) %7B
-%0D
 %0A%09var existingTi
@@ -23512,56 +23512,52 @@
 (title),
-%0D
 %0A%09%09newFields = %7B
-%0D
 %0A%09%09%09title: title
-%0D
 %0A%09%7D;
-%0D
 %0A%09if(exi
@@ -23633,33 +23633,32 @@
 r-dictionary%22) %7B
-%0D
 %0A%09%09newFields.tex
@@ -23691,44 +23691,42 @@
 ictionary(data);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09newFields.typ
@@ -23740,33 +23740,32 @@
 plication/json%22;
-%0D
 %0A%09%09newFields.tex
@@ -23820,37 +23820,35 @@
 ces.jsonSpaces);
-%0D
 %0A%09%7D
-%0D
 %0A%09this.addTiddle
@@ -23946,43 +23946,41 @@
 ationFields()));
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn the cont
@@ -24020,37 +24020,35 @@
 aining each line
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -24086,31 +24086,29 @@
 index) %7B
-%0D
 %0A%09if(index) %7B
-%0D
 %0A%09%09retur
@@ -24173,37 +24173,35 @@
 itle,index,%22%22));
-%0D
 %0A%09%7D
-%0D
 %0A%09field = field 
@@ -24202,33 +24202,32 @@
 field %7C%7C %22list%22;
-%0D
 %0A%09var tiddler = 
@@ -24249,33 +24249,31 @@
 (title);
-%0D
 %0A%09if(tiddler) %7B
-%0D
 %0A%09%09retur
@@ -24341,34 +24341,31 @@
 lice(0);
-%0D
 %0A%09%7D
-%0D
 %0A%09return %5B%5D;
-%0D
 %0A%7D;%0D%0A%0D%0A/
@@ -24459,33 +24459,32 @@
 er change occurs
-%0D
 %0Aexports.getGlob
@@ -24518,33 +24518,32 @@
 e,initializer) %7B
-%0D
 %0A%09this.globalCac
@@ -24579,33 +24579,32 @@
 ct.create(null);
-%0D
 %0A%09if($tw.utils.h
@@ -24628,33 +24628,32 @@
 he,cacheName)) %7B
-%0D
 %0A%09%09return this.g
@@ -24666,44 +24666,42 @@
 ache%5BcacheName%5D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09this.globalCa
@@ -24723,33 +24723,32 @@
 = initializer();
-%0D
 %0A%09%09return this.g
@@ -24761,37 +24761,35 @@
 ache%5BcacheName%5D;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.c
@@ -24810,33 +24810,32 @@
 e = function() %7B
-%0D
 %0A%09this.globalCac
@@ -24851,33 +24851,32 @@
 ct.create(null);
-%0D
 %0A%7D;%0D%0A%0D%0A// Return
@@ -24986,33 +24986,32 @@
 ked to create it
-%0D
 %0Aexports.getCach
@@ -25055,33 +25055,32 @@
 e,initializer) %7B
-%0D
 %0A%09this.caches = 
@@ -25106,33 +25106,32 @@
 ct.create(null);
-%0D
 %0A%09var caches = t
@@ -25140,33 +25140,32 @@
 s.caches%5Btitle%5D;
-%0D
 %0A%09if(caches && c
@@ -25175,33 +25175,32 @@
 es%5BcacheName%5D) %7B
-%0D
 %0A%09%09return caches
@@ -25211,45 +25211,42 @@
 heName%5D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09if(!caches) %7B
-%0D
 %0A%09%09%09cach
@@ -25262,33 +25262,32 @@
 ct.create(null);
-%0D
 %0A%09%09%09this.caches%5B
@@ -25294,38 +25294,36 @@
 title%5D = caches;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09caches%5BcacheN
@@ -25335,33 +25335,32 @@
 = initializer();
-%0D
 %0A%09%09return caches
@@ -25363,37 +25363,35 @@
 ches%5BcacheName%5D;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A// Clear 
@@ -25498,33 +25498,32 @@
 all the tiddlers
-%0D
 %0Aexports.clearCa
@@ -25545,31 +25545,29 @@
 title) %7B
-%0D
 %0A%09if(title) %7B
-%0D
 %0A%09%09this.
@@ -25602,33 +25602,32 @@
 ct.create(null);
-%0D
 %0A%09%09if($tw.utils.
@@ -25643,33 +25643,32 @@
 caches,title)) %7B
-%0D
 %0A%09%09%09delete this.
@@ -25681,33 +25681,30 @@
 %5Btitle%5D;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09this.
@@ -25724,37 +25724,35 @@
 ct.create(null);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.i
@@ -25778,33 +25778,32 @@
 on(moduleType) %7B
-%0D
 %0A%09// Install the
@@ -25809,33 +25809,32 @@
 e parser modules
-%0D
 %0A%09$tw.Wiki.parse
@@ -25833,33 +25833,32 @@
 ki.parsers = %7B%7D;
-%0D
 %0A%09var self = thi
@@ -25851,33 +25851,32 @@
 var self = this;
-%0D
 %0A%09$tw.modules.fo
@@ -25918,33 +25918,32 @@
 (title,module) %7B
-%0D
 %0A%09%09for(var f in 
@@ -25943,33 +25943,32 @@
 r f in module) %7B
-%0D
 %0A%09%09%09if($tw.utils
@@ -25976,33 +25976,32 @@
 hop(module,f)) %7B
-%0D
 %0A%09%09%09%09$tw.Wiki.pa
@@ -26047,34 +26047,30 @@
 er class
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09// Use
@@ -26130,33 +26130,32 @@
 egistered so far
-%0D
 %0A%09if($tw.Wiki.pa
@@ -26182,33 +26182,32 @@
 ctet-stream%22%5D) %7B
-%0D
 %0A%09%09Object.keys($
@@ -26249,33 +26249,32 @@
 function(type) %7B
-%0D
 %0A%09%09%09if(!$tw.util
@@ -26354,33 +26354,32 @@
  === %22base64%22) %7B
-%0D
 %0A%09%09%09%09$tw.Wiki.pa
@@ -26437,46 +26437,41 @@
 tream%22%5D;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);%09%09
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AParse a
@@ -26501,33 +26501,32 @@
 cified MIME type
-%0D
 %0A%09type: content 
@@ -26550,30 +26550,28 @@
 e parsed
-%0D
 %0A%09text: text
-%0D
 %0A%09option
@@ -26574,33 +26574,32 @@
 tions: see below
-%0D
 %0AOptions include
@@ -26591,33 +26591,32 @@
 Options include:
-%0D
 %0A%09parseAsInline:
@@ -26672,33 +26672,32 @@
 as an inline run
-%0D
 %0A%09_canonical_uri
@@ -26742,37 +26742,35 @@
  of this content
-%0D
 %0A*/
-%0D
 %0Aexports.parseTe
@@ -26795,33 +26795,32 @@
 ,text,options) %7B
-%0D
 %0A%09text = text %7C%7C
@@ -26815,33 +26815,32 @@
 xt = text %7C%7C %22%22;
-%0D
 %0A%09options = opti
@@ -26841,33 +26841,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09// Select a pa
@@ -26861,33 +26861,32 @@
  Select a parser
-%0D
 %0A%09var Parser = $
@@ -26899,33 +26899,32 @@
 i.parsers%5Btype%5D;
-%0D
 %0A%09if(!Parser && 
@@ -26954,33 +26954,32 @@
 ionInfo(type)) %7B
-%0D
 %0A%09%09Parser = $tw.
@@ -27034,37 +27034,34 @@
 ).type%5D;
-%0D
 %0A%09%7D
-%0D
 %0A%09if(!Parser) %7B
-%0D
 %0A%09%09Parse
@@ -27127,57 +27127,52 @@
 ywiki%22%5D;
-%0D
 %0A%09%7D
-%0D
 %0A%09if(!Parser) %7B
-%0D
 %0A%09%09return null;
-%0D
 %0A%09%7D
-%0D
 %0A%09// Ret
@@ -27186,33 +27186,32 @@
  parser instance
-%0D
 %0A%09return new Par
@@ -27217,33 +27217,32 @@
 rser(type,text,%7B
-%0D
 %0A%09%09parseAsInline
@@ -27265,32 +27265,30 @@
 sInline,
-%0D
 %0A%09%09wiki: this,
-%0D
 %0A%09%09_cano
@@ -27320,33 +27320,30 @@
 ical_uri
-%0D
 %0A%09%7D);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AParse a
@@ -27369,37 +27369,35 @@
 to its MIME type
-%0D
 %0A*/
-%0D
 %0Aexports.parseTi
@@ -27421,33 +27421,32 @@
 title,options) %7B
-%0D
 %0A%09options = $tw.
@@ -27462,33 +27462,32 @@
 end(%7B%7D,options);
-%0D
 %0A%09var cacheType 
@@ -27541,33 +27541,32 @@
 blockParseTree%22,
-%0D
 %0A%09%09tiddler = thi
@@ -27585,33 +27585,31 @@
 (title),
-%0D
 %0A%09%09self = this;
-%0D
 %0A%09return
@@ -27663,33 +27663,32 @@
 ype,function() %7B
-%0D
 %0A%09%09%09if(tiddler.h
@@ -27707,33 +27707,32 @@
 nonical_uri%22)) %7B
-%0D
 %0A%09%09%09%09options._ca
@@ -27767,39 +27767,37 @@
 ._canonical_uri;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09return self.
@@ -27855,31 +27855,29 @@
 ptions);
-%0D
 %0A%09%09%7D) : null;
-%0D
 %0A%7D;%0D%0A%0D%0Ae
@@ -27933,33 +27933,32 @@
 index,options) %7B
-%0D
 %0A%09var tiddler,te
@@ -27952,33 +27952,32 @@
 ar tiddler,text;
-%0D
 %0A%09if(options.sub
@@ -27978,33 +27978,32 @@
 ns.subTiddler) %7B
-%0D
 %0A%09%09tiddler = thi
@@ -28036,44 +28036,42 @@
 ons.subTiddler);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09tiddler = thi
@@ -28082,33 +28082,32 @@
 tTiddler(title);
-%0D
 %0A%09%09if(field === 
@@ -28129,33 +28129,32 @@
 ld && !index)) %7B
-%0D
 %0A%09%09%09this.getTidd
@@ -28201,33 +28201,32 @@
 be lazily loaded
-%0D
 %0A%09%09%09return this.
@@ -28245,42 +28245,39 @@
 (title,options);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09if(field === %22
@@ -28298,33 +28298,32 @@
 ld && !index)) %7B
-%0D
 %0A%09%09if(tiddler &&
@@ -28332,33 +28332,32 @@
 iddler.fields) %7B
-%0D
 %0A%09%09%09return this.
@@ -28418,51 +28418,47 @@
 ons);%09%09%09
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09return null;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D else
@@ -28461,33 +28461,32 @@
 else if(field) %7B
-%0D
 %0A%09%09if(field === 
@@ -28487,33 +28487,32 @@
 d === %22title%22) %7B
-%0D
 %0A%09%09%09text = title
@@ -28504,45 +28504,43 @@
 %09%09%09text = title;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09if(!tiddler 
@@ -28561,33 +28561,32 @@
 sField(field)) %7B
-%0D
 %0A%09%09%09%09return null
@@ -28578,39 +28578,37 @@
 %09%09%09%09return null;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09text = tiddl
@@ -28616,38 +28616,36 @@
 r.fields%5Bfield%5D;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09return this.p
@@ -28692,33 +28692,32 @@
 ring(),options);
-%0D
 %0A%09%7D else if(inde
@@ -28712,33 +28712,32 @@
 else if(index) %7B
-%0D
 %0A%09%09this.getTiddl
@@ -28783,33 +28783,32 @@
 be lazily loaded
-%0D
 %0A%09%09text = this.e
@@ -28846,33 +28846,32 @@
 ndex,undefined);
-%0D
 %0A%09%09if(text === u
@@ -28881,39 +28881,36 @@
 fined) %7B
-%0D
 %0A%09%09%09return null;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09retur
@@ -28954,47 +28954,44 @@
 %22,text,options);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AMake a widget t
@@ -29002,33 +29002,32 @@
 for a parse tree
-%0D
 %0Aparser: parser 
@@ -29024,33 +29024,32 @@
 r: parser object
-%0D
 %0Aoptions: see be
@@ -29043,33 +29043,32 @@
 tions: see below
-%0D
 %0AOptions include
@@ -29060,33 +29060,32 @@
 Options include:
-%0D
 %0Adocument: optio
@@ -29095,33 +29095,32 @@
  document to use
-%0D
 %0Avariables: hash
@@ -29134,33 +29134,32 @@
 variables to set
-%0D
 %0AparentWidget: o
@@ -29189,37 +29189,35 @@
 or the root node
-%0D
 %0A*/
-%0D
 %0Aexports.makeWid
@@ -29240,33 +29240,32 @@
 arser,options) %7B
-%0D
 %0A%09options = opti
@@ -29266,33 +29266,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var widgetNode
@@ -29286,33 +29286,32 @@
 r widgetNode = %7B
-%0D
 %0A%09%09%09type: %22widge
@@ -29313,40 +29313,37 @@
 widget%22,
-%0D
 %0A%09%09%09children: %5B%5D
-%0D
 %0A%09%09%7D,
-%0D
 %0A%09%09currW
@@ -29357,33 +29357,32 @@
 de = widgetNode;
-%0D
 %0A%09// Create set 
@@ -29407,33 +29407,32 @@
 or each variable
-%0D
 %0A%09$tw.utils.each
@@ -29464,33 +29464,32 @@
 on(value,name) %7B
-%0D
 %0A%09%09var setVariab
@@ -29500,34 +29500,32 @@
 dget = %7B
-%0D
 %0A%09%09%09type: %22set%22,
-%0D
 %0A%09%09%09attr
@@ -29525,33 +29525,32 @@
 %09%09%09attributes: %7B
-%0D
 %0A%09%09%09%09name: %7Btype
@@ -29566,33 +29566,32 @@
 %22, value: name%7D,
-%0D
 %0A%09%09%09%09value: %7Btyp
@@ -29616,47 +29616,43 @@
 : value%7D
-%0D
 %0A%09%09%09%7D,
-%0D
 %0A%09%09%09children: %5B%5D
-%0D
 %0A%09%09%7D;
-%0D
 %0A%09%09currW
@@ -29684,33 +29684,32 @@
 VariableWidget%5D;
-%0D
 %0A%09%09currWidgetNod
@@ -29722,39 +29722,37 @@
 tVariableWidget;
-%0D
 %0A%09%7D);
-%0D
 %0A%09// Add in the 
@@ -29768,33 +29768,32 @@
 parse tree nodes
-%0D
 %0A%09currWidgetNode
@@ -29822,33 +29822,32 @@
 arser.tree : %5B%5D;
-%0D
 %0A%09// Create the 
@@ -29844,33 +29844,32 @@
 reate the widget
-%0D
 %0A%09return new wid
@@ -29891,32 +29891,30 @@
 etNode,%7B
-%0D
 %0A%09%09wiki: this,
-%0D
 %0A%09%09docum
@@ -29947,33 +29947,32 @@
 tw.fakeDocument,
-%0D
 %0A%09%09parentWidget:
@@ -29992,33 +29992,30 @@
 ntWidget
-%0D
 %0A%09%7D);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AMake a 
@@ -30034,33 +30034,32 @@
 for transclusion
-%0D
 %0Atitle: target t
@@ -30062,33 +30062,32 @@
 et tiddler title
-%0D
 %0Aoptions: as for
@@ -30102,33 +30102,32 @@
 keWidget() plus:
-%0D
 %0Aoptions.field: 
@@ -30167,33 +30167,32 @@
 aults to %22text%22)
-%0D
 %0Aoptions.mode: t
@@ -30219,33 +30219,32 @@
 line%22 or %22block%22
-%0D
 %0Aoptions.childre
@@ -30290,33 +30290,32 @@
 ransclude widget
-%0D
 %0Aoptions.importV
@@ -30380,33 +30380,32 @@
 s to be included
-%0D
 %0Aoptions.importP
@@ -30566,37 +30566,35 @@
 .importVariables
-%0D
 %0A*/
-%0D
 %0Aexports.makeTra
@@ -30626,33 +30626,32 @@
 title,options) %7B
-%0D
 %0A%09options = opti
@@ -30652,33 +30652,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var parseTreeD
@@ -30682,33 +30682,32 @@
 eDiv = %7Btree: %5B%7B
-%0D
 %0A%09%09%09type: %22eleme
@@ -30710,33 +30710,31 @@
 lement%22,
-%0D
 %0A%09%09%09tag: %22div%22,
-%0D
 %0A%09%09%09chil
@@ -30737,33 +30737,32 @@
 children: %5B%5D%7D%5D%7D,
-%0D
 %0A%09%09parseTreeImpo
@@ -30768,33 +30768,32 @@
 ortVariables = %7B
-%0D
 %0A%09%09%09type: %22impor
@@ -30796,33 +30796,32 @@
 mportvariables%22,
-%0D
 %0A%09%09%09attributes: 
@@ -30821,32 +30821,30 @@
 butes: %7B
-%0D
 %0A%09%09%09%09filter: %7B
-%0D
 %0A%09%09%09%09%09na
@@ -30848,33 +30848,32 @@
 %09name: %22filter%22,
-%0D
 %0A%09%09%09%09%09type: %22str
@@ -30876,31 +30876,28 @@
 %22string%22
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%7D,
-%0D
 %0A%09%09%09isBl
@@ -30899,33 +30899,32 @@
 %09isBlock: false,
-%0D
 %0A%09%09%09children: %5B%5D
@@ -30917,33 +30917,32 @@
 %09%09children: %5B%5D%7D,
-%0D
 %0A%09%09parseTreeTran
@@ -30943,33 +30943,32 @@
 eeTransclude = %7B
-%0D
 %0A%09%09%09type: %22trans
@@ -30966,33 +30966,32 @@
 e: %22transclude%22,
-%0D
 %0A%09%09%09attributes: 
@@ -30991,33 +30991,31 @@
 butes: %7B
-%0D
 %0A%09%09%09%09tiddler: %7B
-%0D
 %0A%09%09%09%09%09na
@@ -31020,33 +31020,32 @@
 name: %22tiddler%22,
-%0D
 %0A%09%09%09%09%09type: %22str
@@ -31041,33 +31041,32 @@
 %09type: %22string%22,
-%0D
 %0A%09%09%09%09%09value: tit
@@ -31062,33 +31062,32 @@
 %09value: title%7D%7D,
-%0D
 %0A%09%09%09isBlock: !op
@@ -31099,33 +31099,32 @@
 .parseAsInline%7D;
-%0D
 %0A%09if(options.imp
@@ -31158,33 +31158,32 @@
 ortPageMacros) %7B
-%0D
 %0A%09%09if(options.im
@@ -31190,33 +31190,32 @@
 portVariables) %7B
-%0D
 %0A%09%09%09parseTreeImp
@@ -31269,33 +31269,32 @@
 importVariables;
-%0D
 %0A%09%09%7D else if(opt
@@ -31309,33 +31309,32 @@
 ortPageMacros) %7B
-%0D
 %0A%09%09%09parseTreeImp
@@ -31448,38 +31448,36 @@
 has%5Bdraft.of%5D%5D%22;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09parseTreeDiv.
@@ -31516,33 +31516,32 @@
 mportVariables);
-%0D
 %0A%09%09parseTreeImpo
@@ -31579,44 +31579,42 @@
 TreeTransclude);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09parseTreeDiv.
@@ -31648,37 +31648,35 @@
 TreeTransclude);
-%0D
 %0A%09%7D
-%0D
 %0A%09if(options.fie
@@ -31672,33 +31672,32 @@
 options.field) %7B
-%0D
 %0A%09%09parseTreeTran
@@ -31753,37 +31753,35 @@
  options.field%7D;
-%0D
 %0A%09%7D
-%0D
 %0A%09if(options.mod
@@ -31776,33 +31776,32 @@
 (options.mode) %7B
-%0D
 %0A%09%09parseTreeTran
@@ -31855,37 +31855,35 @@
 : options.mode%7D;
-%0D
 %0A%09%7D
-%0D
 %0A%09if(options.chi
@@ -31882,33 +31882,32 @@
 ions.children) %7B
-%0D
 %0A%09%09parseTreeTran
@@ -31933,37 +31933,35 @@
 ptions.children;
-%0D
 %0A%09%7D
-%0D
 %0A%09return $tw.wik
@@ -31987,43 +31987,41 @@
 reeDiv,options);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AParse text in a
@@ -32063,33 +32063,32 @@
 o another format
-%0D
 %0A%09outputType: co
@@ -32104,33 +32104,32 @@
 e for the output
-%0D
 %0A%09textType: cont
@@ -32146,33 +32146,32 @@
 f the input text
-%0D
 %0A%09text: input te
@@ -32164,33 +32164,32 @@
 text: input text
-%0D
 %0A%09options: see b
@@ -32184,33 +32184,32 @@
 tions: see below
-%0D
 %0AOptions include
@@ -32201,33 +32201,32 @@
 Options include:
-%0D
 %0Avariables: hash
@@ -32240,33 +32240,32 @@
 variables to set
-%0D
 %0AparentWidget: o
@@ -32295,37 +32295,35 @@
 or the root node
-%0D
 %0A*/
-%0D
 %0Aexports.renderT
@@ -32364,33 +32364,32 @@
 ,text,options) %7B
-%0D
 %0A%09options = opti
@@ -32390,33 +32390,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var parser = t
@@ -32443,33 +32443,32 @@
 e,text,options),
-%0D
 %0A%09%09widgetNode = 
@@ -32491,33 +32491,32 @@
 parser,options);
-%0D
 %0A%09var container 
@@ -32547,33 +32547,32 @@
 eElement(%22div%22);
-%0D
 %0A%09widgetNode.ren
@@ -32583,33 +32583,32 @@
 container,null);
-%0D
 %0A%09return outputT
@@ -32665,43 +32665,41 @@
 ner.textContent;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AParse text from
@@ -32734,33 +32734,32 @@
 o another format
-%0D
 %0A%09outputType: co
@@ -32775,33 +32775,32 @@
 e for the output
-%0D
 %0A%09title: title o
@@ -32819,33 +32819,32 @@
 r to be rendered
-%0D
 %0A%09options: see b
@@ -32839,33 +32839,32 @@
 tions: see below
-%0D
 %0AOptions include
@@ -32856,33 +32856,32 @@
 Options include:
-%0D
 %0Avariables: hash
@@ -32895,33 +32895,32 @@
 variables to set
-%0D
 %0AparentWidget: o
@@ -32950,37 +32950,35 @@
 or the root node
-%0D
 %0A*/
-%0D
 %0Aexports.renderT
@@ -33014,33 +33014,32 @@
 title,options) %7B
-%0D
 %0A%09options = opti
@@ -33040,33 +33040,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var parser = t
@@ -33088,33 +33088,32 @@
 (title,options),
-%0D
 %0A%09%09widgetNode = 
@@ -33136,33 +33136,32 @@
 parser,options);
-%0D
 %0A%09var container 
@@ -33192,33 +33192,32 @@
 eElement(%22div%22);
-%0D
 %0A%09widgetNode.ren
@@ -33228,33 +33228,32 @@
 container,null);
-%0D
 %0A%09return outputT
@@ -33385,43 +33385,41 @@
 er.textContent);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn an array
@@ -33455,33 +33455,32 @@
  a search string
-%0D
 %0A%09text: The text
@@ -33492,33 +33492,32 @@
 ng to search for
-%0D
 %0A%09options: see b
@@ -33512,33 +33512,32 @@
 tions: see below
-%0D
 %0AOptions availab
@@ -33531,33 +33531,32 @@
 tions available:
-%0D
 %0A%09source: an ite
@@ -33663,33 +33663,32 @@
 r(tiddler,title)
-%0D
 %0A%09exclude: An ar
@@ -33727,33 +33727,32 @@
  from the search
-%0D
 %0A%09invert: If tru
@@ -33802,33 +33802,32 @@
 specified string
-%0D
 %0A%09caseSensitive:
@@ -33857,33 +33857,32 @@
 sensitive search
-%0D
 %0A%09field: If spec
@@ -33951,33 +33951,32 @@
 y of field names
-%0D
 %0A%09anchored: If t
@@ -34038,33 +34038,32 @@
 he start of text
-%0D
 %0A%09excludeField: 
@@ -34143,33 +34143,32 @@
 t to be searched
-%0D
 %0A%09The search mod
@@ -34221,33 +34221,32 @@
 flags to be true
-%0D
 %0A%09%09literal: sear
@@ -34260,33 +34260,32 @@
 r literal string
-%0D
 %0A%09%09whitespace: s
@@ -34346,33 +34346,32 @@
 s a single space
-%0D
 %0A%09%09regexp: treat
@@ -34403,33 +34403,32 @@
 gular expression
-%0D
 %0A%09%09words: (defau
@@ -34537,37 +34537,35 @@
 ency or ordering
-%0D
 %0A*/
-%0D
 %0Aexports.search 
@@ -34582,33 +34582,32 @@
 (text,options) %7B
-%0D
 %0A%09options = opti
@@ -34608,33 +34608,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var self = thi
@@ -34634,23 +34634,21 @@
  = this,
-%0D
 %0A%09%09t,
-%0D
 %0A%09%09inver
@@ -34660,33 +34660,32 @@
 !options.invert;
-%0D
 %0A%09// Convert the
@@ -34718,33 +34718,32 @@
 xp for each term
-%0D
 %0A%09var terms, sea
@@ -34750,33 +34750,32 @@
 rchTermsRegExps,
-%0D
 %0A%09%09flags = optio
@@ -34794,33 +34794,32 @@
 tive ? %22%22 : %22i%22,
-%0D
 %0A%09%09anchor = opti
@@ -34834,33 +34834,32 @@
 ored ? %22%5E%22 : %22%22;
-%0D
 %0A%09if(options.lit
@@ -34857,33 +34857,32 @@
 tions.literal) %7B
-%0D
 %0A%09%09if(text.lengt
@@ -34883,33 +34883,32 @@
 .length === 0) %7B
-%0D
 %0A%09%09%09searchTermsR
@@ -34913,45 +34913,43 @@
 sRegExps = null;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09searchTermsR
@@ -35019,38 +35019,36 @@
 ) + %22)%22,flags)%5D;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D else if(opti
@@ -35064,32 +35064,30 @@
 space) %7B
-%0D
 %0A%09%09terms = %5B%5D;
-%0D
 %0A%09%09$tw.u
@@ -35131,32 +35131,30 @@
 (term) %7B
-%0D
 %0A%09%09%09if(term) %7B
-%0D
 %0A%09%09%09%09ter
@@ -35183,46 +35183,43 @@
 peRegExp(term));
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09searchTermsRe
@@ -35278,33 +35278,32 @@
 ) + %22)%22,flags)%5D;
-%0D
 %0A%09%7D else if(opti
@@ -35315,26 +35315,24 @@
 egexp) %7B
-%0D
 %0A%09%09try %7B
-%0D
 %0A%09%09%09sear
@@ -35388,33 +35388,31 @@
 gs)%5D;%09%09%09
-%0D
 %0A%09%09%7D catch(e) %7B
-%0D
 %0A%09%09%09sear
@@ -35425,33 +35425,32 @@
 sRegExps = null;
-%0D
 %0A%09%09%09console.log(
@@ -35507,33 +35507,30 @@
 %22: %22,e);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09terms
@@ -35541,33 +35541,32 @@
 ext.split(/ +/);
-%0D
 %0A%09%09if(terms.leng
@@ -35587,33 +35587,32 @@
 rms%5B0%5D === %22%22) %7B
-%0D
 %0A%09%09%09searchTermsR
@@ -35617,45 +35617,43 @@
 sRegExps = null;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09searchTermsR
@@ -35656,33 +35656,32 @@
 rmsRegExps = %5B%5D;
-%0D
 %0A%09%09%09for(t=0; t%3Ct
@@ -35691,33 +35691,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09%09%09searchTerms
@@ -35801,32 +35801,28 @@
 flags));
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09// Acc
@@ -35883,33 +35883,32 @@
  from the search
-%0D
 %0A%09var fields = %5B
@@ -35901,33 +35901,32 @@
 var fields = %5B%5D;
-%0D
 %0A%09if(options.fie
@@ -35922,33 +35922,32 @@
 options.field) %7B
-%0D
 %0A%09%09if($tw.utils.
@@ -35963,33 +35963,32 @@
 ptions.field)) %7B
-%0D
 %0A%09%09%09$tw.utils.ea
@@ -36017,33 +36017,32 @@
 ion(fieldName) %7B
-%0D
 %0A%09%09%09%09if(fieldNam
@@ -36037,33 +36037,32 @@
 %09if(fieldName) %7B
-%0D
 %0A%09%09%09%09%09fields.pus
@@ -36079,44 +36079,40 @@
 e);%09%09%09%09%09
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%7D);
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09fiel
@@ -36126,42 +36126,39 @@
 (options.field);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09// Use default
@@ -36286,33 +36286,32 @@
 hing all fields)
-%0D
 %0A%09if(fields.leng
@@ -36338,33 +36338,32 @@
 .excludeField) %7B
-%0D
 %0A%09%09fields.push(%22
@@ -36362,33 +36362,32 @@
 s.push(%22title%22);
-%0D
 %0A%09%09fields.push(%22
@@ -36385,33 +36385,32 @@
 ds.push(%22tags%22);
-%0D
 %0A%09%09fields.push(%22
@@ -36408,37 +36408,35 @@
 ds.push(%22text%22);
-%0D
 %0A%09%7D
-%0D
 %0A%09// Function to
@@ -36469,33 +36469,32 @@
  the search term
-%0D
 %0A%09var searchTidd
@@ -36508,33 +36508,32 @@
 unction(title) %7B
-%0D
 %0A%09%09if(!searchTer
@@ -36544,39 +36544,36 @@
 gExps) %7B
-%0D
 %0A%09%09%09return true;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09var n
@@ -36647,33 +36647,32 @@
 tTiddler(title);
-%0D
 %0A%09%09if(!tiddler) 
@@ -36664,33 +36664,32 @@
 %09%09if(!tiddler) %7B
-%0D
 %0A%09%09%09tiddler = ne
@@ -36749,38 +36749,36 @@
 d.tiddlywiki%22%7D);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09var contentTy
@@ -36879,33 +36879,32 @@
 nd.tiddlywiki%22%5D,
-%0D
 %0A%09%09%09searchFields
@@ -36896,33 +36896,32 @@
 %09%09%09searchFields;
-%0D
 %0A%09%09// Get the li
@@ -36940,33 +36940,32 @@
  we're searching
-%0D
 %0A%09%09if(options.ex
@@ -36969,33 +36969,32 @@
 .excludeField) %7B
-%0D
 %0A%09%09%09searchFields
@@ -37016,33 +37016,32 @@
 tiddler.fields);
-%0D
 %0A%09%09%09$tw.utils.ea
@@ -37063,33 +37063,32 @@
 ion(fieldName) %7B
-%0D
 %0A%09%09%09%09var p = sea
@@ -37108,33 +37108,32 @@
 exOf(fieldName);
-%0D
 %0A%09%09%09%09if(p !== -1
@@ -37127,33 +37127,32 @@
 %09%09if(p !== -1) %7B
-%0D
 %0A%09%09%09%09%09searchFiel
@@ -37166,44 +37166,40 @@
 ce(p,1);
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%7D);
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09sear
@@ -37208,38 +37208,36 @@
 Fields = fields;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09for(var field
@@ -37308,33 +37308,32 @@
  fieldIndex++) %7B
-%0D
 %0A%09%09%09// Don't sea
@@ -37372,33 +37372,32 @@
 t type is binary
-%0D
 %0A%09%09%09var fieldNam
@@ -37417,33 +37417,32 @@
 lds%5BfieldIndex%5D;
-%0D
 %0A%09%09%09if(fieldName
@@ -37494,35 +37494,32 @@
 utf8%22) %7B
-%0D
 %0A%09%09%09%09break;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09var 
@@ -37550,39 +37550,36 @@
 ldName%5D,
-%0D
 %0A%09%09%09%09t;
-%0D
 %0A%09%09%09if(str) %7B
-%0D
 %0A%09%09%09%09if(
@@ -37595,33 +37595,32 @@
 .isArray(str)) %7B
-%0D
 %0A%09%09%09%09%09// If the 
@@ -37752,33 +37752,32 @@
 ield array entry
-%0D
 %0A%09%09%09%09%09for(var s=
@@ -37791,33 +37791,32 @@
 r.length; s++) %7B
-%0D
 %0A%09%09%09%09%09%09for(t=0; 
@@ -37831,33 +37831,32 @@
 Found.length;) %7B
-%0D
 %0A%09%09%09%09%09%09%09if(notYe
@@ -37872,33 +37872,32 @@
 .test(str%5Bs%5D)) %7B
-%0D
 %0A%09%09%09%09%09%09%09%09notYetF
@@ -37914,89 +37914,82 @@
 e(t, 1);
-%0D
 %0A%09%09%09%09%09%09%09%7D else %7B
-%0D
 %0A%09%09%09%09%09%09%09%09t++;
-%0D
 %0A%09%09%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%7D else %7B
-%0D
 %0A%09%09%09%09%09//
@@ -38091,33 +38091,32 @@
 any do not match
-%0D
 %0A%09%09%09%09%09str = tidd
@@ -38137,33 +38137,32 @@
 ring(fieldName);
-%0D
 %0A%09%09%09%09%09for(t=0; t
@@ -38176,33 +38176,32 @@
 Found.length;) %7B
-%0D
 %0A%09%09%09%09%09%09if(notYet
@@ -38213,33 +38213,32 @@
 %5Bt%5D.test(str)) %7B
-%0D
 %0A%09%09%09%09%09%09%09notYetFo
@@ -38254,82 +38254,74 @@
 e(t, 1);
-%0D
 %0A%09%09%09%09%09%09%7D else %7B
-%0D
 %0A%09%09%09%09%09%09%09t++;
-%0D
 %0A%09%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D;
-%0D
 %0A%09%09retur
@@ -38338,38 +38338,36 @@
 und.length == 0;
-%0D
 %0A%09%7D;
-%0D
 %0A%09// Loop throug
@@ -38393,33 +38393,32 @@
 doing the search
-%0D
 %0A%09var results = 
@@ -38412,33 +38412,32 @@
 ar results = %5B%5D,
-%0D
 %0A%09%09source = opti
@@ -38452,33 +38452,32 @@
 ce %7C%7C this.each;
-%0D
 %0A%09source(functio
@@ -38486,33 +38486,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09if(searchTidd
@@ -38534,33 +38534,32 @@
 ptions.invert) %7B
-%0D
 %0A%09%09%09results.push
@@ -38558,44 +38558,41 @@
 lts.push(title);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09// Remove any 
@@ -38616,33 +38616,32 @@
  have to exclude
-%0D
 %0A%09if(options.exc
@@ -38639,33 +38639,32 @@
 tions.exclude) %7B
-%0D
 %0A%09%09for(t=0; t%3Cop
@@ -38683,33 +38683,32 @@
 e.length; t++) %7B
-%0D
 %0A%09%09%09var p = resu
@@ -38731,33 +38731,32 @@
 ons.exclude%5Bt%5D);
-%0D
 %0A%09%09%09if(p !== -1)
@@ -38749,33 +38749,32 @@
 %09%09if(p !== -1) %7B
-%0D
 %0A%09%09%09%09results.spl
@@ -38782,32 +38782,28 @@
 ce(p,1);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09return
@@ -38803,43 +38803,41 @@
 %09return results;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ATrigger a load 
@@ -38960,37 +38960,35 @@
 g lazily loaded.
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -39018,33 +39018,32 @@
 e,defaultText) %7B
-%0D
 %0A%09var tiddler = 
@@ -39057,33 +39057,32 @@
 tTiddler(title);
-%0D
 %0A%09// Return unde
@@ -39113,34 +39113,32 @@
 't found
-%0D
 %0A%09if(!tiddler) %7B
-%0D
 %0A%09%09retur
@@ -39143,37 +39143,35 @@
 urn defaultText;
-%0D
 %0A%09%7D
-%0D
 %0A%09if(!tiddler.ha
@@ -39185,33 +39185,32 @@
 %22_is_skinny%22)) %7B
-%0D
 %0A%09%09// Just retur
@@ -39227,33 +39227,32 @@
  if we've got it
-%0D
 %0A%09%09return tiddle
@@ -39263,44 +39263,42 @@
 elds.text %7C%7C %22%22;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09// Tell any l
@@ -39340,33 +39340,32 @@
 oad this tiddler
-%0D
 %0A%09%09this.dispatch
@@ -39380,33 +39380,32 @@
 azyLoad%22,title);
-%0D
 %0A%09%09// Indicate t
@@ -39432,47 +39432,43 @@
 g loaded
-%0D
 %0A%09%09return null;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ACheck w
@@ -39618,37 +39618,35 @@
  text is trimmed
-%0D
 %0A*/
-%0D
 %0Aexports.checkTi
@@ -39685,33 +39685,32 @@
 tText,options) %7B
-%0D
 %0A%09options = opti
@@ -39711,33 +39711,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var text = thi
@@ -39754,33 +39754,32 @@
 rText(title,%22%22);
-%0D
 %0A%09if(!options.no
@@ -39777,33 +39777,32 @@
 ptions.noTrim) %7B
-%0D
 %0A%09%09text = text.t
@@ -39799,37 +39799,35 @@
 t = text.trim();
-%0D
 %0A%09%7D
-%0D
 %0A%09if(!options.ca
@@ -39832,33 +39832,32 @@
 caseSensitive) %7B
-%0D
 %0A%09%09text = text.t
@@ -39861,33 +39861,32 @@
 t.toLowerCase();
-%0D
 %0A%09%09targetText = 
@@ -39902,37 +39902,35 @@
 t.toLowerCase();
-%0D
 %0A%09%7D
-%0D
 %0A%09return text ==
@@ -39934,42 +39934,40 @@
  === targetText;
-%0D
 %0A%7D%0D%0A%0D%0A/*
-%0D
 %0ARead an array o
@@ -40041,37 +40041,35 @@
 they're all read
-%0D
 %0A*/
-%0D
 %0Aexports.readFil
@@ -40098,33 +40098,31 @@
 tions) %7B
-%0D
 %0A%09var callback;
-%0D
 %0A%09if(typ
@@ -40142,33 +40142,32 @@
 == %22function%22) %7B
-%0D
 %0A%09%09callback = op
@@ -40172,45 +40172,42 @@
 options;
-%0D
 %0A%09%09options = %7B%7D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09callb
@@ -40221,37 +40221,35 @@
 ptions.callback;
-%0D
 %0A%09%7D
-%0D
 %0A%09var result = %5B
@@ -40242,33 +40242,32 @@
 var result = %5B%5D,
-%0D
 %0A%09%09outstanding =
@@ -40272,33 +40272,32 @@
  = files.length,
-%0D
 %0A%09%09readFileCallb
@@ -40324,33 +40324,32 @@
 erFieldsArray) %7B
-%0D
 %0A%09%09%09result.push.
@@ -40373,33 +40373,32 @@
 lerFieldsArray);
-%0D
 %0A%09%09%09if(--outstan
@@ -40402,33 +40402,32 @@
 tanding === 0) %7B
-%0D
 %0A%09%09%09%09callback(re
@@ -40432,29 +40432,26 @@
 result);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D;
-%0D
 %0A%09for(va
@@ -40471,33 +40471,32 @@
 s.length; f++) %7B
-%0D
 %0A%09%09this.readFile
@@ -40556,37 +40556,35 @@
 FileCallback%7D));
-%0D
 %0A%09%7D
-%0D
 %0A%09return files.l
@@ -40581,43 +40581,41 @@
 rn files.length;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ARead a browser 
@@ -40696,37 +40696,35 @@
 r fields objects
-%0D
 %0A*/
-%0D
 %0Aexports.readFil
@@ -40751,33 +40751,31 @@
 tions) %7B
-%0D
 %0A%09var callback;
-%0D
 %0A%09if(typ
@@ -40795,33 +40795,32 @@
 == %22function%22) %7B
-%0D
 %0A%09%09callback = op
@@ -40825,45 +40825,42 @@
 options;
-%0D
 %0A%09%09options = %7B%7D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09callb
@@ -40874,37 +40874,35 @@
 ptions.callback;
-%0D
 %0A%09%7D
-%0D
 %0A%09// Get the typ
@@ -40934,33 +40934,32 @@
 lename extension
-%0D
 %0A%09var self = thi
@@ -40952,33 +40952,32 @@
 var self = this,
-%0D
 %0A%09%09type = file.t
@@ -40972,33 +40972,32 @@
 ype = file.type;
-%0D
 %0A%09if(type === %22%22
@@ -41000,33 +41000,32 @@
 = %22%22 %7C%7C !type) %7B
-%0D
 %0A%09%09var dotPos = 
@@ -41043,33 +41043,32 @@
 astIndexOf(%22.%22);
-%0D
 %0A%09%09if(dotPos !==
@@ -41065,33 +41065,32 @@
 dotPos !== -1) %7B
-%0D
 %0A%09%09%09var fileExte
@@ -41150,33 +41150,32 @@
 substr(dotPos));
-%0D
 %0A%09%09%09if(fileExten
@@ -41177,33 +41177,32 @@
 ExtensionInfo) %7B
-%0D
 %0A%09%09%09%09type = file
@@ -41220,32 +41220,28 @@
 fo.type;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09// Fig
@@ -41270,33 +41270,32 @@
 ng a binary file
-%0D
 %0A%09var contentTyp
@@ -41327,33 +41327,32 @@
 tTypeInfo%5Btype%5D,
-%0D
 %0A%09%09isBinary = co
@@ -41405,33 +41405,32 @@
 base64%22 : false;
-%0D
 %0A%09// Log some de
@@ -41440,33 +41440,32 @@
 ging information
-%0D
 %0A%09if($tw.log.IMP
@@ -41462,33 +41462,32 @@
 tw.log.IMPORT) %7B
-%0D
 %0A%09%09console.log(%22
@@ -41560,37 +41560,35 @@
 : %22 + isBinary);
-%0D
 %0A%09%7D
-%0D
 %0A%09// Give the ho
@@ -41610,33 +41610,32 @@
 process the drag
-%0D
 %0A%09if($tw.hooks.i
@@ -41665,47 +41665,44 @@
 -file%22,%7B
-%0D
 %0A%09%09file: file,
-%0D
 %0A%09%09type: type,
-%0D
 %0A%09%09isBin
@@ -41707,33 +41707,32 @@
 inary: isBinary,
-%0D
 %0A%09%09callback: cal
@@ -41736,34 +41736,32 @@
 callback
-%0D
 %0A%09%7D) !== true) %7B
-%0D
 %0A%09%09this.
@@ -41818,47 +41818,44 @@
 lizer,callback);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ALower level uti
@@ -41974,37 +41974,35 @@
 r fields objects
-%0D
 %0A*/
-%0D
 %0Aexports.readFil
@@ -42056,33 +42056,32 @@
 izer,callback) %7B
-%0D
 %0A%09var self = thi
@@ -42074,33 +42074,32 @@
 var self = this;
-%0D
 %0A%09// Create the 
@@ -42100,33 +42100,32 @@
 e the FileReader
-%0D
 %0A%09var reader = n
@@ -42140,29 +42140,27 @@
 eader();
-%0D
 %0A%09// Onload
-%0D
 %0A%09reader
@@ -42178,33 +42178,32 @@
 unction(event) %7B
-%0D
 %0A%09%09var text = ev
@@ -42212,33 +42212,32 @@
 t.target.result,
-%0D
 %0A%09%09%09tiddlerField
@@ -42277,33 +42277,32 @@
 d%22, type: type%7D;
-%0D
 %0A%09%09if(isBinary) 
@@ -42294,33 +42294,32 @@
 %09%09if(isBinary) %7B
-%0D
 %0A%09%09%09var commaPos
@@ -42331,33 +42331,32 @@
 xt.indexOf(%22,%22);
-%0D
 %0A%09%09%09if(commaPos 
@@ -42356,33 +42356,32 @@
 mmaPos !== -1) %7B
-%0D
 %0A%09%09%09%09text = text
@@ -42402,28 +42402,25 @@
 os + 1);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09// Ch
@@ -42459,33 +42459,32 @@
  TiddlyWiki file
-%0D
 %0A%09%09var encrypted
@@ -42524,33 +42524,32 @@
 StoreArea(text);
-%0D
 %0A%09%09if(encryptedJ
@@ -42546,33 +42546,32 @@
 encryptedJson) %7B
-%0D
 %0A%09%09%09// If so, at
@@ -42607,33 +42607,32 @@
 current password
-%0D
 %0A%09%09%09$tw.utils.de
@@ -42683,33 +42683,32 @@
 tion(tiddlers) %7B
-%0D
 %0A%09%09%09%09callback(ti
@@ -42715,37 +42715,34 @@
 ddlers);
-%0D
 %0A%09%09%09%7D);
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09// O
@@ -42791,33 +42791,32 @@
 lers in the file
-%0D
 %0A%09%09%09callback(sel
@@ -42892,27 +42892,24 @@
 izer%7D));
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D;
-%0D
 %0A%09// Kic
@@ -42922,34 +42922,32 @@
 the read
-%0D
 %0A%09if(isBinary) %7B
-%0D
 %0A%09%09reade
@@ -42960,44 +42960,42 @@
 AsDataURL(file);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09reader.readAs
@@ -43005,31 +43005,28 @@
 t(file);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AFind an
@@ -43056,37 +43056,35 @@
 pecified tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.findDra
@@ -43103,33 +43103,32 @@
 n(targetTitle) %7B
-%0D
 %0A%09var draftTitle
@@ -43132,33 +43132,32 @@
 tle = undefined;
-%0D
 %0A%09this.forEachTi
@@ -43201,33 +43201,32 @@
 title,tiddler) %7B
-%0D
 %0A%09%09if(tiddler.fi
@@ -43285,33 +43285,32 @@
 = targetTitle) %7B
-%0D
 %0A%09%09%09draftTitle =
@@ -43316,28 +43316,25 @@
 = title;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09return
@@ -43345,26 +43345,24 @@
 ftTitle;
-%0D
 %0A%7D%0D%0A%0D%0A/*
-%0D
 %0ACheck w
@@ -43406,33 +43406,32 @@
 s been modified.
-%0D
 %0AIf the original
@@ -43481,33 +43481,32 @@
 iddler variable,
-%0D
 %0Ato check if add
@@ -43528,37 +43528,35 @@
 have been added.
-%0D
 %0A*/
-%0D
 %0Aexports.isDraft
@@ -43575,33 +43575,32 @@
 unction(title) %7B
-%0D
 %0A%09var tiddler = 
@@ -43614,33 +43614,32 @@
 tTiddler(title);
-%0D
 %0A%09if(!tiddler.is
@@ -43648,38 +43648,35 @@
 aft()) %7B
-%0D
 %0A%09%09return false;
-%0D
 %0A%09%7D
-%0D
 %0A%09var ig
@@ -43741,33 +43741,32 @@
 e%22, %22draft.of%22%5D,
-%0D
 %0A%09%09origTiddler =
@@ -43841,33 +43841,32 @@
 t:%22%22, tags:%5B%5D%7D),
-%0D
 %0A%09%09titleModified
@@ -43921,33 +43921,32 @@
 lds%5B%22draft.of%22%5D;
-%0D
 %0A%09return titleMo
@@ -43991,43 +43991,41 @@
 ,ignoredFields);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AAdd a new recor
@@ -44049,33 +44049,32 @@
 he history stack
-%0D
 %0Atitle: a title 
@@ -44100,33 +44100,32 @@
 of title strings
-%0D
 %0AfromPageRect: p
@@ -44163,33 +44163,32 @@
 f the navigation
-%0D
 %0AhistoryTitle: t
@@ -44231,37 +44231,35 @@
  $:/HistoryList)
-%0D
 %0A*/
-%0D
 %0Aexports.addToHi
@@ -44301,33 +44301,32 @@
 ,historyTitle) %7B
-%0D
 %0A%09var story = ne
@@ -44371,33 +44371,32 @@
  historyTitle%7D);
-%0D
 %0A%09story.addToHis
@@ -44414,43 +44414,41 @@
 fromPageRect);%09%09
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AAdd a new tiddl
@@ -44460,33 +44460,32 @@
  the story river
-%0D
 %0Atitle: a title 
@@ -44511,33 +44511,32 @@
 of title strings
-%0D
 %0AfromTitle: the 
@@ -44584,33 +44584,32 @@
 ation originated
-%0D
 %0AstoryTitle: tit
@@ -44646,33 +44646,32 @@
 to $:/StoryList)
-%0D
 %0Aoptions: see st
@@ -44668,37 +44668,35 @@
 ns: see story.js
-%0D
 %0A*/
-%0D
 %0Aexports.addToSt
@@ -44739,33 +44739,32 @@
 Title,options) %7B
-%0D
 %0A%09var story = ne
@@ -44805,33 +44805,32 @@
 e: storyTitle%7D);
-%0D
 %0A%09story.addToSto
@@ -44851,43 +44851,41 @@
 itle,options);%09%09
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AGenerate a titl
@@ -44910,37 +44910,35 @@
  a given tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.generat
@@ -44968,45 +44968,42 @@
 title) %7B
-%0D
 %0A%09var c = 0,
-%0D
 %0A%09%09draftTitle,
-%0D
 %0A%09%09usern
@@ -45042,33 +45042,32 @@
 atus/UserName%22),
-%0D
 %0A%09%09attribution =
@@ -45101,24 +45101,22 @@
 me : %22%22;
-%0D
 %0A%09do %7B
-%0D
 %0A%09%09draft
@@ -45196,25 +45196,23 @@
 ibution;
-%0D
 %0A%09%09c++;
-%0D
 %0A%09%7D whil
@@ -45237,33 +45237,32 @@
 ts(draftTitle));
-%0D
 %0A%09return draftTi
@@ -45265,27 +45265,25 @@
 ftTitle;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AInvoke 
@@ -45304,33 +45304,32 @@
 upgrader modules
-%0D
 %0Atitles: array o
@@ -45352,33 +45352,32 @@
  to be processed
-%0D
 %0Atiddlers: hashm
@@ -45678,33 +45678,32 @@
 the titles array
-%0D
 %0AReturns a hashm
@@ -45740,21 +45740,19 @@
 r title.
-%0D
 %0A*/
-%0D
 %0Aexports
@@ -45789,33 +45789,32 @@
 tles,tiddlers) %7B
-%0D
 %0A%09// Collect up 
@@ -45835,33 +45835,32 @@
 upgrader modules
-%0D
 %0A%09var self = thi
@@ -45853,33 +45853,32 @@
 var self = this;
-%0D
 %0A%09if(!this.upgra
@@ -45882,33 +45882,32 @@
 graderModules) %7B
-%0D
 %0A%09%09this.upgrader
@@ -45911,33 +45911,32 @@
 derModules = %5B%5D;
-%0D
 %0A%09%09$tw.modules.f
@@ -45981,33 +45981,32 @@
 (title,module) %7B
-%0D
 %0A%09%09%09if(module.up
@@ -46005,33 +46005,32 @@
 odule.upgrade) %7B
-%0D
 %0A%09%09%09%09self.upgrad
@@ -46052,34 +46052,30 @@
 module);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D
-%0D
 %0A%09// Inv
@@ -46091,33 +46091,32 @@
 upgrader in turn
-%0D
 %0A%09var messages =
@@ -46111,33 +46111,32 @@
 r messages = %7B%7D;
-%0D
 %0A%09for(var t=0; t
@@ -46163,33 +46163,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09var upgrader 
@@ -46205,33 +46205,32 @@
 raderModules%5Bt%5D,
-%0D
 %0A%09%09%09upgraderMess
@@ -46267,33 +46267,32 @@
 itles,tiddlers);
-%0D
 %0A%09%09$tw.utils.ext
@@ -46314,37 +46314,35 @@
 graderMessages);
-%0D
 %0A%09%7D
-%0D
 %0A%09return message
@@ -46335,33 +46335,32 @@
 return messages;
-%0D
 %0A%7D;%0D%0A%0D%0A// Determ
@@ -46404,33 +46404,32 @@
 mically loadable
-%0D
 %0Aexports.doesPlu
@@ -46456,33 +46456,32 @@
 unction(title) %7B
-%0D
 %0A%09return this.do
@@ -46561,33 +46561,32 @@
 aCached(title));
-%0D
 %0A%7D;%0D%0A%0D%0A// Determ
@@ -46636,33 +46636,32 @@
 mically loadable
-%0D
 %0Aexports.doesPlu
@@ -46697,33 +46697,32 @@
 on(pluginInfo) %7B
-%0D
 %0A%09if(pluginInfo)
@@ -46715,33 +46715,32 @@
 if(pluginInfo) %7B
-%0D
 %0A%09%09var foundModu
@@ -46742,33 +46742,32 @@
 dModule = false;
-%0D
 %0A%09%09$tw.utils.eac
@@ -46799,33 +46799,32 @@
 ction(tiddler) %7B
-%0D
 %0A%09%09%09if(tiddler.t
@@ -46890,33 +46890,32 @@
 module-type%22)) %7B
-%0D
 %0A%09%09%09%09foundModule
@@ -46922,30 +46922,27 @@
  = true;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09retur
@@ -46955,48 +46955,44 @@
 dModule;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return null;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A%7D
