
console.log(typeof Math)
console.log(Math)

console.log(Math.abs({}))

/* 
  Math
    - 数学函数，但它是一个对象，对象中存储了很多操作数字的属性方法，因此被称为数学函数

  Math = {
    PI: 3.1415926,
    abs: function(){},
    ceil: function(){}
  }

  Math中常用的属性和方法
    1. Math.abs([number value])
      - 获取一个数的绝对值
      - @params 入参非数字，先基于Number() 转换为数字在处理
        - '-1' // 1
        - '-1px' // NaN
        - true  // 1
*/