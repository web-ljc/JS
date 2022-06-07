/* 
  this
  每一个函数（普通函数/构造函数/内置类）都是Function这个内置类的实例，所以：函数.__proto__ === Function.prototype，函数可以直接调取Function原型上的方法
  1. call
    - 语法： 函数.call([context], [params1]...)
    - 函数基于原型链找到Function.prototype.call这个方法，并且把它执行，在call方法执行的时候完成了一些功能
      + 让当前函数执行
      + 把函数中的this指向改为第一个传递给call的实参
      + 把传递给call其余的实参当作参数信息传递给当前函数
      + 如果执行call一个实参都没传递/null/undefined，非严格模式下是让函数中的this指向window，严格模式下指向都是undefined
    - 多个call执行
      + 一个call是让左边函数执行（this是传递的参数）
      + 多个call是让最后边传参函数执行（this是window/undefined）

  2. apply
    - 和call方法一样，把函数执行，并改变this关键字，唯一区别是传递给函数参数的方式不同
    - apply按照数组传参

  3. bind
    - 和 apply/call一样，也是用来改变函数中this关键字，只不过基于bind改变this，当前方法并没有被执行，类似于预先改变this
    - 预先做什么事的思想‘柯里化函数’

*/

// function fn1() {}
// fn1.call() // fn函数基于原型链找到Function.prototype上的call方法，并让其执行（call方法中的this是fn）
// fn1.call.call() // fn.call是Function.prototype上的call方法，也是一个函数，只要是函数就能用原型上的方法
// 实例.方法() 都是找到原型上的内置方法，让内置方法先执行，内置方法中的this一般都是当前操作的实例


var name = 'window'
let obj = {
  name: 'obj'
}
let fn = function(n=0, m=0) {
  console.log(this.name, n, m)
  return n + m
}
fn() // this -> window
// obj.fn() // 报错

// 让fn执行的时候，方法中的this指向obj
// obj.fn = fn
// obj.fn()
// delete obj.fn
fn.call(obj) // this -> obj
fn.call() // this -> window

/* 
  实现call
    @params 第一个入参可以不传，传递必须是引用类型值（因为后续要给它加属性）
*/
;(function() {
  // 能用剩余运算符用剩余运算符，不然需要for循环遍历
  Function.prototype.myCall = function(...args) {
    let obj = args.shift() || window
    obj.$fn = this
    let res = obj.$fn(...args) // 展开运算符，把数组分开传递
    delete obj.$fn
    return res
  }
})()
let res = fn.myCall(undefined, 1, 2)
// console.log(res);

// 面试
;(function() {
  function fn1() {console.log(1);}
  function fn2() {console.log(2);}
  fn1.call(fn2) // 1
  fn1.call.call.call.call(fn2) // 2   // this.fn1.call(window)  window.this
  fn1.call.call(fn2) // 2   // this.fn1.call(window)  window.this
  Function.prototype.call(fn1) // 没有任何输出结果  fn1.$fn = Function.prototype
  Function.prototype.call.call(fn1) // 1
})()
/*
  一个call是让左边函数执行（this是传递的参数）
  多个call是让最后边传参函数执行（this是window/undefined） 最后的call改变了this指向，再次执行call方法时this已经变成最后一个函数
*/


fn.apply(obj, [1, 2])

document.onclick = fn.bind(obj) 
// bind的好处是，通过bind的方法预先把fn中的this修改为obj，fn并没有执行，只有点击事件触发才会执行
// IE6-8不支持bind方法， 预先做啥事的思想“柯里化函数”
