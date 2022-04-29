// 继承
/**
 * JS对象的继承主要靠原型链来实现。基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法
 * 
 */

// 父级类型
function SuperType() {
  this.friends = ['张三', '李四', '王五']
}

// 子级类型
function SubType() {
}
// 子级原型重新赋值父级实例
SubType.prototype = new SuperType() // 子级的原型对象上存在共享数据


let instance1 = new SubType()
instance1.friends.push('赵六')
console.info(instance1.friends) // 张三 李四 王五 赵六

let instance2 = new SubType()
console.info(instance2.friends) // 张三 李四 王五 赵六
