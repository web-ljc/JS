let a = 12
console.log(a.toString()) // '12'
console.log((2).toString()) // '2'

// null 和 undefined 是禁止直接toString的
// (null).toString() // 报错

// 普通对象.toString() 的结果都是 '[object Object]' -- Object.prototype.toString方法不是转换为字符串的，而是用来检测数据类型的

console.log(10 + '10') // 1010
console.log(10 - '10') // 0
console.log('10px' - 10) // NaN
console.log([10] - 10) // 0
a = 10 + null + true + [] + undefined + 'test' + null + [] + 10 + false
// 10 + 0 + 1 + '' + ....   // []空数组变为数字，先调用toString方法编程空字符串，遇到字符串直接拼接
console.info(a) // 11undefinedtestnull[]10false

/* 
  ## string字符串数据类型
    - 所有单引号、双引号、反引号包起来的都是字符串
  
  ### 把其它类型值转换为字符串
    - [val].toString()
      1. null 和 undefined 是禁止直接toString的
        // (null).toString() // 报错
      2. 普通对象.toString() 的结果都是 '[object Object]' -- Object.prototype.toString方法不是转换为字符串的，而是用来检测数据类型的
    
     - 字符串拼接
      1. 四则运算法则中，除加法之外，其余都是数学计算，只有加法可能存在字符串拼接，【一旦遇到字符串，就变成字符串拼接】
        - 运算用 Number() 来转换
*/