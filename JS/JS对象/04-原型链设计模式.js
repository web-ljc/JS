/* 
  原型及原型链模式
  1. 每一个函数数据类型的值都有一个天生自带的属性：prototype（原型），这个属性的属性值是一个对象（用来存储实例公用的属性和方法）
    - 普通的函数
    - 类（自定义类和内置类）

  2. 在prototype这个对象中，有一个天生自带的属性：constructor 这个属性存储的是当前函数本身
    - Fn.prototype.constructor === Fn

  3. 每一个对象数据类型的值，也有一个天生自带属性：__proto__，这个属性指向‘所属类原型prototype’
    - 普通对象、数组、正则、Math、Date、类数组等
    - 实例也是对象数据类型的值
    - 函数的原型prototype属性的值也是对象类型
    - 函数也是对象数据类型的值

  内置类Object
    - 原型继承 Object.prototype,内置类Object的原型
    - 因为Object是所有对象数据值的基类，Object.prototype.__proto__要指向自己没有任何意义，所以默认赋值为null

  ‘原型链’ - 实例调用方法
    1. 先找自己私有属性，有则调取使用，没有继续查找
    2. 基于__proto__找所属类原型上的方法（Fn.prototype），如果还没有找到则继续基于__proto__往上找...一只找到Object.prototype为止

  hasOwnProperty()

  为什么getElementById的上下文只能是document？
    - documnet的原型链
    > documnet  -- 
      HTMLDocument.prototype -- 
      Document.prototype(有常用的方法 createElement/getELementById...) --
      Node.prototype(appendChild / cloneNode...) --
      EventTarget.prototype(addEventListener...) --
      Object.prototype

    - div#box原型链
    > HTMLDivElement.prototype --
      HTMLElement.prototype --
      Element.prototype(getElementsByClassName...) --
      Node.prototype(appendChild / cloneNode...) --
      EventTarget.prototype(addEventListener...) --
      Object.prototype

*/

function Fn() {
  this.age = 1
}
Fn.prototype.eat = function() {}

let f1 = new Fn()
console.log(f1)

let arr = new Array(1, 2)
// 1. 实例arr的 __proto__ 指向 Array类的prototype，
// 2. Arrary.prorotype对象又是Object类的实例，所以它的__proto__指向Object.prototype
console.log(arr)
console.log(Array.prototype)

console.log(Object.prototype)

