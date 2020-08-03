//1.数组不能进行二进制数操作
//2.js数组不像java python等语言高效
//3.buffer内存空间开辟出固定大小的内存

var str = "hello"
let buf = Buffer.from(str)
console.log(buf.toString())

//开辟一个buffer缓冲区
let buf1 = Buffer.alloc(10)
buf1[0] = 0x10
console.log(buf1)

let buf2 = Buffer.allocUnsafe(100)
console.log(buf2)
