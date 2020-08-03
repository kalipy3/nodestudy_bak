let req = require("request")
let axios = require("axios")

let httpUrl = "https://www.dytt8.net/index.htm"

axios.get(httpUrl).then(function(res){
  console.log(res)
})
