/* 
  1. 概述
    - 新的原始数据类型 Symbol，表示独一无二的值，通过Symbol()函数生成
    - 对象的属性名有2种类型：1，原来的字符串  2，新增的Symbol类型
    - Symbol()
      - 如果Symbol的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后生产Symbol值
      - Symbol函数的参数只是表示对当前Symbol值的描述，因此参数相同的Symbol函数的返回值是不想等的
      - Symbol值不能与其他类型的值进行运算，会报错
      - Symbol值可以显示转为字符串 s1.toString() String(s1) // 'Symbol(foo)'
      - Symbol值也可转为布尔值，不能转成数值  Boolean(s1)  // true   


  2. Symbol.prototype.description
    - 创建Symbol时，可以添加一个描述
    - 读取 s1.description

  3. 作为属性名的Symbol
    - 用于对象的属性名，保证不会出现同名的属性 
    - Symbol值作为属性名时，不能用点运算符，因为点运算符后总是字符串
    - 使用 obj[Symbol()]

  4. 实例：消除魔术字符串
    - 确保属性值与其他属性值不冲突

  5. 属性名的遍历
    - Symbol作为属性名，遍历对象的时候，该属性不会出现在for...in / for...of循环中
    - 可以通过 Object.getOwnPorpertySymbols() 方法获取所有Symbol属性名，返回一个数组
    - 通过 Reflect.ownKeys() 获取所有属性名
    - 由于Symbol值作为键名，不会被常用方法遍历到，所以利用这个特性，为对象定义一些非私有，但希望只用于内部的方法。（比如数据结构栈）


  6. Symbol.for() / Symbol.keyFor()
    - Symbol.for() 生成同一个Symbol值，它接收一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有返回值，没有就新建一个
      - 为Symbol值登记的名字，是全局环境的，不管有没有在全局环境运行
      - 全局登记特性，可以用在不同的iframe 或 service worker中取到同一个值
      
    - Symbol.keyFor() 返回一个已登记的Symbol类型值的key


  7. 实例：模块的 Singleton 模式
  8. 内置的 Symbol 值
    - Symbol.hasInstance, 指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法
    - Symbol.isConcatSpreadable 属性等于一个布尔值，表示该对象用于 Array.prototype.concat() 时，是否可以展开
      - 数组默认行为 undefined 是可以展开，属性为ture也可以展开，为false没展开效果
      - 类数组的对象默认不展开，属性设为true才可以展开
    - Symbol.species 指向一个构造函数，创建衍生对象时，会使用该属性指定的构造函数
      - 主要用途：有些类库是在基类的基础上修改，子类使用继承的方法时，可以返回基类的实例
    - Symbol.match 指向一个函数，当执行str.match()时，如果该属性存在，会调用它返回该方法返回值
    - Symbol.replace 指向一个方法，当该对象被 String.prototype.replace 方法调用时会返回该方法
    - Symbol.search 指向一个方法，当该对象被String.prototype.search 方法调用时，会返回该方法的返回值
    - Symbol.split 指向一个方法，当该对象被String.prototype.split 方法调用时，会返回该方法的返回值
    - Symbol.iterator 指向该对象的默认遍历器方法
    - Symbol.toPrimitive 指向一个方法，该对象被转为原始数据类型的值时，会调用这个方法，返回该对象对应的原始类型值
    



*/

class MyMatcher {
  [Symbol.match](string) {
    return 'aaa'.indexOf(string)
  }
}
'a'.match(new MyMatcher()) // 0

class MyArray extends Array {
  static get [Symbol.species]() {return Array}
}
const a1 = new MyArray(1)
const b1 = a.map(x => x) // b1为衍生对象，默认会继承MyArray类
b1 instanceof MyArray // false



let arr2 = [1, 2]
[3, 4].concat(arr2, 5) // [3, 4, 1, 2, 5]
arr2[Symbol.isConcatSpreadable] // undefined
arr2[Symbol.isConcatSpreadable] = false // 设置为不展开
[3, 4].concat(arr2, 5) // [3, 4, [1, 2], 5]


// foo instanceof Foo 实际调用的是  Foo[Symbol.hasInstance](foo)
class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array
  }
}
[1, 3, 4] instanceof new MyClass()  // ture


// Symbol.for() 生成Symbol值会先去全局环境搜索，有的话返回，没有才会创建新的值
Symbol.for('a') === Symbol.for('a') // true

let s3 = Symbol.for('foo')
Symbol.keyFor(s3) // 'foo'
let s4 = Symbol('foo')
Symbol.keyFor(s4) // undefined


// 遍历属性名
const obj = {
  age: 1
}
let a = Symbol('a'), b = Symbol('b')
obj[a] = 'a'
obj[b] = 'b'
const objSymbols = Object.getOwnPropertySymbols(obj)
// console.log(objSymbols, 99); // [Symbol(a), Symbol(b)]
// Reflect.ownKeys() 获取所有属性名
console.log(Reflect.ownKeys(obj)); // ['age', Symbol(a), Symbol(b)]


// 4.实例
// shapeType.triangle 等于哪个值不重要，只要确保不和其他shapeType属性值冲突即可
const shapeType = {
  triangle: Symbol()
}
function getArea(shape, options) {
  let area = 0
  switch(shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height
      break
  }
  return area
}
getArea(shapeType.triangle, {width:10, height:10})


// Symbol类型定义一组常量，保证这组常量的值都是不想等的
const levels = {
  DEBUG: Symbol('debug'),
  INFP: Symbol('info')
}

const myS = Symbol()
const objT = {
  [myS]: 'hi'
}
// const objT = {}
// objT[myS] = 'hi'

console.log(objT[myS]); // hi


const s1 = Symbol('foo') // 参数只是对当前Symbol值的描述
const s2 = Symbol(1)
console.log(typeof s1);   // Symbol
console.log(s1); // Symbol(foo)
console.log(s2); // Symbol(1)

// `your symbol is ${s1}` // TypeError
Boolean(s1) // true
!s1 // false

String(s1) // Symbol(foo)
s1.toString() // Symbol(foo)

// Number(s1) // TypeError

console.log(s1.description); // foo



