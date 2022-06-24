/* 
  8大设计模式
    + Singleton单例模式及Command命令模式
    + Constructor构造器及Factory工厂模式
    + Observer观察者及Mediator中介者模式
    + Publish&Subscribe 发布/订阅模式
    + 装饰器模式及ES7中的Decorator

*/

/* 
  Observer 观察者模式
  目标 -- 观察者
  目标： 管理观察者【增删改查】以及通知消息的能力
  观察者：应该具备update方法：用于在通知的消息到达的时候，进行相关的处理
*/

// 观察者模式：vue2.0响应式原理
class Observer {
  update(message) {
    // 消息触发，通知update执行
    console.log('消息接收', message);
  }
}
class Demo {
  update(message) {
    // 消息触发，通知update执行
    console.log('消息接收Demo', message);
  }
}

// 目标
class ObserverList {
  observerList = []
  add(observer) {
    this.observerList.push(observer)
    return this
  }
  remove(observer) {
    this.observerList = this.observerList.filter(ob => ob !== observer)
    return this
  }
  get(index) {
    return this.observerList[index]
  }
  count() {
    return this.observerList.length
  }
}
class Subject {
  observers = new ObserverList
  add(observer) {
    this.observers.add(observer)
  }
  remove(observer) {
    this.observers.remove(observer)
  }
  notify(...params) {
    for(let i = 0; i < this.observers.count(); i++) {
      console.log(i,   this.observers.count());
      let item = this.observers.get(i)
      item.update(...params)
    }
  }
}
let sub = new Subject
sub.add(new Observer)
sub.add(new Observer)
sub.add(new Demo)

setTimeout(() => {
  sub.notify('努力，加油')
}, 1000)
