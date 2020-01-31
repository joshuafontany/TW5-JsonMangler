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
@@ -2873,83 +2873,111 @@
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
 %0A%09%09this.
@@ -3014,44 +3014,86 @@
 ficationFields);
-%0D
+%0A%09%09$tw.utils.jsonIsPlugin(title, %22setText%22);
 %0A%09%7D else %7B
-%0D
 %0A%09%09var tiddler =
@@ -3108,33 +3108,32 @@
 tTiddler(title),
-%0D
 %0A%09%09%09fields = %7Bti
@@ -3136,33 +3136,32 @@
  %7Btitle: title%7D;
-%0D
 %0A%09%09fields%5Bfield 
@@ -3171,33 +3171,32 @@
 %22text%22%5D = value;
-%0D
 %0A%09%09this.addTiddl
@@ -3257,37 +3257,35 @@
 icationFields));
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.d
@@ -3333,33 +3333,32 @@
 rTiddlerTitle) %7B
-%0D
 %0A%09var tr = $tw.u
@@ -3382,33 +3382,32 @@
 erence(textRef),
-%0D
 %0A%09%09title,tiddler
@@ -3406,33 +3406,32 @@
 ,tiddler,fields;
-%0D
 %0A%09// Check if it
@@ -3450,33 +3450,32 @@
 nce to a tiddler
-%0D
 %0A%09if(tr.title &&
@@ -3479,33 +3479,32 @@
  && !tr.field) %7B
-%0D
 %0A%09%09this.deleteTi
@@ -3511,33 +3511,32 @@
 ddler(tr.title);
-%0D
 %0A%09// Else check 
@@ -3548,33 +3548,32 @@
  field reference
-%0D
 %0A%09%7D else if(tr.f
@@ -3571,33 +3571,32 @@
 e if(tr.field) %7B
-%0D
 %0A%09%09title = tr.ti
@@ -3611,33 +3611,32 @@
 urrTiddlerTitle;
-%0D
 %0A%09%09tiddler = thi
@@ -3647,33 +3647,32 @@
 tTiddler(title);
-%0D
 %0A%09%09if(tiddler &&
@@ -3705,33 +3705,32 @@
 lds,tr.field)) %7B
-%0D
 %0A%09%09%09fields = Obj
@@ -3738,33 +3738,32 @@
 ct.create(null);
-%0D
 %0A%09%09%09fields%5Btr.fi
@@ -3771,33 +3771,32 @@
 ld%5D = undefined;
-%0D
 %0A%09%09%09this.addTidd
@@ -3853,42 +3853,39 @@
 ationFields()));
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.a
@@ -3919,33 +3919,32 @@
 type,listener) %7B
-%0D
 %0A%09this.eventList
@@ -3969,33 +3969,32 @@
 Listeners %7C%7C %7B%7D;
-%0D
 %0A%09this.eventList
@@ -4032,33 +4032,32 @@
 rs%5Btype%5D  %7C%7C %5B%5D;
-%0D
 %0A%09this.eventList
@@ -4076,33 +4076,32 @@
 push(listener);%09
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.r
@@ -4138,33 +4138,32 @@
 type,listener) %7B
-%0D
 %0A%09var listeners 
@@ -4182,33 +4182,32 @@
 Listeners%5Btype%5D;
-%0D
 %0A%09if(listeners) 
@@ -4199,33 +4199,32 @@
 %09if(listeners) %7B
-%0D
 %0A%09%09var p = liste
@@ -4238,33 +4238,32 @@
 dexOf(listener);
-%0D
 %0A%09%09if(p !== -1) 
@@ -4255,33 +4255,32 @@
 %09%09if(p !== -1) %7B
-%0D
 %0A%09%09%09listeners.sp
@@ -4281,42 +4281,39 @@
 ers.splice(p,1);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.d
@@ -4347,33 +4347,32 @@
 e /*, args */) %7B
-%0D
 %0A%09var args = Arr
@@ -4400,33 +4400,32 @@
 ll(arguments,1),
-%0D
 %0A%09%09listeners = t
@@ -4441,33 +4441,32 @@
 Listeners%5Btype%5D;
-%0D
 %0A%09if(listeners) 
@@ -4458,33 +4458,32 @@
 %09if(listeners) %7B
-%0D
 %0A%09%09for(var p=0; 
@@ -4500,33 +4500,32 @@
 s.length; p++) %7B
-%0D
 %0A%09%09%09var listener
@@ -4532,33 +4532,32 @@
  = listeners%5Bp%5D;
-%0D
 %0A%09%09%09listener.app
@@ -4574,36 +4574,32 @@
 r,args);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ACauses 
@@ -4684,33 +4684,32 @@
  event handlers.
-%0D
 %0AThis method sho
@@ -4789,33 +4789,32 @@
 iddlers%5B%5D array.
-%0D
 %0A%09title: Title o
@@ -4814,33 +4814,32 @@
 Title of tiddler
-%0D
 %0A%09isDeleted: def
@@ -4896,33 +4896,32 @@
 ed or modified),
-%0D
 %0A%09%09true if the t
@@ -4935,37 +4935,35 @@
 has been deleted
-%0D
 %0A*/
-%0D
 %0Aexports.enqueue
@@ -4996,33 +4996,32 @@
 tle,isDeleted) %7B
-%0D
 %0A%09// Record the 
@@ -5049,33 +5049,32 @@
 changed tiddlers
-%0D
 %0A%09this.changedTi
@@ -5118,33 +5118,32 @@
 ct.create(null);
-%0D
 %0A%09this.changedTi
@@ -5201,33 +5201,32 @@
 ct.create(null);
-%0D
 %0A%09this.changedTi
@@ -5274,33 +5274,32 @@
 dified%22%5D = true;
-%0D
 %0A%09// Increment t
@@ -5305,33 +5305,32 @@
 the change count
-%0D
 %0A%09this.changeCou
@@ -5366,33 +5366,32 @@
 ct.create(null);
-%0D
 %0A%09if($tw.utils.h
@@ -5411,33 +5411,32 @@
 eCount,title)) %7B
-%0D
 %0A%09%09this.changeCo
@@ -5440,44 +5440,42 @@
 eCount%5Btitle%5D++;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09this.changeCo
@@ -5481,37 +5481,35 @@
 ount%5Btitle%5D = 1;
-%0D
 %0A%09%7D
-%0D
 %0A%09// Trigger eve
@@ -5503,33 +5503,32 @@
 / Trigger events
-%0D
 %0A%09this.eventList
@@ -5553,33 +5553,32 @@
 Listeners %7C%7C %7B%7D;
-%0D
 %0A%09if(!this.event
@@ -5582,33 +5582,32 @@
 entsTriggered) %7B
-%0D
 %0A%09%09var self = th
@@ -5601,33 +5601,32 @@
 var self = this;
-%0D
 %0A%09%09$tw.utils.nex
@@ -5635,33 +5635,32 @@
 ick(function() %7B
-%0D
 %0A%09%09%09var changes 
@@ -5674,33 +5674,32 @@
 changedTiddlers;
-%0D
 %0A%09%09%09self.changed
@@ -5721,33 +5721,32 @@
 ct.create(null);
-%0D
 %0A%09%09%09self.eventsT
@@ -5754,33 +5754,32 @@
 iggered = false;
-%0D
 %0A%09%09%09if($tw.utils
@@ -5792,33 +5792,32 @@
 (changes) %3E 0) %7B
-%0D
 %0A%09%09%09%09self.dispat
@@ -5834,46 +5834,43 @@
 hange%22,changes);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09this.eventsTr
@@ -5876,37 +5876,35 @@
 riggered = true;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -5935,33 +5935,32 @@
 e = function() %7B
-%0D
 %0A%09return $tw.uti
@@ -5982,33 +5982,32 @@
 hangedTiddlers);
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.c
@@ -6034,33 +6034,32 @@
 e = function() %7B
-%0D
 %0A%09this.changedTi
@@ -6079,33 +6079,32 @@
 ct.create(null);
-%0D
 %0A%09this.changeCou
@@ -6120,33 +6120,32 @@
 ct.create(null);
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -6169,33 +6169,32 @@
 unction(title) %7B
-%0D
 %0A%09this.changeCou
@@ -6230,33 +6230,32 @@
 ct.create(null);
-%0D
 %0A%09if($tw.utils.h
@@ -6275,33 +6275,32 @@
 eCount,title)) %7B
-%0D
 %0A%09%09return this.c
@@ -6317,55 +6317,50 @@
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
@@ -6392,37 +6392,35 @@
 e specified base
-%0D
 %0A*/
-%0D
 %0Aexports.generat
@@ -6452,33 +6452,32 @@
 Title,options) %7B
-%0D
 %0A%09options = opti
@@ -6478,46 +6478,44 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var c = 0,
-%0D
 %0A%09%09title = baseT
@@ -6511,33 +6511,32 @@
 tle = baseTitle;
-%0D
 %0A%09while(this.tid
@@ -6603,33 +6603,32 @@
 dDraft(title)) %7B
-%0D
 %0A%09%09title = baseT
@@ -6626,33 +6626,32 @@
 e = baseTitle + 
-%0D
 %0A%09%09%09(options.pre
@@ -6664,48 +6664,44 @@
  %22 %22) + 
-%0D
 %0A%09%09%09(++c);
-%0D
 %0A%09%7D
-%0D
 %0A%09return title;
-%0D
 %0A%7D;%0D%0A%0D%0Ae
@@ -6734,33 +6734,32 @@
 unction(title) %7B
-%0D
 %0A%09return title &
@@ -6779,33 +6779,32 @@
 Of(%22$:/%22) === 0;
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.i
@@ -6832,33 +6832,32 @@
 unction(title) %7B
-%0D
 %0A%09return title &
@@ -6882,33 +6882,32 @@
 :/temp/%22) === 0;
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.i
@@ -6931,33 +6931,32 @@
 unction(title) %7B
-%0D
 %0A%09var tiddler = 
@@ -6970,33 +6970,32 @@
 tTiddler(title);
-%0D
 %0A%09if(tiddler) %7B%09
@@ -6987,33 +6987,32 @@
 %09if(tiddler) %7B%09%09
-%0D
 %0A%09%09var contentTy
@@ -7085,33 +7085,32 @@
 nd.tiddlywiki%22%5D;
-%0D
 %0A%09%09return !!cont
@@ -7170,48 +7170,44 @@
  !== -1;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return null;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Ae
@@ -7240,33 +7240,32 @@
 unction(title) %7B
-%0D
 %0A%09var tiddler = 
@@ -7279,33 +7279,32 @@
 tTiddler(title);
-%0D
 %0A%09if(tiddler) %7B%09
@@ -7296,33 +7296,32 @@
 %09if(tiddler) %7B%09%09
-%0D
 %0A%09%09var contentTy
@@ -7394,33 +7394,32 @@
 nd.tiddlywiki%22%5D;
-%0D
 %0A%09%09return !!cont
@@ -7471,58 +7471,53 @@
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
@@ -7660,37 +7660,35 @@
 ler was imported
-%0D
 %0A*/
-%0D
 %0Aexports.importT
@@ -7707,33 +7707,32 @@
 ction(tiddler) %7B
-%0D
 %0A%09var existingTi
@@ -7769,33 +7769,32 @@
 r.fields.title);
-%0D
 %0A%09// Check if we
@@ -7810,33 +7810,32 @@
 ng with a plugin
-%0D
 %0A%09if(tiddler && 
@@ -7992,33 +7992,32 @@
 ld(%22version%22)) %7B
-%0D
 %0A%09%09// Reject the
@@ -8039,33 +8039,32 @@
 n if it is older
-%0D
 %0A%09%09if(!$tw.utils
@@ -8127,33 +8127,32 @@
 elds.version)) %7B
-%0D
 %0A%09%09%09return false
@@ -8144,42 +8144,39 @@
 %09%09%09return false;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09// Fall throug
@@ -8190,33 +8190,32 @@
 ding the tiddler
-%0D
 %0A%09this.addTiddle
@@ -8225,42 +8225,39 @@
 iddler);
-%0D
 %0A%09return true;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn 
@@ -8316,37 +8316,35 @@
 ddler is created
-%0D
 %0A*/
-%0D
 %0Aexports.getCrea
@@ -8360,33 +8360,32 @@
 s = function() %7B
-%0D
 %0A%09if(this.getTid
@@ -8439,33 +8439,32 @@
 e() !== %22yes%22) %7B
-%0D
 %0A%09%09var fields = 
@@ -8456,33 +8456,32 @@
 %09%09var fields = %7B
-%0D
 %0A%09%09%09%09created: ne
@@ -8480,40 +8480,38 @@
 ated: new Date()
-%0D
 %0A%09%09%09%7D,
-%0D
 %0A%09%09%09creator = th
@@ -8545,34 +8545,32 @@
 _TITLE);
-%0D
 %0A%09%09if(creator) %7B
-%0D
 %0A%09%09%09fiel
@@ -8582,38 +8582,36 @@
 eator = creator;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09return fields
@@ -8611,56 +8611,51 @@
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
@@ -8715,37 +8715,35 @@
 dler is modified
-%0D
 %0A*/
-%0D
 %0Aexports.getModi
@@ -8763,33 +8763,32 @@
 s = function() %7B
-%0D
 %0A%09if(this.getTid
@@ -8842,33 +8842,32 @@
 e() !== %22yes%22) %7B
-%0D
 %0A%09%09var fields = 
@@ -8878,33 +8878,32 @@
 ct.create(null),
-%0D
 %0A%09%09%09modifier = t
@@ -8930,33 +8930,32 @@
 SER_NAME_TITLE);
-%0D
 %0A%09%09fields.modifi
@@ -8962,33 +8962,32 @@
 ed = new Date();
-%0D
 %0A%09%09if(modifier) 
@@ -8979,33 +8979,32 @@
 %09%09if(modifier) %7B
-%0D
 %0A%09%09%09fields.modif
@@ -9010,38 +9010,36 @@
 fier = modifier;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09return fields
@@ -9039,56 +9039,51 @@
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
@@ -9125,33 +9125,32 @@
 Options include:
-%0D
 %0AsortField: fiel
@@ -9153,33 +9153,32 @@
 field to sort by
-%0D
 %0AexcludeTag: tag
@@ -9180,33 +9180,32 @@
 : tag to exclude
-%0D
 %0AincludeSystem: 
@@ -9250,37 +9250,35 @@
 faults to false)
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -9295,33 +9295,32 @@
 ction(options) %7B
-%0D
 %0A%09options = opti
@@ -9338,33 +9338,32 @@
 ct.create(null);
-%0D
 %0A%09var self = thi
@@ -9356,33 +9356,32 @@
 var self = this,
-%0D
 %0A%09%09sortField = o
@@ -9400,33 +9400,32 @@
 ield %7C%7C %22title%22,
-%0D
 %0A%09%09tiddlers = %5B%5D
@@ -9433,33 +9433,32 @@
  t, titles = %5B%5D;
-%0D
 %0A%09this.each(func
@@ -9470,33 +9470,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09if(options.in
@@ -9532,33 +9532,32 @@
 iddler(title)) %7B
-%0D
 %0A%09%09%09if(!options.
@@ -9600,33 +9600,32 @@
 s.excludeTag)) %7B
-%0D
 %0A%09%09%09%09tiddlers.pu
@@ -9636,34 +9636,30 @@
 iddler);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09tiddle
@@ -9673,33 +9673,32 @@
 (function(a,b) %7B
-%0D
 %0A%09%09var aa = a.fi
@@ -9725,33 +9725,32 @@
 werCase() %7C%7C %22%22,
-%0D
 %0A%09%09%09bb = b.field
@@ -9782,61 +9782,57 @@
 ) %7C%7C %22%22;
-%0D
 %0A%09%09if(aa %3C bb) %7B
-%0D
 %0A%09%09%09return -1;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09if(a
@@ -9840,77 +9840,70 @@
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
@@ -9922,33 +9922,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09titles.push(t
@@ -9971,38 +9971,35 @@
 .title);
-%0D
 %0A%09%7D
-%0D
 %0A%09return titles;
-%0D
 %0A%7D;%0D%0A%0D%0Ae
@@ -10035,33 +10035,32 @@
 on(excludeTag) %7B
-%0D
 %0A%09var tiddlers =
@@ -10095,33 +10095,32 @@
 g: excludeTag%7D);
-%0D
 %0A%09return $tw.uti
@@ -10130,43 +10130,41 @@
 count(tiddlers);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturns a funct
@@ -10275,37 +10275,35 @@
 k(tiddler,title)
-%0D
 %0A*/
-%0D
 %0Aexports.makeTid
@@ -10327,33 +10327,32 @@
 nction(titles) %7B
-%0D
 %0A%09var self = thi
@@ -10345,33 +10345,32 @@
 var self = this;
-%0D
 %0A%09if(!$tw.utils.
@@ -10379,33 +10379,32 @@
 Array(titles)) %7B
-%0D
 %0A%09%09titles = Obje
@@ -10411,44 +10411,42 @@
 ct.keys(titles);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09titles = titl
@@ -10449,37 +10449,35 @@
 titles.slice(0);
-%0D
 %0A%09%7D
-%0D
 %0A%09return functio
@@ -10481,33 +10481,32 @@
 tion(callback) %7B
-%0D
 %0A%09%09titles.forEac
@@ -10516,33 +10516,32 @@
 unction(title) %7B
-%0D
 %0A%09%09%09callback(sel
@@ -10567,39 +10567,35 @@
 ,title);
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ASort an
@@ -10631,33 +10631,32 @@
  specified field
-%0D
 %0A%09titles: array 
@@ -10674,33 +10674,32 @@
 sorted in place)
-%0D
 %0A%09sortField: nam
@@ -10711,33 +10711,32 @@
 field to sort by
-%0D
 %0A%09isDescending: 
@@ -10764,33 +10764,32 @@
 ld be descending
-%0D
 %0A%09isCaseSensitiv
@@ -10860,37 +10860,35 @@
  to be different
-%0D
 %0A*/
-%0D
 %0Aexports.sortTid
@@ -10969,33 +10969,32 @@
 sAlphaNumeric) %7B
-%0D
 %0A%09var self = thi
@@ -10987,33 +10987,32 @@
 var self = this;
-%0D
 %0A%09titles.sort(fu
@@ -11024,29 +11024,27 @@
 n(a,b) %7B
-%0D
 %0A%09%09var x,y,
-%0D
 %0A%09%09%09comp
@@ -11063,33 +11063,32 @@
  function(x,y) %7B
-%0D
 %0A%09%09%09%09var result 
@@ -11081,33 +11081,32 @@
 %09%09%09var result = 
-%0D
 %0A%09%09%09%09%09isNaN(x) &
@@ -11136,33 +11136,32 @@
 ding ? -1 : 1) :
-%0D
 %0A%09%09%09%09%09!isNaN(x) 
@@ -11191,33 +11191,32 @@
 ding ? 1 : -1) :
-%0D
 %0A%09%09%09%09%09%09%09%09%09%09%09(isD
@@ -11235,33 +11235,32 @@
 y - x :  x - y);
-%0D
 %0A%09%09%09%09return resu
@@ -11254,40 +11254,38 @@
 %09%09return result;
-%0D
 %0A%09%09%09%7D;
-%0D
 %0A%09%09if(sortField 
@@ -11290,33 +11290,32 @@
 d !== %22title%22) %7B
-%0D
 %0A%09%09%09var tiddlerA
@@ -11328,33 +11328,32 @@
 f.getTiddler(a),
-%0D
 %0A%09%09%09%09tiddlerB = 
@@ -11363,33 +11363,32 @@
 f.getTiddler(b);
-%0D
 %0A%09%09%09if(tiddlerA)
@@ -11381,33 +11381,32 @@
 %09%09if(tiddlerA) %7B
-%0D
 %0A%09%09%09%09a = tiddler
@@ -11431,49 +11431,45 @@
 %5D %7C%7C %22%22;
-%0D
 %0A%09%09%09%7D else %7B
-%0D
 %0A%09%09%09%09a = %22%22;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09if(t
@@ -11470,33 +11470,32 @@
 %09%09if(tiddlerB) %7B
-%0D
 %0A%09%09%09%09b = tiddler
@@ -11520,54 +11520,49 @@
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
@@ -11562,33 +11562,32 @@
 %09%09x = Number(a);
-%0D
 %0A%09%09y = Number(b)
@@ -11579,33 +11579,32 @@
 %09%09y = Number(b);
-%0D
 %0A%09%09if(isNumeric 
@@ -11625,33 +11625,32 @@
 %7C%7C !isNaN(y))) %7B
-%0D
 %0A%09%09%09return compa
@@ -11656,33 +11656,32 @@
 areNumbers(x,y);
-%0D
 %0A%09%09%7D else if(isA
@@ -11686,33 +11686,32 @@
 sAlphaNumeric) %7B
-%0D
 %0A%09%09%09return isDes
@@ -11844,33 +11844,32 @@
 ivity: %22base%22%7D);
-%0D
 %0A%09%09%7D else if($tw
@@ -11902,33 +11902,32 @@
 ils.isDate(b)) %7B
-%0D
 %0A%09%09%09return isDes
@@ -11942,45 +11942,43 @@
 ? b - a : a - b;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09a = String(a
@@ -11971,33 +11971,32 @@
 %09%09a = String(a);
-%0D
 %0A%09%09%09b = String(b
@@ -11989,33 +11989,32 @@
 %09%09b = String(b);
-%0D
 %0A%09%09%09if(!isCaseSe
@@ -12015,33 +12015,32 @@
 CaseSensitive) %7B
-%0D
 %0A%09%09%09%09a = a.toLow
@@ -12040,33 +12040,32 @@
 a.toLowerCase();
-%0D
 %0A%09%09%09%09b = b.toLow
@@ -12065,39 +12065,37 @@
 b.toLowerCase();
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09return isDes
@@ -12144,38 +12144,34 @@
 pare(b);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AFor eve
@@ -12258,33 +12258,32 @@
 Options include:
-%0D
 %0AsortField: fiel
@@ -12286,33 +12286,32 @@
 field to sort by
-%0D
 %0AexcludeTag: tag
@@ -12313,33 +12313,32 @@
 : tag to exclude
-%0D
 %0AincludeSystem: 
@@ -12383,37 +12383,35 @@
 faults to false)
-%0D
 %0A*/
-%0D
 %0Aexports.forEach
@@ -12456,32 +12456,30 @@
 ck */) %7B
-%0D
 %0A%09var arg = 0,
-%0D
 %0A%09%09optio
@@ -12521,33 +12521,32 @@
 nts%5Barg++%5D : %7B%7D,
-%0D
 %0A%09%09callback = ar
@@ -12552,33 +12552,32 @@
 rguments%5Barg++%5D,
-%0D
 %0A%09%09titles = this
@@ -12598,32 +12598,30 @@
 ptions),
-%0D
 %0A%09%09t, tiddler;
-%0D
 %0A%09for(t=
@@ -12638,33 +12638,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09tiddler = thi
@@ -12686,34 +12686,32 @@
 les%5Bt%5D);
-%0D
 %0A%09%09if(tiddler) %7B
-%0D
 %0A%09%09%09call
@@ -12755,36 +12755,32 @@
 iddler);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn 
@@ -12849,37 +12849,35 @@
 pecified tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -12896,33 +12896,32 @@
 unction(title) %7B
-%0D
 %0A%09var self = thi
@@ -12914,33 +12914,32 @@
 var self = this;
-%0D
 %0A%09// We'll cache
@@ -12989,33 +12989,32 @@
  tiddler changes
-%0D
 %0A%09return this.ge
@@ -13048,33 +13048,32 @@
 ks%22,function() %7B
-%0D
 %0A%09%09// Parse the 
@@ -13071,33 +13071,32 @@
 arse the tiddler
-%0D
 %0A%09%09var parser = 
@@ -13112,33 +13112,32 @@
 eTiddler(title);
-%0D
 %0A%09%09// Count up t
@@ -13136,33 +13136,32 @@
 unt up the links
-%0D
 %0A%09%09var links = %5B
@@ -13154,33 +13154,32 @@
 %09var links = %5B%5D,
-%0D
 %0A%09%09%09checkParseTr
@@ -13196,33 +13196,32 @@
 ion(parseTree) %7B
-%0D
 %0A%09%09%09%09for(var t=0
@@ -13240,33 +13240,32 @@
 e.length; t++) %7B
-%0D
 %0A%09%09%09%09%09var parseT
@@ -13279,33 +13279,32 @@
  = parseTree%5Bt%5D;
-%0D
 %0A%09%09%09%09%09if(parseTr
@@ -13400,33 +13400,32 @@
  === %22string%22) %7B
-%0D
 %0A%09%09%09%09%09%09var value
@@ -13453,33 +13453,32 @@
 ibutes.to.value;
-%0D
 %0A%09%09%09%09%09%09if(links.
@@ -13493,33 +13493,32 @@
 value) === -1) %7B
-%0D
 %0A%09%09%09%09%09%09%09links.pu
@@ -13527,34 +13527,31 @@
 (value);
-%0D
 %0A%09%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%09if
@@ -13568,33 +13568,32 @@
 Node.children) %7B
-%0D
 %0A%09%09%09%09%09%09checkPars
@@ -13622,55 +13622,50 @@
 ildren);
-%0D
 %0A%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%7D;
-%0D
 %0A%09%09if(parser) %7B
-%0D
 %0A%09%09%09chec
@@ -13688,55 +13688,50 @@
 r.tree);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09return links;
-%0D
 %0A%09%7D);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn 
@@ -13783,37 +13783,35 @@
 pecified tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -13840,33 +13840,32 @@
 n(targetTitle) %7B
-%0D
 %0A%09var self = thi
@@ -13858,33 +13858,32 @@
 var self = this,
-%0D
 %0A%09%09backlinks = %5B
@@ -13876,33 +13876,32 @@
 %09backlinks = %5B%5D;
-%0D
 %0A%09this.forEachTi
@@ -13923,33 +13923,32 @@
 title,tiddler) %7B
-%0D
 %0A%09%09var links = s
@@ -13966,33 +13966,32 @@
 lerLinks(title);
-%0D
 %0A%09%09if(links.inde
@@ -14008,33 +14008,32 @@
 Title) !== -1) %7B
-%0D
 %0A%09%09%09backlinks.pu
@@ -14034,44 +14034,41 @@
 nks.push(title);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09return backlin
@@ -14062,43 +14062,41 @@
 eturn backlinks;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn a hashma
@@ -14211,37 +14211,35 @@
 er is referenced
-%0D
 %0A*/
-%0D
 %0Aexports.getMiss
@@ -14254,33 +14254,32 @@
 s = function() %7B
-%0D
 %0A%09var self = thi
@@ -14280,34 +14280,32 @@
  = this,
-%0D
 %0A%09%09missing = %5B%5D;
-%0D
 %0A// We s
@@ -14391,33 +14391,32 @@
 dler is modified
-%0D
 %0A%09this.forEachTi
@@ -14438,33 +14438,32 @@
 title,tiddler) %7B
-%0D
 %0A%09%09var links = s
@@ -14481,33 +14481,32 @@
 lerLinks(title);
-%0D
 %0A%09%09$tw.utils.eac
@@ -14521,33 +14521,32 @@
 function(link) %7B
-%0D
 %0A%09%09%09if((!self.ti
@@ -14621,33 +14621,32 @@
 (link) === -1) %7B
-%0D
 %0A%09%09%09%09missing.pus
@@ -14653,36 +14653,32 @@
 h(link);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D);
-%0D
 %0A%09return
@@ -14678,33 +14678,32 @@
 %09return missing;
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -14723,33 +14723,32 @@
 s = function() %7B
-%0D
 %0A%09var self = thi
@@ -14741,33 +14741,32 @@
 var self = this,
-%0D
 %0A%09%09orphans = thi
@@ -14773,33 +14773,32 @@
 s.getTiddlers();
-%0D
 %0A%09this.forEachTi
@@ -14820,33 +14820,32 @@
 title,tiddler) %7B
-%0D
 %0A%09%09var links = s
@@ -14863,33 +14863,32 @@
 lerLinks(title);
-%0D
 %0A%09%09$tw.utils.eac
@@ -14903,33 +14903,32 @@
 function(link) %7B
-%0D
 %0A%09%09%09var p = orph
@@ -14937,33 +14937,32 @@
 s.indexOf(link);
-%0D
 %0A%09%09%09if(p !== -1)
@@ -14955,33 +14955,32 @@
 %09%09if(p !== -1) %7B
-%0D
 %0A%09%09%09%09orphans.spl
@@ -14988,36 +14988,32 @@
 ce(p,1);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D);
-%0D
 %0A%09return
@@ -15021,43 +15021,41 @@
 orphans; // Todo
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ARetrieves a lis
@@ -15102,37 +15102,35 @@
 with a given tag
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -15150,33 +15150,32 @@
  function(tag) %7B
-%0D
 %0A%09// Try to use 
@@ -15177,33 +15177,32 @@
  use the indexer
-%0D
 %0A%09var self = thi
@@ -15195,33 +15195,32 @@
 var self = this,
-%0D
 %0A%09%09tagIndexer = 
@@ -15241,33 +15241,32 @@
 r(%22TagIndexer%22),
-%0D
 %0A%09%09results = tag
@@ -15314,34 +15314,32 @@
 up(tag);
-%0D
 %0A%09if(!results) %7B
-%0D
 %0A%09%09// If
@@ -15367,33 +15367,32 @@
 rm a manual scan
-%0D
 %0A%09%09results = thi
@@ -15429,33 +15429,32 @@
 tag,function() %7B
-%0D
 %0A%09%09%09var tagmap =
@@ -15463,33 +15463,32 @@
 elf.getTagMap();
-%0D
 %0A%09%09%09return self.
@@ -15507,44 +15507,41 @@
 agmap%5Btag%5D,tag);
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D
-%0D
 %0A%09return results
@@ -15533,43 +15533,41 @@
 %09return results;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AGet a hashmap b
@@ -15591,37 +15591,35 @@
 f tiddler titles
-%0D
 %0A*/
-%0D
 %0Aexports.getTagM
@@ -15627,33 +15627,32 @@
 p = function() %7B
-%0D
 %0A%09var self = thi
@@ -15645,33 +15645,32 @@
 var self = this;
-%0D
 %0A%09return this.ge
@@ -15695,33 +15695,32 @@
 ap%22,function() %7B
-%0D
 %0A%09%09var tags = Ob
@@ -15729,33 +15729,32 @@
 ct.create(null),
-%0D
 %0A%09%09%09storeTags = 
@@ -15771,33 +15771,32 @@
 agArray,title) %7B
-%0D
 %0A%09%09%09%09if(tagArray
@@ -15790,33 +15790,32 @@
 %09%09if(tagArray) %7B
-%0D
 %0A%09%09%09%09%09for(var in
@@ -15846,33 +15846,32 @@
 ngth; index++) %7B
-%0D
 %0A%09%09%09%09%09%09var tag =
@@ -15879,33 +15879,32 @@
 tagArray%5Bindex%5D;
-%0D
 %0A%09%09%09%09%09%09if($tw.ut
@@ -15915,33 +15915,32 @@
 hop(tags,tag)) %7B
-%0D
 %0A%09%09%09%09%09%09%09tags%5Btag
@@ -15953,33 +15953,31 @@
 (title);
-%0D
 %0A%09%09%09%09%09%09%7D else %7B
-%0D
 %0A%09%09%09%09%09%09%09
@@ -15996,48 +15996,43 @@
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
@@ -16034,33 +16034,32 @@
 %09title, tiddler;
-%0D
 %0A%09%09// Collect up
@@ -16063,33 +16063,32 @@
  up all the tags
-%0D
 %0A%09%09self.eachShad
@@ -16107,33 +16107,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09%09if(!self.tid
@@ -16143,33 +16143,32 @@
 Exists(title)) %7B
-%0D
 %0A%09%09%09%09tiddler = s
@@ -16181,33 +16181,32 @@
 tTiddler(title);
-%0D
 %0A%09%09%09%09storeTags(t
@@ -16223,46 +16223,43 @@
 lds.tags,title);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09self.each(fun
@@ -16272,33 +16272,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09%09storeTags(ti
@@ -16321,56 +16321,51 @@
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
@@ -16453,37 +16453,35 @@
 ified list field
-%0D
 %0A*/
-%0D
 %0Aexports.findLis
@@ -16522,33 +16522,32 @@
 tle,fieldName) %7B
-%0D
 %0A%09fieldName = fi
@@ -16556,33 +16556,32 @@
 dName %7C%7C %22list%22;
-%0D
 %0A%09var titles = %5B
@@ -16574,33 +16574,32 @@
 var titles = %5B%5D;
-%0D
 %0A%09this.each(func
@@ -16611,33 +16611,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09var list = $t
@@ -16679,33 +16679,32 @@
 lds%5BfieldName%5D);
-%0D
 %0A%09%09if(list && li
@@ -16728,33 +16728,32 @@
 Title) !== -1) %7B
-%0D
 %0A%09%09%09titles.push(
@@ -16759,55 +16759,50 @@
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
@@ -16847,37 +16847,35 @@
  an ordered list
-%0D
 %0A*/
-%0D
 %0Aexports.sortByL
@@ -16899,33 +16899,32 @@
 ray,listTitle) %7B
-%0D
 %0A%09var self = thi
@@ -16917,33 +16917,32 @@
 var self = this,
-%0D
 %0A%09%09replacedTitle
@@ -16957,33 +16957,32 @@
 ct.create(null);
-%0D
 %0A%09function repla
@@ -16988,33 +16988,32 @@
 aceItem(title) %7B
-%0D
 %0A%09%09if(!$tw.utils
@@ -17034,33 +17034,32 @@
 itles, title)) %7B
-%0D
 %0A%09%09%09replacedTitl
@@ -17067,33 +17067,32 @@
 s%5Btitle%5D = true;
-%0D
 %0A%09%09%09var newPos =
@@ -17087,33 +17087,32 @@
 var newPos = -1,
-%0D
 %0A%09%09%09%09tiddler = s
@@ -17125,33 +17125,32 @@
 tTiddler(title);
-%0D
 %0A%09%09%09if(tiddler) 
@@ -17142,33 +17142,32 @@
 %09%09%09if(tiddler) %7B
-%0D
 %0A%09%09%09%09var beforeT
@@ -17195,33 +17195,32 @@
 %5B%22list-before%22%5D,
-%0D
 %0A%09%09%09%09%09afterTitle
@@ -17243,33 +17243,32 @@
 s%5B%22list-after%22%5D;
-%0D
 %0A%09%09%09%09if(beforeTi
@@ -17272,33 +17272,32 @@
 eTitle === %22%22) %7B
-%0D
 %0A%09%09%09%09%09newPos = 0
@@ -17289,33 +17289,32 @@
 %09%09%09%09%09newPos = 0;
-%0D
 %0A%09%09%09%09%7D else if(a
@@ -17324,33 +17324,32 @@
 rTitle === %22%22) %7B
-%0D
 %0A%09%09%09%09%09newPos = t
@@ -17353,33 +17353,32 @@
 = titles.length;
-%0D
 %0A%09%09%09%09%7D else if(b
@@ -17382,33 +17382,32 @@
 f(beforeTitle) %7B
-%0D
 %0A%09%09%09%09%09replaceIte
@@ -17413,33 +17413,32 @@
 em(beforeTitle);
-%0D
 %0A%09%09%09%09%09newPos = t
@@ -17456,33 +17456,32 @@
 Of(beforeTitle);
-%0D
 %0A%09%09%09%09%7D else if(a
@@ -17484,33 +17484,32 @@
 if(afterTitle) %7B
-%0D
 %0A%09%09%09%09%09replaceIte
@@ -17514,33 +17514,32 @@
 tem(afterTitle);
-%0D
 %0A%09%09%09%09%09newPos = t
@@ -17556,33 +17556,32 @@
 xOf(afterTitle);
-%0D
 %0A%09%09%09%09%09if(newPos 
@@ -17587,49 +17587,45 @@
  %3E= 0) %7B
-%0D
 %0A%09%09%09%09%09%09++newPos;
-%0D
 %0A%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%09// 
@@ -17733,33 +17733,32 @@
  title's currPos
-%0D
 %0A%09%09%09%09var currPos
@@ -17774,33 +17774,32 @@
 .indexOf(title);
-%0D
 %0A%09%09%09%09if(newPos =
@@ -17798,33 +17798,32 @@
 newPos === -1) %7B
-%0D
 %0A%09%09%09%09%09newPos = c
@@ -17821,40 +17821,38 @@
 ewPos = currPos;
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%09if(currPos 
@@ -17872,33 +17872,32 @@
 s !== currPos) %7B
-%0D
 %0A%09%09%09%09%09titles.spl
@@ -17903,33 +17903,32 @@
 lice(currPos,1);
-%0D
 %0A%09%09%09%09%09if(newPos 
@@ -17940,42 +17940,39 @@
 rrPos) %7B
-%0D
 %0A%09%09%09%09%09%09newPos--;
-%0D
 %0A%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%09ti
@@ -17999,39 +17999,34 @@
 ,title);
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
@@ -18053,33 +18053,32 @@
 List(listTitle);
-%0D
 %0A%09if(!array %7C%7C a
@@ -18097,42 +18097,39 @@
 === 0) %7B
-%0D
 %0A%09%09return %5B%5D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09var t
@@ -18141,33 +18141,32 @@
  = %5B%5D, t, title;
-%0D
 %0A%09%09// First plac
@@ -18199,33 +18199,32 @@
 sent in the list
-%0D
 %0A%09%09for(t=0; t%3Cli
@@ -18232,33 +18232,32 @@
 t.length; t++) %7B
-%0D
 %0A%09%09%09title = list
@@ -18252,33 +18252,32 @@
 title = list%5Bt%5D;
-%0D
 %0A%09%09%09if(array.ind
@@ -18289,33 +18289,32 @@
 title) !== -1) %7B
-%0D
 %0A%09%09%09%09titles.push
@@ -18313,44 +18313,41 @@
 les.push(title);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09// Then place
@@ -18360,33 +18360,32 @@
 emaining entries
-%0D
 %0A%09%09for(t=0; t%3Car
@@ -18394,33 +18394,32 @@
 y.length; t++) %7B
-%0D
 %0A%09%09%09title = arra
@@ -18415,33 +18415,32 @@
 itle = array%5Bt%5D;
-%0D
 %0A%09%09%09if(list.inde
@@ -18451,33 +18451,32 @@
 title) === -1) %7B
-%0D
 %0A%09%09%09%09titles.push
@@ -18475,44 +18475,41 @@
 les.push(title);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09// Finally ob
@@ -18564,33 +18564,32 @@
  tiddler in turn
-%0D
 %0A%09%09var sortedTit
@@ -18602,33 +18602,32 @@
 titles.slice(0);
-%0D
 %0A%09%09for(t=0; t%3Cso
@@ -18643,33 +18643,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09%09title = sort
@@ -18671,33 +18671,32 @@
 sortedTitles%5Bt%5D;
-%0D
 %0A%09%09%09replaceItem(
@@ -18694,38 +18694,36 @@
 laceItem(title);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09return titles
@@ -18715,37 +18715,35 @@
 %09%09return titles;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -18782,33 +18782,32 @@
 bTiddlerTitle) %7B
-%0D
 %0A%09var bundleInfo
@@ -18863,33 +18863,32 @@
 taCached(title);
-%0D
 %0A%09if(bundleInfo 
@@ -18904,33 +18904,32 @@
 Info.tiddlers) %7B
-%0D
 %0A%09%09var subTiddle
@@ -18961,33 +18961,32 @@
 ubTiddlerTitle%5D;
-%0D
 %0A%09%09if(subTiddler
@@ -18980,33 +18980,32 @@
 if(subTiddler) %7B
-%0D
 %0A%09%09%09return new $
@@ -19027,51 +19027,46 @@
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
@@ -19099,37 +19099,35 @@
 ng of the fields
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -19147,33 +19147,32 @@
 unction(title) %7B
-%0D
 %0A%09var tiddler = 
@@ -19194,33 +19194,31 @@
 (title);
-%0D
 %0A%09if(tiddler) %7B
-%0D
 %0A%09%09var f
@@ -19237,33 +19237,32 @@
 ct.create(null);
-%0D
 %0A%09%09$tw.utils.eac
@@ -19292,33 +19292,32 @@
 on(value,name) %7B
-%0D
 %0A%09%09%09fields%5Bname%5D
@@ -19340,40 +19340,38 @@
 eldString(name);
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09return JSON.s
@@ -19379,44 +19379,42 @@
 ringify(fields);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return JSON.s
@@ -19430,37 +19430,35 @@
 %7Btitle: title%7D);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -19486,33 +19486,32 @@
 nction(filter) %7B
-%0D
 %0A%09var tiddlers =
@@ -19539,31 +19539,29 @@
 filter),
-%0D
 %0A%09%09data = %5B%5D;
-%0D
 %0A%09for(va
@@ -19583,33 +19583,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09var tiddler =
@@ -19637,34 +19637,32 @@
 ers%5Bt%5D);
-%0D
 %0A%09%09if(tiddler) %7B
-%0D
 %0A%09%09%09var 
@@ -19675,33 +19675,32 @@
  = new Object();
-%0D
 %0A%09%09%09for(var fiel
@@ -19713,33 +19713,32 @@
 iddler.fields) %7B
-%0D
 %0A%09%09%09%09fields%5Bfiel
@@ -19764,39 +19764,37 @@
 ldString(field);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09data.push(fi
@@ -19791,42 +19791,39 @@
 ta.push(fields);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09return JSON.st
@@ -19867,43 +19867,41 @@
 ces.jsonSpaces);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AGet the content
@@ -20045,33 +20045,32 @@
 d into an object
-%0D
 %0Aapplication/x-t
@@ -20236,33 +20236,32 @@
 a tiddler object
-%0D
 %0AdefaultData: de
@@ -20514,37 +20514,35 @@
 e to all callers
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -20587,33 +20587,32 @@
 r,defaultData) %7B
-%0D
 %0A%09var self = thi
@@ -20605,33 +20605,32 @@
 var self = this,
-%0D
 %0A%09%09tiddler = tit
@@ -20633,33 +20633,32 @@
  titleOrTiddler;
-%0D
 %0A%09if(!(tiddler i
@@ -20674,33 +20674,32 @@
  $tw.Tiddler)) %7B
-%0D
 %0A%09%09tiddler = thi
@@ -20721,37 +20721,34 @@
 ddler);%09
-%0D
 %0A%09%7D
-%0D
 %0A%09if(tiddler) %7B
-%0D
 %0A%09%09retur
@@ -20805,33 +20805,32 @@
 ta%22,function() %7B
-%0D
 %0A%09%09%09// Return th
@@ -20835,33 +20835,32 @@
 the frozen value
-%0D
 %0A%09%09%09var value = 
@@ -20903,33 +20903,32 @@
 itle,undefined);
-%0D
 %0A%09%09%09$tw.utils.de
@@ -20935,33 +20935,32 @@
 epFreeze(value);
-%0D
 %0A%09%09%09return value
@@ -20952,33 +20952,32 @@
 %09%09%09return value;
-%0D
 %0A%09%09%7D) %7C%7C default
@@ -20973,44 +20973,42 @@
  %7C%7C defaultData;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return defaul
@@ -21005,47 +21005,44 @@
 urn defaultData;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AAlternative, un
@@ -21124,37 +21124,35 @@
 reely and reused
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -21191,33 +21191,32 @@
 r,defaultData) %7B
-%0D
 %0A%09var tiddler = 
@@ -21230,26 +21230,24 @@
 Tiddler,
-%0D
 %0A%09%09data;
-%0D
 %0A%09if(!(t
@@ -21271,33 +21271,32 @@
  $tw.Tiddler)) %7B
-%0D
 %0A%09%09tiddler = thi
@@ -21310,37 +21310,35 @@
 ddler(tiddler);%09
-%0D
 %0A%09%7D
-%0D
 %0A%09if(tiddler && 
@@ -21351,33 +21351,32 @@
 r.fields.text) %7B
-%0D
 %0A%09%09switch(tiddle
@@ -21383,33 +21383,32 @@
 r.fields.type) %7B
-%0D
 %0A%09%09%09case %22applic
@@ -21411,33 +21411,32 @@
 plication/json%22:
-%0D
 %0A%09%09%09%09// JSON tid
@@ -21439,74 +21439,214 @@
  tiddler
-%0D%0A%09%09%09%09try %7B%0D%0A%09%09%09%09%09data = JSON.parse(tiddler.fields.text);%0D
+%0A                try %7B%0A%09%09%09%09%09if($tw.utils.jsonIsValid(tiddler))%7B%0A%09%09%09%09%09%09data = JSON.parse(tiddler.fields.text);%0A%09%09%09%09%09%7D%0A%09%09%09%09%09else %7Bthrow %22Invalid application/json tiddler text: %22+tiddler.fields.title;%7D
 %0A%09%09%09%09%7D c
@@ -21647,33 +21647,32 @@
 %09%09%09%7D catch(ex) %7B
-%0D
 %0A%09%09%09%09%09return def
@@ -21672,40 +21672,38 @@
 urn defaultData;
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%09return data
@@ -21695,33 +21695,32 @@
 %09%09%09%09return data;
-%0D
 %0A%09%09%09case %22applic
@@ -21739,33 +21739,32 @@
 ler-dictionary%22:
-%0D
 %0A%09%09%09%09return $tw.
@@ -21794,42 +21794,39 @@
 er.fields.text);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09return default
@@ -21822,43 +21822,41 @@
 urn defaultData;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AExtract an inde
@@ -21883,37 +21883,35 @@
 n a data tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.extract
@@ -21964,33 +21964,32 @@
 x,defaultText) %7B
-%0D
 %0A%09var data = thi
@@ -22047,28 +22047,33 @@
 (null)),
-%0D
 %0A%09%09text;
-%0D%0A%09
+%0A        
 if(data 
@@ -22085,62 +22085,91 @@
 w.utils.
-hop
+jsonHas
 (data,index)) %7B
-%0D%0A%09%09text = 
+%0A            text = $tw.utils.jsonGet(
 data
-%5B
+,
 index
-%5D;%0D
+);
 %0A%09%7D
-%0D
 %0A%09if(typ
@@ -22212,33 +22212,32 @@
  === %22number%22) %7B
-%0D
 %0A%09%09return text.t
@@ -22238,44 +22238,42 @@
 text.toString();
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return defaul
@@ -22270,47 +22270,44 @@
 urn defaultText;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ASet a tiddlers 
@@ -22455,33 +22455,32 @@
 ext of the data.
-%0D
 %0Atitle: title of
@@ -22479,33 +22479,32 @@
 title of tiddler
-%0D
 %0Adata: object th
@@ -22523,33 +22523,32 @@
 rialised to JSON
-%0D
 %0Afields: optiona
@@ -22587,37 +22587,35 @@
 fields to be set
-%0D
 %0A*/
-%0D
 %0Aexports.setTidd
@@ -22645,33 +22645,32 @@
 e,data,fields) %7B
-%0D
 %0A%09var existingTi
@@ -22700,56 +22700,52 @@
 (title),
-%0D
 %0A%09%09newFields = %7B
-%0D
 %0A%09%09%09title: title
-%0D
 %0A%09%7D;
-%0D
 %0A%09if(exi
@@ -22821,33 +22821,32 @@
 r-dictionary%22) %7B
-%0D
 %0A%09%09newFields.tex
@@ -22879,44 +22879,42 @@
 ictionary(data);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09newFields.typ
@@ -22928,33 +22928,32 @@
 plication/json%22;
-%0D
 %0A%09%09newFields.tex
@@ -23008,37 +23008,35 @@
 ces.jsonSpaces);
-%0D
 %0A%09%7D
-%0D
 %0A%09this.addTiddle
@@ -23134,43 +23134,41 @@
 ationFields()));
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn the cont
@@ -23208,37 +23208,35 @@
 aining each line
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -23274,31 +23274,29 @@
 index) %7B
-%0D
 %0A%09if(index) %7B
-%0D
 %0A%09%09retur
@@ -23361,37 +23361,35 @@
 itle,index,%22%22));
-%0D
 %0A%09%7D
-%0D
 %0A%09field = field 
@@ -23390,33 +23390,32 @@
 field %7C%7C %22list%22;
-%0D
 %0A%09var tiddler = 
@@ -23437,33 +23437,31 @@
 (title);
-%0D
 %0A%09if(tiddler) %7B
-%0D
 %0A%09%09retur
@@ -23529,34 +23529,31 @@
 lice(0);
-%0D
 %0A%09%7D
-%0D
 %0A%09return %5B%5D;
-%0D
 %0A%7D;%0D%0A%0D%0A/
@@ -23647,33 +23647,32 @@
 er change occurs
-%0D
 %0Aexports.getGlob
@@ -23706,33 +23706,32 @@
 e,initializer) %7B
-%0D
 %0A%09this.globalCac
@@ -23767,33 +23767,32 @@
 ct.create(null);
-%0D
 %0A%09if($tw.utils.h
@@ -23816,33 +23816,32 @@
 he,cacheName)) %7B
-%0D
 %0A%09%09return this.g
@@ -23854,44 +23854,42 @@
 ache%5BcacheName%5D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09this.globalCa
@@ -23911,33 +23911,32 @@
 = initializer();
-%0D
 %0A%09%09return this.g
@@ -23949,37 +23949,35 @@
 ache%5BcacheName%5D;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.c
@@ -23998,33 +23998,32 @@
 e = function() %7B
-%0D
 %0A%09this.globalCac
@@ -24039,33 +24039,32 @@
 ct.create(null);
-%0D
 %0A%7D;%0D%0A%0D%0A// Return
@@ -24174,33 +24174,32 @@
 ked to create it
-%0D
 %0Aexports.getCach
@@ -24243,33 +24243,32 @@
 e,initializer) %7B
-%0D
 %0A%09this.caches = 
@@ -24294,33 +24294,32 @@
 ct.create(null);
-%0D
 %0A%09var caches = t
@@ -24328,33 +24328,32 @@
 s.caches%5Btitle%5D;
-%0D
 %0A%09if(caches && c
@@ -24363,33 +24363,32 @@
 es%5BcacheName%5D) %7B
-%0D
 %0A%09%09return caches
@@ -24399,45 +24399,42 @@
 heName%5D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09if(!caches) %7B
-%0D
 %0A%09%09%09cach
@@ -24450,33 +24450,32 @@
 ct.create(null);
-%0D
 %0A%09%09%09this.caches%5B
@@ -24482,38 +24482,36 @@
 title%5D = caches;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09caches%5BcacheN
@@ -24523,33 +24523,32 @@
 = initializer();
-%0D
 %0A%09%09return caches
@@ -24551,37 +24551,35 @@
 ches%5BcacheName%5D;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A// Clear 
@@ -24686,33 +24686,32 @@
 all the tiddlers
-%0D
 %0Aexports.clearCa
@@ -24733,31 +24733,29 @@
 title) %7B
-%0D
 %0A%09if(title) %7B
-%0D
 %0A%09%09this.
@@ -24790,33 +24790,32 @@
 ct.create(null);
-%0D
 %0A%09%09if($tw.utils.
@@ -24831,33 +24831,32 @@
 caches,title)) %7B
-%0D
 %0A%09%09%09delete this.
@@ -24869,33 +24869,30 @@
 %5Btitle%5D;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09this.
@@ -24912,37 +24912,35 @@
 ct.create(null);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.i
@@ -24966,33 +24966,32 @@
 on(moduleType) %7B
-%0D
 %0A%09// Install the
@@ -24997,33 +24997,32 @@
 e parser modules
-%0D
 %0A%09$tw.Wiki.parse
@@ -25021,33 +25021,32 @@
 ki.parsers = %7B%7D;
-%0D
 %0A%09var self = thi
@@ -25039,33 +25039,32 @@
 var self = this;
-%0D
 %0A%09$tw.modules.fo
@@ -25106,33 +25106,32 @@
 (title,module) %7B
-%0D
 %0A%09%09for(var f in 
@@ -25131,33 +25131,32 @@
 r f in module) %7B
-%0D
 %0A%09%09%09if($tw.utils
@@ -25164,33 +25164,32 @@
 hop(module,f)) %7B
-%0D
 %0A%09%09%09%09$tw.Wiki.pa
@@ -25235,34 +25235,30 @@
 er class
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09// Use
@@ -25318,33 +25318,32 @@
 egistered so far
-%0D
 %0A%09if($tw.Wiki.pa
@@ -25370,33 +25370,32 @@
 ctet-stream%22%5D) %7B
-%0D
 %0A%09%09Object.keys($
@@ -25437,33 +25437,32 @@
 function(type) %7B
-%0D
 %0A%09%09%09if(!$tw.util
@@ -25542,33 +25542,32 @@
  === %22base64%22) %7B
-%0D
 %0A%09%09%09%09$tw.Wiki.pa
@@ -25625,46 +25625,41 @@
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
@@ -25689,33 +25689,32 @@
 cified MIME type
-%0D
 %0A%09type: content 
@@ -25738,30 +25738,28 @@
 e parsed
-%0D
 %0A%09text: text
-%0D
 %0A%09option
@@ -25762,33 +25762,32 @@
 tions: see below
-%0D
 %0AOptions include
@@ -25779,33 +25779,32 @@
 Options include:
-%0D
 %0A%09parseAsInline:
@@ -25860,33 +25860,32 @@
 as an inline run
-%0D
 %0A%09_canonical_uri
@@ -25930,37 +25930,35 @@
  of this content
-%0D
 %0A*/
-%0D
 %0Aexports.parseTe
@@ -25983,33 +25983,32 @@
 ,text,options) %7B
-%0D
 %0A%09text = text %7C%7C
@@ -26003,33 +26003,32 @@
 xt = text %7C%7C %22%22;
-%0D
 %0A%09options = opti
@@ -26029,33 +26029,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09// Select a pa
@@ -26049,33 +26049,32 @@
  Select a parser
-%0D
 %0A%09var Parser = $
@@ -26087,33 +26087,32 @@
 i.parsers%5Btype%5D;
-%0D
 %0A%09if(!Parser && 
@@ -26142,33 +26142,32 @@
 ionInfo(type)) %7B
-%0D
 %0A%09%09Parser = $tw.
@@ -26222,37 +26222,34 @@
 ).type%5D;
-%0D
 %0A%09%7D
-%0D
 %0A%09if(!Parser) %7B
-%0D
 %0A%09%09Parse
@@ -26315,57 +26315,52 @@
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
@@ -26374,33 +26374,32 @@
  parser instance
-%0D
 %0A%09return new Par
@@ -26405,33 +26405,32 @@
 rser(type,text,%7B
-%0D
 %0A%09%09parseAsInline
@@ -26453,32 +26453,30 @@
 sInline,
-%0D
 %0A%09%09wiki: this,
-%0D
 %0A%09%09_cano
@@ -26508,33 +26508,30 @@
 ical_uri
-%0D
 %0A%09%7D);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AParse a
@@ -26557,37 +26557,35 @@
 to its MIME type
-%0D
 %0A*/
-%0D
 %0Aexports.parseTi
@@ -26609,33 +26609,32 @@
 title,options) %7B
-%0D
 %0A%09options = $tw.
@@ -26650,33 +26650,32 @@
 end(%7B%7D,options);
-%0D
 %0A%09var cacheType 
@@ -26729,33 +26729,32 @@
 blockParseTree%22,
-%0D
 %0A%09%09tiddler = thi
@@ -26773,33 +26773,31 @@
 (title),
-%0D
 %0A%09%09self = this;
-%0D
 %0A%09return
@@ -26851,33 +26851,32 @@
 ype,function() %7B
-%0D
 %0A%09%09%09if(tiddler.h
@@ -26895,33 +26895,32 @@
 nonical_uri%22)) %7B
-%0D
 %0A%09%09%09%09options._ca
@@ -26955,39 +26955,37 @@
 ._canonical_uri;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09return self.
@@ -27043,31 +27043,29 @@
 ptions);
-%0D
 %0A%09%09%7D) : null;
-%0D
 %0A%7D;%0D%0A%0D%0Ae
@@ -27121,33 +27121,32 @@
 index,options) %7B
-%0D
 %0A%09var tiddler,te
@@ -27140,33 +27140,32 @@
 ar tiddler,text;
-%0D
 %0A%09if(options.sub
@@ -27166,33 +27166,32 @@
 ns.subTiddler) %7B
-%0D
 %0A%09%09tiddler = thi
@@ -27224,44 +27224,42 @@
 ons.subTiddler);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09tiddler = thi
@@ -27270,33 +27270,32 @@
 tTiddler(title);
-%0D
 %0A%09%09if(field === 
@@ -27317,33 +27317,32 @@
 ld && !index)) %7B
-%0D
 %0A%09%09%09this.getTidd
@@ -27389,33 +27389,32 @@
 be lazily loaded
-%0D
 %0A%09%09%09return this.
@@ -27433,42 +27433,39 @@
 (title,options);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09if(field === %22
@@ -27486,33 +27486,32 @@
 ld && !index)) %7B
-%0D
 %0A%09%09if(tiddler &&
@@ -27520,33 +27520,32 @@
 iddler.fields) %7B
-%0D
 %0A%09%09%09return this.
@@ -27606,51 +27606,47 @@
 ons);%09%09%09
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09return null;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D else
@@ -27649,33 +27649,32 @@
 else if(field) %7B
-%0D
 %0A%09%09if(field === 
@@ -27675,33 +27675,32 @@
 d === %22title%22) %7B
-%0D
 %0A%09%09%09text = title
@@ -27692,45 +27692,43 @@
 %09%09%09text = title;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09if(!tiddler 
@@ -27749,33 +27749,32 @@
 sField(field)) %7B
-%0D
 %0A%09%09%09%09return null
@@ -27766,39 +27766,37 @@
 %09%09%09%09return null;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09text = tiddl
@@ -27804,38 +27804,36 @@
 r.fields%5Bfield%5D;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09return this.p
@@ -27880,33 +27880,32 @@
 ring(),options);
-%0D
 %0A%09%7D else if(inde
@@ -27900,33 +27900,32 @@
 else if(index) %7B
-%0D
 %0A%09%09this.getTiddl
@@ -27971,33 +27971,32 @@
 be lazily loaded
-%0D
 %0A%09%09text = this.e
@@ -28034,33 +28034,32 @@
 ndex,undefined);
-%0D
 %0A%09%09if(text === u
@@ -28069,39 +28069,36 @@
 fined) %7B
-%0D
 %0A%09%09%09return null;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09retur
@@ -28142,47 +28142,44 @@
 %22,text,options);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AMake a widget t
@@ -28190,33 +28190,32 @@
 for a parse tree
-%0D
 %0Aparser: parser 
@@ -28212,33 +28212,32 @@
 r: parser object
-%0D
 %0Aoptions: see be
@@ -28231,33 +28231,32 @@
 tions: see below
-%0D
 %0AOptions include
@@ -28248,33 +28248,32 @@
 Options include:
-%0D
 %0Adocument: optio
@@ -28283,33 +28283,32 @@
  document to use
-%0D
 %0Avariables: hash
@@ -28322,33 +28322,32 @@
 variables to set
-%0D
 %0AparentWidget: o
@@ -28377,37 +28377,35 @@
 or the root node
-%0D
 %0A*/
-%0D
 %0Aexports.makeWid
@@ -28428,33 +28428,32 @@
 arser,options) %7B
-%0D
 %0A%09options = opti
@@ -28454,33 +28454,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var widgetNode
@@ -28474,33 +28474,32 @@
 r widgetNode = %7B
-%0D
 %0A%09%09%09type: %22widge
@@ -28501,40 +28501,37 @@
 widget%22,
-%0D
 %0A%09%09%09children: %5B%5D
-%0D
 %0A%09%09%7D,
-%0D
 %0A%09%09currW
@@ -28545,33 +28545,32 @@
 de = widgetNode;
-%0D
 %0A%09// Create set 
@@ -28595,33 +28595,32 @@
 or each variable
-%0D
 %0A%09$tw.utils.each
@@ -28652,33 +28652,32 @@
 on(value,name) %7B
-%0D
 %0A%09%09var setVariab
@@ -28688,34 +28688,32 @@
 dget = %7B
-%0D
 %0A%09%09%09type: %22set%22,
-%0D
 %0A%09%09%09attr
@@ -28713,33 +28713,32 @@
 %09%09%09attributes: %7B
-%0D
 %0A%09%09%09%09name: %7Btype
@@ -28754,33 +28754,32 @@
 %22, value: name%7D,
-%0D
 %0A%09%09%09%09value: %7Btyp
@@ -28804,47 +28804,43 @@
 : value%7D
-%0D
 %0A%09%09%09%7D,
-%0D
 %0A%09%09%09children: %5B%5D
-%0D
 %0A%09%09%7D;
-%0D
 %0A%09%09currW
@@ -28872,33 +28872,32 @@
 VariableWidget%5D;
-%0D
 %0A%09%09currWidgetNod
@@ -28910,39 +28910,37 @@
 tVariableWidget;
-%0D
 %0A%09%7D);
-%0D
 %0A%09// Add in the 
@@ -28956,33 +28956,32 @@
 parse tree nodes
-%0D
 %0A%09currWidgetNode
@@ -29010,33 +29010,32 @@
 arser.tree : %5B%5D;
-%0D
 %0A%09// Create the 
@@ -29032,33 +29032,32 @@
 reate the widget
-%0D
 %0A%09return new wid
@@ -29079,32 +29079,30 @@
 etNode,%7B
-%0D
 %0A%09%09wiki: this,
-%0D
 %0A%09%09docum
@@ -29135,33 +29135,32 @@
 tw.fakeDocument,
-%0D
 %0A%09%09parentWidget:
@@ -29180,33 +29180,30 @@
 ntWidget
-%0D
 %0A%09%7D);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AMake a 
@@ -29222,33 +29222,32 @@
 for transclusion
-%0D
 %0Atitle: target t
@@ -29250,33 +29250,32 @@
 et tiddler title
-%0D
 %0Aoptions: as for
@@ -29290,33 +29290,32 @@
 keWidget() plus:
-%0D
 %0Aoptions.field: 
@@ -29355,33 +29355,32 @@
 aults to %22text%22)
-%0D
 %0Aoptions.mode: t
@@ -29407,33 +29407,32 @@
 line%22 or %22block%22
-%0D
 %0Aoptions.childre
@@ -29478,33 +29478,32 @@
 ransclude widget
-%0D
 %0Aoptions.importV
@@ -29568,33 +29568,32 @@
 s to be included
-%0D
 %0Aoptions.importP
@@ -29754,37 +29754,35 @@
 .importVariables
-%0D
 %0A*/
-%0D
 %0Aexports.makeTra
@@ -29814,33 +29814,32 @@
 title,options) %7B
-%0D
 %0A%09options = opti
@@ -29840,33 +29840,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var parseTreeD
@@ -29870,33 +29870,32 @@
 eDiv = %7Btree: %5B%7B
-%0D
 %0A%09%09%09type: %22eleme
@@ -29898,33 +29898,31 @@
 lement%22,
-%0D
 %0A%09%09%09tag: %22div%22,
-%0D
 %0A%09%09%09chil
@@ -29925,33 +29925,32 @@
 children: %5B%5D%7D%5D%7D,
-%0D
 %0A%09%09parseTreeImpo
@@ -29956,33 +29956,32 @@
 ortVariables = %7B
-%0D
 %0A%09%09%09type: %22impor
@@ -29984,33 +29984,32 @@
 mportvariables%22,
-%0D
 %0A%09%09%09attributes: 
@@ -30009,32 +30009,30 @@
 butes: %7B
-%0D
 %0A%09%09%09%09filter: %7B
-%0D
 %0A%09%09%09%09%09na
@@ -30036,33 +30036,32 @@
 %09name: %22filter%22,
-%0D
 %0A%09%09%09%09%09type: %22str
@@ -30064,31 +30064,28 @@
 %22string%22
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%7D,
-%0D
 %0A%09%09%09isBl
@@ -30087,33 +30087,32 @@
 %09isBlock: false,
-%0D
 %0A%09%09%09children: %5B%5D
@@ -30105,33 +30105,32 @@
 %09%09children: %5B%5D%7D,
-%0D
 %0A%09%09parseTreeTran
@@ -30131,33 +30131,32 @@
 eeTransclude = %7B
-%0D
 %0A%09%09%09type: %22trans
@@ -30154,33 +30154,32 @@
 e: %22transclude%22,
-%0D
 %0A%09%09%09attributes: 
@@ -30179,33 +30179,31 @@
 butes: %7B
-%0D
 %0A%09%09%09%09tiddler: %7B
-%0D
 %0A%09%09%09%09%09na
@@ -30208,33 +30208,32 @@
 name: %22tiddler%22,
-%0D
 %0A%09%09%09%09%09type: %22str
@@ -30229,33 +30229,32 @@
 %09type: %22string%22,
-%0D
 %0A%09%09%09%09%09value: tit
@@ -30250,33 +30250,32 @@
 %09value: title%7D%7D,
-%0D
 %0A%09%09%09isBlock: !op
@@ -30287,33 +30287,32 @@
 .parseAsInline%7D;
-%0D
 %0A%09if(options.imp
@@ -30346,33 +30346,32 @@
 ortPageMacros) %7B
-%0D
 %0A%09%09if(options.im
@@ -30378,33 +30378,32 @@
 portVariables) %7B
-%0D
 %0A%09%09%09parseTreeImp
@@ -30457,33 +30457,32 @@
 importVariables;
-%0D
 %0A%09%09%7D else if(opt
@@ -30497,33 +30497,32 @@
 ortPageMacros) %7B
-%0D
 %0A%09%09%09parseTreeImp
@@ -30636,38 +30636,36 @@
 has%5Bdraft.of%5D%5D%22;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09parseTreeDiv.
@@ -30704,33 +30704,32 @@
 mportVariables);
-%0D
 %0A%09%09parseTreeImpo
@@ -30767,44 +30767,42 @@
 TreeTransclude);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09parseTreeDiv.
@@ -30836,37 +30836,35 @@
 TreeTransclude);
-%0D
 %0A%09%7D
-%0D
 %0A%09if(options.fie
@@ -30860,33 +30860,32 @@
 options.field) %7B
-%0D
 %0A%09%09parseTreeTran
@@ -30941,37 +30941,35 @@
  options.field%7D;
-%0D
 %0A%09%7D
-%0D
 %0A%09if(options.mod
@@ -30964,33 +30964,32 @@
 (options.mode) %7B
-%0D
 %0A%09%09parseTreeTran
@@ -31043,37 +31043,35 @@
 : options.mode%7D;
-%0D
 %0A%09%7D
-%0D
 %0A%09if(options.chi
@@ -31070,33 +31070,32 @@
 ions.children) %7B
-%0D
 %0A%09%09parseTreeTran
@@ -31121,37 +31121,35 @@
 ptions.children;
-%0D
 %0A%09%7D
-%0D
 %0A%09return $tw.wik
@@ -31175,43 +31175,41 @@
 reeDiv,options);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AParse text in a
@@ -31251,33 +31251,32 @@
 o another format
-%0D
 %0A%09outputType: co
@@ -31292,33 +31292,32 @@
 e for the output
-%0D
 %0A%09textType: cont
@@ -31334,33 +31334,32 @@
 f the input text
-%0D
 %0A%09text: input te
@@ -31352,33 +31352,32 @@
 text: input text
-%0D
 %0A%09options: see b
@@ -31372,33 +31372,32 @@
 tions: see below
-%0D
 %0AOptions include
@@ -31389,33 +31389,32 @@
 Options include:
-%0D
 %0Avariables: hash
@@ -31428,33 +31428,32 @@
 variables to set
-%0D
 %0AparentWidget: o
@@ -31483,37 +31483,35 @@
 or the root node
-%0D
 %0A*/
-%0D
 %0Aexports.renderT
@@ -31552,33 +31552,32 @@
 ,text,options) %7B
-%0D
 %0A%09options = opti
@@ -31578,33 +31578,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var parser = t
@@ -31631,33 +31631,32 @@
 e,text,options),
-%0D
 %0A%09%09widgetNode = 
@@ -31679,33 +31679,32 @@
 parser,options);
-%0D
 %0A%09var container 
@@ -31735,33 +31735,32 @@
 eElement(%22div%22);
-%0D
 %0A%09widgetNode.ren
@@ -31771,33 +31771,32 @@
 container,null);
-%0D
 %0A%09return outputT
@@ -31853,43 +31853,41 @@
 ner.textContent;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AParse text from
@@ -31922,33 +31922,32 @@
 o another format
-%0D
 %0A%09outputType: co
@@ -31963,33 +31963,32 @@
 e for the output
-%0D
 %0A%09title: title o
@@ -32007,33 +32007,32 @@
 r to be rendered
-%0D
 %0A%09options: see b
@@ -32027,33 +32027,32 @@
 tions: see below
-%0D
 %0AOptions include
@@ -32044,33 +32044,32 @@
 Options include:
-%0D
 %0Avariables: hash
@@ -32083,33 +32083,32 @@
 variables to set
-%0D
 %0AparentWidget: o
@@ -32138,37 +32138,35 @@
 or the root node
-%0D
 %0A*/
-%0D
 %0Aexports.renderT
@@ -32202,33 +32202,32 @@
 title,options) %7B
-%0D
 %0A%09options = opti
@@ -32228,33 +32228,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var parser = t
@@ -32276,33 +32276,32 @@
 (title,options),
-%0D
 %0A%09%09widgetNode = 
@@ -32324,33 +32324,32 @@
 parser,options);
-%0D
 %0A%09var container 
@@ -32380,33 +32380,32 @@
 eElement(%22div%22);
-%0D
 %0A%09widgetNode.ren
@@ -32416,33 +32416,32 @@
 container,null);
-%0D
 %0A%09return outputT
@@ -32573,43 +32573,41 @@
 er.textContent);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn an array
@@ -32643,33 +32643,32 @@
  a search string
-%0D
 %0A%09text: The text
@@ -32680,33 +32680,32 @@
 ng to search for
-%0D
 %0A%09options: see b
@@ -32700,33 +32700,32 @@
 tions: see below
-%0D
 %0AOptions availab
@@ -32719,33 +32719,32 @@
 tions available:
-%0D
 %0A%09source: an ite
@@ -32851,33 +32851,32 @@
 r(tiddler,title)
-%0D
 %0A%09exclude: An ar
@@ -32915,33 +32915,32 @@
  from the search
-%0D
 %0A%09invert: If tru
@@ -32990,33 +32990,32 @@
 specified string
-%0D
 %0A%09caseSensitive:
@@ -33045,33 +33045,32 @@
 sensitive search
-%0D
 %0A%09field: If spec
@@ -33139,33 +33139,32 @@
 y of field names
-%0D
 %0A%09anchored: If t
@@ -33226,33 +33226,32 @@
 he start of text
-%0D
 %0A%09excludeField: 
@@ -33331,33 +33331,32 @@
 t to be searched
-%0D
 %0A%09The search mod
@@ -33409,33 +33409,32 @@
 flags to be true
-%0D
 %0A%09%09literal: sear
@@ -33448,33 +33448,32 @@
 r literal string
-%0D
 %0A%09%09whitespace: s
@@ -33534,33 +33534,32 @@
 s a single space
-%0D
 %0A%09%09regexp: treat
@@ -33591,33 +33591,32 @@
 gular expression
-%0D
 %0A%09%09words: (defau
@@ -33725,37 +33725,35 @@
 ency or ordering
-%0D
 %0A*/
-%0D
 %0Aexports.search 
@@ -33770,33 +33770,32 @@
 (text,options) %7B
-%0D
 %0A%09options = opti
@@ -33796,33 +33796,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var self = thi
@@ -33822,23 +33822,21 @@
  = this,
-%0D
 %0A%09%09t,
-%0D
 %0A%09%09inver
@@ -33848,33 +33848,32 @@
 !options.invert;
-%0D
 %0A%09// Convert the
@@ -33906,33 +33906,32 @@
 xp for each term
-%0D
 %0A%09var terms, sea
@@ -33938,33 +33938,32 @@
 rchTermsRegExps,
-%0D
 %0A%09%09flags = optio
@@ -33982,33 +33982,32 @@
 tive ? %22%22 : %22i%22,
-%0D
 %0A%09%09anchor = opti
@@ -34022,33 +34022,32 @@
 ored ? %22%5E%22 : %22%22;
-%0D
 %0A%09if(options.lit
@@ -34045,33 +34045,32 @@
 tions.literal) %7B
-%0D
 %0A%09%09if(text.lengt
@@ -34071,33 +34071,32 @@
 .length === 0) %7B
-%0D
 %0A%09%09%09searchTermsR
@@ -34101,45 +34101,43 @@
 sRegExps = null;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09searchTermsR
@@ -34207,38 +34207,36 @@
 ) + %22)%22,flags)%5D;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D else if(opti
@@ -34252,32 +34252,30 @@
 space) %7B
-%0D
 %0A%09%09terms = %5B%5D;
-%0D
 %0A%09%09$tw.u
@@ -34319,32 +34319,30 @@
 (term) %7B
-%0D
 %0A%09%09%09if(term) %7B
-%0D
 %0A%09%09%09%09ter
@@ -34371,46 +34371,43 @@
 peRegExp(term));
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09searchTermsRe
@@ -34466,33 +34466,32 @@
 ) + %22)%22,flags)%5D;
-%0D
 %0A%09%7D else if(opti
@@ -34503,26 +34503,24 @@
 egexp) %7B
-%0D
 %0A%09%09try %7B
-%0D
 %0A%09%09%09sear
@@ -34576,33 +34576,31 @@
 gs)%5D;%09%09%09
-%0D
 %0A%09%09%7D catch(e) %7B
-%0D
 %0A%09%09%09sear
@@ -34613,33 +34613,32 @@
 sRegExps = null;
-%0D
 %0A%09%09%09console.log(
@@ -34695,33 +34695,30 @@
 %22: %22,e);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09terms
@@ -34729,33 +34729,32 @@
 ext.split(/ +/);
-%0D
 %0A%09%09if(terms.leng
@@ -34775,33 +34775,32 @@
 rms%5B0%5D === %22%22) %7B
-%0D
 %0A%09%09%09searchTermsR
@@ -34805,45 +34805,43 @@
 sRegExps = null;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09searchTermsR
@@ -34844,33 +34844,32 @@
 rmsRegExps = %5B%5D;
-%0D
 %0A%09%09%09for(t=0; t%3Ct
@@ -34879,33 +34879,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09%09%09searchTerms
@@ -34989,32 +34989,28 @@
 flags));
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09// Acc
@@ -35071,33 +35071,32 @@
  from the search
-%0D
 %0A%09var fields = %5B
@@ -35089,33 +35089,32 @@
 var fields = %5B%5D;
-%0D
 %0A%09if(options.fie
@@ -35110,33 +35110,32 @@
 options.field) %7B
-%0D
 %0A%09%09if($tw.utils.
@@ -35151,33 +35151,32 @@
 ptions.field)) %7B
-%0D
 %0A%09%09%09$tw.utils.ea
@@ -35205,33 +35205,32 @@
 ion(fieldName) %7B
-%0D
 %0A%09%09%09%09if(fieldNam
@@ -35225,33 +35225,32 @@
 %09if(fieldName) %7B
-%0D
 %0A%09%09%09%09%09fields.pus
@@ -35267,44 +35267,40 @@
 e);%09%09%09%09%09
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%7D);
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09fiel
@@ -35314,42 +35314,39 @@
 (options.field);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09// Use default
@@ -35474,33 +35474,32 @@
 hing all fields)
-%0D
 %0A%09if(fields.leng
@@ -35526,33 +35526,32 @@
 .excludeField) %7B
-%0D
 %0A%09%09fields.push(%22
@@ -35550,33 +35550,32 @@
 s.push(%22title%22);
-%0D
 %0A%09%09fields.push(%22
@@ -35573,33 +35573,32 @@
 ds.push(%22tags%22);
-%0D
 %0A%09%09fields.push(%22
@@ -35596,37 +35596,35 @@
 ds.push(%22text%22);
-%0D
 %0A%09%7D
-%0D
 %0A%09// Function to
@@ -35657,33 +35657,32 @@
  the search term
-%0D
 %0A%09var searchTidd
@@ -35696,33 +35696,32 @@
 unction(title) %7B
-%0D
 %0A%09%09if(!searchTer
@@ -35732,39 +35732,36 @@
 gExps) %7B
-%0D
 %0A%09%09%09return true;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09var n
@@ -35835,33 +35835,32 @@
 tTiddler(title);
-%0D
 %0A%09%09if(!tiddler) 
@@ -35852,33 +35852,32 @@
 %09%09if(!tiddler) %7B
-%0D
 %0A%09%09%09tiddler = ne
@@ -35937,38 +35937,36 @@
 d.tiddlywiki%22%7D);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09var contentTy
@@ -36067,33 +36067,32 @@
 nd.tiddlywiki%22%5D,
-%0D
 %0A%09%09%09searchFields
@@ -36084,33 +36084,32 @@
 %09%09%09searchFields;
-%0D
 %0A%09%09// Get the li
@@ -36128,33 +36128,32 @@
  we're searching
-%0D
 %0A%09%09if(options.ex
@@ -36157,33 +36157,32 @@
 .excludeField) %7B
-%0D
 %0A%09%09%09searchFields
@@ -36204,33 +36204,32 @@
 tiddler.fields);
-%0D
 %0A%09%09%09$tw.utils.ea
@@ -36251,33 +36251,32 @@
 ion(fieldName) %7B
-%0D
 %0A%09%09%09%09var p = sea
@@ -36296,33 +36296,32 @@
 exOf(fieldName);
-%0D
 %0A%09%09%09%09if(p !== -1
@@ -36315,33 +36315,32 @@
 %09%09if(p !== -1) %7B
-%0D
 %0A%09%09%09%09%09searchFiel
@@ -36354,44 +36354,40 @@
 ce(p,1);
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%7D);
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09sear
@@ -36396,38 +36396,36 @@
 Fields = fields;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09for(var field
@@ -36496,33 +36496,32 @@
  fieldIndex++) %7B
-%0D
 %0A%09%09%09// Don't sea
@@ -36560,33 +36560,32 @@
 t type is binary
-%0D
 %0A%09%09%09var fieldNam
@@ -36605,33 +36605,32 @@
 lds%5BfieldIndex%5D;
-%0D
 %0A%09%09%09if(fieldName
@@ -36682,35 +36682,32 @@
 utf8%22) %7B
-%0D
 %0A%09%09%09%09break;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09var 
@@ -36738,39 +36738,36 @@
 ldName%5D,
-%0D
 %0A%09%09%09%09t;
-%0D
 %0A%09%09%09if(str) %7B
-%0D
 %0A%09%09%09%09if(
@@ -36783,33 +36783,32 @@
 .isArray(str)) %7B
-%0D
 %0A%09%09%09%09%09// If the 
@@ -36940,33 +36940,32 @@
 ield array entry
-%0D
 %0A%09%09%09%09%09for(var s=
@@ -36979,33 +36979,32 @@
 r.length; s++) %7B
-%0D
 %0A%09%09%09%09%09%09for(t=0; 
@@ -37019,33 +37019,32 @@
 Found.length;) %7B
-%0D
 %0A%09%09%09%09%09%09%09if(notYe
@@ -37060,33 +37060,32 @@
 .test(str%5Bs%5D)) %7B
-%0D
 %0A%09%09%09%09%09%09%09%09notYetF
@@ -37102,89 +37102,82 @@
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
@@ -37279,33 +37279,32 @@
 any do not match
-%0D
 %0A%09%09%09%09%09str = tidd
@@ -37325,33 +37325,32 @@
 ring(fieldName);
-%0D
 %0A%09%09%09%09%09for(t=0; t
@@ -37364,33 +37364,32 @@
 Found.length;) %7B
-%0D
 %0A%09%09%09%09%09%09if(notYet
@@ -37401,33 +37401,32 @@
 %5Bt%5D.test(str)) %7B
-%0D
 %0A%09%09%09%09%09%09%09notYetFo
@@ -37442,82 +37442,74 @@
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
@@ -37526,38 +37526,36 @@
 und.length == 0;
-%0D
 %0A%09%7D;
-%0D
 %0A%09// Loop throug
@@ -37581,33 +37581,32 @@
 doing the search
-%0D
 %0A%09var results = 
@@ -37600,33 +37600,32 @@
 ar results = %5B%5D,
-%0D
 %0A%09%09source = opti
@@ -37640,33 +37640,32 @@
 ce %7C%7C this.each;
-%0D
 %0A%09source(functio
@@ -37674,33 +37674,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09if(searchTidd
@@ -37722,33 +37722,32 @@
 ptions.invert) %7B
-%0D
 %0A%09%09%09results.push
@@ -37746,44 +37746,41 @@
 lts.push(title);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09// Remove any 
@@ -37804,33 +37804,32 @@
  have to exclude
-%0D
 %0A%09if(options.exc
@@ -37827,33 +37827,32 @@
 tions.exclude) %7B
-%0D
 %0A%09%09for(t=0; t%3Cop
@@ -37871,33 +37871,32 @@
 e.length; t++) %7B
-%0D
 %0A%09%09%09var p = resu
@@ -37919,33 +37919,32 @@
 ons.exclude%5Bt%5D);
-%0D
 %0A%09%09%09if(p !== -1)
@@ -37937,33 +37937,32 @@
 %09%09if(p !== -1) %7B
-%0D
 %0A%09%09%09%09results.spl
@@ -37970,32 +37970,28 @@
 ce(p,1);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09return
@@ -37991,43 +37991,41 @@
 %09return results;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ATrigger a load 
@@ -38148,37 +38148,35 @@
 g lazily loaded.
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -38206,33 +38206,32 @@
 e,defaultText) %7B
-%0D
 %0A%09var tiddler = 
@@ -38245,33 +38245,32 @@
 tTiddler(title);
-%0D
 %0A%09// Return unde
@@ -38301,34 +38301,32 @@
 't found
-%0D
 %0A%09if(!tiddler) %7B
-%0D
 %0A%09%09retur
@@ -38331,37 +38331,35 @@
 urn defaultText;
-%0D
 %0A%09%7D
-%0D
 %0A%09if(tiddler.fie
@@ -38375,33 +38375,32 @@
 !== undefined) %7B
-%0D
 %0A%09%09// Just retur
@@ -38417,33 +38417,32 @@
  if we've got it
-%0D
 %0A%09%09return tiddle
@@ -38447,44 +38447,42 @@
 ler.fields.text;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09// Tell any l
@@ -38524,33 +38524,32 @@
 oad this tiddler
-%0D
 %0A%09%09this.dispatch
@@ -38564,33 +38564,32 @@
 azyLoad%22,title);
-%0D
 %0A%09%09// Indicate t
@@ -38616,47 +38616,43 @@
 g loaded
-%0D
 %0A%09%09return null;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ACheck w
@@ -38802,37 +38802,35 @@
  text is trimmed
-%0D
 %0A*/
-%0D
 %0Aexports.checkTi
@@ -38869,33 +38869,32 @@
 tText,options) %7B
-%0D
 %0A%09options = opti
@@ -38895,33 +38895,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var text = thi
@@ -38938,33 +38938,32 @@
 rText(title,%22%22);
-%0D
 %0A%09if(!options.no
@@ -38961,33 +38961,32 @@
 ptions.noTrim) %7B
-%0D
 %0A%09%09text = text.t
@@ -38983,37 +38983,35 @@
 t = text.trim();
-%0D
 %0A%09%7D
-%0D
 %0A%09if(!options.ca
@@ -39016,33 +39016,32 @@
 caseSensitive) %7B
-%0D
 %0A%09%09text = text.t
@@ -39045,33 +39045,32 @@
 t.toLowerCase();
-%0D
 %0A%09%09targetText = 
@@ -39086,37 +39086,35 @@
 t.toLowerCase();
-%0D
 %0A%09%7D
-%0D
 %0A%09return text ==
@@ -39118,42 +39118,40 @@
  === targetText;
-%0D
 %0A%7D%0D%0A%0D%0A/*
-%0D
 %0ARead an array o
@@ -39225,37 +39225,35 @@
 they're all read
-%0D
 %0A*/
-%0D
 %0Aexports.readFil
@@ -39282,33 +39282,31 @@
 tions) %7B
-%0D
 %0A%09var callback;
-%0D
 %0A%09if(typ
@@ -39326,33 +39326,32 @@
 == %22function%22) %7B
-%0D
 %0A%09%09callback = op
@@ -39356,45 +39356,42 @@
 options;
-%0D
 %0A%09%09options = %7B%7D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09callb
@@ -39405,37 +39405,35 @@
 ptions.callback;
-%0D
 %0A%09%7D
-%0D
 %0A%09var result = %5B
@@ -39426,33 +39426,32 @@
 var result = %5B%5D,
-%0D
 %0A%09%09outstanding =
@@ -39456,33 +39456,32 @@
  = files.length,
-%0D
 %0A%09%09readFileCallb
@@ -39508,33 +39508,32 @@
 erFieldsArray) %7B
-%0D
 %0A%09%09%09result.push.
@@ -39557,33 +39557,32 @@
 lerFieldsArray);
-%0D
 %0A%09%09%09if(--outstan
@@ -39586,33 +39586,32 @@
 tanding === 0) %7B
-%0D
 %0A%09%09%09%09callback(re
@@ -39616,29 +39616,26 @@
 result);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D;
-%0D
 %0A%09for(va
@@ -39655,33 +39655,32 @@
 s.length; f++) %7B
-%0D
 %0A%09%09this.readFile
@@ -39740,37 +39740,35 @@
 FileCallback%7D));
-%0D
 %0A%09%7D
-%0D
 %0A%09return files.l
@@ -39765,43 +39765,41 @@
 rn files.length;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ARead a browser 
@@ -39880,37 +39880,35 @@
 r fields objects
-%0D
 %0A*/
-%0D
 %0Aexports.readFil
@@ -39935,33 +39935,31 @@
 tions) %7B
-%0D
 %0A%09var callback;
-%0D
 %0A%09if(typ
@@ -39979,33 +39979,32 @@
 == %22function%22) %7B
-%0D
 %0A%09%09callback = op
@@ -40009,45 +40009,42 @@
 options;
-%0D
 %0A%09%09options = %7B%7D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09callb
@@ -40058,37 +40058,35 @@
 ptions.callback;
-%0D
 %0A%09%7D
-%0D
 %0A%09// Get the typ
@@ -40118,33 +40118,32 @@
 lename extension
-%0D
 %0A%09var self = thi
@@ -40136,33 +40136,32 @@
 var self = this,
-%0D
 %0A%09%09type = file.t
@@ -40156,33 +40156,32 @@
 ype = file.type;
-%0D
 %0A%09if(type === %22%22
@@ -40184,33 +40184,32 @@
 = %22%22 %7C%7C !type) %7B
-%0D
 %0A%09%09var dotPos = 
@@ -40227,33 +40227,32 @@
 astIndexOf(%22.%22);
-%0D
 %0A%09%09if(dotPos !==
@@ -40249,33 +40249,32 @@
 dotPos !== -1) %7B
-%0D
 %0A%09%09%09var fileExte
@@ -40334,33 +40334,32 @@
 substr(dotPos));
-%0D
 %0A%09%09%09if(fileExten
@@ -40361,33 +40361,32 @@
 ExtensionInfo) %7B
-%0D
 %0A%09%09%09%09type = file
@@ -40404,32 +40404,28 @@
 fo.type;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09// Fig
@@ -40454,33 +40454,32 @@
 ng a binary file
-%0D
 %0A%09var contentTyp
@@ -40511,33 +40511,32 @@
 tTypeInfo%5Btype%5D,
-%0D
 %0A%09%09isBinary = co
@@ -40589,33 +40589,32 @@
 base64%22 : false;
-%0D
 %0A%09// Log some de
@@ -40624,33 +40624,32 @@
 ging information
-%0D
 %0A%09if($tw.log.IMP
@@ -40646,33 +40646,32 @@
 tw.log.IMPORT) %7B
-%0D
 %0A%09%09console.log(%22
@@ -40744,37 +40744,35 @@
 : %22 + isBinary);
-%0D
 %0A%09%7D
-%0D
 %0A%09// Give the ho
@@ -40794,33 +40794,32 @@
 process the drag
-%0D
 %0A%09if($tw.hooks.i
@@ -40849,47 +40849,44 @@
 -file%22,%7B
-%0D
 %0A%09%09file: file,
-%0D
 %0A%09%09type: type,
-%0D
 %0A%09%09isBin
@@ -40891,33 +40891,32 @@
 inary: isBinary,
-%0D
 %0A%09%09callback: cal
@@ -40920,34 +40920,32 @@
 callback
-%0D
 %0A%09%7D) !== true) %7B
-%0D
 %0A%09%09this.
@@ -41002,47 +41002,44 @@
 lizer,callback);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ALower level uti
@@ -41158,37 +41158,35 @@
 r fields objects
-%0D
 %0A*/
-%0D
 %0Aexports.readFil
@@ -41240,33 +41240,32 @@
 izer,callback) %7B
-%0D
 %0A%09var self = thi
@@ -41258,33 +41258,32 @@
 var self = this;
-%0D
 %0A%09// Create the 
@@ -41284,33 +41284,32 @@
 e the FileReader
-%0D
 %0A%09var reader = n
@@ -41324,29 +41324,27 @@
 eader();
-%0D
 %0A%09// Onload
-%0D
 %0A%09reader
@@ -41362,33 +41362,32 @@
 unction(event) %7B
-%0D
 %0A%09%09var text = ev
@@ -41396,33 +41396,32 @@
 t.target.result,
-%0D
 %0A%09%09%09tiddlerField
@@ -41461,33 +41461,32 @@
 d%22, type: type%7D;
-%0D
 %0A%09%09if(isBinary) 
@@ -41478,33 +41478,32 @@
 %09%09if(isBinary) %7B
-%0D
 %0A%09%09%09var commaPos
@@ -41515,33 +41515,32 @@
 xt.indexOf(%22,%22);
-%0D
 %0A%09%09%09if(commaPos 
@@ -41540,33 +41540,32 @@
 mmaPos !== -1) %7B
-%0D
 %0A%09%09%09%09text = text
@@ -41586,28 +41586,25 @@
 os + 1);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09// Ch
@@ -41643,33 +41643,32 @@
  TiddlyWiki file
-%0D
 %0A%09%09var encrypted
@@ -41708,33 +41708,32 @@
 StoreArea(text);
-%0D
 %0A%09%09if(encryptedJ
@@ -41730,33 +41730,32 @@
 encryptedJson) %7B
-%0D
 %0A%09%09%09// If so, at
@@ -41791,33 +41791,32 @@
 current password
-%0D
 %0A%09%09%09$tw.utils.de
@@ -41867,33 +41867,32 @@
 tion(tiddlers) %7B
-%0D
 %0A%09%09%09%09callback(ti
@@ -41899,37 +41899,34 @@
 ddlers);
-%0D
 %0A%09%09%09%7D);
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09// O
@@ -41975,33 +41975,32 @@
 lers in the file
-%0D
 %0A%09%09%09callback(sel
@@ -42076,27 +42076,24 @@
 izer%7D));
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D;
-%0D
 %0A%09// Kic
@@ -42106,34 +42106,32 @@
 the read
-%0D
 %0A%09if(isBinary) %7B
-%0D
 %0A%09%09reade
@@ -42144,44 +42144,42 @@
 AsDataURL(file);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09reader.readAs
@@ -42189,31 +42189,28 @@
 t(file);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AFind an
@@ -42240,37 +42240,35 @@
 pecified tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.findDra
@@ -42287,33 +42287,32 @@
 n(targetTitle) %7B
-%0D
 %0A%09var draftTitle
@@ -42316,33 +42316,32 @@
 tle = undefined;
-%0D
 %0A%09this.forEachTi
@@ -42385,33 +42385,32 @@
 title,tiddler) %7B
-%0D
 %0A%09%09if(tiddler.fi
@@ -42469,33 +42469,32 @@
 = targetTitle) %7B
-%0D
 %0A%09%09%09draftTitle =
@@ -42500,28 +42500,25 @@
 = title;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09return
@@ -42529,26 +42529,24 @@
 ftTitle;
-%0D
 %0A%7D%0D%0A%0D%0A/*
-%0D
 %0ACheck w
@@ -42590,33 +42590,32 @@
 s been modified.
-%0D
 %0AIf the original
@@ -42665,33 +42665,32 @@
 iddler variable,
-%0D
 %0Ato check if add
@@ -42712,37 +42712,35 @@
 have been added.
-%0D
 %0A*/
-%0D
 %0Aexports.isDraft
@@ -42759,33 +42759,32 @@
 unction(title) %7B
-%0D
 %0A%09var tiddler = 
@@ -42798,33 +42798,32 @@
 tTiddler(title);
-%0D
 %0A%09if(!tiddler.is
@@ -42832,38 +42832,35 @@
 aft()) %7B
-%0D
 %0A%09%09return false;
-%0D
 %0A%09%7D
-%0D
 %0A%09var ig
@@ -42925,33 +42925,32 @@
 e%22, %22draft.of%22%5D,
-%0D
 %0A%09%09origTiddler =
@@ -43025,33 +43025,32 @@
 t:%22%22, tags:%5B%5D%7D),
-%0D
 %0A%09%09titleModified
@@ -43105,33 +43105,32 @@
 lds%5B%22draft.of%22%5D;
-%0D
 %0A%09return titleMo
@@ -43175,43 +43175,41 @@
 ,ignoredFields);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AAdd a new recor
@@ -43233,33 +43233,32 @@
 he history stack
-%0D
 %0Atitle: a title 
@@ -43284,33 +43284,32 @@
 of title strings
-%0D
 %0AfromPageRect: p
@@ -43347,33 +43347,32 @@
 f the navigation
-%0D
 %0AhistoryTitle: t
@@ -43415,37 +43415,35 @@
  $:/HistoryList)
-%0D
 %0A*/
-%0D
 %0Aexports.addToHi
@@ -43485,34 +43485,54 @@
 ,historyTitle) %7B
-%0D
 %0A
+%09if(historyTitle) %7B%0A%09
 %09var story = new
@@ -43576,34 +43576,34 @@
  historyTitle%7D);
-%0D
 %0A
+%09
 %09story.addToHist
@@ -43620,43 +43620,44 @@
 fromPageRect);%09%09
-%0D
+%0A%09%7D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AAdd a new tiddl
@@ -43669,33 +43669,32 @@
  the story river
-%0D
 %0Atitle: a title 
@@ -43720,33 +43720,32 @@
 of title strings
-%0D
 %0AfromTitle: the 
@@ -43793,33 +43793,32 @@
 ation originated
-%0D
 %0AstoryTitle: tit
@@ -43855,33 +43855,32 @@
 to $:/StoryList)
-%0D
 %0Aoptions: see st
@@ -43877,37 +43877,35 @@
 ns: see story.js
-%0D
 %0A*/
-%0D
 %0Aexports.addToSt
@@ -43948,34 +43948,52 @@
 Title,options) %7B
-%0D
 %0A
+%09if(storyTitle) %7B%0A%09
 %09var story = new
@@ -44033,34 +44033,34 @@
 e: storyTitle%7D);
-%0D
 %0A
+%09
 %09story.addToStor
@@ -44080,43 +44080,44 @@
 itle,options);%09%09
-%0D
+%0A%09%7D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AGenerate a titl
@@ -44142,37 +44142,35 @@
  a given tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.generat
@@ -44200,45 +44200,42 @@
 title) %7B
-%0D
 %0A%09var c = 0,
-%0D
 %0A%09%09draftTitle,
-%0D
 %0A%09%09usern
@@ -44274,33 +44274,32 @@
 atus/UserName%22),
-%0D
 %0A%09%09attribution =
@@ -44333,24 +44333,22 @@
 me : %22%22;
-%0D
 %0A%09do %7B
-%0D
 %0A%09%09draft
@@ -44428,25 +44428,23 @@
 ibution;
-%0D
 %0A%09%09c++;
-%0D
 %0A%09%7D whil
@@ -44469,33 +44469,32 @@
 ts(draftTitle));
-%0D
 %0A%09return draftTi
@@ -44497,27 +44497,25 @@
 ftTitle;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AInvoke 
@@ -44536,33 +44536,32 @@
 upgrader modules
-%0D
 %0Atitles: array o
@@ -44584,33 +44584,32 @@
  to be processed
-%0D
 %0Atiddlers: hashm
@@ -44910,33 +44910,32 @@
 the titles array
-%0D
 %0AReturns a hashm
@@ -44972,21 +44972,19 @@
 r title.
-%0D
 %0A*/
-%0D
 %0Aexports
@@ -45021,33 +45021,32 @@
 tles,tiddlers) %7B
-%0D
 %0A%09// Collect up 
@@ -45067,33 +45067,32 @@
 upgrader modules
-%0D
 %0A%09var self = thi
@@ -45085,33 +45085,32 @@
 var self = this;
-%0D
 %0A%09if(!this.upgra
@@ -45114,33 +45114,32 @@
 graderModules) %7B
-%0D
 %0A%09%09this.upgrader
@@ -45143,33 +45143,32 @@
 derModules = %5B%5D;
-%0D
 %0A%09%09$tw.modules.f
@@ -45213,33 +45213,32 @@
 (title,module) %7B
-%0D
 %0A%09%09%09if(module.up
@@ -45237,33 +45237,32 @@
 odule.upgrade) %7B
-%0D
 %0A%09%09%09%09self.upgrad
@@ -45284,34 +45284,30 @@
 module);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D
-%0D
 %0A%09// Inv
@@ -45323,33 +45323,32 @@
 upgrader in turn
-%0D
 %0A%09var messages =
@@ -45343,33 +45343,32 @@
 r messages = %7B%7D;
-%0D
 %0A%09for(var t=0; t
@@ -45395,33 +45395,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09var upgrader 
@@ -45437,33 +45437,32 @@
 raderModules%5Bt%5D,
-%0D
 %0A%09%09%09upgraderMess
@@ -45499,33 +45499,32 @@
 itles,tiddlers);
-%0D
 %0A%09%09$tw.utils.ext
@@ -45546,37 +45546,35 @@
 graderMessages);
-%0D
 %0A%09%7D
-%0D
 %0A%09return message
@@ -45567,33 +45567,32 @@
 return messages;
-%0D
 %0A%7D;%0D%0A%0D%0A// Determ
@@ -45636,33 +45636,32 @@
 mically loadable
-%0D
 %0Aexports.doesPlu
@@ -45688,33 +45688,32 @@
 unction(title) %7B
-%0D
 %0A%09return this.do
@@ -45793,33 +45793,32 @@
 aCached(title));
-%0D
 %0A%7D;%0D%0A%0D%0A// Determ
@@ -45868,33 +45868,32 @@
 mically loadable
-%0D
 %0Aexports.doesPlu
@@ -45929,33 +45929,32 @@
 on(pluginInfo) %7B
-%0D
 %0A%09if(pluginInfo)
@@ -45947,33 +45947,32 @@
 if(pluginInfo) %7B
-%0D
 %0A%09%09var foundModu
@@ -45974,33 +45974,32 @@
 dModule = false;
-%0D
 %0A%09%09$tw.utils.eac
@@ -46031,33 +46031,32 @@
 ction(tiddler) %7B
-%0D
 %0A%09%09%09if(tiddler.t
@@ -46122,33 +46122,32 @@
 module-type%22)) %7B
-%0D
 %0A%09%09%09%09foundModule
@@ -46154,30 +46154,27 @@
  = true;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09retur
@@ -46187,48 +46187,44 @@
 dModule;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return null;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A%7D
