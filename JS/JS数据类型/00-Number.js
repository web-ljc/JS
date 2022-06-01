
console.info(isNaN(1)) // false
console.info(isNaN('a')) // true
console.log(isNaN('1')) // false
// Number('1') => 1
// Number('a') => NaN


// ----------Number-----------
// 把字符串转换成数字，只要字符串中包含任意一个非有效数字字符串（第一个点除外）结果都是NaN
// 空字符串会变为0
console.log(Number('')) // 0
console.log(Number('12.5')) // 12.5
console.log(Number('12.5.3')) // NaN
console.log(Number('12.5px')) // NaN

// 布尔转换成数字 true=1 false=0
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(isNaN(false)) // false

// null空对象是0  undefined未定义是NaN
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN

// 对象, 把引用数据类型转换为数字，先把他基于toString方法转换为字符串，然后再转换为数字
console.log(Number({})) // NaN   // '[object Object]'
console.log(Number({name: 1})) // NaN // '[object Object]'
console.log(Number([])) // 0 // ''
console.log(Number(['12'])) // 12 // '12'
console.log(Number(['s'])) // NaN // 's'
console.log(Number([12, 23])) // NaN // '12,12'

let str = '12.5px'
console.log(parseInt(str)) // 12
console.log(parseFloat(str)) // 12.5
console.log(parseFloat('.5px')) // 0.5
console.log(parseFloat('width:12.5px')) // NaN
console.log(parseFloat('')) // NaN
console.log(parseFloat([12,1])) // 12


/* 
  ## number数字类型
    - 包含：常规数字、NaN

  ### NaN
    - not a number: 不是一个数字，属于数字类型
    - NaN 和任何值都不相等 NaN !== NaN, 不能用相等方式判断是否为有效数字
  ### isNaN
    - 检测一个值是否为非有效数字，如果不是数字返回true，是有效数字返回falsse
    - 使用isNaN进行检测的时候，首先会验证检测的值是否为数字类型，如果不是，先基于Number()方法，把值转换成数字类型，再检测
  
  ### 把其他类型值转换成数字类型
    - Number([val])
      - 走的v8底层机制
      1. 字符串类型 - 字符串转换成数字，只要字符串中包含任意一个非有效数字字符串（第一个点除外）结果都是NaN
      2. 布尔类型  - ture转成1   false转成0
      3. null/undefined  - null转成0   undefined转成NaN
      4. 引用类型 - 非数组都为NaN， 空数组转成0， 数组有一位且是有效数字专为数字，其余为NaN
        - 把引用数据类型转换为数字，先把他基于toString方法转换为字符串，然后再转换为数字
    
    - parseInt/parseFloat([val], [进制])
      - 浏览器提供的方法
      1. 转换数字的方法，对字符串来说，它是从左到右依次查找有效数字字符，知道遇到非有效数字字符，停止查到。把找到当数字返回
      2. 可以查找不为空的数组，只返回第一个
    
    - == 进行比较时，可能要出现把其它类型值转换为数字
      1. 对象 == 字符串  对象.toString()变为字符串
      2. null == undefined ,但是和其他值就不相等了
      3. NaN == NaN 不相等
      4. 都是转成数字
*/