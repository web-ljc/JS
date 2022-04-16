/**
 * 多个回调
 */

function test() {
  let p1 =  new Promise((resolve, reject) => {
    resolve('Ok')
  })

  p1.then(value => {
    console.info(1, value)
  })
  p1.then(value => {
    console.info(2, value)
  })
}

test()