var a = 12
if(true) {
  // console.info(a) // Uncaught ReferenceError: Cannot access 'a' before initialization
  let a = 13
}

// console.log(b) // Uncaught ReferenceError: b is not defined
console.info(typeof b) // undefined 在原有浏览器渲染机制下，基于typeof等逻辑运算符检测一个未被声明的变量，不会报错。浏览器bug

console.log(typeof c) // Cannot access 'c' before initialization 
// 如果当前变量是基于ES6语法处理，在没有声明这个变量的时候，使用typeof检测会直接报错，不会是undefined，解决了原有js的死区
let c 

/* 
  - 基于let创建变量，会把大部分{}当作一个私有的块级作用域（类似于函数的私有作用域）
    在这里也是重新检测语法规范，看一下是否基于新语法创建的变量，如果是按照新语法规范来解析
  
  - es6之前，原有浏览器渲染机制下，基于typeof等逻辑运算符检测一个未被声明的变量，不会报错，形成暂时性死区
  - 如果变量是ES6语法处理，在没声明变量的时候，使用typeof检测会直接报错
*/