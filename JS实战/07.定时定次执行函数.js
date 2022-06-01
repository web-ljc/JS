// 异步执行失败，定时重启一定次数
// try...catch... 不能由异步包裹
async function fn(n, interval) {
  if(n === 0) return false
  n--
  try {
    let p1 = await Promise.reject('err')
    throw p1
  } catch (error) {
    console.info(error, 'error')
    setTimeout(() => {
      fn(n, interval)
    }, interval)
  }
}

fn(4, 2000)

// 闭包，箭头函数this指向
;(function() {
  var a = 1
  let obj = {
    fn2: () => {
      console.info(this)
      console.info(this.a)
    }
  }
  obj.fn2()
})()
// window
// undefined

// 作用域上下文
function fn3() {
  let b = 3
  console.info(window.b)
  return function (){
    console.info(b)
  }
}
fn3()()
// undefined
// 3