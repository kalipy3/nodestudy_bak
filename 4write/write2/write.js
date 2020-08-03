//异步写入顺序测试
let fs = require('fs')


function writefs(path, content){
  return new Promise(function(resolve, reject){
    fs.writeFile(path, content, {flag:"a", encoding:"utf-8"}, function(err){
      if (err) {
       // console.log("内容写入出错")
        reject(err)
      }else{
        resolve(err)
        //console.log("内容写入成功")
      }
    })
  })
}

async function writeList() {
  await writefs('lc.txt', "11111111\n");
  await writefs('lc.txt', "222222222222\n");
  await writefs('lc.txt', "333333333\n");

}

writeList();
