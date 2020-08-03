let fs = require('fs')

let ws = fs.createWriteStream('hello.txt', {flags:'w', encoding:"utf-8"})
//console.log(ws)

ws.on('open',function() {
  console.log('文件打开')
})

ws.on('close', function() {
  console.log('文件写入完成，关闭')
})

ws.write('helloworld1', function(err){
  if (err) {
    console.log(err)
  } else {
    console.log('内容1写入完成')
  }
})
ws.write('helloworld2', function(err){
  if (err) {
    console.log(err)
  } else {
    console.log('内容2写入完成')
  }
})
ws.write('helloworld3', function(err){
  if (err) {
    console.log(err)
  } else {
    console.log('内容3写入完成')
  }
})

ws.end(function(){
  console.log('文件写入关闭')
})












