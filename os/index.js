let os = require("os")

console.log(os.cpus())

//查看整个内存大小
console.log(os.totalmem())

//查看系统架构
console.log(os.arch())

//查看剩余内存
console.log(os.freemem())


console.log(os.platform())
