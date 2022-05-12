
/* 
  浅拷贝
    只拷贝最外边一层
*/
const obj = {a: 1, b: {c: 2, d: 3}}
// 1、扩展运算法
let obj2 = {...obj}
console.info(obj2, 1)
// 2、遍历循环
function myClone(obj) {
  let newObj = new obj.constructor
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
let obj3 = myClone(obj)
console.info(obj3, 2)
/*
  JSON方法
  缺陷：
    1. 正则转成空对象
    2. 函数、undefined直接被忽略
    3. 日期对象转成固定值
*/
let obj4 = JSON.parse(JSON.stringify(obj))
console.info(obj4, 3)
/*
  函数式深拷贝
    通过递归方法实现深拷贝
*/
function deepClone(obj, map = new Map()) {
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
  if(map.get(obj)) return map.get(obj)
  map.set(obj, newObj)
  // 遍历属性
  for (let key in obj) {
    // 拷贝私有属性，如果存在属性指向当前对象，不进行深拷贝
    if(obj.hasOwnProperty(key) && obj[key] !== obj){
      newObj[key] = deepClone(obj[key], map)
    }
  }
  return newObj
}

const objs = { a: 123, b: [1, 2, 3]};
objs.target = objs;
const result2 = deepClone(objs);
console.log(result2, objs, 9);