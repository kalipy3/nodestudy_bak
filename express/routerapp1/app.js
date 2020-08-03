/*
 * app.js
 * Copyright (C) 2020 android <android@localhost>
 *
 * Distributed under terms of the MIT license.
 */

let express = require("express")

let app = express()

//1字符串的路由模式
app.get('/',(req,res)=>{
    res.send("这是首页")
})

//2类字符串的正则模式
//例如：匹配2个路径abcd或者acd
app.get("/ab?cd",(req,res)=>{
    res.send("这是abcd/acd")
})

//正则学习：
//例如路径：/ab+cd /abcd /abbcd /abbbbcd
//ab*cd ,必须以ab开头，cd结尾，之间可以有任意和任意个字符

//匹配a+10个数字以上字符串
app.get(/\/a\d{10,}/,(req,res)=>{
    res.send("新闻页面")
})

//动态路由1
app.get('/news/:newsid',(req,res)=>{
    res.send("新闻id页面:\n"+req.params.newsid)
})
//2
//app.get('/news/:cataoryid/a:newsid/',(req,res)=>{
//    res.send("新闻id页面:\n"+req.params.newsid+"分类id:"+req.params.cataoryid)
//})
//请求与响应分开的写法
app.get('/news/:cataoryid/a:newsid/',(req,res,next)=>{
    req.lcHost = "127.0.0.1"
    next()
},
    (req,res,next)=>{

        res.send("新闻id页面:\n"+req.params.newsid+"分类id:"+req.params.cataoryid+"req.lcHost:"+req.lcHost)
    }

)


module.exports = app
