const axios = require('axios')
const cheerio = require('cheerio')

//获取HTML文档的内容，内容获取跟jquery一样

let httpUrl2 = "http://www.meituba.com/dongmantupian"

let httpUrl = "https://www.doutula.com/article/list/?page=1"
axios.get(httpUrl2).then((res)=>{
  let $ = cheerio.load(res.data)
  $('.channel_list2  a').each((i,element)=>{
    console.log($(element).attr('href'))
  })
})
