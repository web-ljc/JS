
console.log(fn) // undefined
if(1 === 1) {
  console.info(fn) // 函数本身  
  function fn() {
    console.info('ok')
  }
}
console.log(fn) // 函数本身

/* 
  条件语句中的函数会提升声明，但不会赋值。
  当条件成立，进入到判断体中（在ES6中是块级作用域）第一件事类似于变量提升一样，先把fn声明和定义。
  也就是在判断体执行之前，fn就已经赋值了
*/