let path = require('path')
let fs = require('fs')

let arr = ['/sxt', 'qianduan', 'masibing']
let info1 = path.resolve(...arr)
console.log(info1)

let str = "http://www.sxt.com/xinwen/guonei.html"

//解析出请求目录
let arrParse = str.split('/')
console.log(arrParse)
arr = arrParse.slice(arrParse.length-2, arrParse.length)
console.log(arr)

let filePath = path.join(__dirname, ...arr)
console.log(filePath)

fs.readFile(filePath, {encoding:'utf-8'}, function(err, data){
  if (err){
    console.log(err)
  }else {
    console.log(data)
  }
})

