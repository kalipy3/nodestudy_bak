//1.数组不能进行二进制数操作
//2.js数组不像java python等语言高效
//3.buffer内存空间开辟出固定大小的内存

var str = "hello"
let buf = Buffer.from(str)
console.log(buf)
