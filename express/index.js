/*
 * index.js
 * Copyright (C) 2020 android <android@localhost>
 *
 * Distributed under terms of the MIT license.
 */

let express = require('express')
let app = express()

app.get('/',function(req,res){
    res.send("<h1>helloworld</h1>")
})

app.listen(8888,()=>{
    console.log("服务器启动完成：","http://127.0.0.1:8888")
})
