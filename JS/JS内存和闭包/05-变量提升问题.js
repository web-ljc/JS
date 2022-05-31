
fn2()
// fn() //Uncaught TypeError: fn is not a function

// 匿名函数之函数表达式
var fn = function() {
  console.log(1)
} // 代码执行到此处会把函数值符给fn

// 普通的函数
function fn2() {
  console.log(2)
}

/* 
  只对等号左侧变量提升：
    var fn，只对等号左边进行变量提升，匿名函数不进行变量提升
    fn2  = AAAFFF111，普通函数直接全部申明并赋值
*/


console.info('------------------')


console.info(a, test) // undefined undefined
if(1 === 2) {
  var a = 12
  function test() {return 1}
}
console.info(a, test) // undefined undefined


console.info('------------------')


console.log(b) // undefined, 变量提升
if('b' in window) { // true
  var b = 100
}
console.log(b) // 100

/* 
  条件判断下的变量提升：
    在当前作用域下，不管条件是否成立都要进行变量提升
      - 带 var 的还是只声明
      + 带 function 的在老版本浏览器渲染机制下，声明+定义都处理。
      + 为了迎合ES6中的块级作用域，新版浏览器对于函数（在条件判断中的函数），不管条件是否成立，都只是先声明，没有定义，类似于 var
*/



console.info('------------------')
f = function() {return true} // window.f
g = function() {return false} // window.g
~function() {
  if(g() && [] == ![]) { // 新版本 Uncaught TypeError,   g是undefined，新版本浏览器先声明没定义
    f = function() {return false} // 重新赋值
    function g() {return true} // 变量提升私有作用域， true
  }
}()
console.info(f()) // 旧版本 false
console.info(g()) // 旧版本 false

