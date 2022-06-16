/* 
  发布订阅模式(publish - subscribe)

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
