
// 伪数组转成数组
// 1 [].slice.call()
// let arg = [].slice.call(arguments)
// let imgs = [].slice.call(document.querySelectorAll('img')) // NodeList

// 2 for循环遍历

// 3 Array.from
function test() {
  // let arg = [].slice.call(arguments)
  let arg = Array.from(arguments)
  console.log(arg);
}
test(1, 3, 4, 5)
// let imgs = Array.from(document.querySelectorAll('img'))
let obj = {length: 3}
obj = Array.from(obj)
console.log(obj, 9);



/* 
  ### ES6数组新增方法

    - Array.from(arrayLike[, mapFn[, thisArg]])
      - 将一个类数组对象 或 可迭代对象创建一个新的数组实例
      - 参数
        - arrayLike // 伪数组
        - mapFn  // 回调函数
        - thisArg // 回调 mapFn 的 this 对象
      - 返回一个新数组
*/