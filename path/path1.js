let path = require('path')

let strPath = "http://www.baidu.com/a/bb/ccc/1.html"
//获取扩展名
let info = path.extname(strPath)
console.log(info)

let arr = ['/sxt', 'qianduan', 'masibing']
let info1 = path.resolve(...arr)
console.log(info1)

//获取当前执行目录的完整路径
console.log(__dirname)

let info2 = path.join(__dirname, 'sxt', 'aaa', 'bbb')
console.log(info2)







