// 工厂模式，用函数来封装以特定接口创建对象的细节。在函数内创建对象，给对象添加属性和方法，并返回对象。
// 优点：可以创建多个相似对象
// 缺点：没解决对象识别问题（怎样知道一个对象类型）
function createPerson(name, age, job) {
  let o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function() {
    console.info(this.name)
  }
  return o
}
let p1 = createPerson('李四', 25, '老师')
let p2 = createPerson('张三', 30, '程序员')
p1.name = 'lisi'
p2.sex = 'man'
p1.sayName()
p2.sayName()
console.info(p1 instanceof Function)
console.info(p2)