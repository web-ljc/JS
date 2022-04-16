/**
 * Promise是什么？
 */
function rand(m, n) {
  return Math.ceil(Math.random() * (n-m+1)) + m -1
}

function test() {
  // setTimeout(() => {
  //   let n = rand(1, 100)
  //   if (n < 30) {
  //     console.info('no', n)
  //   } else {
  //     console.info('yes', n)
  //   }
  // }, 1000)

  // promise 封装
  // resolve 解决 函数类型的数据
  // reject  拒绝
  let p =  new Promise((resolve, reject) => {
    setTimeout(() => {
      let n = rand(1, 100)
      if (n < 30) {
        resolve(n) // 将promise状态设置为【成功】
      } else {
        reject(n) // 将promise状态设置为【失败】
      }
    }, 1000)
  })
  console.info(p)
  // 调用then方法
  p.then((value) => {
    console.info('no', value)
  }, (reson) => {
    console.info('yes', reson)
  })
}

test()