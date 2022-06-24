/* 
  8大设计模式
    + Singleton单例模式及Command命令模式
    + Constructor构造器及Factory工厂模式
    + Observer观察者及Mediator中介者模式
    + Publish&Subscribe 发布/订阅模式
    + 装饰器模式及ES7中的Decorator

  为什么要设计模式？
    + 设计模式就是一种思想，用来规范编程代码，清晰易懂，扩展。
*/



/* 
  Constructor 构造器模式
    + 类 & 实例
    + 私有 & 公有属性方法
    + 插件组件封装，类库封装，框架封装
*/


class AModule {
  // constructor() {
  //   this.arr = []
  // }
  arr = []
  // 原型上 公共的属性和方法
  change(val) {
    this.arr.push(val)
    console.log(this.arr);
  }
}
let A1 = new AModule
let A2 = new AModule
A1.change(1)
A2.change(2)
console.log(A1, A2);
console.log(A1.arr === A2.arr); // false
console.log(A1.change === A2.change); // true


