// 闭包编程题
const fn = function(...params) {
  if(!Array.isArray(fn.arr)) {
    fn.arr = []
  }
  fn.arr.push(...params)
  return fn
}

Function.prototype.getValue = () => {
  let res = fn.arr.reduce((pre, cur) => pre + cur, 0)
  console.info(res)
  return res
}

// let f1 = fn(1, 2, 3); f1.getValue()
// let f2 = fn(1, 2)(3); f2.getValue()
// let f3 = fn(1)(2)(3); f3.getValue()

// 闭包
const foo = function(...args) {
  const fn = function() {
    const arg1 = [].slice.call(arguments)
    args = args.concat(arg1)
    return foo(...args)
  }
  fn.getValue = function() {
    return args.reduce((pre, cur) => pre + cur, 0)
  }
  return fn
}
let f1 = foo(1, 2, 3); f1.getValue()
let f2 = foo(1, 2)(3); f2.getValue()
let f3 = foo(1)(2)(3); f3.getValue()



function curry (fn, currArgs) {
  return function() {
      let args = [].slice.call(arguments);
      // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
      if (currArgs !== undefined) {
          args = args.concat(currArgs);
      }
      console.info(args.length, 9)
      console.info(fn, fn.length, 8)
      // 递归调用
      if (args.length < fn.length) {
          return curry(fn, args);
      }
      // 递归出口
      return fn.apply(null, args);
  }
}
// 参数值要写固定才可以
function sum(a, b, c) {
  console.log(a + b + c);
}

const fn2 = curry(sum);
fn2(1, 2, 3); // 6    curry(sum)(1, 2, 3)
fn2(1, 2)(3); // 6
fn2(1)(2, 3); // 6
fn2(1)(2)(3); // 6


function add() {
  let args = Array.prototype.slice.call(arguments)
  let inner = function() {
    args.push(...arguments)
    return inner
  }
  inner.toString = function() {
    return args.reduce((pre, cur) => pre + cur, 0)
  }
  return inner
}
let a1 = add(1, 2, 3)
let a2 = add(1, 2)(3)
let a3 = add(1)(2)(3)
console.info(+a1, +a2)