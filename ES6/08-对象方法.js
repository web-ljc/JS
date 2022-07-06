/* 
  ## 对象的新增方法

    1. Object.is(x, y)
      - 判断2个值是否严格相等
      - (==)会自动转换类型 (===)NaN不等于自身，以及+0等于-0

    
    2. Object.assign(t, s1, ...)
      - 合并对象，将源对象s1的所有可枚举属性，赋值到目标对象t。第一个参数是目标对象，后面的参数都是源对象
      
      - 参数：
        + 如果目标对象与源对象有同名属性，后面的属性会覆盖前面的属性
        + 目标对象不是对象会先转成对象，null/undefined无法转成对象会报错
        + 源对象不是对象会先转成对象，null/undefined会跳过
        + 源对象是字符串会以数组的形式，拷贝入目标对象，数字和布尔值不会产生效果
      
      - 限制：
        + 要拷贝的源对象属性是有限制的，只拷贝源对象的自身属性，不拷贝继承和不可枚举属性
        + 浅拷贝不是深拷贝
        + 同名属性是替换不是添加
        + 可以处理数组，会把数组视为对象
        + 取值函数的处理，会先求值后再赋值

      - 用途：
        + 为对象添加属性
        + 为对象添加方法
        + 克隆对象 / 不能克隆它的继承的值
        + 合并多个对象
        + 为属性指定默认值



    3. Object.getOwnPropertyDescriptors()
      - 返回某个对象自身属性的描述对象
      - 解决Object.assign()无法正确拷贝 get 和 set 属性的问题


    4. __proto__属性 /  Object.setPrototypeOf()  / Object.getPrototypeOf()
      - __proto__属性
        - 用来读取或设置当前对象的原型对象，非浏览器环境兼容性问题

      - Object.setPrototypeOf(object, prototype)
        - 写操作，用来设置一个对象的原型对象
        - 返回当前对象
        - 参数
          - 如果第一个参数不是对象，会自动转成对象
          - 第一个对象是null / undefined 会报错

      - Object.getPrototypeOf()
        - 读操作，获取一个实例的原型对象
        - 返回原型对象
        - 参数
          - 如果第一个参数不是对象，会自动转成对象
          - 第一个对象是null / undefined 会报错

      - Object.create()
        - 生成操作

    5. Object.keys() / Object.values() / Object.entries()
      - Object.keys()
        - 返回一个数组，成员是参数对象自身（不含继承）的所有可遍历的属性的键名
      
      - Object.values()
        - 返回一个数组，成员是参数对象自身（不含继承）的所有可遍历的属性的键值
        - 字符串会返回一个字符串分割的数组
        - 不是对象，会先将其转成对象，数值和布尔值都的包装对象会转成空数组
        - Symbol属性会被忽略
      
      - Object.entries()
        - 返回一个数组，成员是参数对象自身的所有可遍历属性的键值对数组
        - Symbol属性会被忽略
        - 用途
          - 遍历对象属性
          - 将对象转唯真正Map结构


    6. Object.fromEntries()
      - Object.entries() 的逆操作，用于将一个键值对数组转为对象
      - 配合URLSearchParams对象，将查询字符串转为对象


    7. Object.hasOwn()
      - 对象的属性分2种：自身属性 和 继承属性
      - 对象实例方法 hasOwnProperty() 可以判断原生属性
      - Object对象新增静态方法 Object.hasOwn() 可以判断原生属性

      - 参数
        — 对象，属性
      
      - 优点
        - 对于不继承Object.prototype的对象不会报错
*/



// Object.formEntries()
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 20]
])
Object.fromEntries(entries) // {foo: 'bar', baz: 20}

Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))



// Object.keys()
const objKeys = {a: 1, b: 2}
Object.keys(objKeys) // ['a', 'b']
Object.values(objKeys) // [1, 2]
Object.entries(objKeys) // [['a', 1], ['b', 2]]
// 遍历对象属性
for(let [k, v] of Object.entries(objKeys)) {
  console.log(k , v);
}


// Object.setPrototypeOf()
const proto = {}
const objSet = {x: 10}
const objT1 = Object.setPrototypeOf(objSet, proto)
proto.y = 20
console.log(objSet.y, objSet === objT1);

Object.getPrototypeOf(objSet) // 获取实例的原型



// Object.hasOwn(obj, pro)
const foo = Object.create({a: 12})
foo.b = 45
Object.hasOwn(foo, 'a') // false  继承属性不报错，返回false
Object.hasOwn(foo, 'b') // true  自身属性
// foo.hasOwnProperty('a') // 报错


// Object.getOwnPropertyDescriptors(obj)
const objDes = {
  foo: 123,
  get bar() {return 'abc'}
}
Object.getOwnPropertyDescriptors(objDes)
// { foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: get bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }



// Object.assign(target, source1, ...)
const target = {a: 1}
const source1 = {b: 2}
const source2 = {c: 3}

Object.assign(target, source1, source2)
console.log(target); // {a: 1, b: 2, c: 3}

// Object.assign(null) // 报错
// Object.assign(undefined) // 报错
let objAssign = Object.assign(target, null) // true
console.log(objAssign === target, 9); // 返回值是目标对象

const v1 = 'abc'
const v2 = 12
const v3 = true
const objAssign2 = Object.assign({}, v1, v2, v3)
console.log(objAssign2); // {0: 'a', 1: 'b', 2: 'c'}
Object(true) // {[[PrimitiveValue]]: true}
Object(10) // {[[PrimitiveValue]]: 10}
Object('abc') //  {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}

const srouce1 = {
  get foo() {return 1}
}
Object.assign({}, source1) // {foo: 1} 取值函数，取值后再复制

// 多个对象合并到某个对象
const merge = (t, ...s) => Object.assign(t, ...s)
// 多个对象合并返回新对象
const merge1 = (...s) => Object.assign({}, ...s)


// Object.is(x, y)
// 判断2个值是否严格相等
Object.is('a', 'a') // true
Object.is({}, {}) // false
Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
// 自定义方法
Object.defineProperty(Object, 'is', {
  value: function(x, y) {
    if(x === y) {
      // 针对 +0 不等于 -0
      return x !== 0 || 1 / x === 1 / y
    }
    // 针对NaN
    return x !== x && y !==  y
  },
  configurable: true,
  enumerable: false,
  writable: true
})


