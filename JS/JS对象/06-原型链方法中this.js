
function Fn() {
  this.x = 200
  this.y = 300
  this.say = () => {
    console.log(this.x);
  }
}
Fn.prototype.say = function() {
  console.log(this.y)
}
Fn.prototype.eat = function() {
  console.log(this.x + this.y)
}
Fn.prototype.write = function() {
  this.z = 1000
}

let f1 = new Fn()
f1.say() // 200
f1.eat() // 500
f1.__proto__.say() // undefined
Fn.prototype.eat() // NaN
f1.write() // f1.z = 1000 给f1设置一个私有属性z=1000
Fn.prototype.write() // Fn.prototype.z=1000 给原型设置一个属性z=1000（属性会变成实例的公有属性）

/* 
  面向对象中有关私有/公有方法中的THIS问题
  1. 方法执行前，看谁调用，谁调用指向谁
  2. 把方法中this替换
  3. 再基于原型链查找的方法确定结果
*/