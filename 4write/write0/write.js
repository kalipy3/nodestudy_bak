let fs = require('fs')

fs.writeFile('test.txt', "晚饭吃啥？", {flag:"w", encoding:"utf-8"}, function(err){
    if (err) {
        console.log("内容写入出错")
    }else{
        console.log("内容写入成功")
    }
})

