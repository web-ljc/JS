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
      - @params
        1. 回调函数
          // currentValue 当前元素的值
          // index        当前元素的索引
          // array        数组
        2. 回调函数this指向
          // thisArg      执行回调函数的this指向

      - @return undefined
      - 未被赋值的项不会被调用，中途不会停止，除非抛异常
      - 案例
        arr.forEach((currentValue, index, array) => {
          // currentValue 当前元素的值
          // index        当前元素的索引
          // array        数组
          // thisArg      执行回调函数的this指向
        }, thisArg)


    2. map
      - 映射
      - @params
        1. 回调函数, 在回调函数中处理逻辑
          // currentValue 当前元素值
          // index        当前元素索引
          // array        当前数组
        2. 回调函数this指向
          // thisArg      执行回调函数的this指向
      - @return 返回处理后的新数组
      - 未被赋值的项不会被调用
      
      - 案例
        let newArr = arr.map((currentValue, index, array) => {
          // currentValue 当前元素值
          // index        当前元素索引
          // array        当前数组
          // thisArg      执行回调函数的this指向
        }, thisArg)
    

    3. filter
      - 过滤器
      - @params 
        1. 回调函数, 在回调函数中添加判读逻辑，返回符合逻辑的数据
          // element 当前元素
          // index   当前元素的索引
          // array   当前数组
        2. 回调函数this指向
          // thisArg 执行callback时，用于this的值
      - @return 返回所有符合条件的新数组
      - 未被赋值的项不会被调用

      - 案例
        let newArr = arr.filter((element, index, array) => {
          // element 当前元素
          // index   当前元素的索引
          // array   当前数组
          // thisArg 执行callback时，this的指向
        }, thisArg)


    4. find
      - 查找
      - @params
        1. 回调函数
          // element 当前元素
          // index   当前元素的索引
          // array   数组本身
        2. 回调函数的this指向
          // thisArg 执行callback时，this的指向
      - @return 返回第一个符合条件的值，否则返回undefined
      - 根据索引进行遍历，未被赋值的也会被遍历，原数组不变
      
      - 案例
        const found = arr.find((element, index, array) => {
          // element 当前元素
          // index   当前元素的索引
          // array   数组本身
          // thisArg 执行callback时，this的指向
        }, thisArg)

    5. reduce
      - 汇总
      - @params 
        1. 回调函数
          // previousValue 上一次回调函数的返回值，在第一次调用时，若指定初始值则值为初始值，否则数组索引为0的元素
          // currentValue  当前元素，第一次调用时，若指定初始值则为索引为0的元素，否则为索引为1的元素
          // currentIndex  当前索引，若指定了初始值索引为0，否则从索引1开始
          // array         用于遍历的数组
        2. 初始值
          // initialValue  初始值，指定了初始值赋值给previousValue，否则将使用数组第一个元素
      - @return 使用回调函数遍历整个数组后的结果
      - 未被赋值的项不会被调用
      
      - 案例
        arr.reduce((previousValue, currentValue, currentIndex, array) => {
          // previousValue 上一次回调函数的返回值，在第一次调用时，若指定初始值则值为初始值，否则数组索引为0的元素
          // currentValue  当前元素，第一次调用时，若指定初始值则为索引为0的元素，否则为索引为1的元素
          // currentIndex  当前索引，若指定了初始值索引为0，否则从索引1开始
          // array         用于遍历的数组
          // initialValue  初始值，指定了初始值赋值给previousValue，否则将使用数组第一个元素
        }, initialValue)

    6. some
      - 部分
      - @params
        1. 回调函数
          // element 当前元素
          // index   当前元素的索引
          // array   被调用的数组
        2. 回调函数this指向
          // thisArg 执行回调函数的this指向
      - @return 至少一个元素通过回调函数的测试就返回true，都没通过返回false
      - 未赋值的索引不会调用，原数组不变

      - 案例
        const boo = arr.some((element, index, array) => {
          // element 当前元素
          // index   当前元素的索引
          // array   被调用的数组
          // thisArg 执行回调函数的this指向
        }, thisArg)

    7. every
      - 数组每一个执行回调函数返回true
      - @params
        1. 回调函数，判断逻辑，全部匹配才返回true
          // element 当前值
          // index   当前值的索引
          // array   当前数组
        2. this指向
          // thisArg 执行回调函数this指向
      - @return 返回boolean
      - 未被赋值的索引不会被调用，原数组不变，回调函数，需要返回true才会继续处理
      
      - 案例
        const boo = arr.every((element, index, array) => {
          // element 当前值
          // index   当前值的索引
          // array   当前数组
          // thisArg 执行回调函数this指向
        }, thisArg)

    
    
*/