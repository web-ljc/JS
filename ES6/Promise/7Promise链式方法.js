/**
 * 链式调用，但后边的then方法，获取前边返回promise对象的reject/resolve的值
 */

function test() {
  let p1 =  new Promise((resolve, reject) => {
    resolve('Ok')
  })

  p1.then(value => {
    console.info(1, value)
    return Promise.reject('err') // 返回promise对象的resolve方法
  }).then(value => { // 上个then方法返回promise对象调用
    console.info(2, value)
  }, resaon => {
    console.info(21, resaon)
  })
}

test()