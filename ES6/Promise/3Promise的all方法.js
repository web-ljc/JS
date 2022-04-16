/**
 * all方法，全返回成功才是成功，一个失败就返回失败。失败情况谁先执行，先返回那个失败结果
 */

function test() {
  let p1 =  new Promise((resolve, reject) => {
    reject('Ok')
  })
  
  let p2 = Promise.reject('err2')
  let p3 = Promise.reject('err')

  let result = Promise.all([p1, p2, p3])
  console.info(result, 'res')
}

test()