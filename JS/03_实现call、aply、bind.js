// call 的实现原理  ctx--作用域对象
Function.prototype.myCall = function(ctx, ...arguments) {
  ctx = ctx || window                 // 传入作用域对象
  ctx._fn = this                      //  调用对象（函数对象）
  let resust = ctx._fn(...arguments)  // 传入作用域对象调用，并传入参数
  delete ctx._fn                      // 删除属性
  return resust                       // 返回结果
}
var name = 'zs'
let obj = {
  name: 'ls'
}
function sayName(age) {
  console.info(`我叫${this.name}，今年${age}`)
}
sayName(10) // 我叫zs，今年10
sayName.myCall(obj, 20) // 我叫ls，今年20

// apply实现
Function.prototype.MyApply = function(ctx, argsArray) {
  ctx = ctx || window
  ctx._fn = this
  let result = ctx._fn(...argsArray)
  delete ctx._fn
  return result
}
sayName.apply(obj, [19]) // 数据参数要一个个接收
sayName.MyApply(obj, [20]) // 我叫ls，今年20



// bind实现，返回新函数
Function.prototype.MyBind = function(ctx, ...argsArray) {
  ctx = ctx || window // 获取对象
  const self = this // 获取当前调用

  // 3.定义返回函数
  const bound = function(...arguments) {
    // this是当前函数的this
    let isNew = false
    try {
      isNew = this instanceof self
    } catch(err) {}
    // 直接使用继承ctx，构造函数继承this
    return self.apply(isNew ? this : ctx, argsArray.concat(arguments))
  }

  const Empty = new Function()
  Empty.prototype = this.prototype
  bound.prototype = new Empty()

  // 返回内部函数
  return bound
}

let obj2 = {
  name: 'test'
}
function speakName(age) {
  console.info(`我叫${this.name}，今年${age}`)
}
let fn = speakName.MyBind(obj2, 999)
fn() // 我叫test，今年999
let fn22 = new fn() // 我叫undefined，今年999
