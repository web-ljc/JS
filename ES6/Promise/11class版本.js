class MyPromise{
  // 构造方法-挂在到实例上
  constructor(executor) {
    // 添加属性
    this.PromiseState = 'pending'
    this.PromiseResult = null
    const self = this
    this.callbacks = []

    // resolve函数
    function resolve(data) {
      if (self.PromiseState !== 'pending') return // 状态只能更改一次
      self.PromiseState = 'fulfilled' // 状态更改
      self.PromiseResult = data // 数据更改
      setTimeout(() => {
        self.callbacks.forEach(item => { // 异步函数触发后重新调用
          item.onResolved()
        })
      })
    }
    function reject(data) {
      if (self.PromiseState !== 'pending') return
      self.PromiseState = 'rejected'
      self.PromiseResult = data
      // if (self.callback.onRejected) self.callback.onRejected(data)
      setTimeout(() => {
        self.callbacks.forEach(item => {
          item.onRejected()
        })
      })
    }

    try {
      executor(resolve, reject) // 同步调用，执行器函数
    } catch(e) {
      reject(e)
    }
  }

  // 原型对象的方法-then方法
  then(onResolved, onRejected) {
    const self = this;
    // 判断是否有回调函数，如果就添加默认回调 
    if(typeof onRejected !== 'function') {
      onRejected = reason => {
        throw reason
      }
    }
    if(typeof onResolved !== 'function') {
      onResolved = value => value
    }
    // then方法返回Promise对象
    return new MyPromise((resolve, reject) => {
      function callback(fn) {
        try {
          let result = fn(self.PromiseResult)
          if (result instanceof MyPromise) {
            result.then(v => {
              resolve(v)
            }, r => {
              reject(r)
            })
          } else {
            resolve(result)
          }
        } catch(e) {
          reject(e)
        }
      }
  
      if(this.PromiseState === 'fulfilled') {
        setTimeout(() => {
          callback(onResolved)
        })
      }
      if(this.PromiseState === 'rejected') {
        setTimeout(() => {
          callback(onRejected)
        })
      }
      if(this.PromiseState === 'pending') {
        // 异步函数，需要先保存回调函数
        this.callbacks.push({
          onResolved: function() {
            callback(onResolved)
          },
          onRejected: function() {
            callback(onRejected)
          }
        })
      }
    })
  }

  // catch方法
  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  // 构造函数方法- static 属于类不属于实例对象
  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      if (value instanceof MyPromise) {
        value.then(r => resolve(r), v => reject(v))
      } else {
        resolve(value)
      }
    })
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      let count = 0
      let arr = []
      for(let i=0; i<promises.length; i++){
        promises[i].then(v=> {
          count++
          arr[i] = v
          if(count === promises.length) {
            resolve(arr)
          }
        }, r => {
          reject(r)
        })
      }
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      for(let i = 0; i < promises.length; i++) {
        promises[i].then(v => {
          resolve(v)
        }, r => {
          reject(r)
        })
      }
    })
  }
}

// 调用
const p1 = new MyPromise((resolve, reject) => {
  // resolve('success')
  console.info('start')
  setTimeout(() => {
    reject('err')
  }, 100)
  console.info('start2')
})
p1.then().then(v => {
  console.info(v, 'fulfilled')
}, r => {
  console.info(r, 'catch1')
}).then(v => {
  console.info(v, 'then2')
}).catch(r => {
  console.info(r, 'catch2')
})
console.info(p1, '实例p1')

const p2 = MyPromise.resolve('reject')
console.info(p2, 'p2')
