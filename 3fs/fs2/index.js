var fs = require('fs')

//同步
var buf = Buffer.alloc(20)
var content = fs.readFileSync('hello.txt', {flag:'r', encoding:"utf-8"})

console.log(content)

