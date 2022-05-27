var a = 12

function fn() {
  console.log(a)
  // arguments: 实参集合
  // arguments.callee: 函数本身fn
  // arguments.callee.caller: 当前函数在哪执行，caller就是谁（记录它执行的宿主环境），在全局下执行caller的结果就是null
  console.log(arguments.callee.caller)
}

function fn2() {
  var a = 120
  fn()
}
fn2() // 12

/*
  - 当前函数执行，形成一个私有作用域A，A的上级作用域是谁，和在哪执行没有关系，跟在哪创建有关系。
    - 在哪创建的，它的上级作用域就是谁
  
  形参赋值&变量提升
*/

var n = 10
function test() { // 形成新的堆内存
  var n = 20
  function fn() { // 形成新的堆内存
    n++
    console.info(n)
  }
  fn() // 形成新的栈内存（fn作用域）
  return fn
}
var x = test() // 21 形成新的栈内存（test作用域）
x() // 22
x() // 23
console.log(n) // 10
