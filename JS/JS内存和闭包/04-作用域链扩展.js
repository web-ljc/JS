function fn() {
  var a = 12
  b = 13
  console.info(a, b) // 12 13
}
fn()
// console.info(a, b) // Uncaught ReferenceError: b is not defined

;(function() {
  const c = 10
  let fn = function() {
    console.info(this.c) // undefined  调用对象的属性，不报错，返回 undefined
  }
  fn()
})()

console.info(c) // Uncaught ReferenceError
c = 9
/* 
  可以不用声明变量，直接赋值。变量会挂载到 window 上。
  但是变量就不存在变量提升，不能用提前使用。不然会报错。
*/