
console.log(a) // undefined 变量提升机制
console.log(window.a) // undefined 在变量提升阶段，在全局作用域中，声明了一个变量a，作为window的属性了
var a = 12 // 全局变量修改，window的属性值也修改
console.log(a) // 全局变量a
console.log(this.a)
console.log(this, window) 


console.info('-------------')
// console.info(b) // Uncaught ReferenceError: b is not defined
console.info(window.b) // undefined
b = 12 // 并没有变量赋值   window.b = 12
console.info(b) // 12
console.info(window.b) // 12



console.info('------------')
console.info(c, d) // undefined undefined
var c = 12, d = 12;
function fn() {
  console.info(a, b) // undefined 12
  var a = b = 13
  console.info(a, b) // 13 13
}
fn()
console.info(a, b) // 12 13


/* 
  - 在全局作用域下声明一个变量，也相当于给window全局对象设置了一个属性，变量的值就是属性值
  - 私有作用域中声明的私有变量和window没啥关系

  - 全局变量 和 window 中的属性存在‘映射机制’

  - 全局作用域
    - 加var a，就是全局变量，会变量提升
    — 不加var， a 的本质是window的属性
  - 私有作用域
    - 加var的在私有作用域变量提升阶段，都声明为私有变量，和外界没有任何关系
    - 不加var不是私有变量，会向上级作用域查找，看是否为上级的变量，不是就继续向上查找，一直到window为止（这种查找机制叫，作用域链）
    - 在私有域中操作这个非私有变量，一直操作别人的

*/
