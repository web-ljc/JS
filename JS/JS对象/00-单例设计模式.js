/* 
  单例设计模式 Singleton Pattern
    - 把描述当前事物特征的信息进行分组归类（减少全局变量的污染）
    - person不仅仅叫做变量，也被称为‘命名空间’
*/
let person = {
  name: 'test',
  age: 10
}

// 高级单例模式
let nameSpace = (function() {
  let fn = () => {}
  return {
    name: 'test',
    init: function() {
      fn()
    }
  }
})()
nameSpace.init()