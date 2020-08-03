let url = require('url')


let httpUrl = "https://www.baidu.com/a/b/1.html?cid=1111"
let urlObj = url.parse(httpUrl)
console.log(urlObj)





let targetUrl = "http://www.taobao.com/"
httpUrl = "./sxt/qianduan/laochen.html"

let newUrl = url.resolve(targetUrl, httpUrl)
console.log(newUrl)
