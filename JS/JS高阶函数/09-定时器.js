
let n = 0
let timer = setTimeout(() => {
  console.log(++n);
}, 1000)

let m = 0,
  timer2 = null
timer2 = setInterval(() => {
  console.log(++m)
  if(m > 5) {
    clearInterval(timer2) // 定时器清除了，但是timer2=2
    timer2 = null // timer2 重置为null
  }
}, 1000)

console.log(timer, timer2)

;(function() {
  let count = 0, txt='暂停', timer = null
  function createTime() {
    timer = setInterval(() => {
      count++
    }, 1000)
  }
  createTime()
  document.onclick = function() {
    // timer存在，说明有定时器
    if(timer) {
      clearInterval(timer)
      timer = null
      txt = '开始'
      return
    }
    // timer不存在，创建新的定时器
    createTime()
    txt = '暂停'
  }
})()

/* 
  浏览器中的定时器有2种：设置一个定时器，规定在等待时间之后执行某个方法
    - setTimeout 执行一次
    - setInterval 一直会执行下去（每间隔这么长时间都会执行）
    - 设置定时器会有一个返回值：是一个数字，代表当前是第几个定时器
    - clearTimeout(数字) / clearInterval(数字) 清除第几个定时器

*/