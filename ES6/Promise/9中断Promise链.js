/**
 * 中断Promise链，返回一个pending状态的Promise对象，后续then方法就不会执行
 * 
 */

function test() {
  let p1 =  new Promise((resolve, reject) => {
    resolve('Ok')
  })

  p1.then(value => {
    console.info(1111)
    // 有且只有一种方式
    return new Promise(() => {}) // 返回pending状态的Promise对象，后续函数都不能执行
  }).then(value => {
    console.info(2222)
  }).catch(reson => {
    console.warn(reson) // 之间发生异常，就返回异常结果
  })
}

test()