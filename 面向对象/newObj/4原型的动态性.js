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


// 构造函数时会生成原型对象Prototype
function Person() {
}

// 最初的原型对象上-添加方法
// Person.prototype.sayName =  function () {
//   console.info(this.name)
// }

let p2 = new Person() // 引用最初的原型对象

// 重写了原型对象，创建新的原型对象 newPrototype
Person.prototype = {
  // constructor: Person, // 重写原型对象后，constructor就没了，因此要重写constructor指向
  sex: 'man',
  sayName: function() {
    console.info(this.name)
  }
}
// 重写原型对象后，constructor就没了，因此要重写constructor指向，且设置成不可循环到
Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false,
  value: Person
})

let p1 = new Person() // 指向新的原型对象
p1.name = '张三'
p1.sayName()  // 张三
console.info(p1.sex) // man

// p2引用的仍然是最初的原型。重写原型对象，切断了现有原型与任何之前已经存在的对象实例之间的联系
console.info(p2.sex) // undefined
p2.sayName() // error


// 原生的引用类型，也其构造函数的原型上定义的方法
// 给原生引用类型添加首字母判断方法
String.prototype.myStartsWith = function(text) {
  return this.indexOf(text) == 0
}
let msg = 'hello world'
console.info(msg.myStartsWith('he')) // true

