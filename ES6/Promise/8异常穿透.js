/**
 * 异常穿透，如果有异常，最终会执行异常方法，之前的then方法不会执行
 */

function test() {
  let p1 =  new Promise((resolve, reject) => {
    // resolve('Ok')
    reject('err')
  })
  let num = 1

  p1.then(value => {
    num = 2
    console.info(1111)
  }).then(value => {
    console.info(2222)
  }).catch(reson => {
    console.warn(num, reson) // 1, 'err' 之间发生异常，就返回异常结果
  })
}

test()