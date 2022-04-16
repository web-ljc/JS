// 构造函数
function MyPromise(executor) {
  this.PromiseState = 'pending'
  this.PromiseResult = null
  const self = this
  this.callbacks = []

  function resovle(data) {
    if (self.PromiseState !== 'pending') return
    self.PromiseState = 'fulfilled'
    self.PromiseResult = data
    setTimeout(() => {
      self.callbacks.forEach(item => item.onResolved())
    })
  }
  function reject(data) {
    if (self.PromiseState !== 'pending') return
    self.PromiseState = 'rejected'
    self.PromiseResult = data
    setTimeout(() => {
      self.callbacks.forEach(item => item.onRejected())
    })
  }
  try {
    executor(resovle, reject)
  } catch(e) {
    reject(e)
  }
}
// then方法
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
MyPromise.prototype.catch = function(onRejected) {
  return this.then(undefined, onRejected)
}
MyPromise.resolve = function(value) {
  return new MyPromise((resovle, reject) => {
    if(value instanceof MyPromise) {
      value.then(v => resovle(v), r => reject(r))
    } else {
      resovle(value)
    }
  })
}
MyPromise.reject = function(value) {
  return new MyPromise((resovle, reject) => {
    reject(value)
  })
}
MyPromise.all = function(promises) {
  return new MyPromise((resolve, reject) => {
    let count = 0, arr = []
    for(let i = 0; i < promises.lenth; i++) {
      promises[i].then(v => {
        count++
        arr[i] = v
        if (count === promises.lenth) resolve(arr)
      }, r => {
        reject(r)
      })
    }
  })
}
MyPromise.race = function(promises) {
  return new MyPromise((resolve, reject) => {
    for(let i = 0; i < promises.lenth; i++) {
      promises[i].then(v => resolve(v), r => reject(r))
    }
  })
}
const p1 = new MyPromise((resovle, reject) => {
  resovle('ok')
  // reject('err')
  // setTimeout(() => {
  //   reject('err')
  // }, 1000)
  // throw 'throw'
})
const p2 = p1.then().then(v => {
  console.info(v, 'v')
  setTimeout(() => {
    return 1
  }, 100)
}, r => {
  console.info(r, 'r')
})
console.info(p1)
console.info(p2)

const p3 = MyPromise.resolve(MyPromise.reject('err3'))
console.info(p3, 'p3')