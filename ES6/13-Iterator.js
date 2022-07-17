/* 
  Iterator
  1. 遍历器的概念
    js原有表示‘集合’的数据结构，主要是数组和对象，es6添加Map和Set。用户可以组合使用他们。这样就需要统一的接口机制处理不同的数据结构
    遍历器（Iterator）就是这样一种机制，为各种不同的数据结构提供统一的访问机制。
    3个作用：
      - 为各种数据结构，提供一个统一、简便的访问接口
      - 使得数据结构的成员能够按照某种次序排列
      - ES6创造了一种新的遍历命令 for...of 循环
    Iterator 遍历过程：
      1. 创建一个指针对象，指向当前数据结构的起始位置，遍历器对象本质上，就是一个指针对象
      2. 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员
      3. 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员
      4. 不断调用指针对象的next方法，知道它指向数据结构的结束位置

  2. 默认Iterator接口
    Iterator接口的目的，就是为多有数据结构，提供了一种统一的访问机制
    默认Iterator接口部署在数据结构的Symbol.iterator属性，Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。
    具备原生Iterator接口的数据结构：
      - Array
      - Map
      - Set
      - String
      - TypedArray
      - 函数的arguments对象
      - NodeList对象
    对象之所以没有默认部署Iterator接口，是因为对象的哪个属性先遍历是不确定的，遍历器是一种线性处理


  3. 调用Iterator接口的场合
    - 解构赋值
    - 扩展运算符
    - yield*
    - for...of  / Array.from() / Map() / Set() / WeakMap() / Promise.all() / Promise.race()


  4. 字符串的Iterator接口
    - 字符串是一个类似数组的对象，也具有Iterator接口
    - 可以覆盖原生Symbol.iterator方法，达到修改遍历器行为的目的

  5. Iterator接口与Generator函数

  6. 遍历器对象的return() throw()
    - 遍历器对象除了具有next()方法，还有 reutrn() 和 throw() 方法
    - return() 方法为了结束循环
    - throw() 方法在找不到这个方法时使用

  7. for...of 循环
    - 数组，可以获取键值
    - Set结构遍历时，按添加顺序返回一个值
    - Map结构遍历时，按添加顺序返回一个数组，包含Map成员的键名和键值
*/


// 2. 默认Iterator接口
const obj = {
  [Symbol.iterator]: function() {
    return {
      next: function() {
        return {
          value: 1,
          done: true
        }
      }
    }
  }
}

const arr = [1, 3]
let iter = arr[Symbol.iterator]()  // 直接调用数组的Symbol.iterator属性
iter.next() // {value: 1, done: false}
iter.next() // {value: 3, done: false}
iter.next() // {value: undefined, done: true}


// 1. Iterator 的概念
const it = makeIterator([1, 2])
it.next() // {value: 1, done: false}
it.next() // {value: 2, done: false}
it.next() // {value: undefined, done: true}
// 遍历器
function makeIterator(array) {
  let nextIndex = 0
  return {
    next: function() {
      return nextIndex < array.length ?
      {vlaue: array[nextIndex++], done: false} :
      {value: undefined, done: true}
    }
  }
}
