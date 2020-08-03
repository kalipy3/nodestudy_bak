let fs = require('fs')

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


function fsWrite(path, content){
  return new Promise(function(resolve, reject){
    fs.writeFile(path, content, {flag:"a", encoding:"utf-8"}, function(err){
      if (err) {
       // console.log("内容写入出错")
        reject(err)
      }else{
        resolve(err)
        //console.log("内容写入成功")
      }
    })
  })
}

module.exports = {fsRead, fsWrite}
