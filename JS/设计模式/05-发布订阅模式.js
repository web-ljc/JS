/* 
  8大设计模式
    + Singleton单例模式及Command命令模式
    + Constructor构造器及Factory工厂模式
    + Observer观察者及Mediator中介者模式
    + Publish&Subscribe 发布/订阅模式
    + 装饰器模式及ES7中的Decorator

*/

/* 
  Publish & Subscribe 发布订阅模式
    灵感来源于 addEventListener DOM2事件绑定
    + 给当前元素的某一个事件行为，绑定多个不同的方法[事件池机制]
    + 事件行为触发，会依次通知事件池中的方法执行
    + 支持内置事件{标准事件例如： click mousedown mousemove}

  应用场景：凡是某个阶段到达的时候，需要执行很多方法【更多时候，到底执行多少个方法不确定，需要编写业务处理】，我们都可以基于发布订阅模式来管理代码
    创建事件池 --> 发布任务   向事件池中加入方法 --> 向计划表中订阅任务  fire --> 通知计划表执行
*/
let _subscribe = function() {
  // SUB发布订阅类
  class Sub {
    constructor() {
      // 创建事件池，用来存储后期需要执行的方法
      this.pond = []
    }
    // 向事件池中追加方法(重复处理)
    add(func) {
      let flag = this.pond.some(item => item === func)
      !flag && this.pond.push(func)
    }
    // 从事件池中移除方法
    remove(func) {
      let index = this.pond.indexOf(func)
      // 移除会导致数组塌陷问题，不能真移除，只能把当前值赋为null
      index > -1 && this.pond.splice(index, 1, null)
    }
    // 通知事件池中的方法，按照顺序依次执行
    fire(...args) {
      // debugger
      for(let i = 0; i < this.pond.length; i++) {
        let item = this.pond[i]
        // 每次循环前判断数据是否为函数
        if(typeof item !== 'function') {
          this.pond.splice(i, 1)
          i--
          continue
        }
        item.call(this, ...args)
      }
    }
  }
  // 暴露给外边用
  return function subscribe() {
    return new Sub()
  }
}()

let s1 = _subscribe()

let fn1 = function(...args) {
  console.log(1, args, this)
}
let fn2 = () => {
  console.log(2)
  s1.remove(fn1)
}
let fn3 = () => {console.log(3)}
let fn4 = () => {console.log(4)}

s1.add(fn1)
s1.add(fn2)
s1.add(fn3)
s1.add(fn4)
// s1.remove(fn3)
s1.fire(30, 40) // 1 [30, 40] Sub{}  'sub' // 2 // 4
// console.log(s1); // Sub{}
