/* 
  闭包：函数执行形成一个私有的作用域，保护里面的私有变量不受外界的干扰，这种保护机制成为闭包

  通俗：闭包形成一个不销毁的私有作用域才是闭包
*/

// 柯里化函数
function fn() {
  return function() {
  }
}
var f = fn()

// 惰性函数
var utils = (function() {
  return {}
})()

// 闭包项目实战应用
// 真实项目中为了保证JS的性能，尽可能减少闭包的使用（不销毁的堆栈是耗性能的）

// 闭包具有保护作用：保护私有变量不受外界干扰
// jq形式闭包，将暴露的方法抛到全局
// (function() {
//   function jQuery() {
//     // ...
//   }
//   window.jQuery = window.$ = jQuery // 把需要提供外面使用的方法，通过给window设置属性暴露出去
// })()
// zepto形式闭包，通过return把需要共外面使用的方法暴露出去
// var Zepto = (function() {
//   // ...
//   return {
//     xxx: function(){}
//   }
// })()
// Zepto.xxx()


// 闭包具有保存作用：形成不销毁的栈内存，把一些值保存下来。
var fn2
for(var i = 0; i < 3; i++) {
  (function(n) {
    fn2 = n
  })(i)
}


// 所有事件绑定都是异步编程
// 自执行函数 (function(){})(), 同步