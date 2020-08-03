const axios = require('axios')
const cheerio = require('cheerio')

//获取HTML文档的内容，内容获取跟jquery一样

//刀剑神域专题主页面
let httpUrl2 = "http://www.meituba.com/tag/daojianshenyu.html"

let h3 ="http://www.meituba.com/dongmantupian/42767.html"

axios.get(httpUrl2).then((res)=>{
  let $ = cheerio.load(res.data)
  $('.mainbody2_ht  .showhidepic11 a').each((i,element)=>{
    console.log($(element).attr('href'))
    let pageUrl = $(element).attr('href')
    parsePage(pageUrl)
  })
})

//2
async function parsePage(url) {
  let res = await axios.get(url);
  let $ = cheerio.load(res.data)
  $('.photo > a:nth-child(3) > img:nth-child(1)').each((i, element)=>{
    let imgUrl = $(element).attr('src')
    console.log(imgUrl)
  })
}

//3

