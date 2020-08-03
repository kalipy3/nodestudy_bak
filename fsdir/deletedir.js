let fs = require('fs')

fs.rmdir('abc', function(err) {
  if (err) {
    console.log(err)
  }else {
    console.log("删除目录成功")
  }
})
