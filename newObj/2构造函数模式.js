// 构造函数模式，像Object() Array() 原生构造函数，创建自定义的构造函数。
// 优点：可以创建多个相似对象
// 缺点：创建实例需要创建多个同样的sayName函数实例
// 过程：1创建一个新对象
//      2将构造函数的作用域付给新对象（this指向新对象）
//      3执行构造函数中的代码（为新对象添加属性）
//      4返回新对象
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function() {
    console.info(this.name)
  }
}

let p1 = new Person('李四', 25, '老师')
let p2 = new Person('张三', 30, '医生')
p1.name = 'lisi'
p2.sex = 'man'
p1.sayName()
console.info(p1.constructor === Person) // constructor构造函数属性
console.info(p1 instanceof Person) // 检测类型
console.info(p2)

Person('王五', 40, '律师') // 作为普通函数调用，作用域是全局window
window.sayName()

let obj = new Object() // 在另一个对象的作用域中调用
Person.call(obj, '赵六', 66, '老板')
obj.sayName()