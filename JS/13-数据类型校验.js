/* 
  数据类型检测：
    + typeof
      + 直接在计算机底层基于数据类型的值（二进制）进行检测
      + typeof null 'object' 对象存储在计算机中，都是以000开始的二进制存储，null也是，所以检测出来的结果都是对象
      + typeof 普通对象/数组对象/正则对象/日期对象 'object'

    + instanceof 检测当前实例是否属于这个类
      + 底层机制：只要当前类出现在实例的原型链上，都会为ture
      + 由于可以任意改原型的指向，所以检测出来的结果是不准确的
      + 不能检测基本数据类型 

    + constructor
      + 用起来看似比instanceof好用一些，基本类型也支持
      + constructor 可以随便改，也不准

    + Object.prototype.toString.call([value])
      + 标准检测数据类型的办法：Object.prototype.toString不是转为字符串，是返回当前实例所属的信息
      + 标准检测的办法 "[object Number/String/Boolean/Null/Undefined/Symbol/Object/Array/RegExp/Date/Function]"

  检验数组的方法：
    1. instanceof
    2. constructor
    3. Array.isArray()
    4. Object.prototype.toString.call()
    5. Object.getPrototypeOf()
    6. Array.prototype.isPrototypeof()

*/

// let arr = []
// console.log(arr instanceof Array); // true
// console.log(arr instanceof Object); // true
// console.log(arr instanceof RegExp); // false


// function Fn1() {
//   this.b = 200
// }
// function Fn() {
//   this.x = 100
// }
// Fn.prototype = new Fn1() 
// Fn.prototype.constructor = Fn
// let f = new Fn
// console.log(f, f instanceof Fn1, f instanceof Fn);


// 检测引用数据类型
// function myInstanceof(example, classFunc) {
//   while(true) {
//     example = Object.getPrototypeOf(example)
//     if(example === null) return false
//     if(example === classFunc.prototype) return true
//   }
// }

// let arr = [1, 3]
// console.log(myInstanceof(arr, RegExp));
// console.log(myInstanceof(arr, Object));
// console.log(myInstanceof(arr, Array));
// console.log(arr);

// let arr = [1, 2]
// console.log(arr.constructor === Array); // true
// let num = 2
// console.log(num.constructor === Number); // true

let obj = {
  age: 1
}
console.log(obj.toString());

;(function() {
  let class2type = {}
  let toString = class2type.toString
  let arr = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Symbol']
  arr.forEach(name => {
    class2type[`[object ${name}]`] = name.toLowerCase()
  })
  function toType(obj) {
    if(obj == null) { // 传递null或undefined，就返回对应字符串
      return obj + ''
    }
    return typeof obj === 'object' || typeof obj === 'function' ? 
      class2type[toString.call(obj)] || 'object' :
      typeof obj
  }
  window.toType = toType
})()
