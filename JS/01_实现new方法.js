/* 
  实现new方法
  1、创建一个新对象
  2、新对象的__proto__指向构造函数的prototype
  3、新对象作为构造函数的上下文（改变this指向）
  4、对构造函数有返回值的判断处理
*/

function MyNew() {
  // 1创建新对象
  let obj = new Object()
  // 2获取传入构造函数
  let Constructor = [].shift.call(arguments)
  // 3新对象原型链指向构造函数的原型对象
  obj.__proto__ = Constructor.prototype
  // 4给更改构造函数的上下文，更新this指向，获取返回结果，并为新对象添加构造函数属性
  const res = Constructor.apply(obj, arguments)
  // 5判断构造函数返回结果是否为非null对象，是的话直接返回，不是返回新对象
  return typeof res === 'object' && res !== null ? res : obj
}
