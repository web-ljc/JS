
var arr = [12, 24]

function fn(arr) {
  console.info(arr) // [12, 24] 使用全局对象的堆内存地址
  arr[0] = 100 
  arr = [99] // 形参arr 指向新对象的堆内存
  arr[0] = 0
  console.log(arr) // [0]
}

fn(arr)
console.log(arr); // [100, 24]

/* 
  fn 函数内部私有作用域
    形参赋值arr，传入对象arr，形参arr引用地址和外部对象arr引用地址一样
    形参 arr = [] 重新更改指向

*/