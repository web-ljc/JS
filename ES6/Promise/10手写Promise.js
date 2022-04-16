function MyPromise(executor) {
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
// 构造函数原型对象添加then方法
MyPromise.prototype.then =function(onResolved, onRejected) {
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
// 添加catch方法
MyPromise.prototype.catch =function(onRejected) {
  return this.then(undefined, onRejected)
}
// 构造函数直接添加方法
MyPromise.resolve = function(value) {
  return new MyPromise((resolve, reject) => {
    if (value instanceof MyPromise) {
      value.then(r => resolve(r), v => reject(v))
    } else {
      resolve(value)
    }
  })
}
MyPromise.reject = function(reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason)
  })
}
MyPromise.all = function(promises) {
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
MyPromise.race = function(promises) {
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

// 调用
let p1 =  new MyPromise((resolve, reject) => {
  // throw '333'
  setTimeout(() => {
    // reject('err')
    resolve('Ok')
  }, 1000)
  // resolve('OK')
})

// p1.then(value => {
//   console.info(111)
// }).then(value => {
//   console.info(33)
// })
// 返回结果，由then的执行方法返回
const res = p1.then(value => {
  console.info(value)
  // throw 'Promise throw'
  return MyPromise.reject('Promise Error')
  // return MyPromise.resolve('Promise Ok')
}, reason => {
  console.warn(reason)
  throw 'Promise throw'
  // return MyPromise.resolve('Promise Ok')
  // return MyPromise.reject('Promise Error')
}).then(value => {
  console.info(333)
}).then(value => {
  console.info(444)
  return 444
}).catch(reason => {
  console.info(reason, 2)
  return reason
})
// console.info(p1)
console.info(res)  // result 444

const p2 = MyPromise.resolve(MyPromise.resolve('2'))
console.info(p2, 'p2')
const p3 = MyPromise.resolve('3')
const p4 = MyPromise.all([p2, p3])
const p5 = MyPromise.race([p3, p2])
console.info(p4, 'p4')
console.info(p5, 'p5')


let p6 = new MyPromise((resolve, reject) => {
  resolve('err')
  console.info('1111')
})
p6.then().then(value => {
  console.info('2222')
})
console.info('3333')


