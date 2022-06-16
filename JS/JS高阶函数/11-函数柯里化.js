/* 
  函数柯里化：预先处理的思想（利用闭包的机制）

*/
;(function() {
  function myBind(context = window, ...args) {
    // this 需要改变this的函数
    // context 需要改变的this指向
    let _this = this
    return function(...innerArgs) {
      _this.apply(context, args.concat(innerArgs))
    }
  }
  Function.prototype.myBind = myBind
})()

let obj = {}
function test() {}
let fn = test.bind(obj, 1, 2)

// function add(...args) {
//   console.log(this, args);
// }

// add(1)
// add(1)(2)(3)
// add(1, 2)(3)
// add(1)(2, 3)