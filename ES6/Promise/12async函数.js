/**
 * async函数
 * 1、返回的是promise对象
 * 2、promise对象的结果由async函数执行的返回值决定
 */
async function test() {
  // 1.如果返回值是一个非Promise类型的数据 // promiseResult 1
  return 1
  // 2.如果返回时一个Promise对象
  // return Promise.reject('err')
  // 3.抛异常
  // throw '异常'
}

let result = test()
console.info(result)

/**
 * await表达式
 * 1、表达式右侧可以是promise对象也可以是其它值
 * 2、await必须写在async函数中
 */
async function test2() {
  // 非promise对象
  // let result2 = await 2
  // promise对象，返回成功结果
  // let result2 = await Promise.resolve('success')
  // promise对象，返回失败结果，通过try-catch捕获
  try {
    let result2 = await Promise.reject('error')
    let result3 = await Promise.reject('error3')
    console.info(result2)
  } catch(e) {
    console.info(e)
  }
}
test2()

function sendAjax() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, 2000)
  })
}
async function handleClick() {
  console.info('start')
  let res = await sendAjax() // 会等待执行成功后再继续执行
  console.info('pre')
  console.info(res, 'await')
  console.info('ent')
}
handleClick()
