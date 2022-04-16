/**
 * then方法返回结果是promise对象，返回的值根据返回内容判断
 */

function test() {
  let p1 =  new Promise((resolve, reject) => {
    resolve('Ok')
  })

  let res = p1.then(value => {
    console.info(1, value)
    // return value // 返回结果非promise类型的对象
    // throw 'err' // 抛异常
    return Promise.reject(1) // 返回promise类型的对象
  }, reason => {
    console.warn(reason)
  })
 
  console.info(res)
}

test()