const axios = require('axios')

let httpUrl = "https://www.baidu.com"
let options = {
  proxy: {
    //host: '36.79.50.220',
    //port: 8080
  
   // 超级快
   // host:'180.149.145.139',
    host:'180.149.145.132',
    //host:'180.149.144.108',
    port: 80
  },
headers: {
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
      'sec-fetch-user': '?1'
    }

}

axios.get(httpUrl, options).then(function(res) {
  console.log(res.data)
})
