/*
  instanceof 对比实例和构造函数的原型对象是否一样
  [] instanceof Array
*/
function MyInstanceof(obj, func) {
  // 循环
  while(true) {
    // 获取实例的原型对象
    obj = obj.__proto__
    // 找到原型的实例对象为null，返回false
    if(obj === null) return false
    // 实例的原型对象 === 构造函数的实例对象，返回true
    if(obj === func.prototype) return true
  }
}

/*
  typeof实现原理
  js在底层存储变量时，会在变量的机器低位1-3存储其类型信息
  000 - 对象
  010 - 浮点数
  100 - 字符串
  110 - 布尔值
  1   - 整数
  0   - null
  2^30- undefined
*/