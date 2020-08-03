let readline = require("readline")

//实例化接口对象
let r1 = readline.createInterface({
  output:process.stdout,
  input:process.stdin
})

//设置r1,提问事件
r1.question("今晚吃啥？", function(answer) {
  console.log("答复：", answer)
  r1.close();
})
r1.on('close', function(){
  process.exit(0)
})

