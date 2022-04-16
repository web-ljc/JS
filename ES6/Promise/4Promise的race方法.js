/**
 * race方法，赛跑机制，谁先执行完先显示谁
 */

function test() {
  let p1 =  new Promise((resolve, reject) => {
    resolve('Ok')
  })
  let p2 = Promise.resolve('Success')
  let p3 = Promise.reject('err')

  let result = Promise.race([p3, p2, p1]) // 只返回第一个先改变状态的状态和结果，后边的一概不管
  console.info(result, 'res')
}

test()