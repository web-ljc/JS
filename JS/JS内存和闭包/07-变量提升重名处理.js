
console.info(fn) // fn 函数

var fn = 12

function fn() {
  console.info(12)
}

var fn = 100

console.info(fn, 9) // 12

/* 
  1. 带var 和 function关键字声明相同的名字，也是重名了（是一个fn，只是存储值的类型不一样）
  2. 【重要】关于重名的处理：如果名字重复了，不会重新声明，但是会重新的定义（重新赋值）[不管是变量提升还是代码执行阶段都如此]
  
  3. 变量提升阶段，对于var只是声明，如果已经声明就不会重复声明。对于functionn是声明和定义，所以重名情况下var在function前后不影响function
*/

fn2() // 4
function fn2() {console.info(1)}
fn2() // 4
function fn2() {console.info(2)}
fn2() // 4
var fn2 = 100
fn2() // 报错不是函数
function fn2() {console.info(3)}
fn2() // 报错不是函数
function fn2() {console.info(4)}
fn2() // 报错不是函数