//加入延迟

const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const url = require('url')
const path = require('path')

//将延迟函数封装成promise对象
function lcWait(milliSecondes) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("成功执行延迟函数，延迟；"+milliSecondes)
        },milliSecondes)
    })
}


//获取HTML文档的内容，内容获取跟jquery一样

//刀剑神域专题主页面
let httpUrl2 = "http://www.meituba.com/tag/daojianshenyu.html"

let h3 ="http://www.meituba.com/dongmantupian/42767.html"

axios.get(httpUrl2).then((res)=>{
  let $ = cheerio.load(res.data)
  $('.mainbody2_ht  .showhidepic11 a').each(async (i,element)=>{
    console.log($(element).attr('href'))
    let pageUrl = $(element).attr('href')
    let title = $(element).attr('title')
    //let title = $('.now > a:nth-child(3)').text()
    console.log(title)
    //if (!fs.exists("./img/"+title)) {
      fs.mkdir('./img/'+title, function(err){
        if (err){
          console.log(err)
        }else {
          console.log("成功重建目录："+'./img/'+title)
        }
      })
    //}
    
    await lcWait(50*i)
    parsePage(pageUrl, title)
  })
})



 
async function getNum(url){
  res = await axios.get(url)
  let $ = cheerio.load(res.data)
  let btnLength = $('.pages > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)')
  let allNum = $('.pages > ul:nth-child(1) > li:nth-child(1)').find('a').text()
  allNum = allNum.slice(1,allNum.length-3)
  console.log(allNum) 
  return allNum
}

  

async function getListPage(pageNum, url, title) {
  
      fs.mkdir('./img/'+title+`/${pageNum}/`, function(err){
        if (err){
          console.log(err)
        }else {
          console.log("成功重建目录："+'./img/'+title+`/${pageNum}/`)
        }
      })

  let httpUrl;
  if (pageNum != 1) {
    httpUrl = url.slice(0, url.length-5)+"_"+pageNum+".html"
  } else {
    httpUrl = url
  }
  console.log("ttttttttt"+httpUrl)
  let res = await axios.get(httpUrl);
  let $ = cheerio.load(res.data)
  $('.photo > a:nth-child(3) > img:nth-child(1)').each((i, element)=>{
    let imgUrl = $(element).attr('src')
    console.log(imgUrl+'gggg'+i)
    
    let extName = path.extname(imgUrl)
    //图片写入的路径与名字
    let imgPath = `./img/${title}/${pageNum}/${title}-${i}${extName}` 
    //创建写入流
    let ws = fs.createWriteStream(imgPath)
    axios.get(imgUrl, {responseType:'stream'}).then(function(res){
      res.data.pipe(ws)
      console.log("图片加载完成："+imgPath)
      res.data.on('close', function(){
        ws.close()
      })
    })
  })
}

//2
async function parsePage(url, title) {
  let allPageNum = await getNum(url)
  for(let i=1;i<=allPageNum;i++) {
    await lcWait(3000*i)
    getListPage(i, url, title)
  }
//  getListPage(2, url,title)

 // let res = await axios.get(url);
 // let $ = cheerio.load(res.data)
 // $('.photo > a:nth-child(3) > img:nth-child(1)').each((i, element)=>{
 //   let imgUrl = $(element).attr('src')
 //   console.log(imgUrl+'gggg'+i)
 //   
 //   let extName = path.extname(imgUrl)
 //   //图片写入的路径与名字
 //   let imgPath = `./img/${title}/${title}-${i}${extName}` 
 //   //创建写入流
 //   let ws = fs.createWriteStream(imgPath)
 //   axios.get(imgUrl, {responseType:'stream'}).then(function(res){
 //     res.data.pipe(ws)
 //     console.log("图片加载完成："+imgPath)
 //     res.data.on('close', function(){
 //       ws.close()
 //     })
 //   })
 // })
}

//3

