/* 
  ## 数组的扩展
  1. 扩展运算符
    - 只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错
    - 替代函数的apply()方法，使用Math.max() 或 数组拼接
    - 复制数组
    - 合并数组
    - 解构赋值
    - 将字符串转为真正的数组
    - 实现了Iterator接口的对象


  2. Array.from()
    - 将类似数组的对象(array-likeobject)、可遍历的对象(iterable)转为真正的数组
    - 扩展运算符背后调用的是遍历器接口
    - 参数
      - item 需要转换的对象
      - 回调函数
      - this指向
    - 可以将字符串转为数组，然后返回字符串长度

  3. Array.of()
    - 将一组值，转换为数组，弥补数组构造函数Array()的不足，因为参数个数不同，导致Array()的行为差异
    - Array()方法只有当参数不少于2个时，Array()才会返回由参数组成的新数组，参数只有一个正整数时，实际制订数组的长度

  4. 实例方法：copyWithin()
    - 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员）,然后返回当前数组，会修改当前数组
    - 参数
      - target：从该位置开始替换数据，如果为负值，表示倒数
      - start：从该位置开始读区数据， 默认是0，如果为负值从末尾开始计算
      - end：到该位置前停止读取数组，默认等于数组长度，如果为负值从末尾开始计算


  5. find() / findIndex() / findLast() / findLastIndex()
    - find() 用于找到第一个符合条件的数组成员，存在返回该成员，不存在返回undefined
    - findIndex() 找到第一个符合条件的数组成员的索引，存在返回索引，不存在返回-1
    - findLast() / findLastIndex() 从数组的最后一个成员开始，依次向前检查


  6. fill()
    - 填充数组，原有元素会被替换掉，填充类型为对象，那么被赋值的是同一个内存地址的对象，不是深拷贝
    - 参数
      - data  填充内容
      - start 起始位置
      - end   结束位置之前


  7. entries() / keys() / values()
    - 遍历数组，他们都会返回一个遍历器对象，可以用于for...of循环进行遍历


  8. includes()
    - 返回一个布尔值，表示某个数组是否包含给定的值
    - 参数
      - data  需要判断的值
      - index 开始索引
    - 相比较indexOf，indexOf方法不够语义化，找到参数第一个出现位置，需要比较是否不等于-1，内部使用严格相等运算符===，导致NaN的误判


  9. flat() / flatMap()
    - 将嵌套的数组‘拉平’，变成一维的数组，返回一个新数组，对原数据没有影响
    - 参数
      - num 默认拉平层数为1， 可设置拉平几层 最大 Infinity
    - 原数组有空位，flat()方法会跳过空位

    - flatMap() 方法对原数组的每个成员执行一个函数，然后会返回值组成的数组执行flat() 方法，该方法返回一个新数组，不改变原数组
    - flatMap() 只能展开一层数组
    - 参数
      - 回调函数
        el    当前元素
        index 当前索引
        arr   数组
      - this指向

  10. at()
    - 支持负数索引，参数超出范围返回undefined


  11. toReversed() / toSorted() / toSpliced() / with()
    - 对应原方法，但不会改变数组
    - toReveresd() 对应 reverse() ，颠倒数组成员的位置
    - toSorted() 对应 sort()，用来对数组成员排序
    - toSpliced() 对应 splice() , 用来指定位置，删除指定数量的成员，并插入新成员
    - width(index, value) 对应 splice(index, 1, value) 用来将指定位置的成员替换为新的值


  12. group() / groupToMap()
    - 组成员分组
      - group() 返回对象， 按字符串分组用group
      - groupToMap() 返回一个Map结构，不是对象，按对象分组用groupToMap
    - 参数
      - 回调函数
      - this指向

  13. 数组的空位
    - 空位不是undefined，没有任何值 [ , ,]
    - forEach() / filter() / reduce() / every() / some() 都会跳过空位
    - map() 会跳过空位，但会保留这个值
    - join() / toString() 会记那个空位视为undefined ，而undefined/null会被处理为空字符串
  
  14. Array.prototype.sort() 的排序稳定性
    - 指的是排序关键字相同的项目，排序前后的顺序不变
    
*/






const odd = {odd: true}, even = {even: true}
[1, 2, 4, 5].groupToMap((num, index, arr) => {
  return num % 2 === 0 ? even : odd
}) // Map {{odd: true}: [1,3,5], {even: true}: [2, 4]}

[1, 2, 3, 4, 5].group(function (num, index, arr) {
  return num % 2 === 0 ? 'even' : 'odd'
}, thisArg) // {odd: [1, 3, 5], even: [2, 4]}

[1, 2, 3].toReversed()
[3, 2, 1].toSorted()
[1, 1, 3].width(1, 2) // [1, 2, 3]

'hi world'.at(0) // 'h'
'hi world'.at(-1) // 'd'
[1, 2, 3, 4].at(0)  // 1
[1, 2, 3, 4].at(-1) // 4

// flatMap 回调函数，只能展开一层
[1, 2, 3].flatMap((el, index, arr) => {
  return el + 2
}, thisArg)


[1, [2, [3, [4]]]].flat(Infinity) // 不限制拉平
[1, 2, [3, [4]]].flat(2)  // 拉平2层
[1, 2, [3, 4]].flat() // [1, 2, 3, 4]


[1, 3, NaN].includes(NaN) // true
[NaN].indexOf(NaN) // -1


new Array(3).fill(7) // [7, 7, 7]
[1, 3, 4].fill(6) // [6, 6, 6]
[1, 3, 4].fill(8, 1, 2) // [1, 8, 4]
let arrFill = new Array(3).fill([])
arrFill[0].push(5) // [[5], [5], [5]]


[1, -2, 4].find((item, index, arr) => item < 0) // -2

// Array.of() 将一组值转换为数组
Array.of() // []
Array.of(undefined) // [undefined]
Array.of(3) // [3]
Array.of(3, 2, 1) // [3, 2, 1]
// 构造函数Array() 传参不同结果不同
Array() // []
Array(3) // [ , , ,]
Array(3, 2, 1) // [3, 2, 1]

function ArrayOf() {
  return [].slice.call(arguments)
}


// 可以接受一个函数作为第二个参数，作用类似于数组的map方法，对每个元素进行处理，并返回结果
// 不会跳过空元素
Array.from([1, , 2, 3], (x) => x * x) // [1, NAN, 4, 9]

function typeOf() { // 获取入参类型
  return Array.from(arguments, value => typeof value)
}
typeOf(null, [], NaN) // ['object', 'object', 'number']

Array.from({length: 2}, () => 'test') // ['test', 'test']

function countSymbols(string) { // 获取字符串长度
  return Array.from(string).length
}

Array.from('hi') // ['h', 'i']

let nSet = new Set([1, 2])
Array.from(nSet) // 把set对象转成数组


// 获取数组最大值
Math.max.apply(null, [1, 3, 4]) // ES5需要通过apply方法求最大元素
Math.max(...[1, 3, 4])
// 数组拼接
Array.prototype.push.apply(arr1, arr2) // ES5拼接需要通过apply方法拼接
arr1.push(...arr2)

let arr = [...'hi']  // ['h', 'i']

