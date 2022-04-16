// 构造函数模式和原型模式，
/**
 * 问题：
 */

// 在构造函数中定义实例属性
function Person(name, age, obj) {
  this.name = name
  this.age = age
  this.obj = obj
  this.friends = ['李四', '王五', '赵六']
}
// 所有实例共享的属性constructor和方法fn定义在原型中
Person.prototype = {
  constructor: Person,
  sayName: function() {
    console.info(this.name, this.friends)
  }
}

let p1 = new Person('张三', 20, '学生')
p1.friends.push('马九')
p1.sayName() // 张三

let p2 = new Person('王大', 30, '老师')
p2.sayName() // 

