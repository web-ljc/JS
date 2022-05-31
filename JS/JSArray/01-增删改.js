let arr = [1]
console.dir(arr)

let res = arr.push(2, 3)
console.info(res) // 4
// 基于原生JS操作键值对的方法，向末尾追加一项新内容
arr[arr.length] = 4
console.info(arr) // [1, 2, 3, 4]

let res2 = arr.unshift(-1)
console.info(arr, res2) // [-1, 1, 2, 3, 4], 5

let res3 = arr.shift()
console.info(arr, res3) // [1, 2, 3, 4]  -1
// 基于原生JS让数组长度减掉最后一位
let res4 = arr.pop()
console.info(arr, res4) // [1, 2, 3]  4


let arr2 = [10, 20, 30 , 40, 50, 60, 70]
let res5 = arr2.splice(2, 4)
console.info(res5) // [30, 40, 50, 60]
// 基于这种方法可以清空一个数组，把原始数组中的内容以新数组存储起来
// res5 = arr2.splice(0)
// console.info(res5) // [10, 20, 70]
arr2.splice(0, 1) // 删除第一项
arr2.splice(arr2.length-1) // 删除最后一项
console.info(arr2)

let arr3 = [1, 2, 3, 4, 5]
let res6 = arr3.splice(1, 2, 'test')
console.info(arr3, res6) // [1, 'test', 4, 5] [2, 3]
let res7 = arr3.splice(1, 0, 'x')
console.info(arr3, res7) // [1, 'x', 'test', 4, 5] []
arr3.splice(arr3.length, 0, 9)
console.info(arr3) // [1, 'x', 'test', 4, 5, 9]


/* 
  数组及数组中常用的方法
    1. 数组是对象数据类型的，它属于特殊的对象
  
    ### 常用方法
    - 方法的作用和含义
    - 方法的实参（类型和含义）
    - 方法的发返回值
    - 原来的数组是否会发生改变

  #### 1.实现数据增删改的方法
    - 这一部分方法都会修改原有数组
    
    1. push
      - 向数组末尾增加内容
      - @params 多个任意类型
      - @return 新增后数组长度
      - 改变原数组
    2. unshift
      - 向数组开始位置增加
      - @params 多个任意类型
      - @return 新增后数组长度
      - 改变原数组
    3. shift
      - 删除数组的第一项
      - @params 
      - @return 删除的那一项
      - 改变原数组
        + 杜绝删除下角标改变数组
    4. pop
      - 删除数组的最后一项
      - @params 
      - @return 删除的那一项
      - 改变原数组
    5. splice
      - 实现数组的增加、删除、修改
      - @params
        - n, m    都是数字 从索引n开始删除m个元素 （m不写就删除到末尾）
        - n, m, x 从索引n开始删除 m 个元素，用 x 占用删除的部分
        - n, 0, x 从索引n开始，一个都不删除，把x放到索引n的前面
          + arr.slice(arr.length, 0, 9) // 数组末尾加1
          + arr.slice(0, 0, 9) // 数据开始加1

      - @retrun 把删除的部分用新数组存储起来返回
      - 改变原数组
*/