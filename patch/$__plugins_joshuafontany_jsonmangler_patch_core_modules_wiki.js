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
@@ -22299,32 +22299,67 @@
 %0A%09%09%09%09try %7B%0A%09%09%09%09%09
+if($tw.utils.jsonIsValid(tiddler))%7B
 data = JSON.pars
@@ -22373,32 +22373,108 @@
 er.fields.text);
+%7Delse%7Bthrow %22Invalid application/json tiddler text: %22+tiddler.fields.title;%7D
 %0A%09%09%09%09%7D catch(ex)
@@ -22890,35 +22890,39 @@
 ta && $tw.utils.
-hop
+jsonHas
 (data,index)) %7B%0A
@@ -22930,27 +22930,45 @@
 %09text = 
+$tw.utils.jsonGet(
 data
-%5B
+,
 index
-%5D
+)
 ;%0A%09%7D%0A%09if
