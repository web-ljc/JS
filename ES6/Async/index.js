
/*
  Promise函数
*/
// function request(data) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(data*2)
//     }, 500)
//   })
// }
// request(1).then(v => {
//   console.info(v)
//   request(v).then(v => {
//     console.info(v)
//   })
// })

/*
  async函数
*/
// async function test() {
//   let res1 = await request(1)
//   console.info(res1, 111)
//   let res3 = await Promise.reject(3333)
//   let res2 = await request(res1)
//   console.info(res2, 111)
//   return res2
// }
// let p1 = test()
// console.info(p1, 111) // Promise


/* 
  Generator函数
*/
// 先执行函数内容再返回结果
// function fn(num) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(num * 2)
//     }, 1000)
//   })
// }

// function* gen(a) {
//   console.info(a)
//   const num1 = yield fn(1)
//   console.info(num1, 222)
//   const num3 = yield Promise.reject(3)
//   const num2 = yield 4
//   console.info(num2, 222)
//   return 44444
// }

// const g = gen()
// console.info(g.next()) // {value:1, done: false} // 没走完done状态是false
// console.info(g.next()) // {value:2, done: false}
// console.info(g.next()) // {value:undefined, done: true} // 最后一个value是gen()的return值
// const next1 = g.next()
// next1.value.then(res1 => {
//   console.info(next1)
//   const next2 = g.next(res1)
//   next2.value.then(res2 => {
//     console.info(next2)
//     console.warn(g.next(res2))
//   })
// })

// const g1 = generatorToAsync(gen)
// console.info(g1, 222)
// // g1.then(v => console.info(v, 'v1'))
// // 函数返回函数
// function generatorToAsync(genFn) {
//   // 获取函数
//   const gen = genFn(22222)
//   return new Promise((resolve, reject) => {
//     function go(key, arg) {
//       let res
//       try {
//        res = gen[key](arg)
//       } catch(err) {
//         reject(err)
//       }
//       // 获取返回值和状态
//       const { value, done } = res
//       if(done) {
//         // 状态为true，返回结果
//         resolve(value)
//       } else {
//         // 执行中, value值可能为常量，promise，promise可能成功或失败
//         Promise.resolve(value).then(v => go('next', v), r => reject(r))
//       }
//     }
//     // 第一次执行
//     go('next')
//   })
// }

/* 
  封装
*/
// Promise函数
function resolveFn(data) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(data * 10)
      }, 1000)
  })
}
// Generator函数
function* genFn() {
  const num1 = yield 1
  console.info(num1)
  const num2 = yield 2
  console.info(num2)
  return num2
}
// 处理函数
function AsyncFunction(fn) {
  const gen = fn()
  return new Promise((resolve, reject) => {
      function go(arg){
          let res
          // 执行Generator函数获取next结果
          try {
              res = gen.next(arg)
          } catch(err) {
              reject(err)
          }
          const {value, done} = res
          if(done) {
              resolve(value)
          } else {
              Promise.resolve(value).then(v => go(v), r => reject(r))
          }
      }
      go()
  })
}
const gen3 = AsyncFunction(genFn)
console.info(gen3, 9)