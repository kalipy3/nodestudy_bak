const axios = require('axios')
const cheerio = require('cheerio')

//获取HTML文档的内容，内容获取跟jquery一样

let httpUrl = "https://www.doutula.com/article/list/?page=1"
axios.get(httpUrl).then((res)=>{
  console.log(res.data)
})
