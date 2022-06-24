/* 
  8大设计模式
    + Singleton单例模式及Command命令模式
    + Constructor构造器及Factory工厂模式
    + Observer观察者及Mediator中介者模式
    + Publish&Subscribe 发布/订阅模式
    + 装饰器模式及ES7中的Decorator

  为什么要设计模式？
    + 设计模式就是一种思想，用来规范编程代码，清晰易懂，扩展。
*/

/*
  Singleton
    + 早起的模块化编程
      - AMD
      - CMD / CommonJS [sea.js  Node]
      - ES6 Module
      - ...
    + 业务逻辑处理

  单例设计模式：基于单独的实例，来管理某一个模块中的内容，实现模块之间的独立划分[但是也可以实现模块之间方法的相互调用]

*/

/* 
// 模块A
let AModule = (function() {
  let data = []
  return {
    data
  }
})()

// 模块B
let BModule = (function() {
  function test() {
    console.log(AModule.data);
  }
  return {
    test
  }
})() */



// 业务来讲：按照一定的顺序依次执行对应的方法，从而实现整个板块功能的开发
let SearchModule = (function() {
  let body = document.body
  function queryData() {}
  function bindHtml() {}
  function handle() {}
  return {
    // init相当于大脑，可以控制谁先执行，谁后执行 [命令模式]
    init: function() {
      queryData()
      bindHtml()
      handle()
    }
  }
})()
SearchModule.init()

/* 
// 单例数据会公有，会修改相同的数据
let AModule = (function() {
  let arr = []
  let change = function(val) {
    arr.push(val)
    console.log(arr);
  }
  return {
    change
  }
})()
AModule.change(10) // 10
AModule.change(20) // 20 */
