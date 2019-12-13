@@ -1,13 +0,0 @@
 让 url =  ' https://pixiv.mlyx.workers.dev/? api = pixiv '
 //请勿滥用

 let标头=  $ request。标头
 $ httpClient。get（url，（error，response，data）=> {
     如果（错误）{
         $ done（{}）
     }
     其他 {
         headers [ ' Authorization ' ] =  `承载$ { data } `
         $ done（{headers}）
     }
 }）
