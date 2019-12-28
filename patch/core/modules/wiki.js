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
@@ -2873,83 +2873,301 @@
 fined) %7B
-%0D
 %0A%09%09%09
-data%5Bindex%5D =
+//fix for blank root obj and numeral index/array init%0A%09%09%09if (JSON.stringify(data) === %22%7B%7D%22) %7B%0A%09%09%09%09if (index.match(/%5E%5C/(%5Cd+%7C-)$/) %7C%7C index.match(/%5E(%5Cd+%7C-)$/)) %7B%0A%09%09%09%09%09data = %5B%5D;%0A%09%09%09%09%7D%0A%09%09%09%7D%0A%09%09%09$tw.utils.jsonSet(data, index,
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
@@ -3204,44 +3204,86 @@
 ficationFields);
-%0D
+%0A%09%09$tw.utils.jsonIsPlugin(title, %22setText%22);
 %0A%09%7D else %7B
-%0D
 %0A%09%09var tiddler =
@@ -3298,33 +3298,32 @@
 tTiddler(title),
-%0D
 %0A%09%09%09fields = %7Bti
@@ -3326,33 +3326,32 @@
  %7Btitle: title%7D;
-%0D
 %0A%09%09fields%5Bfield 
@@ -3361,33 +3361,32 @@
 %22text%22%5D = value;
-%0D
 %0A%09%09this.addTiddl
@@ -3447,37 +3447,35 @@
 icationFields));
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.d
@@ -3523,33 +3523,32 @@
 rTiddlerTitle) %7B
-%0D
 %0A%09var tr = $tw.u
@@ -3572,33 +3572,32 @@
 erence(textRef),
-%0D
 %0A%09%09title,tiddler
@@ -3596,33 +3596,32 @@
 ,tiddler,fields;
-%0D
 %0A%09// Check if it
@@ -3640,33 +3640,32 @@
 nce to a tiddler
-%0D
 %0A%09if(tr.title &&
@@ -3669,33 +3669,32 @@
  && !tr.field) %7B
-%0D
 %0A%09%09this.deleteTi
@@ -3701,33 +3701,32 @@
 ddler(tr.title);
-%0D
 %0A%09// Else check 
@@ -3738,33 +3738,32 @@
  field reference
-%0D
 %0A%09%7D else if(tr.f
@@ -3761,33 +3761,32 @@
 e if(tr.field) %7B
-%0D
 %0A%09%09title = tr.ti
@@ -3801,33 +3801,32 @@
 urrTiddlerTitle;
-%0D
 %0A%09%09tiddler = thi
@@ -3837,33 +3837,32 @@
 tTiddler(title);
-%0D
 %0A%09%09if(tiddler &&
@@ -3895,33 +3895,32 @@
 lds,tr.field)) %7B
-%0D
 %0A%09%09%09fields = Obj
@@ -3928,33 +3928,32 @@
 ct.create(null);
-%0D
 %0A%09%09%09fields%5Btr.fi
@@ -3961,33 +3961,32 @@
 ld%5D = undefined;
-%0D
 %0A%09%09%09this.addTidd
@@ -4043,42 +4043,39 @@
 ationFields()));
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.a
@@ -4109,33 +4109,32 @@
 type,listener) %7B
-%0D
 %0A%09this.eventList
@@ -4159,33 +4159,32 @@
 Listeners %7C%7C %7B%7D;
-%0D
 %0A%09this.eventList
@@ -4222,33 +4222,32 @@
 rs%5Btype%5D  %7C%7C %5B%5D;
-%0D
 %0A%09this.eventList
@@ -4266,33 +4266,32 @@
 push(listener);%09
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.r
@@ -4328,33 +4328,32 @@
 type,listener) %7B
-%0D
 %0A%09var listeners 
@@ -4372,33 +4372,32 @@
 Listeners%5Btype%5D;
-%0D
 %0A%09if(listeners) 
@@ -4389,33 +4389,32 @@
 %09if(listeners) %7B
-%0D
 %0A%09%09var p = liste
@@ -4428,33 +4428,32 @@
 dexOf(listener);
-%0D
 %0A%09%09if(p !== -1) 
@@ -4445,33 +4445,32 @@
 %09%09if(p !== -1) %7B
-%0D
 %0A%09%09%09listeners.sp
@@ -4471,42 +4471,39 @@
 ers.splice(p,1);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.d
@@ -4537,33 +4537,32 @@
 e /*, args */) %7B
-%0D
 %0A%09var args = Arr
@@ -4590,33 +4590,32 @@
 ll(arguments,1),
-%0D
 %0A%09%09listeners = t
@@ -4631,33 +4631,32 @@
 Listeners%5Btype%5D;
-%0D
 %0A%09if(listeners) 
@@ -4648,33 +4648,32 @@
 %09if(listeners) %7B
-%0D
 %0A%09%09for(var p=0; 
@@ -4690,33 +4690,32 @@
 s.length; p++) %7B
-%0D
 %0A%09%09%09var listener
@@ -4722,33 +4722,32 @@
  = listeners%5Bp%5D;
-%0D
 %0A%09%09%09listener.app
@@ -4764,36 +4764,32 @@
 r,args);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ACauses 
@@ -4874,33 +4874,32 @@
  event handlers.
-%0D
 %0AThis method sho
@@ -4979,33 +4979,32 @@
 iddlers%5B%5D array.
-%0D
 %0A%09title: Title o
@@ -5004,33 +5004,32 @@
 Title of tiddler
-%0D
 %0A%09isDeleted: def
@@ -5086,33 +5086,32 @@
 ed or modified),
-%0D
 %0A%09%09true if the t
@@ -5125,37 +5125,35 @@
 has been deleted
-%0D
 %0A*/
-%0D
 %0Aexports.enqueue
@@ -5186,33 +5186,32 @@
 tle,isDeleted) %7B
-%0D
 %0A%09// Record the 
@@ -5239,33 +5239,32 @@
 changed tiddlers
-%0D
 %0A%09this.changedTi
@@ -5308,33 +5308,32 @@
 ct.create(null);
-%0D
 %0A%09this.changedTi
@@ -5391,33 +5391,32 @@
 ct.create(null);
-%0D
 %0A%09this.changedTi
@@ -5464,33 +5464,32 @@
 dified%22%5D = true;
-%0D
 %0A%09// Increment t
@@ -5495,33 +5495,32 @@
 the change count
-%0D
 %0A%09this.changeCou
@@ -5556,33 +5556,32 @@
 ct.create(null);
-%0D
 %0A%09if($tw.utils.h
@@ -5601,33 +5601,32 @@
 eCount,title)) %7B
-%0D
 %0A%09%09this.changeCo
@@ -5630,44 +5630,42 @@
 eCount%5Btitle%5D++;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09this.changeCo
@@ -5671,37 +5671,35 @@
 ount%5Btitle%5D = 1;
-%0D
 %0A%09%7D
-%0D
 %0A%09// Trigger eve
@@ -5693,33 +5693,32 @@
 / Trigger events
-%0D
 %0A%09this.eventList
@@ -5743,33 +5743,32 @@
 Listeners %7C%7C %7B%7D;
-%0D
 %0A%09if(!this.event
@@ -5772,33 +5772,32 @@
 entsTriggered) %7B
-%0D
 %0A%09%09var self = th
@@ -5791,33 +5791,32 @@
 var self = this;
-%0D
 %0A%09%09$tw.utils.nex
@@ -5825,33 +5825,32 @@
 ick(function() %7B
-%0D
 %0A%09%09%09var changes 
@@ -5864,33 +5864,32 @@
 changedTiddlers;
-%0D
 %0A%09%09%09self.changed
@@ -5911,33 +5911,32 @@
 ct.create(null);
-%0D
 %0A%09%09%09self.eventsT
@@ -5944,33 +5944,32 @@
 iggered = false;
-%0D
 %0A%09%09%09if($tw.utils
@@ -5982,33 +5982,32 @@
 (changes) %3E 0) %7B
-%0D
 %0A%09%09%09%09self.dispat
@@ -6024,46 +6024,43 @@
 hange%22,changes);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09this.eventsTr
@@ -6066,37 +6066,35 @@
 riggered = true;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -6125,33 +6125,32 @@
 e = function() %7B
-%0D
 %0A%09return $tw.uti
@@ -6172,33 +6172,32 @@
 hangedTiddlers);
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.c
@@ -6224,33 +6224,32 @@
 e = function() %7B
-%0D
 %0A%09this.changedTi
@@ -6269,33 +6269,32 @@
 ct.create(null);
-%0D
 %0A%09this.changeCou
@@ -6310,33 +6310,32 @@
 ct.create(null);
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -6359,33 +6359,32 @@
 unction(title) %7B
-%0D
 %0A%09this.changeCou
@@ -6420,33 +6420,32 @@
 ct.create(null);
-%0D
 %0A%09if($tw.utils.h
@@ -6465,33 +6465,32 @@
 eCount,title)) %7B
-%0D
 %0A%09%09return this.c
@@ -6507,55 +6507,50 @@
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
@@ -6582,37 +6582,35 @@
 e specified base
-%0D
 %0A*/
-%0D
 %0Aexports.generat
@@ -6642,33 +6642,32 @@
 Title,options) %7B
-%0D
 %0A%09options = opti
@@ -6668,46 +6668,44 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var c = 0,
-%0D
 %0A%09%09title = baseT
@@ -6701,33 +6701,32 @@
 tle = baseTitle;
-%0D
 %0A%09while(this.tid
@@ -6793,33 +6793,32 @@
 dDraft(title)) %7B
-%0D
 %0A%09%09title = baseT
@@ -6816,33 +6816,32 @@
 e = baseTitle + 
-%0D
 %0A%09%09%09(options.pre
@@ -6854,48 +6854,44 @@
  %22 %22) + 
-%0D
 %0A%09%09%09(++c);
-%0D
 %0A%09%7D
-%0D
 %0A%09return title;
-%0D
 %0A%7D;%0D%0A%0D%0Ae
@@ -6924,33 +6924,32 @@
 unction(title) %7B
-%0D
 %0A%09return title &
@@ -6969,33 +6969,32 @@
 Of(%22$:/%22) === 0;
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.i
@@ -7022,33 +7022,32 @@
 unction(title) %7B
-%0D
 %0A%09return title &
@@ -7072,33 +7072,32 @@
 :/temp/%22) === 0;
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.i
@@ -7121,33 +7121,32 @@
 unction(title) %7B
-%0D
 %0A%09var tiddler = 
@@ -7160,33 +7160,32 @@
 tTiddler(title);
-%0D
 %0A%09if(tiddler) %7B%09
@@ -7177,33 +7177,32 @@
 %09if(tiddler) %7B%09%09
-%0D
 %0A%09%09var contentTy
@@ -7275,33 +7275,32 @@
 nd.tiddlywiki%22%5D;
-%0D
 %0A%09%09return !!cont
@@ -7360,48 +7360,44 @@
  !== -1;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return null;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Ae
@@ -7430,33 +7430,32 @@
 unction(title) %7B
-%0D
 %0A%09var tiddler = 
@@ -7469,33 +7469,32 @@
 tTiddler(title);
-%0D
 %0A%09if(tiddler) %7B%09
@@ -7486,33 +7486,32 @@
 %09if(tiddler) %7B%09%09
-%0D
 %0A%09%09var contentTy
@@ -7584,33 +7584,32 @@
 nd.tiddlywiki%22%5D;
-%0D
 %0A%09%09return !!cont
@@ -7661,58 +7661,53 @@
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
@@ -7850,37 +7850,35 @@
 ler was imported
-%0D
 %0A*/
-%0D
 %0Aexports.importT
@@ -7897,33 +7897,32 @@
 ction(tiddler) %7B
-%0D
 %0A%09var existingTi
@@ -7959,33 +7959,32 @@
 r.fields.title);
-%0D
 %0A%09// Check if we
@@ -8000,33 +8000,32 @@
 ng with a plugin
-%0D
 %0A%09if(tiddler && 
@@ -8182,33 +8182,32 @@
 ld(%22version%22)) %7B
-%0D
 %0A%09%09// Reject the
@@ -8229,33 +8229,32 @@
 n if it is older
-%0D
 %0A%09%09if(!$tw.utils
@@ -8317,33 +8317,32 @@
 elds.version)) %7B
-%0D
 %0A%09%09%09return false
@@ -8334,42 +8334,39 @@
 %09%09%09return false;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09// Fall throug
@@ -8380,33 +8380,32 @@
 ding the tiddler
-%0D
 %0A%09this.addTiddle
@@ -8415,42 +8415,39 @@
 iddler);
-%0D
 %0A%09return true;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn 
@@ -8506,37 +8506,35 @@
 ddler is created
-%0D
 %0A*/
-%0D
 %0Aexports.getCrea
@@ -8550,33 +8550,32 @@
 s = function() %7B
-%0D
 %0A%09if(this.getTid
@@ -8629,33 +8629,32 @@
 e() !== %22yes%22) %7B
-%0D
 %0A%09%09var fields = 
@@ -8646,33 +8646,32 @@
 %09%09var fields = %7B
-%0D
 %0A%09%09%09%09created: ne
@@ -8670,40 +8670,38 @@
 ated: new Date()
-%0D
 %0A%09%09%09%7D,
-%0D
 %0A%09%09%09creator = th
@@ -8735,34 +8735,32 @@
 _TITLE);
-%0D
 %0A%09%09if(creator) %7B
-%0D
 %0A%09%09%09fiel
@@ -8772,38 +8772,36 @@
 eator = creator;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09return fields
@@ -8801,56 +8801,51 @@
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
@@ -8905,37 +8905,35 @@
 dler is modified
-%0D
 %0A*/
-%0D
 %0Aexports.getModi
@@ -8953,33 +8953,32 @@
 s = function() %7B
-%0D
 %0A%09if(this.getTid
@@ -9032,33 +9032,32 @@
 e() !== %22yes%22) %7B
-%0D
 %0A%09%09var fields = 
@@ -9068,33 +9068,32 @@
 ct.create(null),
-%0D
 %0A%09%09%09modifier = t
@@ -9120,33 +9120,32 @@
 SER_NAME_TITLE);
-%0D
 %0A%09%09fields.modifi
@@ -9152,33 +9152,32 @@
 ed = new Date();
-%0D
 %0A%09%09if(modifier) 
@@ -9169,33 +9169,32 @@
 %09%09if(modifier) %7B
-%0D
 %0A%09%09%09fields.modif
@@ -9200,38 +9200,36 @@
 fier = modifier;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09return fields
@@ -9229,56 +9229,51 @@
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
@@ -9315,33 +9315,32 @@
 Options include:
-%0D
 %0AsortField: fiel
@@ -9343,33 +9343,32 @@
 field to sort by
-%0D
 %0AexcludeTag: tag
@@ -9370,33 +9370,32 @@
 : tag to exclude
-%0D
 %0AincludeSystem: 
@@ -9440,37 +9440,35 @@
 faults to false)
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -9485,33 +9485,32 @@
 ction(options) %7B
-%0D
 %0A%09options = opti
@@ -9528,33 +9528,32 @@
 ct.create(null);
-%0D
 %0A%09var self = thi
@@ -9546,33 +9546,32 @@
 var self = this,
-%0D
 %0A%09%09sortField = o
@@ -9590,33 +9590,32 @@
 ield %7C%7C %22title%22,
-%0D
 %0A%09%09tiddlers = %5B%5D
@@ -9623,33 +9623,32 @@
  t, titles = %5B%5D;
-%0D
 %0A%09this.each(func
@@ -9660,33 +9660,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09if(options.in
@@ -9722,33 +9722,32 @@
 iddler(title)) %7B
-%0D
 %0A%09%09%09if(!options.
@@ -9790,33 +9790,32 @@
 s.excludeTag)) %7B
-%0D
 %0A%09%09%09%09tiddlers.pu
@@ -9826,34 +9826,30 @@
 iddler);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09tiddle
@@ -9863,33 +9863,32 @@
 (function(a,b) %7B
-%0D
 %0A%09%09var aa = a.fi
@@ -9915,33 +9915,32 @@
 werCase() %7C%7C %22%22,
-%0D
 %0A%09%09%09bb = b.field
@@ -9972,61 +9972,57 @@
 ) %7C%7C %22%22;
-%0D
 %0A%09%09if(aa %3C bb) %7B
-%0D
 %0A%09%09%09return -1;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09if(a
@@ -10030,77 +10030,70 @@
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
@@ -10112,33 +10112,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09titles.push(t
@@ -10161,38 +10161,35 @@
 .title);
-%0D
 %0A%09%7D
-%0D
 %0A%09return titles;
-%0D
 %0A%7D;%0D%0A%0D%0Ae
@@ -10225,33 +10225,32 @@
 on(excludeTag) %7B
-%0D
 %0A%09var tiddlers =
@@ -10285,33 +10285,32 @@
 g: excludeTag%7D);
-%0D
 %0A%09return $tw.uti
@@ -10320,43 +10320,41 @@
 count(tiddlers);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturns a funct
@@ -10465,37 +10465,35 @@
 k(tiddler,title)
-%0D
 %0A*/
-%0D
 %0Aexports.makeTid
@@ -10517,33 +10517,32 @@
 nction(titles) %7B
-%0D
 %0A%09var self = thi
@@ -10535,33 +10535,32 @@
 var self = this;
-%0D
 %0A%09if(!$tw.utils.
@@ -10569,33 +10569,32 @@
 Array(titles)) %7B
-%0D
 %0A%09%09titles = Obje
@@ -10601,44 +10601,42 @@
 ct.keys(titles);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09titles = titl
@@ -10639,37 +10639,35 @@
 titles.slice(0);
-%0D
 %0A%09%7D
-%0D
 %0A%09return functio
@@ -10671,33 +10671,32 @@
 tion(callback) %7B
-%0D
 %0A%09%09titles.forEac
@@ -10706,33 +10706,32 @@
 unction(title) %7B
-%0D
 %0A%09%09%09callback(sel
@@ -10757,39 +10757,35 @@
 ,title);
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ASort an
@@ -10821,33 +10821,32 @@
  specified field
-%0D
 %0A%09titles: array 
@@ -10864,33 +10864,32 @@
 sorted in place)
-%0D
 %0A%09sortField: nam
@@ -10901,33 +10901,32 @@
 field to sort by
-%0D
 %0A%09isDescending: 
@@ -10954,33 +10954,32 @@
 ld be descending
-%0D
 %0A%09isCaseSensitiv
@@ -11050,37 +11050,35 @@
  to be different
-%0D
 %0A*/
-%0D
 %0Aexports.sortTid
@@ -11159,33 +11159,32 @@
 sAlphaNumeric) %7B
-%0D
 %0A%09var self = thi
@@ -11177,33 +11177,32 @@
 var self = this;
-%0D
 %0A%09titles.sort(fu
@@ -11214,29 +11214,27 @@
 n(a,b) %7B
-%0D
 %0A%09%09var x,y,
-%0D
 %0A%09%09%09comp
@@ -11253,33 +11253,32 @@
  function(x,y) %7B
-%0D
 %0A%09%09%09%09var result 
@@ -11271,33 +11271,32 @@
 %09%09%09var result = 
-%0D
 %0A%09%09%09%09%09isNaN(x) &
@@ -11326,33 +11326,32 @@
 ding ? -1 : 1) :
-%0D
 %0A%09%09%09%09%09!isNaN(x) 
@@ -11381,33 +11381,32 @@
 ding ? 1 : -1) :
-%0D
 %0A%09%09%09%09%09%09%09%09%09%09%09(isD
@@ -11425,33 +11425,32 @@
 y - x :  x - y);
-%0D
 %0A%09%09%09%09return resu
@@ -11444,40 +11444,38 @@
 %09%09return result;
-%0D
 %0A%09%09%09%7D;
-%0D
 %0A%09%09if(sortField 
@@ -11480,33 +11480,32 @@
 d !== %22title%22) %7B
-%0D
 %0A%09%09%09var tiddlerA
@@ -11518,33 +11518,32 @@
 f.getTiddler(a),
-%0D
 %0A%09%09%09%09tiddlerB = 
@@ -11553,33 +11553,32 @@
 f.getTiddler(b);
-%0D
 %0A%09%09%09if(tiddlerA)
@@ -11571,33 +11571,32 @@
 %09%09if(tiddlerA) %7B
-%0D
 %0A%09%09%09%09a = tiddler
@@ -11621,49 +11621,45 @@
 %5D %7C%7C %22%22;
-%0D
 %0A%09%09%09%7D else %7B
-%0D
 %0A%09%09%09%09a = %22%22;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09if(t
@@ -11660,33 +11660,32 @@
 %09%09if(tiddlerB) %7B
-%0D
 %0A%09%09%09%09b = tiddler
@@ -11710,54 +11710,49 @@
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
@@ -11752,33 +11752,32 @@
 %09%09x = Number(a);
-%0D
 %0A%09%09y = Number(b)
@@ -11769,33 +11769,32 @@
 %09%09y = Number(b);
-%0D
 %0A%09%09if(isNumeric 
@@ -11815,33 +11815,32 @@
 %7C%7C !isNaN(y))) %7B
-%0D
 %0A%09%09%09return compa
@@ -11846,33 +11846,32 @@
 areNumbers(x,y);
-%0D
 %0A%09%09%7D else if(isA
@@ -11876,33 +11876,32 @@
 sAlphaNumeric) %7B
-%0D
 %0A%09%09%09return isDes
@@ -12034,33 +12034,32 @@
 ivity: %22base%22%7D);
-%0D
 %0A%09%09%7D else if($tw
@@ -12092,33 +12092,32 @@
 ils.isDate(b)) %7B
-%0D
 %0A%09%09%09return isDes
@@ -12132,45 +12132,43 @@
 ? b - a : a - b;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09a = String(a
@@ -12161,33 +12161,32 @@
 %09%09a = String(a);
-%0D
 %0A%09%09%09b = String(b
@@ -12179,33 +12179,32 @@
 %09%09b = String(b);
-%0D
 %0A%09%09%09if(!isCaseSe
@@ -12205,33 +12205,32 @@
 CaseSensitive) %7B
-%0D
 %0A%09%09%09%09a = a.toLow
@@ -12230,33 +12230,32 @@
 a.toLowerCase();
-%0D
 %0A%09%09%09%09b = b.toLow
@@ -12255,39 +12255,37 @@
 b.toLowerCase();
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09return isDes
@@ -12334,38 +12334,34 @@
 pare(b);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AFor eve
@@ -12448,33 +12448,32 @@
 Options include:
-%0D
 %0AsortField: fiel
@@ -12476,33 +12476,32 @@
 field to sort by
-%0D
 %0AexcludeTag: tag
@@ -12503,33 +12503,32 @@
 : tag to exclude
-%0D
 %0AincludeSystem: 
@@ -12573,37 +12573,35 @@
 faults to false)
-%0D
 %0A*/
-%0D
 %0Aexports.forEach
@@ -12646,32 +12646,30 @@
 ck */) %7B
-%0D
 %0A%09var arg = 0,
-%0D
 %0A%09%09optio
@@ -12711,33 +12711,32 @@
 nts%5Barg++%5D : %7B%7D,
-%0D
 %0A%09%09callback = ar
@@ -12742,33 +12742,32 @@
 rguments%5Barg++%5D,
-%0D
 %0A%09%09titles = this
@@ -12788,32 +12788,30 @@
 ptions),
-%0D
 %0A%09%09t, tiddler;
-%0D
 %0A%09for(t=
@@ -12828,33 +12828,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09tiddler = thi
@@ -12876,34 +12876,32 @@
 les%5Bt%5D);
-%0D
 %0A%09%09if(tiddler) %7B
-%0D
 %0A%09%09%09call
@@ -12945,36 +12945,32 @@
 iddler);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn 
@@ -13039,37 +13039,35 @@
 pecified tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -13086,33 +13086,32 @@
 unction(title) %7B
-%0D
 %0A%09var self = thi
@@ -13104,33 +13104,32 @@
 var self = this;
-%0D
 %0A%09// We'll cache
@@ -13179,33 +13179,32 @@
  tiddler changes
-%0D
 %0A%09return this.ge
@@ -13238,33 +13238,32 @@
 ks%22,function() %7B
-%0D
 %0A%09%09// Parse the 
@@ -13261,33 +13261,32 @@
 arse the tiddler
-%0D
 %0A%09%09var parser = 
@@ -13302,33 +13302,32 @@
 eTiddler(title);
-%0D
 %0A%09%09// Count up t
@@ -13326,33 +13326,32 @@
 unt up the links
-%0D
 %0A%09%09var links = %5B
@@ -13344,33 +13344,32 @@
 %09var links = %5B%5D,
-%0D
 %0A%09%09%09checkParseTr
@@ -13386,33 +13386,32 @@
 ion(parseTree) %7B
-%0D
 %0A%09%09%09%09for(var t=0
@@ -13430,33 +13430,32 @@
 e.length; t++) %7B
-%0D
 %0A%09%09%09%09%09var parseT
@@ -13469,33 +13469,32 @@
  = parseTree%5Bt%5D;
-%0D
 %0A%09%09%09%09%09if(parseTr
@@ -13590,33 +13590,32 @@
  === %22string%22) %7B
-%0D
 %0A%09%09%09%09%09%09var value
@@ -13643,33 +13643,32 @@
 ibutes.to.value;
-%0D
 %0A%09%09%09%09%09%09if(links.
@@ -13683,33 +13683,32 @@
 value) === -1) %7B
-%0D
 %0A%09%09%09%09%09%09%09links.pu
@@ -13717,34 +13717,31 @@
 (value);
-%0D
 %0A%09%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%09if
@@ -13758,33 +13758,32 @@
 Node.children) %7B
-%0D
 %0A%09%09%09%09%09%09checkPars
@@ -13812,55 +13812,50 @@
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
@@ -13878,55 +13878,50 @@
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
@@ -13973,37 +13973,35 @@
 pecified tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -14030,33 +14030,32 @@
 n(targetTitle) %7B
-%0D
 %0A%09var self = thi
@@ -14048,33 +14048,32 @@
 var self = this,
-%0D
 %0A%09%09backlinks = %5B
@@ -14066,33 +14066,32 @@
 %09backlinks = %5B%5D;
-%0D
 %0A%09this.forEachTi
@@ -14113,33 +14113,32 @@
 title,tiddler) %7B
-%0D
 %0A%09%09var links = s
@@ -14156,33 +14156,32 @@
 lerLinks(title);
-%0D
 %0A%09%09if(links.inde
@@ -14198,33 +14198,32 @@
 Title) !== -1) %7B
-%0D
 %0A%09%09%09backlinks.pu
@@ -14224,44 +14224,41 @@
 nks.push(title);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09return backlin
@@ -14252,43 +14252,41 @@
 eturn backlinks;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn a hashma
@@ -14401,37 +14401,35 @@
 er is referenced
-%0D
 %0A*/
-%0D
 %0Aexports.getMiss
@@ -14444,33 +14444,32 @@
 s = function() %7B
-%0D
 %0A%09var self = thi
@@ -14470,34 +14470,32 @@
  = this,
-%0D
 %0A%09%09missing = %5B%5D;
-%0D
 %0A// We s
@@ -14581,33 +14581,32 @@
 dler is modified
-%0D
 %0A%09this.forEachTi
@@ -14628,33 +14628,32 @@
 title,tiddler) %7B
-%0D
 %0A%09%09var links = s
@@ -14671,33 +14671,32 @@
 lerLinks(title);
-%0D
 %0A%09%09$tw.utils.eac
@@ -14711,33 +14711,32 @@
 function(link) %7B
-%0D
 %0A%09%09%09if((!self.ti
@@ -14811,33 +14811,32 @@
 (link) === -1) %7B
-%0D
 %0A%09%09%09%09missing.pus
@@ -14843,36 +14843,32 @@
 h(link);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D);
-%0D
 %0A%09return
@@ -14868,33 +14868,32 @@
 %09return missing;
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -14913,33 +14913,32 @@
 s = function() %7B
-%0D
 %0A%09var self = thi
@@ -14931,33 +14931,32 @@
 var self = this,
-%0D
 %0A%09%09orphans = thi
@@ -14963,33 +14963,32 @@
 s.getTiddlers();
-%0D
 %0A%09this.forEachTi
@@ -15010,33 +15010,32 @@
 title,tiddler) %7B
-%0D
 %0A%09%09var links = s
@@ -15053,33 +15053,32 @@
 lerLinks(title);
-%0D
 %0A%09%09$tw.utils.eac
@@ -15093,33 +15093,32 @@
 function(link) %7B
-%0D
 %0A%09%09%09var p = orph
@@ -15127,33 +15127,32 @@
 s.indexOf(link);
-%0D
 %0A%09%09%09if(p !== -1)
@@ -15145,33 +15145,32 @@
 %09%09if(p !== -1) %7B
-%0D
 %0A%09%09%09%09orphans.spl
@@ -15178,36 +15178,32 @@
 ce(p,1);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D);
-%0D
 %0A%09return
@@ -15211,43 +15211,41 @@
 orphans; // Todo
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ARetrieves a lis
@@ -15292,37 +15292,35 @@
 with a given tag
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -15340,33 +15340,32 @@
  function(tag) %7B
-%0D
 %0A%09// Try to use 
@@ -15367,33 +15367,32 @@
  use the indexer
-%0D
 %0A%09var self = thi
@@ -15385,33 +15385,32 @@
 var self = this,
-%0D
 %0A%09%09tagIndexer = 
@@ -15431,33 +15431,32 @@
 r(%22TagIndexer%22),
-%0D
 %0A%09%09results = tag
@@ -15504,34 +15504,32 @@
 up(tag);
-%0D
 %0A%09if(!results) %7B
-%0D
 %0A%09%09// If
@@ -15557,33 +15557,32 @@
 rm a manual scan
-%0D
 %0A%09%09results = thi
@@ -15619,33 +15619,32 @@
 tag,function() %7B
-%0D
 %0A%09%09%09var tagmap =
@@ -15653,33 +15653,32 @@
 elf.getTagMap();
-%0D
 %0A%09%09%09return self.
@@ -15697,44 +15697,41 @@
 agmap%5Btag%5D,tag);
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D
-%0D
 %0A%09return results
@@ -15723,43 +15723,41 @@
 %09return results;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AGet a hashmap b
@@ -15781,37 +15781,35 @@
 f tiddler titles
-%0D
 %0A*/
-%0D
 %0Aexports.getTagM
@@ -15817,33 +15817,32 @@
 p = function() %7B
-%0D
 %0A%09var self = thi
@@ -15835,33 +15835,32 @@
 var self = this;
-%0D
 %0A%09return this.ge
@@ -15885,33 +15885,32 @@
 ap%22,function() %7B
-%0D
 %0A%09%09var tags = Ob
@@ -15919,33 +15919,32 @@
 ct.create(null),
-%0D
 %0A%09%09%09storeTags = 
@@ -15961,33 +15961,32 @@
 agArray,title) %7B
-%0D
 %0A%09%09%09%09if(tagArray
@@ -15980,33 +15980,32 @@
 %09%09if(tagArray) %7B
-%0D
 %0A%09%09%09%09%09for(var in
@@ -16036,33 +16036,32 @@
 ngth; index++) %7B
-%0D
 %0A%09%09%09%09%09%09var tag =
@@ -16069,33 +16069,32 @@
 tagArray%5Bindex%5D;
-%0D
 %0A%09%09%09%09%09%09if($tw.ut
@@ -16105,33 +16105,32 @@
 hop(tags,tag)) %7B
-%0D
 %0A%09%09%09%09%09%09%09tags%5Btag
@@ -16143,33 +16143,31 @@
 (title);
-%0D
 %0A%09%09%09%09%09%09%7D else %7B
-%0D
 %0A%09%09%09%09%09%09%09
@@ -16186,48 +16186,43 @@
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
@@ -16224,33 +16224,32 @@
 %09title, tiddler;
-%0D
 %0A%09%09// Collect up
@@ -16253,33 +16253,32 @@
  up all the tags
-%0D
 %0A%09%09self.eachShad
@@ -16297,33 +16297,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09%09if(!self.tid
@@ -16333,33 +16333,32 @@
 Exists(title)) %7B
-%0D
 %0A%09%09%09%09tiddler = s
@@ -16371,33 +16371,32 @@
 tTiddler(title);
-%0D
 %0A%09%09%09%09storeTags(t
@@ -16413,46 +16413,43 @@
 lds.tags,title);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09self.each(fun
@@ -16462,33 +16462,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09%09storeTags(ti
@@ -16511,56 +16511,51 @@
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
@@ -16643,37 +16643,35 @@
 ified list field
-%0D
 %0A*/
-%0D
 %0Aexports.findLis
@@ -16712,33 +16712,32 @@
 tle,fieldName) %7B
-%0D
 %0A%09fieldName = fi
@@ -16746,33 +16746,32 @@
 dName %7C%7C %22list%22;
-%0D
 %0A%09var titles = %5B
@@ -16764,33 +16764,32 @@
 var titles = %5B%5D;
-%0D
 %0A%09this.each(func
@@ -16801,33 +16801,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09var list = $t
@@ -16869,33 +16869,32 @@
 lds%5BfieldName%5D);
-%0D
 %0A%09%09if(list && li
@@ -16918,33 +16918,32 @@
 Title) !== -1) %7B
-%0D
 %0A%09%09%09titles.push(
@@ -16949,55 +16949,50 @@
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
@@ -17037,37 +17037,35 @@
  an ordered list
-%0D
 %0A*/
-%0D
 %0Aexports.sortByL
@@ -17089,33 +17089,32 @@
 ray,listTitle) %7B
-%0D
 %0A%09var self = thi
@@ -17107,33 +17107,32 @@
 var self = this,
-%0D
 %0A%09%09replacedTitle
@@ -17147,33 +17147,32 @@
 ct.create(null);
-%0D
 %0A%09function repla
@@ -17178,33 +17178,32 @@
 aceItem(title) %7B
-%0D
 %0A%09%09if(!$tw.utils
@@ -17224,33 +17224,32 @@
 itles, title)) %7B
-%0D
 %0A%09%09%09replacedTitl
@@ -17257,33 +17257,32 @@
 s%5Btitle%5D = true;
-%0D
 %0A%09%09%09var newPos =
@@ -17277,33 +17277,32 @@
 var newPos = -1,
-%0D
 %0A%09%09%09%09tiddler = s
@@ -17315,33 +17315,32 @@
 tTiddler(title);
-%0D
 %0A%09%09%09if(tiddler) 
@@ -17332,33 +17332,32 @@
 %09%09%09if(tiddler) %7B
-%0D
 %0A%09%09%09%09var beforeT
@@ -17385,33 +17385,32 @@
 %5B%22list-before%22%5D,
-%0D
 %0A%09%09%09%09%09afterTitle
@@ -17433,33 +17433,32 @@
 s%5B%22list-after%22%5D;
-%0D
 %0A%09%09%09%09if(beforeTi
@@ -17462,33 +17462,32 @@
 eTitle === %22%22) %7B
-%0D
 %0A%09%09%09%09%09newPos = 0
@@ -17479,33 +17479,32 @@
 %09%09%09%09%09newPos = 0;
-%0D
 %0A%09%09%09%09%7D else if(a
@@ -17514,33 +17514,32 @@
 rTitle === %22%22) %7B
-%0D
 %0A%09%09%09%09%09newPos = t
@@ -17543,33 +17543,32 @@
 = titles.length;
-%0D
 %0A%09%09%09%09%7D else if(b
@@ -17572,33 +17572,32 @@
 f(beforeTitle) %7B
-%0D
 %0A%09%09%09%09%09replaceIte
@@ -17603,33 +17603,32 @@
 em(beforeTitle);
-%0D
 %0A%09%09%09%09%09newPos = t
@@ -17646,33 +17646,32 @@
 Of(beforeTitle);
-%0D
 %0A%09%09%09%09%7D else if(a
@@ -17674,33 +17674,32 @@
 if(afterTitle) %7B
-%0D
 %0A%09%09%09%09%09replaceIte
@@ -17704,33 +17704,32 @@
 tem(afterTitle);
-%0D
 %0A%09%09%09%09%09newPos = t
@@ -17746,33 +17746,32 @@
 xOf(afterTitle);
-%0D
 %0A%09%09%09%09%09if(newPos 
@@ -17777,49 +17777,45 @@
  %3E= 0) %7B
-%0D
 %0A%09%09%09%09%09%09++newPos;
-%0D
 %0A%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%09// 
@@ -17923,33 +17923,32 @@
  title's currPos
-%0D
 %0A%09%09%09%09var currPos
@@ -17964,33 +17964,32 @@
 .indexOf(title);
-%0D
 %0A%09%09%09%09if(newPos =
@@ -17988,33 +17988,32 @@
 newPos === -1) %7B
-%0D
 %0A%09%09%09%09%09newPos = c
@@ -18011,40 +18011,38 @@
 ewPos = currPos;
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%09if(currPos 
@@ -18062,33 +18062,32 @@
 s !== currPos) %7B
-%0D
 %0A%09%09%09%09%09titles.spl
@@ -18093,33 +18093,32 @@
 lice(currPos,1);
-%0D
 %0A%09%09%09%09%09if(newPos 
@@ -18130,42 +18130,39 @@
 rrPos) %7B
-%0D
 %0A%09%09%09%09%09%09newPos--;
-%0D
 %0A%09%09%09%09%09%7D
-%0D
 %0A%09%09%09%09%09ti
@@ -18189,39 +18189,34 @@
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
@@ -18243,33 +18243,32 @@
 List(listTitle);
-%0D
 %0A%09if(!array %7C%7C a
@@ -18287,42 +18287,39 @@
 === 0) %7B
-%0D
 %0A%09%09return %5B%5D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09var t
@@ -18331,33 +18331,32 @@
  = %5B%5D, t, title;
-%0D
 %0A%09%09// First plac
@@ -18389,33 +18389,32 @@
 sent in the list
-%0D
 %0A%09%09for(t=0; t%3Cli
@@ -18422,33 +18422,32 @@
 t.length; t++) %7B
-%0D
 %0A%09%09%09title = list
@@ -18442,33 +18442,32 @@
 title = list%5Bt%5D;
-%0D
 %0A%09%09%09if(array.ind
@@ -18479,33 +18479,32 @@
 title) !== -1) %7B
-%0D
 %0A%09%09%09%09titles.push
@@ -18503,44 +18503,41 @@
 les.push(title);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09// Then place
@@ -18550,33 +18550,32 @@
 emaining entries
-%0D
 %0A%09%09for(t=0; t%3Car
@@ -18584,33 +18584,32 @@
 y.length; t++) %7B
-%0D
 %0A%09%09%09title = arra
@@ -18605,33 +18605,32 @@
 itle = array%5Bt%5D;
-%0D
 %0A%09%09%09if(list.inde
@@ -18641,33 +18641,32 @@
 title) === -1) %7B
-%0D
 %0A%09%09%09%09titles.push
@@ -18665,44 +18665,41 @@
 les.push(title);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09// Finally ob
@@ -18754,33 +18754,32 @@
  tiddler in turn
-%0D
 %0A%09%09var sortedTit
@@ -18792,33 +18792,32 @@
 titles.slice(0);
-%0D
 %0A%09%09for(t=0; t%3Cso
@@ -18833,33 +18833,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09%09title = sort
@@ -18861,33 +18861,32 @@
 sortedTitles%5Bt%5D;
-%0D
 %0A%09%09%09replaceItem(
@@ -18884,38 +18884,36 @@
 laceItem(title);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09return titles
@@ -18905,37 +18905,35 @@
 %09%09return titles;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -18972,33 +18972,32 @@
 bTiddlerTitle) %7B
-%0D
 %0A%09var bundleInfo
@@ -19053,33 +19053,32 @@
 taCached(title);
-%0D
 %0A%09if(bundleInfo 
@@ -19094,33 +19094,32 @@
 Info.tiddlers) %7B
-%0D
 %0A%09%09var subTiddle
@@ -19151,33 +19151,32 @@
 ubTiddlerTitle%5D;
-%0D
 %0A%09%09if(subTiddler
@@ -19170,33 +19170,32 @@
 if(subTiddler) %7B
-%0D
 %0A%09%09%09return new $
@@ -19217,51 +19217,46 @@
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
@@ -19289,37 +19289,35 @@
 ng of the fields
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -19337,33 +19337,32 @@
 unction(title) %7B
-%0D
 %0A%09var tiddler = 
@@ -19384,33 +19384,31 @@
 (title);
-%0D
 %0A%09if(tiddler) %7B
-%0D
 %0A%09%09var f
@@ -19427,33 +19427,32 @@
 ct.create(null);
-%0D
 %0A%09%09$tw.utils.eac
@@ -19482,33 +19482,32 @@
 on(value,name) %7B
-%0D
 %0A%09%09%09fields%5Bname%5D
@@ -19530,40 +19530,38 @@
 eldString(name);
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09return JSON.s
@@ -19569,44 +19569,42 @@
 ringify(fields);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return JSON.s
@@ -19620,37 +19620,35 @@
 %7Btitle: title%7D);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.g
@@ -19676,33 +19676,32 @@
 nction(filter) %7B
-%0D
 %0A%09var tiddlers =
@@ -19729,31 +19729,29 @@
 filter),
-%0D
 %0A%09%09data = %5B%5D;
-%0D
 %0A%09for(va
@@ -19773,33 +19773,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09var tiddler =
@@ -19827,34 +19827,32 @@
 ers%5Bt%5D);
-%0D
 %0A%09%09if(tiddler) %7B
-%0D
 %0A%09%09%09var 
@@ -19865,33 +19865,32 @@
  = new Object();
-%0D
 %0A%09%09%09for(var fiel
@@ -19903,33 +19903,32 @@
 iddler.fields) %7B
-%0D
 %0A%09%09%09%09fields%5Bfiel
@@ -19954,39 +19954,37 @@
 ldString(field);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09data.push(fi
@@ -19981,42 +19981,39 @@
 ta.push(fields);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09return JSON.st
@@ -20057,43 +20057,41 @@
 ces.jsonSpaces);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AGet the content
@@ -20235,33 +20235,32 @@
 d into an object
-%0D
 %0Aapplication/x-t
@@ -20426,33 +20426,32 @@
 a tiddler object
-%0D
 %0AdefaultData: de
@@ -20704,37 +20704,35 @@
 e to all callers
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -20777,33 +20777,32 @@
 r,defaultData) %7B
-%0D
 %0A%09var self = thi
@@ -20795,33 +20795,32 @@
 var self = this,
-%0D
 %0A%09%09tiddler = tit
@@ -20823,33 +20823,32 @@
  titleOrTiddler;
-%0D
 %0A%09if(!(tiddler i
@@ -20864,33 +20864,32 @@
  $tw.Tiddler)) %7B
-%0D
 %0A%09%09tiddler = thi
@@ -20911,37 +20911,34 @@
 ddler);%09
-%0D
 %0A%09%7D
-%0D
 %0A%09if(tiddler) %7B
-%0D
 %0A%09%09retur
@@ -20995,33 +20995,32 @@
 ta%22,function() %7B
-%0D
 %0A%09%09%09// Return th
@@ -21025,33 +21025,32 @@
 the frozen value
-%0D
 %0A%09%09%09var value = 
@@ -21093,33 +21093,32 @@
 itle,undefined);
-%0D
 %0A%09%09%09$tw.utils.de
@@ -21125,33 +21125,32 @@
 epFreeze(value);
-%0D
 %0A%09%09%09return value
@@ -21142,33 +21142,32 @@
 %09%09%09return value;
-%0D
 %0A%09%09%7D) %7C%7C default
@@ -21163,44 +21163,42 @@
  %7C%7C defaultData;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return defaul
@@ -21195,47 +21195,44 @@
 urn defaultData;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AAlternative, un
@@ -21314,37 +21314,35 @@
 reely and reused
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -21381,33 +21381,32 @@
 r,defaultData) %7B
-%0D
 %0A%09var tiddler = 
@@ -21420,26 +21420,24 @@
 Tiddler,
-%0D
 %0A%09%09data;
-%0D
 %0A%09if(!(t
@@ -21461,33 +21461,32 @@
  $tw.Tiddler)) %7B
-%0D
 %0A%09%09tiddler = thi
@@ -21500,37 +21500,35 @@
 ddler(tiddler);%09
-%0D
 %0A%09%7D
-%0D
 %0A%09if(tiddler && 
@@ -21541,33 +21541,32 @@
 r.fields.text) %7B
-%0D
 %0A%09%09switch(tiddle
@@ -21573,33 +21573,32 @@
 r.fields.type) %7B
-%0D
 %0A%09%09%09case %22applic
@@ -21601,33 +21601,32 @@
 plication/json%22:
-%0D
 %0A%09%09%09%09// JSON tid
@@ -21629,74 +21629,214 @@
  tiddler
-%0D%0A%09%09%09%09try %7B%0D%0A%09%09%09%09%09data = JSON.parse(tiddler.fields.text);%0D
+%0A                try %7B%0A%09%09%09%09%09if($tw.utils.jsonIsValid(tiddler))%7B%0A%09%09%09%09%09%09data = JSON.parse(tiddler.fields.text);%0A%09%09%09%09%09%7D%0A%09%09%09%09%09else %7Bthrow %22Invalid application/json tiddler text: %22+tiddler.fields.title;%7D
 %0A%09%09%09%09%7D c
@@ -21837,33 +21837,32 @@
 %09%09%09%7D catch(ex) %7B
-%0D
 %0A%09%09%09%09%09return def
@@ -21862,40 +21862,38 @@
 urn defaultData;
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%09return data
@@ -21885,33 +21885,32 @@
 %09%09%09%09return data;
-%0D
 %0A%09%09%09case %22applic
@@ -21929,33 +21929,32 @@
 ler-dictionary%22:
-%0D
 %0A%09%09%09%09return $tw.
@@ -21984,42 +21984,39 @@
 er.fields.text);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09return default
@@ -22012,43 +22012,41 @@
 urn defaultData;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AExtract an inde
@@ -22073,37 +22073,35 @@
 n a data tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.extract
@@ -22154,33 +22154,32 @@
 x,defaultText) %7B
-%0D
 %0A%09var data = thi
@@ -22237,28 +22237,33 @@
 (null)),
-%0D
 %0A%09%09text;
-%0D%0A%09
+%0A        
 if(data 
@@ -22275,62 +22275,91 @@
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
@@ -22402,33 +22402,32 @@
  === %22number%22) %7B
-%0D
 %0A%09%09return text.t
@@ -22428,44 +22428,42 @@
 text.toString();
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return defaul
@@ -22460,47 +22460,44 @@
 urn defaultText;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ASet a tiddlers 
@@ -22645,33 +22645,32 @@
 ext of the data.
-%0D
 %0Atitle: title of
@@ -22669,33 +22669,32 @@
 title of tiddler
-%0D
 %0Adata: object th
@@ -22713,33 +22713,32 @@
 rialised to JSON
-%0D
 %0Afields: optiona
@@ -22777,37 +22777,35 @@
 fields to be set
-%0D
 %0A*/
-%0D
 %0Aexports.setTidd
@@ -22835,33 +22835,32 @@
 e,data,fields) %7B
-%0D
 %0A%09var existingTi
@@ -22890,56 +22890,52 @@
 (title),
-%0D
 %0A%09%09newFields = %7B
-%0D
 %0A%09%09%09title: title
-%0D
 %0A%09%7D;
-%0D
 %0A%09if(exi
@@ -23011,33 +23011,32 @@
 r-dictionary%22) %7B
-%0D
 %0A%09%09newFields.tex
@@ -23069,44 +23069,42 @@
 ictionary(data);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09newFields.typ
@@ -23118,33 +23118,32 @@
 plication/json%22;
-%0D
 %0A%09%09newFields.tex
@@ -23198,37 +23198,35 @@
 ces.jsonSpaces);
-%0D
 %0A%09%7D
-%0D
 %0A%09this.addTiddle
@@ -23324,43 +23324,41 @@
 ationFields()));
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn the cont
@@ -23398,37 +23398,35 @@
 aining each line
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -23464,31 +23464,29 @@
 index) %7B
-%0D
 %0A%09if(index) %7B
-%0D
 %0A%09%09retur
@@ -23551,37 +23551,35 @@
 itle,index,%22%22));
-%0D
 %0A%09%7D
-%0D
 %0A%09field = field 
@@ -23580,33 +23580,32 @@
 field %7C%7C %22list%22;
-%0D
 %0A%09var tiddler = 
@@ -23627,33 +23627,31 @@
 (title);
-%0D
 %0A%09if(tiddler) %7B
-%0D
 %0A%09%09retur
@@ -23719,34 +23719,31 @@
 lice(0);
-%0D
 %0A%09%7D
-%0D
 %0A%09return %5B%5D;
-%0D
 %0A%7D;%0D%0A%0D%0A/
@@ -23837,33 +23837,32 @@
 er change occurs
-%0D
 %0Aexports.getGlob
@@ -23896,33 +23896,32 @@
 e,initializer) %7B
-%0D
 %0A%09this.globalCac
@@ -23957,33 +23957,32 @@
 ct.create(null);
-%0D
 %0A%09if($tw.utils.h
@@ -24006,33 +24006,32 @@
 he,cacheName)) %7B
-%0D
 %0A%09%09return this.g
@@ -24044,44 +24044,42 @@
 ache%5BcacheName%5D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09this.globalCa
@@ -24101,33 +24101,32 @@
 = initializer();
-%0D
 %0A%09%09return this.g
@@ -24139,37 +24139,35 @@
 ache%5BcacheName%5D;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.c
@@ -24188,33 +24188,32 @@
 e = function() %7B
-%0D
 %0A%09this.globalCac
@@ -24229,33 +24229,32 @@
 ct.create(null);
-%0D
 %0A%7D;%0D%0A%0D%0A// Return
@@ -24364,33 +24364,32 @@
 ked to create it
-%0D
 %0Aexports.getCach
@@ -24433,33 +24433,32 @@
 e,initializer) %7B
-%0D
 %0A%09this.caches = 
@@ -24484,33 +24484,32 @@
 ct.create(null);
-%0D
 %0A%09var caches = t
@@ -24518,33 +24518,32 @@
 s.caches%5Btitle%5D;
-%0D
 %0A%09if(caches && c
@@ -24553,33 +24553,32 @@
 es%5BcacheName%5D) %7B
-%0D
 %0A%09%09return caches
@@ -24589,45 +24589,42 @@
 heName%5D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09if(!caches) %7B
-%0D
 %0A%09%09%09cach
@@ -24640,33 +24640,32 @@
 ct.create(null);
-%0D
 %0A%09%09%09this.caches%5B
@@ -24672,38 +24672,36 @@
 title%5D = caches;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09caches%5BcacheN
@@ -24713,33 +24713,32 @@
 = initializer();
-%0D
 %0A%09%09return caches
@@ -24741,37 +24741,35 @@
 ches%5BcacheName%5D;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A// Clear 
@@ -24876,33 +24876,32 @@
 all the tiddlers
-%0D
 %0Aexports.clearCa
@@ -24923,31 +24923,29 @@
 title) %7B
-%0D
 %0A%09if(title) %7B
-%0D
 %0A%09%09this.
@@ -24980,33 +24980,32 @@
 ct.create(null);
-%0D
 %0A%09%09if($tw.utils.
@@ -25021,33 +25021,32 @@
 caches,title)) %7B
-%0D
 %0A%09%09%09delete this.
@@ -25059,33 +25059,30 @@
 %5Btitle%5D;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09this.
@@ -25102,37 +25102,35 @@
 ct.create(null);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0Aexports.i
@@ -25156,33 +25156,32 @@
 on(moduleType) %7B
-%0D
 %0A%09// Install the
@@ -25187,33 +25187,32 @@
 e parser modules
-%0D
 %0A%09$tw.Wiki.parse
@@ -25211,33 +25211,32 @@
 ki.parsers = %7B%7D;
-%0D
 %0A%09var self = thi
@@ -25229,33 +25229,32 @@
 var self = this;
-%0D
 %0A%09$tw.modules.fo
@@ -25296,33 +25296,32 @@
 (title,module) %7B
-%0D
 %0A%09%09for(var f in 
@@ -25321,33 +25321,32 @@
 r f in module) %7B
-%0D
 %0A%09%09%09if($tw.utils
@@ -25354,33 +25354,32 @@
 hop(module,f)) %7B
-%0D
 %0A%09%09%09%09$tw.Wiki.pa
@@ -25425,34 +25425,30 @@
 er class
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09// Use
@@ -25508,33 +25508,32 @@
 egistered so far
-%0D
 %0A%09if($tw.Wiki.pa
@@ -25560,33 +25560,32 @@
 ctet-stream%22%5D) %7B
-%0D
 %0A%09%09Object.keys($
@@ -25627,33 +25627,32 @@
 function(type) %7B
-%0D
 %0A%09%09%09if(!$tw.util
@@ -25732,33 +25732,32 @@
  === %22base64%22) %7B
-%0D
 %0A%09%09%09%09$tw.Wiki.pa
@@ -25815,46 +25815,41 @@
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
@@ -25879,33 +25879,32 @@
 cified MIME type
-%0D
 %0A%09type: content 
@@ -25928,30 +25928,28 @@
 e parsed
-%0D
 %0A%09text: text
-%0D
 %0A%09option
@@ -25952,33 +25952,32 @@
 tions: see below
-%0D
 %0AOptions include
@@ -25969,33 +25969,32 @@
 Options include:
-%0D
 %0A%09parseAsInline:
@@ -26050,33 +26050,32 @@
 as an inline run
-%0D
 %0A%09_canonical_uri
@@ -26120,37 +26120,35 @@
  of this content
-%0D
 %0A*/
-%0D
 %0Aexports.parseTe
@@ -26173,33 +26173,32 @@
 ,text,options) %7B
-%0D
 %0A%09text = text %7C%7C
@@ -26193,33 +26193,32 @@
 xt = text %7C%7C %22%22;
-%0D
 %0A%09options = opti
@@ -26219,33 +26219,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09// Select a pa
@@ -26239,33 +26239,32 @@
  Select a parser
-%0D
 %0A%09var Parser = $
@@ -26277,33 +26277,32 @@
 i.parsers%5Btype%5D;
-%0D
 %0A%09if(!Parser && 
@@ -26332,33 +26332,32 @@
 ionInfo(type)) %7B
-%0D
 %0A%09%09Parser = $tw.
@@ -26412,37 +26412,34 @@
 ).type%5D;
-%0D
 %0A%09%7D
-%0D
 %0A%09if(!Parser) %7B
-%0D
 %0A%09%09Parse
@@ -26505,57 +26505,52 @@
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
@@ -26564,33 +26564,32 @@
  parser instance
-%0D
 %0A%09return new Par
@@ -26595,33 +26595,32 @@
 rser(type,text,%7B
-%0D
 %0A%09%09parseAsInline
@@ -26643,32 +26643,30 @@
 sInline,
-%0D
 %0A%09%09wiki: this,
-%0D
 %0A%09%09_cano
@@ -26698,33 +26698,30 @@
 ical_uri
-%0D
 %0A%09%7D);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AParse a
@@ -26747,37 +26747,35 @@
 to its MIME type
-%0D
 %0A*/
-%0D
 %0Aexports.parseTi
@@ -26799,33 +26799,32 @@
 title,options) %7B
-%0D
 %0A%09options = $tw.
@@ -26840,33 +26840,32 @@
 end(%7B%7D,options);
-%0D
 %0A%09var cacheType 
@@ -26919,33 +26919,32 @@
 blockParseTree%22,
-%0D
 %0A%09%09tiddler = thi
@@ -26963,33 +26963,31 @@
 (title),
-%0D
 %0A%09%09self = this;
-%0D
 %0A%09return
@@ -27041,33 +27041,32 @@
 ype,function() %7B
-%0D
 %0A%09%09%09if(tiddler.h
@@ -27085,33 +27085,32 @@
 nonical_uri%22)) %7B
-%0D
 %0A%09%09%09%09options._ca
@@ -27145,39 +27145,37 @@
 ._canonical_uri;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09return self.
@@ -27233,31 +27233,29 @@
 ptions);
-%0D
 %0A%09%09%7D) : null;
-%0D
 %0A%7D;%0D%0A%0D%0Ae
@@ -27311,33 +27311,32 @@
 index,options) %7B
-%0D
 %0A%09var tiddler,te
@@ -27330,33 +27330,32 @@
 ar tiddler,text;
-%0D
 %0A%09if(options.sub
@@ -27356,33 +27356,32 @@
 ns.subTiddler) %7B
-%0D
 %0A%09%09tiddler = thi
@@ -27414,44 +27414,42 @@
 ons.subTiddler);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09tiddler = thi
@@ -27460,33 +27460,32 @@
 tTiddler(title);
-%0D
 %0A%09%09if(field === 
@@ -27507,33 +27507,32 @@
 ld && !index)) %7B
-%0D
 %0A%09%09%09this.getTidd
@@ -27579,33 +27579,32 @@
 be lazily loaded
-%0D
 %0A%09%09%09return this.
@@ -27623,42 +27623,39 @@
 (title,options);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09if(field === %22
@@ -27676,33 +27676,32 @@
 ld && !index)) %7B
-%0D
 %0A%09%09if(tiddler &&
@@ -27710,33 +27710,32 @@
 iddler.fields) %7B
-%0D
 %0A%09%09%09return this.
@@ -27796,51 +27796,47 @@
 ons);%09%09%09
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09return null;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D else
@@ -27839,33 +27839,32 @@
 else if(field) %7B
-%0D
 %0A%09%09if(field === 
@@ -27865,33 +27865,32 @@
 d === %22title%22) %7B
-%0D
 %0A%09%09%09text = title
@@ -27882,45 +27882,43 @@
 %09%09%09text = title;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09if(!tiddler 
@@ -27939,33 +27939,32 @@
 sField(field)) %7B
-%0D
 %0A%09%09%09%09return null
@@ -27956,39 +27956,37 @@
 %09%09%09%09return null;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09text = tiddl
@@ -27994,38 +27994,36 @@
 r.fields%5Bfield%5D;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09return this.p
@@ -28070,33 +28070,32 @@
 ring(),options);
-%0D
 %0A%09%7D else if(inde
@@ -28090,33 +28090,32 @@
 else if(index) %7B
-%0D
 %0A%09%09this.getTiddl
@@ -28161,33 +28161,32 @@
 be lazily loaded
-%0D
 %0A%09%09text = this.e
@@ -28224,33 +28224,32 @@
 ndex,undefined);
-%0D
 %0A%09%09if(text === u
@@ -28259,39 +28259,36 @@
 fined) %7B
-%0D
 %0A%09%09%09return null;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09retur
@@ -28332,47 +28332,44 @@
 %22,text,options);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AMake a widget t
@@ -28380,33 +28380,32 @@
 for a parse tree
-%0D
 %0Aparser: parser 
@@ -28402,33 +28402,32 @@
 r: parser object
-%0D
 %0Aoptions: see be
@@ -28421,33 +28421,32 @@
 tions: see below
-%0D
 %0AOptions include
@@ -28438,33 +28438,32 @@
 Options include:
-%0D
 %0Adocument: optio
@@ -28473,33 +28473,32 @@
  document to use
-%0D
 %0Avariables: hash
@@ -28512,33 +28512,32 @@
 variables to set
-%0D
 %0AparentWidget: o
@@ -28567,37 +28567,35 @@
 or the root node
-%0D
 %0A*/
-%0D
 %0Aexports.makeWid
@@ -28618,33 +28618,32 @@
 arser,options) %7B
-%0D
 %0A%09options = opti
@@ -28644,33 +28644,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var widgetNode
@@ -28664,33 +28664,32 @@
 r widgetNode = %7B
-%0D
 %0A%09%09%09type: %22widge
@@ -28691,40 +28691,37 @@
 widget%22,
-%0D
 %0A%09%09%09children: %5B%5D
-%0D
 %0A%09%09%7D,
-%0D
 %0A%09%09currW
@@ -28735,33 +28735,32 @@
 de = widgetNode;
-%0D
 %0A%09// Create set 
@@ -28785,33 +28785,32 @@
 or each variable
-%0D
 %0A%09$tw.utils.each
@@ -28842,33 +28842,32 @@
 on(value,name) %7B
-%0D
 %0A%09%09var setVariab
@@ -28878,34 +28878,32 @@
 dget = %7B
-%0D
 %0A%09%09%09type: %22set%22,
-%0D
 %0A%09%09%09attr
@@ -28903,33 +28903,32 @@
 %09%09%09attributes: %7B
-%0D
 %0A%09%09%09%09name: %7Btype
@@ -28944,33 +28944,32 @@
 %22, value: name%7D,
-%0D
 %0A%09%09%09%09value: %7Btyp
@@ -28994,47 +28994,43 @@
 : value%7D
-%0D
 %0A%09%09%09%7D,
-%0D
 %0A%09%09%09children: %5B%5D
-%0D
 %0A%09%09%7D;
-%0D
 %0A%09%09currW
@@ -29062,33 +29062,32 @@
 VariableWidget%5D;
-%0D
 %0A%09%09currWidgetNod
@@ -29100,39 +29100,37 @@
 tVariableWidget;
-%0D
 %0A%09%7D);
-%0D
 %0A%09// Add in the 
@@ -29146,33 +29146,32 @@
 parse tree nodes
-%0D
 %0A%09currWidgetNode
@@ -29200,33 +29200,32 @@
 arser.tree : %5B%5D;
-%0D
 %0A%09// Create the 
@@ -29222,33 +29222,32 @@
 reate the widget
-%0D
 %0A%09return new wid
@@ -29269,32 +29269,30 @@
 etNode,%7B
-%0D
 %0A%09%09wiki: this,
-%0D
 %0A%09%09docum
@@ -29325,33 +29325,32 @@
 tw.fakeDocument,
-%0D
 %0A%09%09parentWidget:
@@ -29370,33 +29370,30 @@
 ntWidget
-%0D
 %0A%09%7D);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AMake a 
@@ -29412,33 +29412,32 @@
 for transclusion
-%0D
 %0Atitle: target t
@@ -29440,33 +29440,32 @@
 et tiddler title
-%0D
 %0Aoptions: as for
@@ -29480,33 +29480,32 @@
 keWidget() plus:
-%0D
 %0Aoptions.field: 
@@ -29545,33 +29545,32 @@
 aults to %22text%22)
-%0D
 %0Aoptions.mode: t
@@ -29597,33 +29597,32 @@
 line%22 or %22block%22
-%0D
 %0Aoptions.childre
@@ -29668,33 +29668,32 @@
 ransclude widget
-%0D
 %0Aoptions.importV
@@ -29758,33 +29758,32 @@
 s to be included
-%0D
 %0Aoptions.importP
@@ -29944,37 +29944,35 @@
 .importVariables
-%0D
 %0A*/
-%0D
 %0Aexports.makeTra
@@ -30004,33 +30004,32 @@
 title,options) %7B
-%0D
 %0A%09options = opti
@@ -30030,33 +30030,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var parseTreeD
@@ -30060,33 +30060,32 @@
 eDiv = %7Btree: %5B%7B
-%0D
 %0A%09%09%09type: %22eleme
@@ -30088,33 +30088,31 @@
 lement%22,
-%0D
 %0A%09%09%09tag: %22div%22,
-%0D
 %0A%09%09%09chil
@@ -30115,33 +30115,32 @@
 children: %5B%5D%7D%5D%7D,
-%0D
 %0A%09%09parseTreeImpo
@@ -30146,33 +30146,32 @@
 ortVariables = %7B
-%0D
 %0A%09%09%09type: %22impor
@@ -30174,33 +30174,32 @@
 mportvariables%22,
-%0D
 %0A%09%09%09attributes: 
@@ -30199,32 +30199,30 @@
 butes: %7B
-%0D
 %0A%09%09%09%09filter: %7B
-%0D
 %0A%09%09%09%09%09na
@@ -30226,33 +30226,32 @@
 %09name: %22filter%22,
-%0D
 %0A%09%09%09%09%09type: %22str
@@ -30254,31 +30254,28 @@
 %22string%22
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%7D,
-%0D
 %0A%09%09%09isBl
@@ -30277,33 +30277,32 @@
 %09isBlock: false,
-%0D
 %0A%09%09%09children: %5B%5D
@@ -30295,33 +30295,32 @@
 %09%09children: %5B%5D%7D,
-%0D
 %0A%09%09parseTreeTran
@@ -30321,33 +30321,32 @@
 eeTransclude = %7B
-%0D
 %0A%09%09%09type: %22trans
@@ -30344,33 +30344,32 @@
 e: %22transclude%22,
-%0D
 %0A%09%09%09attributes: 
@@ -30369,33 +30369,31 @@
 butes: %7B
-%0D
 %0A%09%09%09%09tiddler: %7B
-%0D
 %0A%09%09%09%09%09na
@@ -30398,33 +30398,32 @@
 name: %22tiddler%22,
-%0D
 %0A%09%09%09%09%09type: %22str
@@ -30419,33 +30419,32 @@
 %09type: %22string%22,
-%0D
 %0A%09%09%09%09%09value: tit
@@ -30440,33 +30440,32 @@
 %09value: title%7D%7D,
-%0D
 %0A%09%09%09isBlock: !op
@@ -30477,33 +30477,32 @@
 .parseAsInline%7D;
-%0D
 %0A%09if(options.imp
@@ -30536,33 +30536,32 @@
 ortPageMacros) %7B
-%0D
 %0A%09%09if(options.im
@@ -30568,33 +30568,32 @@
 portVariables) %7B
-%0D
 %0A%09%09%09parseTreeImp
@@ -30647,33 +30647,32 @@
 importVariables;
-%0D
 %0A%09%09%7D else if(opt
@@ -30687,33 +30687,32 @@
 ortPageMacros) %7B
-%0D
 %0A%09%09%09parseTreeImp
@@ -30826,38 +30826,36 @@
 has%5Bdraft.of%5D%5D%22;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09parseTreeDiv.
@@ -30894,33 +30894,32 @@
 mportVariables);
-%0D
 %0A%09%09parseTreeImpo
@@ -30957,44 +30957,42 @@
 TreeTransclude);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09parseTreeDiv.
@@ -31026,37 +31026,35 @@
 TreeTransclude);
-%0D
 %0A%09%7D
-%0D
 %0A%09if(options.fie
@@ -31050,33 +31050,32 @@
 options.field) %7B
-%0D
 %0A%09%09parseTreeTran
@@ -31131,37 +31131,35 @@
  options.field%7D;
-%0D
 %0A%09%7D
-%0D
 %0A%09if(options.mod
@@ -31154,33 +31154,32 @@
 (options.mode) %7B
-%0D
 %0A%09%09parseTreeTran
@@ -31233,37 +31233,35 @@
 : options.mode%7D;
-%0D
 %0A%09%7D
-%0D
 %0A%09if(options.chi
@@ -31260,33 +31260,32 @@
 ions.children) %7B
-%0D
 %0A%09%09parseTreeTran
@@ -31311,37 +31311,35 @@
 ptions.children;
-%0D
 %0A%09%7D
-%0D
 %0A%09return $tw.wik
@@ -31365,43 +31365,41 @@
 reeDiv,options);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AParse text in a
@@ -31441,33 +31441,32 @@
 o another format
-%0D
 %0A%09outputType: co
@@ -31482,33 +31482,32 @@
 e for the output
-%0D
 %0A%09textType: cont
@@ -31524,33 +31524,32 @@
 f the input text
-%0D
 %0A%09text: input te
@@ -31542,33 +31542,32 @@
 text: input text
-%0D
 %0A%09options: see b
@@ -31562,33 +31562,32 @@
 tions: see below
-%0D
 %0AOptions include
@@ -31579,33 +31579,32 @@
 Options include:
-%0D
 %0Avariables: hash
@@ -31618,33 +31618,32 @@
 variables to set
-%0D
 %0AparentWidget: o
@@ -31673,37 +31673,35 @@
 or the root node
-%0D
 %0A*/
-%0D
 %0Aexports.renderT
@@ -31742,33 +31742,32 @@
 ,text,options) %7B
-%0D
 %0A%09options = opti
@@ -31768,33 +31768,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var parser = t
@@ -31821,33 +31821,32 @@
 e,text,options),
-%0D
 %0A%09%09widgetNode = 
@@ -31869,33 +31869,32 @@
 parser,options);
-%0D
 %0A%09var container 
@@ -31925,33 +31925,32 @@
 eElement(%22div%22);
-%0D
 %0A%09widgetNode.ren
@@ -31961,33 +31961,32 @@
 container,null);
-%0D
 %0A%09return outputT
@@ -32043,43 +32043,41 @@
 ner.textContent;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AParse text from
@@ -32112,33 +32112,32 @@
 o another format
-%0D
 %0A%09outputType: co
@@ -32153,33 +32153,32 @@
 e for the output
-%0D
 %0A%09title: title o
@@ -32197,33 +32197,32 @@
 r to be rendered
-%0D
 %0A%09options: see b
@@ -32217,33 +32217,32 @@
 tions: see below
-%0D
 %0AOptions include
@@ -32234,33 +32234,32 @@
 Options include:
-%0D
 %0Avariables: hash
@@ -32273,33 +32273,32 @@
 variables to set
-%0D
 %0AparentWidget: o
@@ -32328,37 +32328,35 @@
 or the root node
-%0D
 %0A*/
-%0D
 %0Aexports.renderT
@@ -32392,33 +32392,32 @@
 title,options) %7B
-%0D
 %0A%09options = opti
@@ -32418,33 +32418,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var parser = t
@@ -32466,33 +32466,32 @@
 (title,options),
-%0D
 %0A%09%09widgetNode = 
@@ -32514,33 +32514,32 @@
 parser,options);
-%0D
 %0A%09var container 
@@ -32570,33 +32570,32 @@
 eElement(%22div%22);
-%0D
 %0A%09widgetNode.ren
@@ -32606,33 +32606,32 @@
 container,null);
-%0D
 %0A%09return outputT
@@ -32763,43 +32763,41 @@
 er.textContent);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AReturn an array
@@ -32833,33 +32833,32 @@
  a search string
-%0D
 %0A%09text: The text
@@ -32870,33 +32870,32 @@
 ng to search for
-%0D
 %0A%09options: see b
@@ -32890,33 +32890,32 @@
 tions: see below
-%0D
 %0AOptions availab
@@ -32909,33 +32909,32 @@
 tions available:
-%0D
 %0A%09source: an ite
@@ -33041,33 +33041,32 @@
 r(tiddler,title)
-%0D
 %0A%09exclude: An ar
@@ -33105,33 +33105,32 @@
  from the search
-%0D
 %0A%09invert: If tru
@@ -33180,33 +33180,32 @@
 specified string
-%0D
 %0A%09caseSensitive:
@@ -33235,33 +33235,32 @@
 sensitive search
-%0D
 %0A%09field: If spec
@@ -33329,33 +33329,32 @@
 y of field names
-%0D
 %0A%09anchored: If t
@@ -33416,33 +33416,32 @@
 he start of text
-%0D
 %0A%09excludeField: 
@@ -33521,33 +33521,32 @@
 t to be searched
-%0D
 %0A%09The search mod
@@ -33599,33 +33599,32 @@
 flags to be true
-%0D
 %0A%09%09literal: sear
@@ -33638,33 +33638,32 @@
 r literal string
-%0D
 %0A%09%09whitespace: s
@@ -33724,33 +33724,32 @@
 s a single space
-%0D
 %0A%09%09regexp: treat
@@ -33781,33 +33781,32 @@
 gular expression
-%0D
 %0A%09%09words: (defau
@@ -33915,37 +33915,35 @@
 ency or ordering
-%0D
 %0A*/
-%0D
 %0Aexports.search 
@@ -33960,33 +33960,32 @@
 (text,options) %7B
-%0D
 %0A%09options = opti
@@ -33986,33 +33986,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var self = thi
@@ -34012,23 +34012,21 @@
  = this,
-%0D
 %0A%09%09t,
-%0D
 %0A%09%09inver
@@ -34038,33 +34038,32 @@
 !options.invert;
-%0D
 %0A%09// Convert the
@@ -34096,33 +34096,32 @@
 xp for each term
-%0D
 %0A%09var terms, sea
@@ -34128,33 +34128,32 @@
 rchTermsRegExps,
-%0D
 %0A%09%09flags = optio
@@ -34172,33 +34172,32 @@
 tive ? %22%22 : %22i%22,
-%0D
 %0A%09%09anchor = opti
@@ -34212,33 +34212,32 @@
 ored ? %22%5E%22 : %22%22;
-%0D
 %0A%09if(options.lit
@@ -34235,33 +34235,32 @@
 tions.literal) %7B
-%0D
 %0A%09%09if(text.lengt
@@ -34261,33 +34261,32 @@
 .length === 0) %7B
-%0D
 %0A%09%09%09searchTermsR
@@ -34291,45 +34291,43 @@
 sRegExps = null;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09searchTermsR
@@ -34397,38 +34397,36 @@
 ) + %22)%22,flags)%5D;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D else if(opti
@@ -34442,32 +34442,30 @@
 space) %7B
-%0D
 %0A%09%09terms = %5B%5D;
-%0D
 %0A%09%09$tw.u
@@ -34509,32 +34509,30 @@
 (term) %7B
-%0D
 %0A%09%09%09if(term) %7B
-%0D
 %0A%09%09%09%09ter
@@ -34561,46 +34561,43 @@
 peRegExp(term));
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09searchTermsRe
@@ -34656,33 +34656,32 @@
 ) + %22)%22,flags)%5D;
-%0D
 %0A%09%7D else if(opti
@@ -34693,26 +34693,24 @@
 egexp) %7B
-%0D
 %0A%09%09try %7B
-%0D
 %0A%09%09%09sear
@@ -34766,33 +34766,31 @@
 gs)%5D;%09%09%09
-%0D
 %0A%09%09%7D catch(e) %7B
-%0D
 %0A%09%09%09sear
@@ -34803,33 +34803,32 @@
 sRegExps = null;
-%0D
 %0A%09%09%09console.log(
@@ -34885,33 +34885,30 @@
 %22: %22,e);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09terms
@@ -34919,33 +34919,32 @@
 ext.split(/ +/);
-%0D
 %0A%09%09if(terms.leng
@@ -34965,33 +34965,32 @@
 rms%5B0%5D === %22%22) %7B
-%0D
 %0A%09%09%09searchTermsR
@@ -34995,45 +34995,43 @@
 sRegExps = null;
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09searchTermsR
@@ -35034,33 +35034,32 @@
 rmsRegExps = %5B%5D;
-%0D
 %0A%09%09%09for(t=0; t%3Ct
@@ -35069,33 +35069,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09%09%09searchTerms
@@ -35179,32 +35179,28 @@
 flags));
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09// Acc
@@ -35261,33 +35261,32 @@
  from the search
-%0D
 %0A%09var fields = %5B
@@ -35279,33 +35279,32 @@
 var fields = %5B%5D;
-%0D
 %0A%09if(options.fie
@@ -35300,33 +35300,32 @@
 options.field) %7B
-%0D
 %0A%09%09if($tw.utils.
@@ -35341,33 +35341,32 @@
 ptions.field)) %7B
-%0D
 %0A%09%09%09$tw.utils.ea
@@ -35395,33 +35395,32 @@
 ion(fieldName) %7B
-%0D
 %0A%09%09%09%09if(fieldNam
@@ -35415,33 +35415,32 @@
 %09if(fieldName) %7B
-%0D
 %0A%09%09%09%09%09fields.pus
@@ -35457,44 +35457,40 @@
 e);%09%09%09%09%09
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%7D);
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09fiel
@@ -35504,42 +35504,39 @@
 (options.field);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09// Use default
@@ -35664,33 +35664,32 @@
 hing all fields)
-%0D
 %0A%09if(fields.leng
@@ -35716,33 +35716,32 @@
 .excludeField) %7B
-%0D
 %0A%09%09fields.push(%22
@@ -35740,33 +35740,32 @@
 s.push(%22title%22);
-%0D
 %0A%09%09fields.push(%22
@@ -35763,33 +35763,32 @@
 ds.push(%22tags%22);
-%0D
 %0A%09%09fields.push(%22
@@ -35786,37 +35786,35 @@
 ds.push(%22text%22);
-%0D
 %0A%09%7D
-%0D
 %0A%09// Function to
@@ -35847,33 +35847,32 @@
  the search term
-%0D
 %0A%09var searchTidd
@@ -35886,33 +35886,32 @@
 unction(title) %7B
-%0D
 %0A%09%09if(!searchTer
@@ -35922,39 +35922,36 @@
 gExps) %7B
-%0D
 %0A%09%09%09return true;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09var n
@@ -36025,33 +36025,32 @@
 tTiddler(title);
-%0D
 %0A%09%09if(!tiddler) 
@@ -36042,33 +36042,32 @@
 %09%09if(!tiddler) %7B
-%0D
 %0A%09%09%09tiddler = ne
@@ -36127,38 +36127,36 @@
 d.tiddlywiki%22%7D);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09var contentTy
@@ -36257,33 +36257,32 @@
 nd.tiddlywiki%22%5D,
-%0D
 %0A%09%09%09searchFields
@@ -36274,33 +36274,32 @@
 %09%09%09searchFields;
-%0D
 %0A%09%09// Get the li
@@ -36318,33 +36318,32 @@
  we're searching
-%0D
 %0A%09%09if(options.ex
@@ -36347,33 +36347,32 @@
 .excludeField) %7B
-%0D
 %0A%09%09%09searchFields
@@ -36394,33 +36394,32 @@
 tiddler.fields);
-%0D
 %0A%09%09%09$tw.utils.ea
@@ -36441,33 +36441,32 @@
 ion(fieldName) %7B
-%0D
 %0A%09%09%09%09var p = sea
@@ -36486,33 +36486,32 @@
 exOf(fieldName);
-%0D
 %0A%09%09%09%09if(p !== -1
@@ -36505,33 +36505,32 @@
 %09%09if(p !== -1) %7B
-%0D
 %0A%09%09%09%09%09searchFiel
@@ -36544,44 +36544,40 @@
 ce(p,1);
-%0D
 %0A%09%09%09%09%7D
-%0D
 %0A%09%09%09%7D);
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09sear
@@ -36586,38 +36586,36 @@
 Fields = fields;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09for(var field
@@ -36686,33 +36686,32 @@
  fieldIndex++) %7B
-%0D
 %0A%09%09%09// Don't sea
@@ -36750,33 +36750,32 @@
 t type is binary
-%0D
 %0A%09%09%09var fieldNam
@@ -36795,33 +36795,32 @@
 lds%5BfieldIndex%5D;
-%0D
 %0A%09%09%09if(fieldName
@@ -36872,35 +36872,32 @@
 utf8%22) %7B
-%0D
 %0A%09%09%09%09break;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%09var 
@@ -36928,39 +36928,36 @@
 ldName%5D,
-%0D
 %0A%09%09%09%09t;
-%0D
 %0A%09%09%09if(str) %7B
-%0D
 %0A%09%09%09%09if(
@@ -36973,33 +36973,32 @@
 .isArray(str)) %7B
-%0D
 %0A%09%09%09%09%09// If the 
@@ -37130,33 +37130,32 @@
 ield array entry
-%0D
 %0A%09%09%09%09%09for(var s=
@@ -37169,33 +37169,32 @@
 r.length; s++) %7B
-%0D
 %0A%09%09%09%09%09%09for(t=0; 
@@ -37209,33 +37209,32 @@
 Found.length;) %7B
-%0D
 %0A%09%09%09%09%09%09%09if(notYe
@@ -37250,33 +37250,32 @@
 .test(str%5Bs%5D)) %7B
-%0D
 %0A%09%09%09%09%09%09%09%09notYetF
@@ -37292,89 +37292,82 @@
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
@@ -37469,33 +37469,32 @@
 any do not match
-%0D
 %0A%09%09%09%09%09str = tidd
@@ -37515,33 +37515,32 @@
 ring(fieldName);
-%0D
 %0A%09%09%09%09%09for(t=0; t
@@ -37554,33 +37554,32 @@
 Found.length;) %7B
-%0D
 %0A%09%09%09%09%09%09if(notYet
@@ -37591,33 +37591,32 @@
 %5Bt%5D.test(str)) %7B
-%0D
 %0A%09%09%09%09%09%09%09notYetFo
@@ -37632,82 +37632,74 @@
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
@@ -37716,38 +37716,36 @@
 und.length == 0;
-%0D
 %0A%09%7D;
-%0D
 %0A%09// Loop throug
@@ -37771,33 +37771,32 @@
 doing the search
-%0D
 %0A%09var results = 
@@ -37790,33 +37790,32 @@
 ar results = %5B%5D,
-%0D
 %0A%09%09source = opti
@@ -37830,33 +37830,32 @@
 ce %7C%7C this.each;
-%0D
 %0A%09source(functio
@@ -37864,33 +37864,32 @@
 tiddler,title) %7B
-%0D
 %0A%09%09if(searchTidd
@@ -37912,33 +37912,32 @@
 ptions.invert) %7B
-%0D
 %0A%09%09%09results.push
@@ -37936,44 +37936,41 @@
 lts.push(title);
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09// Remove any 
@@ -37994,33 +37994,32 @@
  have to exclude
-%0D
 %0A%09if(options.exc
@@ -38017,33 +38017,32 @@
 tions.exclude) %7B
-%0D
 %0A%09%09for(t=0; t%3Cop
@@ -38061,33 +38061,32 @@
 e.length; t++) %7B
-%0D
 %0A%09%09%09var p = resu
@@ -38109,33 +38109,32 @@
 ons.exclude%5Bt%5D);
-%0D
 %0A%09%09%09if(p !== -1)
@@ -38127,33 +38127,32 @@
 %09%09if(p !== -1) %7B
-%0D
 %0A%09%09%09%09results.spl
@@ -38160,32 +38160,28 @@
 ce(p,1);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09return
@@ -38181,43 +38181,41 @@
 %09return results;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ATrigger a load 
@@ -38338,37 +38338,35 @@
 g lazily loaded.
-%0D
 %0A*/
-%0D
 %0Aexports.getTidd
@@ -38396,33 +38396,32 @@
 e,defaultText) %7B
-%0D
 %0A%09var tiddler = 
@@ -38435,33 +38435,32 @@
 tTiddler(title);
-%0D
 %0A%09// Return unde
@@ -38491,34 +38491,32 @@
 't found
-%0D
 %0A%09if(!tiddler) %7B
-%0D
 %0A%09%09retur
@@ -38521,37 +38521,35 @@
 urn defaultText;
-%0D
 %0A%09%7D
-%0D
 %0A%09if(tiddler.fie
@@ -38565,33 +38565,32 @@
 !== undefined) %7B
-%0D
 %0A%09%09// Just retur
@@ -38607,33 +38607,32 @@
  if we've got it
-%0D
 %0A%09%09return tiddle
@@ -38637,44 +38637,42 @@
 ler.fields.text;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09// Tell any l
@@ -38714,33 +38714,32 @@
 oad this tiddler
-%0D
 %0A%09%09this.dispatch
@@ -38754,33 +38754,32 @@
 azyLoad%22,title);
-%0D
 %0A%09%09// Indicate t
@@ -38806,47 +38806,43 @@
 g loaded
-%0D
 %0A%09%09return null;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ACheck w
@@ -38992,37 +38992,35 @@
  text is trimmed
-%0D
 %0A*/
-%0D
 %0Aexports.checkTi
@@ -39059,33 +39059,32 @@
 tText,options) %7B
-%0D
 %0A%09options = opti
@@ -39085,33 +39085,32 @@
 = options %7C%7C %7B%7D;
-%0D
 %0A%09var text = thi
@@ -39128,33 +39128,32 @@
 rText(title,%22%22);
-%0D
 %0A%09if(!options.no
@@ -39151,33 +39151,32 @@
 ptions.noTrim) %7B
-%0D
 %0A%09%09text = text.t
@@ -39173,37 +39173,35 @@
 t = text.trim();
-%0D
 %0A%09%7D
-%0D
 %0A%09if(!options.ca
@@ -39206,33 +39206,32 @@
 caseSensitive) %7B
-%0D
 %0A%09%09text = text.t
@@ -39235,33 +39235,32 @@
 t.toLowerCase();
-%0D
 %0A%09%09targetText = 
@@ -39276,37 +39276,35 @@
 t.toLowerCase();
-%0D
 %0A%09%7D
-%0D
 %0A%09return text ==
@@ -39308,42 +39308,40 @@
  === targetText;
-%0D
 %0A%7D%0D%0A%0D%0A/*
-%0D
 %0ARead an array o
@@ -39415,37 +39415,35 @@
 they're all read
-%0D
 %0A*/
-%0D
 %0Aexports.readFil
@@ -39472,33 +39472,31 @@
 tions) %7B
-%0D
 %0A%09var callback;
-%0D
 %0A%09if(typ
@@ -39516,33 +39516,32 @@
 == %22function%22) %7B
-%0D
 %0A%09%09callback = op
@@ -39546,45 +39546,42 @@
 options;
-%0D
 %0A%09%09options = %7B%7D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09callb
@@ -39595,37 +39595,35 @@
 ptions.callback;
-%0D
 %0A%09%7D
-%0D
 %0A%09var result = %5B
@@ -39616,33 +39616,32 @@
 var result = %5B%5D,
-%0D
 %0A%09%09outstanding =
@@ -39646,33 +39646,32 @@
  = files.length,
-%0D
 %0A%09%09readFileCallb
@@ -39698,33 +39698,32 @@
 erFieldsArray) %7B
-%0D
 %0A%09%09%09result.push.
@@ -39747,33 +39747,32 @@
 lerFieldsArray);
-%0D
 %0A%09%09%09if(--outstan
@@ -39776,33 +39776,32 @@
 tanding === 0) %7B
-%0D
 %0A%09%09%09%09callback(re
@@ -39806,29 +39806,26 @@
 result);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D;
-%0D
 %0A%09for(va
@@ -39845,33 +39845,32 @@
 s.length; f++) %7B
-%0D
 %0A%09%09this.readFile
@@ -39930,37 +39930,35 @@
 FileCallback%7D));
-%0D
 %0A%09%7D
-%0D
 %0A%09return files.l
@@ -39955,43 +39955,41 @@
 rn files.length;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ARead a browser 
@@ -40070,37 +40070,35 @@
 r fields objects
-%0D
 %0A*/
-%0D
 %0Aexports.readFil
@@ -40125,33 +40125,31 @@
 tions) %7B
-%0D
 %0A%09var callback;
-%0D
 %0A%09if(typ
@@ -40169,33 +40169,32 @@
 == %22function%22) %7B
-%0D
 %0A%09%09callback = op
@@ -40199,45 +40199,42 @@
 options;
-%0D
 %0A%09%09options = %7B%7D;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09callb
@@ -40248,37 +40248,35 @@
 ptions.callback;
-%0D
 %0A%09%7D
-%0D
 %0A%09// Get the typ
@@ -40308,33 +40308,32 @@
 lename extension
-%0D
 %0A%09var self = thi
@@ -40326,33 +40326,32 @@
 var self = this,
-%0D
 %0A%09%09type = file.t
@@ -40346,33 +40346,32 @@
 ype = file.type;
-%0D
 %0A%09if(type === %22%22
@@ -40374,33 +40374,32 @@
 = %22%22 %7C%7C !type) %7B
-%0D
 %0A%09%09var dotPos = 
@@ -40417,33 +40417,32 @@
 astIndexOf(%22.%22);
-%0D
 %0A%09%09if(dotPos !==
@@ -40439,33 +40439,32 @@
 dotPos !== -1) %7B
-%0D
 %0A%09%09%09var fileExte
@@ -40524,33 +40524,32 @@
 substr(dotPos));
-%0D
 %0A%09%09%09if(fileExten
@@ -40551,33 +40551,32 @@
 ExtensionInfo) %7B
-%0D
 %0A%09%09%09%09type = file
@@ -40594,32 +40594,28 @@
 fo.type;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D
-%0D
 %0A%09// Fig
@@ -40644,33 +40644,32 @@
 ng a binary file
-%0D
 %0A%09var contentTyp
@@ -40701,33 +40701,32 @@
 tTypeInfo%5Btype%5D,
-%0D
 %0A%09%09isBinary = co
@@ -40779,33 +40779,32 @@
 base64%22 : false;
-%0D
 %0A%09// Log some de
@@ -40814,33 +40814,32 @@
 ging information
-%0D
 %0A%09if($tw.log.IMP
@@ -40836,33 +40836,32 @@
 tw.log.IMPORT) %7B
-%0D
 %0A%09%09console.log(%22
@@ -40934,37 +40934,35 @@
 : %22 + isBinary);
-%0D
 %0A%09%7D
-%0D
 %0A%09// Give the ho
@@ -40984,33 +40984,32 @@
 process the drag
-%0D
 %0A%09if($tw.hooks.i
@@ -41039,47 +41039,44 @@
 -file%22,%7B
-%0D
 %0A%09%09file: file,
-%0D
 %0A%09%09type: type,
-%0D
 %0A%09%09isBin
@@ -41081,33 +41081,32 @@
 inary: isBinary,
-%0D
 %0A%09%09callback: cal
@@ -41110,34 +41110,32 @@
 callback
-%0D
 %0A%09%7D) !== true) %7B
-%0D
 %0A%09%09this.
@@ -41192,47 +41192,44 @@
 lizer,callback);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0ALower level uti
@@ -41348,37 +41348,35 @@
 r fields objects
-%0D
 %0A*/
-%0D
 %0Aexports.readFil
@@ -41430,33 +41430,32 @@
 izer,callback) %7B
-%0D
 %0A%09var self = thi
@@ -41448,33 +41448,32 @@
 var self = this;
-%0D
 %0A%09// Create the 
@@ -41474,33 +41474,32 @@
 e the FileReader
-%0D
 %0A%09var reader = n
@@ -41514,29 +41514,27 @@
 eader();
-%0D
 %0A%09// Onload
-%0D
 %0A%09reader
@@ -41552,33 +41552,32 @@
 unction(event) %7B
-%0D
 %0A%09%09var text = ev
@@ -41586,33 +41586,32 @@
 t.target.result,
-%0D
 %0A%09%09%09tiddlerField
@@ -41651,33 +41651,32 @@
 d%22, type: type%7D;
-%0D
 %0A%09%09if(isBinary) 
@@ -41668,33 +41668,32 @@
 %09%09if(isBinary) %7B
-%0D
 %0A%09%09%09var commaPos
@@ -41705,33 +41705,32 @@
 xt.indexOf(%22,%22);
-%0D
 %0A%09%09%09if(commaPos 
@@ -41730,33 +41730,32 @@
 mmaPos !== -1) %7B
-%0D
 %0A%09%09%09%09text = text
@@ -41776,28 +41776,25 @@
 os + 1);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%09// Ch
@@ -41833,33 +41833,32 @@
  TiddlyWiki file
-%0D
 %0A%09%09var encrypted
@@ -41898,33 +41898,32 @@
 StoreArea(text);
-%0D
 %0A%09%09if(encryptedJ
@@ -41920,33 +41920,32 @@
 encryptedJson) %7B
-%0D
 %0A%09%09%09// If so, at
@@ -41981,33 +41981,32 @@
 current password
-%0D
 %0A%09%09%09$tw.utils.de
@@ -42057,33 +42057,32 @@
 tion(tiddlers) %7B
-%0D
 %0A%09%09%09%09callback(ti
@@ -42089,37 +42089,34 @@
 ddlers);
-%0D
 %0A%09%09%09%7D);
-%0D
 %0A%09%09%7D else %7B
-%0D
 %0A%09%09%09// O
@@ -42165,33 +42165,32 @@
 lers in the file
-%0D
 %0A%09%09%09callback(sel
@@ -42266,27 +42266,24 @@
 izer%7D));
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D;
-%0D
 %0A%09// Kic
@@ -42296,34 +42296,32 @@
 the read
-%0D
 %0A%09if(isBinary) %7B
-%0D
 %0A%09%09reade
@@ -42334,44 +42334,42 @@
 AsDataURL(file);
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09reader.readAs
@@ -42371,47 +42371,44 @@
 eadAsText(file);
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AFind any existi
@@ -42430,37 +42430,35 @@
 pecified tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.findDra
@@ -42477,33 +42477,32 @@
 n(targetTitle) %7B
-%0D
 %0A%09var draftTitle
@@ -42506,33 +42506,32 @@
 tle = undefined;
-%0D
 %0A%09this.forEachTi
@@ -42575,33 +42575,32 @@
 title,tiddler) %7B
-%0D
 %0A%09%09if(tiddler.fi
@@ -42659,33 +42659,32 @@
 = targetTitle) %7B
-%0D
 %0A%09%09%09draftTitle =
@@ -42690,28 +42690,25 @@
 = title;
-%0D
 %0A%09%09%7D
-%0D
 %0A%09%7D);
-%0D
 %0A%09return
@@ -42719,26 +42719,24 @@
 ftTitle;
-%0D
 %0A%7D%0D%0A%0D%0A/*
-%0D
 %0ACheck w
@@ -42780,33 +42780,32 @@
 s been modified.
-%0D
 %0AIf the original
@@ -42855,33 +42855,32 @@
 iddler variable,
-%0D
 %0Ato check if add
@@ -42902,37 +42902,35 @@
 have been added.
-%0D
 %0A*/
-%0D
 %0Aexports.isDraft
@@ -42949,33 +42949,32 @@
 unction(title) %7B
-%0D
 %0A%09var tiddler = 
@@ -42988,33 +42988,32 @@
 tTiddler(title);
-%0D
 %0A%09if(!tiddler.is
@@ -43022,38 +43022,35 @@
 aft()) %7B
-%0D
 %0A%09%09return false;
-%0D
 %0A%09%7D
-%0D
 %0A%09var ig
@@ -43115,33 +43115,32 @@
 e%22, %22draft.of%22%5D,
-%0D
 %0A%09%09origTiddler =
@@ -43215,33 +43215,32 @@
 t:%22%22, tags:%5B%5D%7D),
-%0D
 %0A%09%09titleModified
@@ -43295,33 +43295,32 @@
 lds%5B%22draft.of%22%5D;
-%0D
 %0A%09return titleMo
@@ -43365,43 +43365,41 @@
 ,ignoredFields);
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AAdd a new recor
@@ -43423,33 +43423,32 @@
 he history stack
-%0D
 %0Atitle: a title 
@@ -43474,33 +43474,32 @@
 of title strings
-%0D
 %0AfromPageRect: p
@@ -43537,33 +43537,32 @@
 f the navigation
-%0D
 %0AhistoryTitle: t
@@ -43605,37 +43605,35 @@
  $:/HistoryList)
-%0D
 %0A*/
-%0D
 %0Aexports.addToHi
@@ -43675,33 +43675,32 @@
 ,historyTitle) %7B
-%0D
 %0A%09if(historyTitl
@@ -43695,33 +43695,32 @@
 (historyTitle) %7B
-%0D
 %0A%09%09var story = n
@@ -43766,33 +43766,32 @@
  historyTitle%7D);
-%0D
 %0A%09%09story.addToHi
@@ -43810,47 +43810,44 @@
 fromPageRect);%09%09
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AAdd a new tiddl
@@ -43859,33 +43859,32 @@
  the story river
-%0D
 %0Atitle: a title 
@@ -43910,33 +43910,32 @@
 of title strings
-%0D
 %0AfromTitle: the 
@@ -43983,33 +43983,32 @@
 ation originated
-%0D
 %0AstoryTitle: tit
@@ -44045,33 +44045,32 @@
 to $:/StoryList)
-%0D
 %0Aoptions: see st
@@ -44067,37 +44067,35 @@
 ns: see story.js
-%0D
 %0A*/
-%0D
 %0Aexports.addToSt
@@ -44138,33 +44138,32 @@
 Title,options) %7B
-%0D
 %0A%09if(storyTitle)
@@ -44156,33 +44156,32 @@
 if(storyTitle) %7B
-%0D
 %0A%09%09var story = n
@@ -44223,33 +44223,32 @@
 e: storyTitle%7D);
-%0D
 %0A%09%09story.addToSt
@@ -44278,31 +44278,28 @@
 ions);%09%09
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AGenerat
@@ -44332,37 +44332,35 @@
  a given tiddler
-%0D
 %0A*/
-%0D
 %0Aexports.generat
@@ -44390,45 +44390,42 @@
 title) %7B
-%0D
 %0A%09var c = 0,
-%0D
 %0A%09%09draftTitle,
-%0D
 %0A%09%09usern
@@ -44464,33 +44464,32 @@
 atus/UserName%22),
-%0D
 %0A%09%09attribution =
@@ -44523,24 +44523,22 @@
 me : %22%22;
-%0D
 %0A%09do %7B
-%0D
 %0A%09%09draft
@@ -44618,25 +44618,23 @@
 ibution;
-%0D
 %0A%09%09c++;
-%0D
 %0A%09%7D whil
@@ -44659,33 +44659,32 @@
 ts(draftTitle));
-%0D
 %0A%09return draftTi
@@ -44687,27 +44687,25 @@
 ftTitle;
-%0D
 %0A%7D;%0D%0A%0D%0A/*
-%0D
 %0AInvoke 
@@ -44726,33 +44726,32 @@
 upgrader modules
-%0D
 %0Atitles: array o
@@ -44774,33 +44774,32 @@
  to be processed
-%0D
 %0Atiddlers: hashm
@@ -45100,33 +45100,32 @@
 the titles array
-%0D
 %0AReturns a hashm
@@ -45162,21 +45162,19 @@
 r title.
-%0D
 %0A*/
-%0D
 %0Aexports
@@ -45211,33 +45211,32 @@
 tles,tiddlers) %7B
-%0D
 %0A%09// Collect up 
@@ -45257,33 +45257,32 @@
 upgrader modules
-%0D
 %0A%09var self = thi
@@ -45275,33 +45275,32 @@
 var self = this;
-%0D
 %0A%09if(!this.upgra
@@ -45304,33 +45304,32 @@
 graderModules) %7B
-%0D
 %0A%09%09this.upgrader
@@ -45333,33 +45333,32 @@
 derModules = %5B%5D;
-%0D
 %0A%09%09$tw.modules.f
@@ -45403,33 +45403,32 @@
 (title,module) %7B
-%0D
 %0A%09%09%09if(module.up
@@ -45427,33 +45427,32 @@
 odule.upgrade) %7B
-%0D
 %0A%09%09%09%09self.upgrad
@@ -45474,34 +45474,30 @@
 module);
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%7D
-%0D
 %0A%09// Inv
@@ -45513,33 +45513,32 @@
 upgrader in turn
-%0D
 %0A%09var messages =
@@ -45533,33 +45533,32 @@
 r messages = %7B%7D;
-%0D
 %0A%09for(var t=0; t
@@ -45585,33 +45585,32 @@
 s.length; t++) %7B
-%0D
 %0A%09%09var upgrader 
@@ -45627,33 +45627,32 @@
 raderModules%5Bt%5D,
-%0D
 %0A%09%09%09upgraderMess
@@ -45689,33 +45689,32 @@
 itles,tiddlers);
-%0D
 %0A%09%09$tw.utils.ext
@@ -45736,37 +45736,35 @@
 graderMessages);
-%0D
 %0A%09%7D
-%0D
 %0A%09return message
@@ -45757,33 +45757,32 @@
 return messages;
-%0D
 %0A%7D;%0D%0A%0D%0A// Determ
@@ -45826,33 +45826,32 @@
 mically loadable
-%0D
 %0Aexports.doesPlu
@@ -45878,33 +45878,32 @@
 unction(title) %7B
-%0D
 %0A%09return this.do
@@ -45983,33 +45983,32 @@
 aCached(title));
-%0D
 %0A%7D;%0D%0A%0D%0A// Determ
@@ -46058,33 +46058,32 @@
 mically loadable
-%0D
 %0Aexports.doesPlu
@@ -46119,33 +46119,32 @@
 on(pluginInfo) %7B
-%0D
 %0A%09if(pluginInfo)
@@ -46137,33 +46137,32 @@
 if(pluginInfo) %7B
-%0D
 %0A%09%09var foundModu
@@ -46164,33 +46164,32 @@
 dModule = false;
-%0D
 %0A%09%09$tw.utils.eac
@@ -46221,33 +46221,32 @@
 ction(tiddler) %7B
-%0D
 %0A%09%09%09if(tiddler.t
@@ -46312,33 +46312,32 @@
 module-type%22)) %7B
-%0D
 %0A%09%09%09%09foundModule
@@ -46344,30 +46344,27 @@
  = true;
-%0D
 %0A%09%09%09%7D
-%0D
 %0A%09%09%7D);
-%0D
 %0A%09%09retur
@@ -46377,48 +46377,44 @@
 dModule;
-%0D
 %0A%09%7D else %7B
-%0D
 %0A%09%09return null;
-%0D
 %0A%09%7D
-%0D
 %0A%7D;%0D%0A%0D%0A%7D
