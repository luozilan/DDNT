@@ -1,5 +0,0 @@
 let body =  $ response。身体
 body = JSON。解析（正文）
 body [ ' response ' ] [ ' user ' ] [ ' is_premium ' ] = true
 body = JSON。字符串化（正文）
 $ done（{body}）
