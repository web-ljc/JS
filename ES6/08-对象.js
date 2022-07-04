/* 
  ## 对象
    
  ### 属性的简洁表达式
    - 允许在大括号里，直接写入变量和函数，作为对象的属性和方法
    - 函数返回对象可以简写
    - CommonJS模块输出一组变量，也可以简写
    - 打印对象也可以放在大括号里

  ### 属性名表达式
    - 使用字面量方式定义对象，可以使用表达式
  
  ### 方法的name属性
    - 函数的name属性，返回函数名，对象方法也是函数，也有name属性

  ### 属性的遍历
    1. for...in
      - 循环遍历对象自身和继承的可枚举属性（不含Symbol属性）

    2. Object.keys(obj)
      - 返回一个数组，包含对象自身的所有可枚举属性的键名（不含继承和Symbol属性）

    3. Object.getOwnPropertyNames(obj)
      - 返回一个数组，包含自身的所有属性的键名（包括不可枚举的）

    4. Object.getOwnPropertySymbols(obj)
      - 返回一个数组，包含自身所有Symbol属性的键名

    5. Reflect.ownKeys(obj)
      - 返回一个数组，包含对象自身的（不含继承）所有键名，不管键名是Symbol或字符串，也不管是否可枚举

  ### super关键字
    - 只可用在简写的函数里边，指向自己的原型，一般用来获取原型上的属性或方法
  
  ### 解构赋值
    - 扩展运算符只能放在最后边
    - 对象浅拷贝
    - 扩展运算符的解构赋值，不能复制继承原型对象的属性
  
  ### 扩展运算符
    - 去除参数对象的所有可遍历属性，拷贝到当前对象中
    - 数组时特殊对象，扩展运算符可以用于数组
    - 扩展运算符后边是空对象，没任何效果
    - 扩展运算符后边不是对象，则会自动转为对象
    - 后边是字符串，则转成一个类数组的对象
    - 需要注意：返回参数自身、可枚举的属性，尤其时在类的实例对象时

  ### AggregateError 错误对象

  ### Error对象的cause属性

*/

const str = 'test'
const obj = {
  str,
  method() {
    return this.str
  }
}
console.log(obj); // { str: 'test', method: function(){} }

function f(x, y) {
  return {x, y}
}
f(1, 2) // {x: 1, y: 2}

// 属性名表达式
const newObj = {
  ['h'+'i']: 'hi',
  'world': ' world',
  nameFn() {
    console.log(this.world);
  }
}
console.log(newObj); // {hi: 'hi', world: ' world', nameFn:function(){}}
console.log(newObj.nameFn.name); // nameFn

// super
const proto = {
  x: 'hi',
  foo() {
    console.log(this.x);
  }
}
const objPro = {
  x: 'world',
  foo() { // 需要es6简写方法， 原函数或箭头函数写法获取不到， 因为在绑定this时会有问题
    super.foo()
  }
}
Object.setPrototypeOf(objPro, proto)
objPro.foo() // 'world'

const {...z}  = objPro
console.log(z, 9);
const y = {...objPro}
console.log(y, objPro, y === objPro);

const x = Object.assign({}, objPro) //  浅拷贝 Object.assign(objPro)方法等同于{...objPro}
// 解决原型对象丢失
const clone1 = {
  __proto__: Object.getPrototypeOf(obj), // __proto__在非浏览器环境不一定兼容
  ...objPro
}

const clone2 = Object.assign(
  Object.create(Object.getPrototypeOf(obj)),
  obj
)

const pro3 = Object.assign(objPro, {x: 9999})
console.log(pro3, objPro);


// 错误对象
const error = new AggregateError([
  new Error('some Error')
], 'message')

try {
  throw new AggregateError([
    new Error('some Error')
  ], 'message')
} catch (e) {
  console.log(e); // AggregateError实例
  console.log(e.message); // message       错误的提示信息
  console.log(e.name); // AggregateError   错误名称
  console.log(e.errors); // [Error: some Error]  数组，每个成员都是一个错误对象
}

const actual = new Error('error!', {cause: 'Error cause'})
console.log(actual.cause); // Error cause

