// 寄生构造函数模式与工厂模式其实是一样的，只是将返回对象重新new一下
/**
 */

// 在构造函数中定义实例属性
function Person(name, age, obj) {
  let o = new Object()
  o.name = name
  o.age = age
  o.obj = obj
  o.sayName = function() {
    console.info(this.name)
  }
  return o
}

// new一下对象，返回的对象与构造函数、构造函数原型属性之间没有关系
let p1 = new Person('张三', 33, '程序员')
p1.sayName()
