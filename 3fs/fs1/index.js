var fs = require('fs')

//同步
var fd = fs.openSync('hello.txt', "r")
console.log(fd)

var buf = Buffer.alloc(20)
var content = fs.readFileSync('hello.txt', {flag:'r'})

console.log(content)

