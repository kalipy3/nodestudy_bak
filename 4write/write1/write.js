//异步写入顺序测试
let fs = require('fs')

fs.writeFile('test.txt', "早饭吃啥？\n", {flag:"a", encoding:"utf-8"}, function(err){
    if (err) {
        console.log("内容写入出错")
    }else{
        console.log("内容写入成功")
    }
})

fs.writeFile('test.txt', "早饭吃面和帆帆帆帆帆帆帆帆帆帆帆帆帆帆\n", {flag:"a", encoding:"utf-8"}, function(err){
    if (err) {
        console.log("内容写入出错")
    }else{
        console.log("内容写入成功")
    }
})

fs.writeFile('test.txt', "午饭吃啥？\n", {flag:"a", encoding:"utf-8"}, function(err){
    if (err) {
        console.log("内容写入出错")
    }else{
        console.log("内容写入成功")
    }
})


fs.writeFile('test.txt', "午饭吃。。。\n", {flag:"a", encoding:"utf-8"}, function(err){
    if (err) {
        console.log("内容写入出错")
    }else{
        console.log("内容写入成功")
    }
})
