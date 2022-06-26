/* 

  setTimeout / setInterval
  定时器返回一个数字，代表当前是第几个定时器
    - 后期可以基于clearTimeout / clearInterval清除定时器
    - 手动把timer赋值为null，后期基于它的值验证是否存在定时器
  
  定时器是异步编程的
*/

let timer = null
timer = setTimeout(() => {
  clearTimeout(timer)
  timer = null
}, 0) //  写0也不是立即执行，有一个最小等待时间，10ms左右



/* 
  - 同步和异步

  应用层 http
  传输层 tcp / tls
  网络层 ip
  数据链路层
  物理层

  - 浏览器是多线程的
  - 但是渲染解析代码只分配一个线程处理，所以前端代码渲染是单线程的
  - 同步：任务是一次执行的，上一个任务没完成，下一个任务不能进行处理（‘单线程’）
  - 异步：上一个事情没有完成，下一个事情也可以继续处理（‘浏览器多线程’）
  - 遇到link / img / script 会分配一个新的线程去请求资源
  - JS是单线程的，大部分任务都是同步任务，也有异步任务
    - `定时器`是异步编程
    - `事件绑定`也是异步编程
    - `AJAX数据请求`项目基本上都是异步
    - `回调函数`也可以理解为异步
    - `Promise/async/await`用来处理异步编程
    - `node.js`中也提供异步编程
  

  - Event Queue 等待事件（任务）队列
    会将异步任务放到队列等待
  - Event loope 事件循环
    主线程加载完，就等待任务队列中查找到达时间的任务，拿到主线程所在的内存中自行...以此类推 ‘事件循环’
    异步任务后按加载顺序，谁先到时间先执行


  - 进程：电脑每开一个程序（浏览器打开一个页面），就是一个进程porcess
  - 线程：一个进程中，可能要处理多个任务，每一个任务都是基于线程处理的thread
  - CPU：栈内存stack 和 堆内存heap

*/


// setTimeout(() => {
//   console.log(9);
// }, 500)
// setTimeout(() => {
//   console.log(8);
// }, 50)
// for(let i = 0; i < 9000000; i++) {}
// setTimeout(() => {
//   console.log(6);
// }, 40)


;(function () {
  console.info('start')
  async function async1() {
    await async2()
    console.log('async1')
  }
  async function async2() {
    console.log('async2')
  }
  setTimeout(function () {
    console.log(1)
  }, 0)
  new Promise(function (resolve) {
    console.log(2)
    for (var i = 0; i < 10000; i++) {
      i == 9999 && resolve()
    }
    console.log(3)
  }).then(function () {
    console.log(4)
  }).then(function () {
    console.log(5)
  })
  Promise.resolve().then(function () {
    console.log(6)
  })
  async1()
  console.info('end')
  // start  2  3  async2  end 4 6 async1 5 1
})()