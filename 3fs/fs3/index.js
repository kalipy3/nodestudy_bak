//异步代码执行顺序测试
var fs = require('fs')


//异步
var content = fs.readFile("hello.txt", {flag:'r', encoding:"utf-8"}, function(err, data){
	if (err) {
		console.log(err)
	}else{
		console.log(data)
	}
	console.log(456)
})
console.log(123)

