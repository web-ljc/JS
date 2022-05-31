// 继承
/**
 * 组合继承也叫伪经典继承，将原型链和借用构造函数的技术组合到一起
 * 使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承
 */

// 父级类型
function SuperType(name) {
  this.name = name
  this.friends = ['张三', '李四', '王五']
}
SuperType.prototype.sayName = function() {
  console.info(this.name)
}

// 子级类型
function SubType(name, age) {
  // 继承属性。如果这里不借用数据，那么子级类型本身会没这些数据。但是在原型对象=父级实例时会一直有
  SuperType.call(this, name)
  this.age = age
}
// 继承方法
SubType.prototype = new SuperType() // 子级原型对象更改为父级实例。既可以从构造函数中获取属性，又可以指向父级的原型
SubType.prototype.constructor = SubType; // 原型对象指针指向子级
SubType.prototype.sayAge = function() {
  console.info(this.age)
}


let instance1 = new SubType('lisi', 30)
instance1.friends.push('赵六')
instance1.sayName()
instance1.sayAge()
console.info(instance1) // 张三 李四 王五 赵六

let instance2 = new SubType('zhangsan', 20)
instance2.sayName()
instance2.sayAge()
console.info(instance2) // 张三 李四 王五
