
/* 
  ## 解构赋值
    - 声明和赋值放在一起
    - 让左侧出现和右侧值相同的结构，以此快速取得我们需要的内容
    - 真实项目中最常用的就是对数组和对象的解构赋值
      + 数组的位置必须相同
      + 对象解构时名字必须相同
      + 有关键字可以采用：的形式进行更改名字
      + 设置某个属性的默认值，必须采用 = 号的方式

  ### ...x 拓展运算符
    - 把剩下的内容存储到x中（x是个数组），但它只能出现在最后
    
    
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
