/*
  构造原型模式
    - 自己能够创造出自定义类和对应实例，构建起一套完整的对象

  - new Person() 和 普通函数执行的联系
    1. new 这种执行方式叫做‘构造函数执行模式’，此时的Person不仅是一个函数名，被称为“类”，返回结果是一个对象，称为“实例”。函数体中的this都是这个实例
      + 类：函数数据类型
      + 实例：对象数据类型
    2. 类中返回一个引用类型的值，会把默认返回的实例给替换掉

  - instanceof：用来检测某个实例是否属于这个类
    - 实例 instanceof 类， 属于返回true，不属于返回false
    - [局限性]
      1. 要求检测的实例必须是对象数据类型的，基本数据类型的实例是无法基于它检测出来的

  - 基本数据类型在JS中的特殊性
    1. 一定是自己所属类的实例
    2. 但是不一定是对象数据类型的实例

*/

function CreatePerson(name, age) {
  this.name = name
  this.age = age
  this.friends = [1, 3, 4]
}

// CreatePerson('zs', 25) // this:window 普通函数执行

let person1 = new CreatePerson(1, 18)

// true
console.log(person1 instanceof CreatePerson);

// 字面量创建方式
let n = 10
console.log(n instanceof Number) // false

// 构造函数创建模式（创建出来的实例是对象类型的）
let n2 = new Number('10')
console.log(n2 instanceof Number) // true


/*
  构造函数执行
  1. 和实例有关系的操作，一定是this.xxx = xxx， 因为this是当前类创造出来的实例
  2. 私有变量和实例没有必然的联系
*/
function Fn(n) {
  let m = 10
  this.total = n + m
  this.say = function() {
    console.log(this.total)
  }
}

let f1 = new Fn(10)
let f2 = new Fn(20)
let f3 = new Fn
// new的时候无论是否加() ，都相当于把Fn执行了，创建了对应的实例，只不过不加()不能传递实参的，相当于形参n=undefined

console.log(f1.m) // undefined
console.log(f2.n) // undefined
console.log(f1.total) // 20
console.log(f2.say()) // 30 undefined
console.log(f1 === f2) // false 2个不同的实例对象，不同的堆地址
