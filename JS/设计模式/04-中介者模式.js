/* 
  8大设计模式
    + Singleton单例模式及Command命令模式
    + Constructor构造器及Factory工厂模式
    + Observer观察者及Mediator中介者模式
    + Publish&Subscribe 发布/订阅模式
    + 装饰器模式及ES7中的Decorator

*/

// 注册者模式，组件A注册，组件B通知执行
let mediator = (function() {
  let topics = {}

  // 订阅：订阅A组件中的某个方法
  let subscribe = function(topic, callback) {
    !topics[topic] ? topics[topic] = [] : null
    topics[topic].push({
      context: this,
      callback
    })
  }

  // 发布：B组件中到某个阶段，可以通知之前订阅的方法执行
  let publish = function(topic, ...params) {
    if(!topics[topic]) return
    topics[topic].forEach(item => {
      let {
        callback,
        context
      } = item
      callback.call(context, ...params)
    })
  }
  return {
    subscribe,
    publish
  }
})()

/* 
{
  'xxx': [{
    callback,
    context
  }]
}
*/