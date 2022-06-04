
let arr1 = [1, 3, 5]
let arr2 = [2, 4, 6]
// 1展开一个数组
console.info(...arr1) // 1 3 5

let arr3 = [...arr1, ...arr2]
console.info(arr3) // [1, 3, 5, 2, 4, 6]


// 2函数入参的伪数组转换成真数组
// ...arr arr前边加...会作为一个数组
function sum(...numbers) {
  console.info(numbers) // numbers = [1, 3]
  
  return numbers.reduce((perValue, currentValue) => {
    return perValue + currentValue
  })
}
console.info(sum(1, 3))

// 3对象。构建字面量对象时使用展开语法
let obj = {name: 'ls', age: 15}
// console.info(...obj) // 报错
let obj2 = {...obj} // 浅拷贝对象
console.info(obj2, obj === obj2)
// 合并
let obj3 = {...obj, name: 'zs'}
console.info(obj3)

/* 
  ... 的作用
  1. 拓展运算符（多用在解构赋值中）
  2. 展开运算符（多用在传递实参中）
  3. 剩余运算法（多用在接受实参中）
*/

// 解构运算符
// let [n, ...m] = [1, 2, 3]
// console.log(n, m)// 1 [2, 3]

// 传递实参
let arr = [1, 2, 3, 4]
let min = Math.min(...arr)
console.log(min) // 1
// 数组克隆（浅克隆）
let cloneArr = [...arr]

// 接收实参
let fn = (...args) => {
  console.log(args)
}
fn(10, 20, 30)