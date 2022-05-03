
/* 
  浅拷贝
    只拷贝最外边一层
*/
const obj = {a: 1, b: {c: 2, d: 3}}
// 1、扩展云算法
let obj2 = {...obj}
// 2、遍历循环
function myClone(obj) {
  let newObj = new obj.constructor
  for(let key in obj) {
    if(obj.hasOwnPrototype(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
let obj3 = myClone(obj)

/*
  JSON方法
  缺陷：
    1. 正则转成空对象
    2. 函数、undefined直接被忽略
    3. 日期对象转成固定值
*/
let obj4 = JSON.parse(JSON.stringify(obj))

/*
  函数式深拷贝
    通过递归方法实现深拷贝
*/
function deepClone(obj) {
  // null直接返回
  if(obj === null) return null
  // 不是对象返回原值
  if(typeof obj !== 'object') return obj
  // 函数
  if(typeof obj === 'function') return new Function('return'+obj.toSring())()
  // 正则
  if(obj instanceof RegExp) return new RegExp(obj)
  // 日期
  if(obj instanceof Date) return new Date(obj)
  // 实例化当前对象的构造函数
  let newObj = new obj.constructor
  // 遍历属性
  for (let key in obj) {
    // 拷贝私有属性
    if(obj.hasOwnPrototype(key)){
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}

const objs = { a: 123, b: [1, 2, 3]};
objs.target = objs;
const result2 = deepClone(objs);
console.log(result2, 9);