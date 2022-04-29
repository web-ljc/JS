// 继承
/**
 * 原型式继承
 * 缺点：存在属性共享的问题
 */

// 父级类型
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

let person = {
  name: 'lisi',
  friends: ['张三', '李四', '王五']
}

let p1 = object(person)
p1.name = '赵六'
p1.friends.push('赵六')
console.info(p1)

let p2 = object(person)
p2.name = '周八'
p2.friends.push('周八')
console.info(p2)
