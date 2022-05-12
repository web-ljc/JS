// console.info(typeof 1)
// console.info(typeof 'hi')
// console.info(typeof true)
// console.info(typeof undefined)
// console.info(typeof Symbol('kk'))
// console.info(typeof null)
// console.info(typeof new Function)
// console.info(typeof new Object)
// console.info(typeof [])
// console.info(typeof new Date)
// console.info(typeof new Set)
// console.info(typeof new Map)
// console.info(typeof new WeakMap)
let str = new String(1)
let str2 = '2'
// console.info(str, str2, typeof str)


// instanceof  左侧要使用引用类型值 new、 object、 array、 {}、 []
// console.info([] instanceof Array)
// console.info({} instanceof Object)
// console.info(function(){} instanceof Function)

// let a = '1'
// console.info(a instanceof String) // false
// let b = 2
// console.info(b instanceof Number) // false
// let c = new Function()
// console.info(c instanceof Function)
// let d = new Object()
// console.info(d instanceof Object)
// let e = new Date()
// console.info(e instanceof Date)

function Instanceof(obj, func) {
  while(true) {
    obj = obj.__proto__
    if(obj === null) return false
    if(obj === func.prototype) return true
  }
}
console.info(Instanceof(function(){}, Function))


// constructor 找数据的构造函数
// console.info(''.constructor === String)
// console.info([].constructor === Array)
// console.info({}.constructor === Object)
// console.info(false.constructor === Boolean)
// let num = []
// console.info(num.constructor === Object)
// console.info(undefined.constructor === Object) // 数字不能直接用、null、undefined 不行


// Object的原型对象的toString方法
// console.info(Object.prototype.toString.call(1)) // [object Number]