let fs = require("fs")

fs.unlink('1.txt', function(){
  console.log("成功删除！")
})
