
// console.info(a) // Uncaught ReferenceError: Cannot access 'a' before initialization

let a  = 12
console.info(a) // 12
console.info(window.a) // undefined

/* d = 10
console.log(d)
e = 11  // Uncaught ReferenceError: Cannot access 'a' before initialization
console.info(e)
let e = 12
console.info(e) */

let b = 10, c = 10
let fn = function() {
  // console.info(b, c) // Uncaught ReferenceError: Cannot access 'b' before initialization
  let b = c = 20 // 在当前作用域使用let声明变量b，只能在声明语句之后使用
  console.log(b, c) // 20 20
}
fn()
console.info(b, c) // 10 20

/* 
  1. 在ES6中，基于let / const 等方式创建变量或者函数，不存在变量提升机制
  2. 切断了全局变量和window属性的映射机制
  3. 在相同的作用域中，基于let不能声明相同名字的变量(不管用什么方式，在当前作用域下声明了变量，再次使用let创建都会报错)
    - 虽然没有变量提升机制，但是在当前作用域代码自上而下执行之前，浏览器会做一个重复性检测：自上而下查找当前作用域下所有变量，
      一旦发现有重复的，在重复变量开始直接抛出异常，代码也不会执行了（虽然没有把变量提前声明定义，但是浏览器已经记住了，当前作用域下有哪些变量）

*/
