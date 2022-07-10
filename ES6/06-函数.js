/* 
  ## 函数

    1. 函数参数的默认值
      - 避免多谢判断语句，参数可以省略，兼容性好
      - 参数变量是默认声明的，所以内部不能通过let const再次声明
      - 参数默认值是惰性求值的，只有调用函数才会计算
      - 参数默认值位置
        - 一般定义默认值应该在函数的尾参数，容易看出省略了哪些参数，定义在非尾部的参数没法省略，不然会报错
      - 函数的length属性
        - 指定默认值后, length将返回，从第一个没有指定默认值的参数到指定默认值参数的个数
      - 作用域
        - 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域，初始化结束作用域消失
        - 同一作用域中的变量声明前，不允许提前使用

    2. rest参数
      - 获取函数的多余参数，不需要使用arguments对象
      - rest参数后不能再有其他参数，否则会报错
      - 函数的length属性，不包括rest参数

    3. 严格模式
      - 函数只要使用了默认值，解构赋值，rest参数，函数内部不可以定义严格模式

    4. name属性
      - 函数的name属性，ES5返回该函数的函数名，匿名函数会返回空字符串。ES6都会返回
      - 可以将具名函数赋值给一个变量
      - 构造函数返回的函数实例，name属性的值为anonymous

    5. 箭头函数
      - 箭头函数没有自己的this对象。普通函数的this是可变的，箭头函数的this是固定的
      - 不可以作为构造函数
      - 不可以使用arguments对象，可以使用rest参数代替
      - 不可以使用yield命令，箭头函数不能作为Generator函数
      - 不能通过call、apply改变this指向

      - 不适用场合
        - 定义对象方法，且方法中包含this

    6. 尾调用和优化
      - 某个函数的最后一步是调用另一个函数

    7. 函数参数的尾逗号
      - 为了版本管理，允许在最后一个参数后边添加 ,

    8. Function.prototype.toString()
      - toString() 方法返回函数代码本身，不会省略注释和空格

    9 catch命令的参数省略
      - 允许catch语句省略参数
*/

// catch
try {
  // ...
} catch {
  // ... 可以省略(err)
}

// 尾部调用
function f1(x) {
  return g(x)
}


// 箭头函数
const f = () => 4


// name属性
const bar = function baz() {}
// bar.name 'baz'
(new Function).name // anonymous

// 设置默认参数值，避免再次判断
// length = 1
function log(x, y = 'world', z) {
  console.log(x, y);
}
console.log('hi');
console.log('hi', 'China');
console.log('hi', '');

const foo = ({x, y=5} ={}) => console.log(x, y);
foo() // undefined 5
foo({x:1, y:3}) // 1 3

console.log(log.length)

