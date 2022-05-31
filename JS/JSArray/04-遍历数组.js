let arr = [1, 2, 3, 4, 5, 6, 7]

arr.forEach((item, index) => {
  // item操作的项， index是当前项的索引
  console.info(item+2, index)
})

let arr2 = [1, 3, 5]
let a = arr2.map(item => {
  if(item > 1) return item +2
})
console.info(arr2, a) // [undefined, 5,7]

let arr3 = [1, 3, 4]
a = arr3.filter(item => item > 1)
console.info(arr3, a) // [3, 4]
a = arr3.find(item => {
  return item > 1
})
console.info(arr3, a) // 3


/* 
  数组及数组中常用的方法
    1. 数组是对象数据类型的，它属于特殊的对象
  
    ### 常用方法
    - 方法的作用和含义
    - 方法的实参（类型和含义）
    - 方法的发返回值
    - 原来的数组是否会发生改变

  #### 数组的排序或排列
    
    1. forEach
      - 遍历数组中每一项内容
      - @params 回调函数
      - @return
      - 原数组不变

    2. map
      - 映射
      - @params 回调函数, 在回调函数中处理逻辑
      - @return 返回处理后的新数组
      - 原数组不变
    
    3. filter
      - 过滤器
      - @params 回调函数, 在回调函数中添加判读逻辑，返回符合逻辑的数据
      - @return 返回所有符合条件的新数组
      - 原数组不变

    4. find
      - 查找
      - @params 回调函数, 在回调函数中添加判读逻辑，返回符合逻辑的数据
      - @return 返回第一个符合条件的内容
      - 原数组不变

    5. reduce
      - 汇总

    6. some
      - 部分
      - @params 回调函数，判断逻辑，如果有一项匹配则返回true
      - @return 返回boolean
      - 原数组不变

    7. every
      - 每一个
      - @params 回调函数，判断逻辑，全部匹配才返回true
      - @return 返回boolean
      - 原数组不变
    

    
    
*/