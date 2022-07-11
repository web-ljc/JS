
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


/* 
  1. 指数运算符
    2**3**2 // 2 ** (3 ** 2)

  2. 链判断运算符
    - ?.运算符，直接在链式调用的时候判断，左侧的对象是否为null或undefined， 如果是的，就不再往下运算，而是返回undefined
      const firstName = message?.body?.user?.firstName || 'default'
    - 如果有定义方法，就会调用该方法，否则返回undefined，不在执行?.后面的部分  
      iterator.return?.()
    - 三种写法
      - obj?.prop // 对象属性是否存在
      - obj.[expr] // 同上
      - func?.(...args) // 函数或对象方法是否存在

  3. Null判断运算符
    - Null判断运算符 ?? ，它的行为类似于 ||，但是只有运算符左侧的值为null 或 undefined时，才返回右侧的值
    - 多个逻辑运算符一起使用，必须用括号表明优先级，否则会报错

  4. 逻辑赋值运算符
    - 或赋值运算符
      x ||= y  // x || (x = y)
    - 与赋值运算符
      x &&= y  // x && (x = y)
    - null赋值运算符
      x ??= y  // x ?? (x = y)

*/

// 只要属性a值为null、undefined、false、0时，默认值就会生效
// let boo = a || true

// 只要属性a值为null、undefined时，默认值才会生效
// let boo = a ?? true
