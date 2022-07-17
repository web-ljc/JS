/* 

  1. Set
    - 新的数据结构Set。类似于数组，但成员的值都是唯一的，没有重复
    - Set函数可以接受一个数组（或者具有iterable接口的其他数据结构）作为参数，用来初始化
    - Set加入值的时候，不会发生类型转换，不会转成字符串
    
    ### Set实例的属性和方法
      - Set.prototype.constructor 构造函数，默认就是Set函数
      - Set.prototype.size  返回Set实例的成员总数
      - 操作方法
        - Set.prototype.add(val)    添加某个值，返回Set结构本身
        - Set.prototype.delete(val) 删除某个值，返回一个布尔值表示是否成功
        - Set.prototype.has(val)    返回一个布尔值，表示是否为Set成员
        - Set.prototype.clear()     清除所有成员，没有返回值
      - 遍历操作
        - Set.prototype.keys()    返回键名的遍历器
        - Set.prototype.values()  返回键值的遍历器
        - Set.prototype.entries() 返回键值对的遍历器
        - Set.prototype.forEach() 使用回调函数遍历每个成员
        Set结构没有键名，只有键值（或者说键名和键值是同一个值）。所以keys方法和values方法的行为完全一致
        Set结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法
      - Set的遍历顺序就是插入顺序


  2. WeakSet
    - WeakSet结构与Set类似，也是不能重复的值的集合，但WeakSet的成员只能是对象，不能是其他类型的值
    - WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，如果其他对象不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于WeakSet之中
    - WeakSet的成员不适合引用的，因为它会随时消失。而且垃圾回收机制何时运行是不可预测的，因此ES6规定WeakSet不可遍历
    - WeakSet是一个构造函数，可以使用new命令
    - 方法
      - WeakSet.prototype.add(val)    向WeakSet实例添加一个新成员
      - WeakSet.prototype.delete(val) 清除WeakSet实例的指定成员
      - WeakSet.prototype.has(val)    返回一个布尔值，表示某个值是否在WeakSet实例中
    - WeakSet没有size属性，没有办法遍历它的成员
    - 用处：存储DOM节点，而不用担心这些节点从文档中移除引发内存泄露


  3. Map
    - JS的对象，本质上是键值对的集合（Hash结构），但是传统上只能用字符串当作键。（字符串-值）
    - Map数据结构，类似于对象，也是键值对集合，但是键的范围不限于字符串，各种类型值都可以作为键（值-值）
    - Map构造函数接受数组、具有Iterator接口、且每个成员都是一个双元素的数组的数据结构，都可以做参数
    - Map的键是一个简单类型的值，则只要2个值严格相等，Map将其视为一个键 0和-0是一个键
    - 实例的属性和操作方法
      - size属性,返回Map结构的成员总数
      - 操作
        - Map.prototype.set(key, value) set方法设置键名key对应的键值value，如果key已经存在则键值会被更新。可以采用链式写法
        - Map.prototype.get(key) get方法读取key对应的键值，如果找不到key，返回undefined
        - Map.prototype.has(key) has方法返回一个布尔值，表示某个键是否在当前Map对象中
        - Map.prototype.delete(key) delete删除某个键返回true
        - Map.prototype.clear()  clear方法清除所有成员，没有返回值
      - 遍历
        - Map.prototype.keys()    返回键名遍历器
        - Map.prototype.values()  返回键值的遍历器
        - Map.prototype.entries() 返回所有成员的遍历器
        - Map.prototype.forEach() 遍历Map的所有成员
      - Map的遍历顺序就是插入顺序
    - 数据结构转换
      - Map转数组 [...myMap]
      - 数组转Map new Map(arr)
      - Map转对象  for...of循环遍历Map.entries() 
      - 对象转Map 通过Object.entries()
      - Map转JSON
        - Map的键名都是字符串，可以选择转为对象JSON  JSON.stringify()
        - Map的键名有非字符串，可以选择为数组JSON    JOSN.stringify([...map])
      - JSON转Map
        - 所有键名都是字符串
        - 嵌套数组


  4. WeakMap
    - WeakMap结构与Map结构类似，也是生成键值对的集合
    - WeakMap只接受对象作为键名（null除外），不接受其他类型
    - 键名所引用的对象都是弱引用，垃圾回收机制不将该引用考虑在内
    - WeakMap弱引用的只是键名，不是键值。键值依然是正常引用，即使外部消除了键值引用，WeakMap内部的引用依然存在
    - 方法
      - get()
      - set()
      - has()
      - delete()
    - 实例：DOM元素添加数据、部署私有属性


  5. WeakRef
    - 直接创建对象的弱引用
    - 弱引用对象的一大用处，作为缓存，未被清除时可以从缓存取值，一旦清除缓存就自动失效

  6. FinalizationRegistry
    - 清理器注册表功能 FinalizationRegistry，用来指定目标对象被垃圾回收机制清除后，要执行的回调函数

*/


// 新建注册表实例
const registry = new FinalizationRegistry(heldValue => {})
// 注册表实例的register() 方法,用来注册所要观察的目标对象
registry.register(theObject, 'some value', theObject)
// 目标对象被清除后，取消注册
registry.unregister(theObject)



let t = {}
let wr = new WeakRef(t)
let obj = wr.deref()
if(obj) { // t 未被垃圾回收机制清除，执行
}



// 键值不是弱引用，外部对该对象的引用消失，内部的引用依然存在
// const wm3 = new WeakMap()
// let key = {}
// let obj = {foo: 1}
// wm3.set(key, obj)
// obj = null
// wm3.get(key) // Object {foo: 1}


// 给DOM元素添加数据，可以使用WeakMap数据结构
// const wm2 = new WeakMap()
// const element = document.getElementById('box')
// wm2.set(element, 'some information')
// wm2.get(element) // 'some ...'

const wm1 = new WeakMap()
const key1 = {foo: 1}
wm1.set(key1, 2)
wm1.get(key1) // 2

// wm1.set(1, 2) // TypeError 1 is not an object



// Map结构的默认遍历器接口（Symbol.iterator），就是entries方法
// map[Symbol.iterator] === map.entries

const map = new Map([
  ['name', 'zs'],
  ['age', 23]
])
console.log(map); // Map(2) {'name' => 'zs', 'age' => 23}
map.set(-0, 123)
map.get(+0) // 123

map.set(true, 1)
map.set('true', 2)
map.get(true) // 1

map.set(NaN, 123)
map.get(NaN) // 123

map.size // 6


// Map是键值对，所以用set()  Set是类似于数组,所以用add()
const m = new Map()
const o = {p: 'hi'}
m.set(o, 'content')
m.set(1, 2)
m.get(o) // 'content'

m.has(o) // true
m.delete(o) // true
m.has(o) // false

console.log(m);



// a1数组的成员成为WeakSet的成员，而不是a数组本身。这意味着数组的成员只能是对象
const a1 = [[1, 2], [3, 4]]
const b1 = [2, 3]
const ws = new WeakSet(a1) // WeakSet{[1,2], [3,4]}
// new WeakSet(b1) // TypeError 数组b1的成员不是对象，加入WeakSet会报错
const testObj = {}
ws.add(testObj)

ws.has(testObj) // true
ws.has(b1) // false

ws.delete(testObj)
ws.has(testObj) // false



let a = new Set([1, 2, 3])
let b = new Set([2, 3, 4])
let union = new Set([...a, ...b]) // Set {1, 2, 3, 4}
let intersect = new Set([...a].filter(x => b.has(x))) // Set {2, 3}
let difference = new Set([...a].filter(x => !b.has(x))) // Set{1}


// keys() values() entries()
let set2 = new Set(['red', 'green', 'blue'])
for(let item of set2.keys()) {
  console.log(item);
} // red green blue
for(let item of set2.values()) {
  console.log(item);
} // red green blue
for(let item of set2) {
  console.log(item);
} // red green blue


// 简介使用数组的 map filter 方法
let set3 = new Set([...set2].map(x => x + 1))
let set4 = new Set([...set3].filter(x => x > 2))


// Array.from 方法可以将Set结构转为数组,数组去重
function dedupe(array) {
  return Array.from(new Set(array))
}

const s = new Set()
s.add(1).add(2).add(2)
s.size // 2
s.has(1) // true
s.has(3) // false
s.delete(2)
s.has(2) // false



// const s = new Set()
// [2,2,3,4,5].forEach(x => s.add(x))
// for(let i of s) {
//   console.log(i); // 2 3 4 5
// }

const set = new Set([1, 2, 1, 2])
console.log(set); // set(2){1, 2}
console.log([...set])  // [1 2]

// 数组去重
// [...new Set(arr)]