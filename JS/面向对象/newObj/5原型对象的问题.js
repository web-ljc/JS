// 构造函数模式，像Object() Array() 原生构造函数，创建自定义的构造函数。
/**
 * 问题：
 * 1、使用原型模式，构造函数初始化不能传参
 * 2、共享的本性，对于函数、基本值的属性共享很合适，但对于引用类型值的属性，问题就很突出。
 */


// 构造函数时会生成原型对象Prototype
function Person() {
}

// 重写了原型对象，创建新的原型对象 newPrototype
Person.prototype = {
  name: 'lisi',
  friends: ['李四', '王五'], // 引用类型指针指向一处
  sayName: function() {
    console.info(this.name, this.friends)
  }
}
// 重写原型对象后，constructor就没了，因此要重写constructor指向，且设置成不可循环到
Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false,
  value: Person
})

let p1 = new Person()
p1.name = 'zhnagsan'
// p1.friends = ['张三'] // 重新赋值覆盖不会同步影响其他实例数据
p1.friends.push('张三') // 直接更改数据会同步影响
p1.sayName() // 张三

let p2 = new Person()
p2.sayName() // 

