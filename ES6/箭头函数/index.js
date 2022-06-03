/*
  1.箭头函数是匿名函数，没有 new、prototype。不能作为构造函数
*/
let fn = () => console.info(1)
fn()
console.info(fn, fn.__proto__, fn.prototype)
try {
  let fn2 = new fn()
  console.info(fn2)
} catch(err) {
  console.info(err)
}

/* 
  没有arguments对象
*/
let fn3 = () => console.info(arguments)
// fn3()
let fn4 = function() {
  console.info(arguments, arguments.length)
}
fn4()

/* 
  本身没有this，this指向上一层执行上下文的this
*/
var age = 20
let obj = {
  age: 30,
  fn5: function() {
    setTimeout(function() {
      console.info(this, this.age, 5)
    }, 100)
  }
}
obj.fn5()

let obj2 = {
  age: 40,
  fn6: function() {
    setTimeout(() => {
      console.info(this, this.age, 6)
    }, 100)
  }
}
obj2.fn6()


/* 
  箭头函数使用call、apply、bind不能改变this指向
*/
let newObj = {
    age: 30
}
// 普通函数
let newFn = function() {
    console.info(this.age)
}
// 执行
newFn() // 20
newFn.call(newObj) // 30
// 箭头函数
let newFn2 = (num) => console.info(this.age, num)
// 执行
newFn2() // 20
newFn2.call(newObj, 9) // 30


/* 
  箭头函数及this问题
    - ES6中新增了创建函数的方式：箭头函数
    - 真实项目中是箭头函数和Function这种普通函数混合使用

  1. 箭头函数简化了创建函数的代码
    - 箭头函数的创建都是函数表达式方式（变量 = 函数），不存在变量提升，函数只能在创建完成后被执行
    const fn = ([形参]) => {
      // 函数体
    }
    fn([实参])
  
  2. 箭头函数没有arguments，但是可以基于剩余运算符获取实参集合，而且ES6中是支持给形参设置默认值的
    let fn = (num=1, ...args) => {
      // num 设置默认值
      // ...args 剩余运算符（把除第一项外的，其它传递的实参信息都存储到args这个数组集合中）
    }
    fn(2, 10, 20, 30)

  3. 箭头函数中没有自己的this，它里面用到的this，都是自己所处上下文中的this（一旦设计到this，箭头函数慎用）
  4. 箭头函数使用 call 、 apply、 bind不能更改this指向
*/
