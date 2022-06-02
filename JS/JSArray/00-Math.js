
console.log(typeof Math)
console.log(Math)

// 取绝对值，入参非数字，先基于Number()转换成数字再处理
// console.log(Math.abs(null)) // 0
// console.log(Math.abs('-1')) // 1
// console.log(Math.abs('1px')) // NaN
// console.log(Math.abs(false)) // 0
// console.log(Math.abs({})) // NaN
// console.log(Math.abs([])) // 0

// 取整
// Math.ceil() 向上取整，非整数取的值肯定比之前大
// console.log(Math.ceil(12)) // 12
// console.log(Math.ceil(12.1)) // 13
// console.log(Math.ceil(12.9)) // 13
// console.log(Math.ceil(-12.1)) // -12
// console.log(Math.ceil(-12.9)) // -12

// Math.floor() 向下取整，非整数取的值肯定比之前小
// console.log(Math.floor(12)) // 12
// console.log(Math.floor(12.1)) // 12
// console.log(Math.floor(12.9)) // 12
// console.log(Math.floor(-12.1)) // -13
// console.log(Math.floor(-12.9)) // -13

// Math.round() 四舍五入
// console.log(Math.round(12)) // 12
// console.log(Math.round(12.1)) // 12
// console.log(Math.round(12.5)) // 13 // 正数.5进，负数.5舍
// console.log(Math.round(12.9)) // 13
// console.log(Math.round(-12.1)) // -12
// console.log(Math.round(-12.9)) // -13

// console.log(Math.max(2, 14, 1, 3)) // 14
// console.log(Math.min(2, 14, 1, 3)) // 1
// console.log(Math.min([2, 14, 1, 3])) // NaN
// console.log(Math.min(...[2, 14, 1, 3])) // 1

// console.log(Math.sqrt(9)) // 3 符合N*N=M 这样的M才能整开平方
// console.log(Math.sqrt(-9)) // NaN 负数开不了平方
// console.log(Math.pow(2, 10)) // 1024

// for(let i = 0; i< 10; i++) {
//   console.log(Math.random())
// }

// let num = Math.random()*10 // 1-10
// console.log(Math.ceil(num))

// Math.round(Math.random() * (m-n) + n) // n-m 之间的随机整数

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
      - 获取一个数的绝对值（绝对值永远是正数或者0）
      - @params 入参非数字，先基于Number() 转换为数字再处理
        - Math.abs('-1') // 1
        - Math.abs('-1px') // NaN
        - Math.abs(true) // 1
        - Math.abs([2]) // 2

    2. Math.ceil() / Math.floor([number value])
      - 把一个数向上取整 / 向下取整
      - Math.ceil() 向上取整，非整数数字肯定比之前大
      - Math.floor() 向下取整，非整数数字肯定比之前小
    
    3. Math.round()
      -  四舍五入

    4. Math.max([val1], [val2]...) / Math.min()
      - 获取一堆数中的最大值和最小值
      - Math.max([]) // NaN, 传参只能是一个值，传数组会和内置语法不符合要求
    
    5. Math.sqrt() / Math.pow()
      - sqrt() 给一个数开平方
      - pow() 计算一个数的几次幂
    
    6. Math.random()
      - 获取0-1之间的随机小数
      - 应用：获取1-10之间随机整数   Math.round(Math.random() * (m-n) + n)
*/