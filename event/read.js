let fs = require('fs')

fs.readFile('hello.txt', {flags:'r', encoding:'utf-8'}, function(err, data){
  if (err) {
    console.log(err)
  } else {
    console.log(data)
    //读取完hello.txt后要做的事情1
    //事情2
    //事情3
    lcEvent.emi('fileSuccess', data)
  }
})


let lcEvent = {
  event:{
    //fileSuccess:[fn,fn,fn]
  },
  on:function(eventName, eventFn) {
    if (this.event[eventName]) {
      this.event[eventName].push(eventFn)
    } else {
      this.event[eventName] = []
      this.event[eventName].push(eventFn)
    }
  },
  emi:function(eventName,eventMsg) {
    if (this.event[eventName]) {
      this.event[eventName].forEach(itemFn => {
        itemFn(eventMsg)
      })
    }
  }
}


lcEvent.on('fileSuccess', function(eventMsg){
  console.log('事情1')
})

lcEvent.on('fileSuccess', function(eventMsg){
  console.log('事情2')
})

lcEvent.on('fileSuccess', function(eventMsg){
  console.log('事情3')
})
