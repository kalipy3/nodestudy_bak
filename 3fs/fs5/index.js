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
        })
    })
}


var w1 = fsRead('hello.txt')
w1.then(function(res){
    console.log(res)
})


async function ReadList() {
    var file2 = await fsRead('hello.txt')
    console.log(file2)
    var file3 = await fsRead(file2.trim()+'.txt')
    console.log(file3)
    var file3Content = await fsRead(file3.trim()+'.txt')
    console.log(file3Content)
}

ReadList()
