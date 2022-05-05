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
  this指向，一般是全局window，如果被普通函数包含，则指向上一层函数的对象
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

