/* 
  调用原型上的方法，通过call/apply/bind 改变this指向
*/
function sum() {
  // arguments:内置的实参集合，不是数组而是类数组。因为不是数组的实例，不能直接用数组的方法
  // arguments.__proto__ === Object.prototype
  let total = null
  
  // 把arguments转成数组
  // let arg = Array.prototype.slice.call(arguments, 0)
  let arg = [].slice.call(arguments, 0)
}
let total = sum(1, 3, 4)