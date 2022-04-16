// 继承
/**
 * JS对象的继承主要靠原型链来实现
 */

function Fn(a, b) {
  this.a = a
  this.b = b
}
Fn.prototype.con = function() {
  console.info(this.a, this.b)
}
// let obj = new Fn(1, 3)
// console.info(obj)

function myNew() {
  let constructor = [].shift.call(arguments),
    obj = new Object()
    obj.__proto__ = constructor.prototype
  constructor.apply(obj, arguments) // obj截取原对象的方法，继承原对象的属性
  console.info(obj.__proto__ , obj, 'con')
  return obj
}

let obj = myNew(Fn, 3, 2)
console.info(obj, 'obj')