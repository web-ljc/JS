// 继承
/**
 * JS对象的继承主要靠原型链来实现。基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法
 * 通过在子级构造函数中，继承父级构造函数的初始化代码。
 * 缺点：方法会在构造函数中定义，没办法解决函数的复用
 */

// 父级类型
function SuperType() {
  this.friends = ['张三', '李四', '王五']
}

// 子级类型
function SubType() {
  // 继承了 SuperType，创建SubType实例的环境下调用SuperType构造函数
  // 新SubType对象上执行SuperType函数中定义的所有对象初始化代码
  SuperType.call(this)
}

let instance1 = new SubType()
instance1.friends.push('赵六')
console.info(instance1, instance1.friends) // 张三 李四 王五 赵六

let instance2 = new SubType()
console.info(instance2.friends) // 张三 李四 王五
