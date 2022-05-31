let arr = [1, 2, 3, 4, 5, 6, 7]

let res = arr.slice(2, 4)
console.info(res) // [3, 4]
res = arr.slice(2)
console.info(res) // [3, 4, 5, 6, 7]
res = arr.slice() // 克隆数组
console.info(res) // [1, 2, 3, 4, 5, 6, 7]
// res = arr.slice(-3) // n 为 负数，倒数第几个
res = arr.slice(1.8, 4.9) // n > m 范围空
console.info(res)


let arr2 = [1, 2]
let res2 = arr2.concat('test', [3, 4])
console.info(res2) // [1, 2, 'test', 3, 4]

let arr3 = [1, 3]
console.info(arr3.toString(), 9) // '1,3' 9
let res3 = arr3.join('|')
console.info(res3, 99) // 1|3, 9

let arr4 = [1, 3, 3, 3]
console.info(arr4.indexOf(3)) // 1
console.info(arr4.lastIndexOf(3)) // 3
console.info(arr4.includes(3)) // true

/* 
  数组及数组中常用的方法
    1. 数组是对象数据类型的，它属于特殊的对象
  
    ### 常用方法
    - 方法的作用和含义
    - 方法的实参（类型和含义）
    - 方法的发返回值
    - 原来的数组是否会发生改变

  #### 数组的查询和拼接
    - 此组学习的方法，不会改变数据
    
    1. slice
      - 实现数组的查询
      - @params 
        + n, m 都是数字 从索引n开始，找到索引为m的地方（不包含m这一项）
        + slice() // 克隆数组
        + n/m 为负数 // 从右向左查找
        + n > m // 空数组
        + n/m 为小数 会向下取整
      - @return 把找到的内容以一个新数组的形式返回
    
    2. concat
      - 实现数据拼接
      - @params 多个任意值
      - @return 拼接后的新数组
      - 不改变原数组
    
    3. toString
      - 把数组转化为字符串
      - 原数组不变

    4. join
      - 把数组转化为字符串
      - @params 指定的分隔符（字符串格式）
        + 不指定分割符  默认用 , 分割
        + 指定分割符  用分割符分割
      - @return 转换后的字符串
      - 原数组不变
    
    5. indexOf / lastIndexOf
      - 检测当前项，在数组中的第一次或最后一次出现位置的索引
      - @params 要检索的对象
      - @return 这一项出现位置索引值，没有返回-1
      - 原数组不变

    6. includes
      - 检测数组中是否包含当前项
      - @params 要检索的对象
      - @return 如果存在返回 true


*/