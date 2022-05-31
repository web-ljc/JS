// 动态原型模式，在构造函数中，通过判断是否完成原型初始化，添加对应的函数
/**
 */

// 在构造函数中定义实例属性
function Person(name, age, obj) {
  this.name = name
  this.age = age
  this.obj = obj
  this.friends = ['李四', '王五', '赵六']
  
  // 方法。只有在初次调用构造函数时才会执行，原型已经完成初始化，不需要再做什么修改
  if (typeof this.sayName !== 'function') {
    Person.prototype.sayName = function() {
      console.info(this.name, this.age, this.friends)
    }
  }
}

let p1 = new Person('张三', 20, '学生')
p1.friends.push('马九')
p1.sayName() // 张三
console.info(p1)

let p2 = new Person('王大', 30, '老师')
p2.sayName() // 

