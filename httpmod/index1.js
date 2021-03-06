/*
 * index.js
 * Copyright (C) 2020 android <android@localhost>
 *
 * Distributed under terms of the MIT license.
 */
let http = require("http")
//创建server服务器对象
let server = http.createServer()
server.on('request',function(req,res){
    //当服务器被请求时，会触发请求事件
    res.setHeader("Content-Type","text/html; charset=UTF-8")
    //根据路径信息，显示不同的页面内容
    if (req.url == "/") {
        res.end("<h1>首页</h1>")
    }else if(req.url == "/gnxw"){
        res.end("国内新闻")
    }else{
        res.end("404")
    }
    

})

//服务器监听的端口号
server.listen(3000,function(){
    //启动监听端口号成功时触发
    console.log("服务器启动成功")
})
