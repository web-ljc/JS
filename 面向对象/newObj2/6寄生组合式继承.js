// 继承
/**
 * 寄生组合式继承
 * 子类通过借用构造函数实现对实例属性的继承
 * 通过超类的原型链对象的实例赋值给子类进行方法继承
 */

// 原型实例化
function object(o) {
  function F() {} // 创建构造函数
  F.prototype = o // 构造函数原型对象指向传入对象
  return new F() // 返回实例
}
// 为子类匹配超类的实例对象的实例
function inheritPrototype(subType, superType) {
  let prototype = object(superType.prototype) // 获取超类原型对象的实例
  prototype.constructor = subType // 
  subType.prototype = prototype // 子类的指针指向超类实例
}

function SuperType(name) {
  this.name = name
  this.friends = ['张三', '李四', '王五']
}
SuperType.prototype.sayName = function() {
  console.info(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}
inheritPrototype(SubType, SuperType)
SubType.prototype.sayAge = function() {
  console.info(this.age)
}


let p1 = new SubType('赵六', 23)
p1.friends.push('赵六')
console.info(p1)
let p2 = new SubType('周八', 40)
p2.friends.push('周八')
console.info(p2)
