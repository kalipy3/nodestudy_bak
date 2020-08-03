var fs = require('fs')
//异步
function fsRead(path) {
    return new Promise(function(resolve, reject){
        var content = fs.readFile(path, {flag:'r', encoding:"utf-8"}, function(err, data){
            if (err) {
                //console.log(err)
                //失败执行的内容
                reject(err)
            }else{
                //console.log(data)
                //成功执行的内容
                resolve(data)
            }
            console.log(456)
        })
        console.log(123)
    })
}


var w1 = fsRead('hello.txt')
w1.then(function(res){
    console.log(res)
})
