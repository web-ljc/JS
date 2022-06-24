/* 
  this的应用场景
    + this的5种情况
      this执行主体，谁把它执行[和在哪里创建没有关系]
      1. 函数执行，看方法前面是否有‘.’，没有点this是window[严格模式是undefined],有点，点前面是谁this就是谁
      2. 给当前元素的某个事件行为绑定方法，当事件行为触发，方法中的this是当前元素本身[排除attachEvent]
      3. 构造函数体中的this是当前类的实例
      4. 箭头函数中没有执行主体，所用到的this都是其所处上下文中的this
      5. 可以基于Function.prototype上的call/apply/bind去改变this指向
    + 手撕call/bind源码
    + 掌握this：鸭子类型
*/

// const fn  = function fn() {
//   console.log(this);
// }
// let obj ={
//   fn: fn
// }
// fn() // this --> window
// obj.fn() // this  --> obj

// document.body.addEventListener('click', function() {
//   console.log(this); // this --> <body>
// })

// function Factory() {
//   this.age = 12
//   console.log(this);
// }
// let f = new Factory()

// let demo = {
//   name: 'test',
//   fn() {
//     console.log(this, 1); // demo 谁调用指向谁
//     setTimeout(function() {
//       console.log(this, 2); // window 异步执行函数，回调函数没有.
//     }, 100)
//     setTimeout(() => {
//       console.log(this, 3); // demo this指向上下文
//     }, 100)
//   }
// }
// demo.fn()

function func(x, y) {
  console.log(this, x, y);
}
let obj = {
  name: 'test'
}
// func函数基于__proto__找到Function.prototype.call 把call方法执行
// 在call方法内部【call执行的时候】
//    + 把func中的this改为obj
//    + 把params接收的值作为实参传递给func函数
//    + 并且让func函数立即执行
func.call(obj, 10, 20)
func.apply(obj, [19, 20])

// bind 方法并没有立即执行
// 把传递进来的 obj / 10 / 20 等信息存储起来[闭包]
// 执行bind返回一个新的函数
func.bind(obj, 10, 20)

Function.prototype.myCall = function(context, ...params) {
  let self = this,
    key = Symbol('KEY'),
    result
  // context为null或undefined设置为window
  context == null ? context = window : null
  // context为非引用类型数据 Object() 装箱
  !/^(object|function)$/i.test(typeof context) ? context = Object(context) : null
  context[key] = self
  result = context[key](...params)
  delete context[key]
  return result
}
func.myCall(obj, 10, 20)


// 简单bind
Function.prototype.myBind = function(context, ...params) {
  let self = this
  return function proxy(...args) {
    // 把func执行，并改成this, args是执行proxy的时候传递的值
    self.apply(context, params.concat(args))
  }
}

// this，鸭子类型
// 类数组像数组，但不能用数组的方法
function test() {
  console.log(arguments);
  // 把arguments变为数组，就可以用数组的方法 Array.from / [...arguments]
  // console.log(Array.from(arguments));
  let arr = [].slice.call(arguments)
  console.log(arguments, arr, obj);
}
test(12, 23, 45)
