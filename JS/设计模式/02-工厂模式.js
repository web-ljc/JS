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
  Factory 工厂模式
    + 简单的工厂模式
    + JQ中的工厂模式
*/
// 工厂模式：工厂可以实现调用的切换，或者实现一些中转的处理


function factory(options) {
  options = options || {}
  let {type} = options
  // 执行A逻辑
  if(type === 'array') {}
  // 执行B逻辑
}
factory({type: 'array'})
factory({type: 'object'})

