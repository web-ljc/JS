/* 
  JS中三类循环对比及性能分析？
    + for循环及forEach底层原理
      - for循环是自己控制循环过程
      - 基于var声明的时候，for和while性能差不多[不确定循环次数的情况下使用while]
      - 基于let声明的时候，for循环性能更好[原理：没有创造全局不释放的变量]
      - 重写for-each
        + forEach性能比for和while花费时间多，性能低
        + 函数式编程和命令式编程
          + 命令式编程如何去做
          + 函数式编程关注结果，无法管控过程，不能中途停止，性能上有消耗

    + for in循环的bug及解决方案
      - 迭代所有可枚举属性[私有&公有],按照原型链以及急查找很耗性能
      - 问题很多：不能迭代Symbol属性、迭代顺序会以数字属性优先、公有可枚举的属性也会进行迭代

    + for of循环的底层机制
      - 迭代器iterator规范[具备next方法，每次执行返回一个对对象，具备 value/done 属性]
      - 让对象具备可迭代性并且使用 for of 循环
*/

let arr = new Array(999999).fill(0)
// 数组存在空值，是稀疏数组，没有空值的是密集数组

// console.time('For')
// for(let i = 0; i< arr.length; i++) {}
// console.timeEnd('For')

// console.time('while')
// let i = 0;
// while(i < arr.length) {i++}
// console.timeEnd('while')

// 入参1 回调函数， 入参2 函数内this指向
console.time('foreach')
arr.forEach(function(){}, window)
console.timeEnd('foreach')

// 遍历方法基本都是封装的函数，放到Array的原型上。
// 在for循环中调用回调方法，对回调方法的返回值进行处理  
// Array.prototype.MyForEach = function MyForEach(callback, context) {
//   // this -> arr
//   let self = this,
//     i = 0,
//     len = self.length;
//   context = context || window
//   for(; i < len; i++) {
//     typeof callback === 'function' ? callback.call(context, self[i], i) : null
//   }
// }


// let arr2  = [1, 2]
// let sum = arr2.reduce((a, b) => {
//   console.log(a, b);
//   return a - b
// }, 0)
// console.log(sum);

// reduce原理
//     base = callback.call(context, base, self[i])
//     return base

// for in 性能非常差: 迭代当前对象中所有可枚举的属性的[私有属性大部分是可枚举的，公有属性「出现在所有属性的原型上的」也有部分是可枚举的] 查找机制一定会找到原型链上
// 问题1: 遍历顺序以数字优先
// 问题2: 无法遍历Symbol属性
// 问题3: 可以遍历到公有可枚举的
Object.prototype.fn = function fn() {}
let obj = {
  name: 'test',
  age: 12,
  [Symbol('AA')]: 100,
  0: 200,
  1: 300
}
// for(let key in obj) {
//   if(!obj.hasOwnProperty(key)) break // 解决非私有属性
//   console.log(key);
// }

// 可以使用 Obj.keys 来获取key
// let keys = Object.keys(obj)
// keys = keys.concat(Object.getOwnPropertySymbols(obj))
// console.log(keys);
// keys.forEach(key => {
//   console.log('属性名：',key)
//   console.log('属性值：',obj[key])
// })

console.time('forin')
for(let key in arr) {}
console.timeEnd('forin')

// iterator 迭代器
// 部分数据结构实现了迭代器规范
//  + Symbol.iterator
//  + 数组/部分类数组/Set/Map... [对象还没有实现]
//  for of 循环的原理是按照迭代器规范遍历的
console.time('forof')
for(let key of arr) {}
console.timeEnd('forof')

let arr2 = [1, 2, 3]
arr[Symbol.iterator] = function() {
  let self = this,
    index = 0
  return {
    next() {
      if(index > self.length - 1) {
        return {
          done: true,
          value: undefined
        }
      }
      return {
        done: false,
        value: arr[index++]
      }
    }
  }
}
// let itor = arr[Symbol.iterator]()
// itor.next()

// 类数组对象，数字索引和length
let obj2 = {
  0: 200,
  // 'test': 100,
  1: 100,
  length: 2
}
obj2[Symbol.iterator] = Array.prototype[Symbol.iterator]
for(let val of obj2) {
  console.log(val);
}
