// ES6中类的创建
class Fn{
  // 等价于构造函数体
  constructor() {
    this.x = 100
  }
  // 给实例设置私有属性
  b = 23
  // 直接写的方法就是在原型上的 Fn.prototype.getX()
  getX() {
    console.log(this.x)
  }
  // 设置static，把当前Fn当作普通对象设置的键值对，Fn.queryX()
  static queryX() {
    console.log(this.x)
  }
  static z = 100
}

let newFn = new Fn()
console.log(newFn)
newFn.getX()

// 模版字符串 `` 可以书写js表达式