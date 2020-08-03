let fs = require('fs')

//如果是流入mp4等二进制数据,则去掉encodeing
let rs = fs.createReadStream('hello.txt', {flags:'r', encoding:"utf-8"})
//console.log(ws)

rs.on('open',function() {
  console.log('文件打开')
})

rs.on('close', function() {
  console.log('读取流结束')
})

rs.on('data', function(chunk){
  console.log('单批数据流入'+chunk.length)
  console.log(chunk)
})













