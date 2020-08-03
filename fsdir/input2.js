let readline = require("readline")
let {fsWrite} = require('./lcfs.js')

//实例化接口对象
let r1 = readline.createInterface({
  output:process.stdout,
  input:process.stdin
})

//设置r1,提问事件
function lcQuestion(title){
  return new Promise(function(resolve, reject) {
    r1.question(title, function(answer) {
      resolve(answer)
    })
  })
}

async function createPackage() {
  let name = await lcQuestion("您的包名是？\n");
  let des = await lcQuestion("您的包如何描述？\n");
  let main = await lcQuestion("您的包main入口是？\n");
  let author = await lcQuestion("author？\n");

  let content = `{
    "name":"${name}",
    "des":"${des}",
    "main":"${main}",
    "author":"${author}"
  }
  `
 await fsWrite('package.json', content)

  r1.close()
}

createPackage()

r1.on('close', function(){
  process.exit(0)
})

