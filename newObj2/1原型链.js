// 继承
/**
 * JS对象的继承主要靠原型链来实现。基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法
 * 实例依靠 __proto__ 指针指向实例对象
 * 构造函数依靠 prototype 指针指向实例对象
 * 
 * 
 * 实例通过 constructor 指向构造函数
 * 原型对象通过 constructor 指向构造函数
 * 
 */

// 父级类型
function SuperType() {
  this.name = 'test'
}
// 父级原型对象添加方法
SuperType.prototype.getSuperValue = function() {
  return this.name
}

// 子级类型
function SubType() {
  this.age = 22
}
// 子级原型重新赋值父级实例
SubType.prototype = new SuperType()
// 添加方法
SubType.prototype.getSubValue = function() {
  return this.age
}

let instance = new SubType()
console.info(instance.getSuperValue())
