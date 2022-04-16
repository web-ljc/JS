// 稳妥构造函数模式，没有公共属性，其他方法也不引用this的对象
/**
 */

// 在构造函数中定义实例属性
function Person(name, age, obj) {
  let o = new Object()
  // 传入参数不绑定到对象上
  // 添加方法调用传入数据
  o.sayName = function() {
    console.info(name)
  }
  // 返回对象
  return o
}

// new一下对象，返回的对象与构造函数、构造函数原型属性之间没有关系
let p1 = new Person('张三1', 33, '程序员')
p1.sayName()
