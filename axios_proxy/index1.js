const axios = require('axios')

let httpUrl = "www.baidu.com"
let options = {
  proxy: {
    //host: '36.79.50.220',
    //port: 8080
  
   // 超级快
    //host:'180.149.145.139',
    //host:'180.149.145.132',
    host:'180.149.144.108',
    port: 80
  },
}

axios.get(httpUrl, options).then(function(res) {
  console.log(res.data)
})
