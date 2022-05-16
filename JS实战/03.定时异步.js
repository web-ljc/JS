new Promise(resolve => {
  console.info(1)
  setTimeout(resolve, 100, 2)
  console.log(3)
}).then((data) => {
  console.info(data)
})

// 1 3 2
/*
  setTimeout(fn, time, args)
    - fn 回调函数
    - time 等待时间
    - args fn的参数
*/