const axios = require('axios')
const fs = require('fs')
const path = require('path')
//目标：下载音乐
//1.获取音乐相关信息，通过相关信息获取mp3地址
//2.如何获取音乐信息，通过获取音乐列表
//3.通过音乐的分类页，获取音乐列表
//
async function getPage(num) {
  //因为是前端渲染，所以此地址在XHR(ajax)里面
  let httpUrl = "http://www.app-echo.com/api/recommend/sound-day?page=" + num
  let res = await axios.get(httpUrl)
  //console.log(res.data.list)
  res.data.list.forEach(function(item, i){
    let title = item.sound.name
    let mp3Url = item.sound.source
    let filename = path.parse(mp3Url).name

    let content = `${title},${mp3Url},${filename}\n`
    fs.writeFile('music.txt',content,{flag:'a'},function(){
      console.log("写入完成："+title)
    })

    console.log(filename)
    console.log(mp3Url)
    download(mp3Url, title)
  })

}

getPage(1)

async function download(mp3Url, filename) {
  axios.get(mp3Url, {responseType:"stream"}).then(function(res){
    let ws = fs.createWriteStream('./mp3/'+filename+".mp3")
    res.data.pipe(ws)
    res.data.on('close', function(){
      ws.close()
    })
  })

}

