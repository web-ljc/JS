// 构造函数模式，像Object() Array() 原生构造函数，创建自定义的构造函数。
/**
 * 1每个函数都有一个prototype（原型）属性，这个属性是一个指针，指向一个对象
 * 只要创建一个新函数，就会根据一组特定的规则为该函数创建一个prototype属性，该属性会指向原型对象
 * 
 * 2新函数的prototype属性 -->  原型对象   / Person函数的prototype属性指向原型对象
 * Person.prototype -- 原型对象
 * 
 * 3原型对象的constructor（构造函数）属性  --> Person 构造函数
 * Perosn.prototype.constructor  ==  原型对象.constructor  --  Person函数(构造函数)
 * 
 * 4创建新的实例后,实例内部将包含一个指针[[prototype]]，指向构造函数的原型对象。可通过__proro__属性访问
 *   __proro__链接存在实例与构造函数的原型对象，不存在与构造函数之间
 * 可以通过 Object.getPrototypeOf(p1) 通过实例获取原型对象
 * 实例调用属性或方法先从自身找，再去找原型对象，一直向上找
 * 
 * 使用hasOwnPrototype()方法检测一个属性是存在实例中，还是原型中
 * p1.hasOwnPrototype()
 */


function Person() {
}
Person.prototype.name = '李四'
Person.prototype.age = 25
Person.prototype.job = '老师'
Person.prototype.sayName =  function () {
  console.info(this.name)
}

let p1 = new Person()
p1.name = '张三'
p1.age = 30
p1.job = '程序员'

let p2 = new Person()
p2.sex = 'man'

p1.sayName()
console.info(p1.name)
console.info(p2.name)
console.info(p2.hasOwnProperty('name'))
