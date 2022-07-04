
/* 
  ## 解构赋值
    - 声明和赋值放在一起
    - 让左侧出现和右侧值相同的结构，以此快速取得我们需要的内容
    - 真实项目中最常用的就是对数组和对象的解构赋值
      + 数组的位置必须相同
      + 对象解构时名字必须相同
      + 有关键字可以采用：的形式进行更改名字
      + 设置某个属性的默认值，必须采用 = 号的方式

  ### 数组
    - 按照次序排列，找到对应位置对变量赋值
    - 不存在的变量赋值为 undefinde， 不存在的拓展运算符赋值为 []
    - 右侧不具备Iterator接口会报错， 数组、Set解构等可以
    
    - ES6内部使用严格相等运算符 ===, 判断一个位置是否有值，只有一个数组成员严格等于undefined,默认值才会生效
    - 数据可以理解成特殊的对象，解构成对象
  
  ### 对象
    - 对象的属性没有次序，依据属性名称进行查找，变量必须与属性同名，才能去到正确的值
    - 取不到对应变量值为undefined
  
  ### 字符串
    - 字符串也可以解构赋值，被转成一个类似数组的对象
      - const [a, b, c] = 'hi ' // a:'h'   b:'i'   c: ' '
  
  ### 数值 / 布尔值
    - 如果等号右边是数值 和 布尔值，则会先转为对象
  
  ### null / undefined
    - 解构赋值报错

  ### 函数参数
    - 也可以解构赋值

  ### ...x 拓展运算符
    - 把剩下的内容存储到x中（x是个数组），但它只能出现在最后

  ### 用途
    1. 交换变量的值
      - let x = 1, y = 2;  [x, y] = [y, x]
    2. 从函数返回多个值
      - let { x, y } = getData()
    3. 函数参数的定义
      - function test( {name, age} ) {return name+age}
    4. 提取json数据
      - let jsonData = {id: 42, status: '200'}
      - let {id: num, status: data} = jsonData
    5. 指定参数默认值，避免内部判断
      - function test({obj = window}) {}
    6. 遍历Map解构
    7. 输入模块的指定方法
      - const { path } = require('path')

    
*/

let arr = [1, 2, 3, 4, 5 ]

let n = arr[0],
  m = arr.slice()
  console.log(n, m)

// let [x, y, ...z] = arr  
// console.log(x, y, z) // 1 2 [3, 4, 5]
// let [x, , y, ...z] = arr
// console.log(x, y, z) // 1 3 [4, 5]
let [x, , y, , , z = 6] = arr // 如果没有这一项，可以基于等号赋值默认值
console.log(x, y, z) // 1 3 6
let { length } = arr // 获取数组长度
console.log(length) // 5


let arr2 = [10, [20, 30, [49, 50]]]
let [a1, [, , [, a2]]] = arr2
console.info(a1, a2) // 10 50

let [x1 = 1] = [undefined] // x1 = 1
let [x2 = 1] = [null] // x2 = null

// 先找到同名属性，然后再赋值给对应的变量，真正被赋值的是前者
let {foo: foo1, bar: bar1} = {foo: 'aaa', bar: 'bar'}
// foo1 'aaa'  根据foo找到foo1，foo1是变量
// foo error: foo is not defined // foo是匹配的模式

// 对象的结构赋值
let obj = {
  name: 'test',
  age: 10,
  friends: ['zs', 'ls', 'ww']
}

// let { name, age } = obj
// console.log(name, age) // test 10

// 冒号相当于给获取的结果设置了一个别名（变量名）：创建了一个nianling的变量存储了obj.age的值
let {
  age: nianling
} = obj
console.log(nianling) // 10

let {
  height = '180cm'
} = obj
console.log(height) // 180cm 如果对象没有属性返回 undefined，可以设置默认值

// 项目中使用对象解构
let data = {
  code: 200,
  data: {
    today: '2022-02-02',
    data: [{
      name: 1,
      age: 2
    },{
      name: 11,
      age: 22
    }]
  }
}
let {
  code,
  data: {
    today,
    data: testData
  }
} = data
console.log(code, today, testData, 9)

// 在入参进行解构
testData.forEach(({name, age}) => {
  console.log(name, age)
})

// 解构赋值，函数的返回值
function test() {
  return [1, 3, 4]
}
let [a, b, c] = test()
