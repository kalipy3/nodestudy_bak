var events = require('events')
let fs = require('fs')
let ee = new events.EventEmitter()

ee.on('helloSuccess', function(){
  console.log('1111')
})

//事件的监听
ee.on('helloSuccess', function(eventMsg){
  console.log('222222')
  console.log(eventMsg)
})
ee.on('helloSuccess', function(){
  console.log('3333333')
})
ee.on('helloSuccess', function(){
  console.log('4444444')
})

fs.readFile('./hello.txt',{encoding:'utf-8'}, function(err, data){
  if (err) {
    console.log(err)
  } else {
   // console.log(data)
    //把data传入
    ee.emit('helloSuccess', data)
  }
})
