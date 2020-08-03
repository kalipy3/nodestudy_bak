const axios = require('axios')


//目标：下载音乐
//1.获取音乐相关信息，通过相关信息获取mp3地址
//2.如何获取音乐信息，通过获取音乐列表
//3.通过音乐的分类页，获取音乐列表
//
async function getPage(num) {
  //因为是前端渲染，所以此地址在XHR(ajax)里面
  let httpUrl = "http://www.app-echo.com/api/recommend/sound-day?page=" + num
  let res = await axios.get(httpUrl)
  console.log(res.data)

}

getPage(1)
