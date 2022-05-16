
function fun(...dimentions) {
  const [layer, ...d] = dimentions
  return d.length ? Array(layer).fill(0).map(_ => fun(...d)) : Array(layer)
  
}

console.info(fun(2, 3, 4))
console.info(Array(4))
/* 
  运算数据
  Array(2).fill(0) // 长度为 [0, 0]
  Array(2).fill(0).map(_ => fn(...d)) // 递归遍历数组
  Array(4) // [, , , ,] 长度为4的空数组
  
  // 结果
  一个数组包含2个数组，2个数组各包含3个数组，3个数组包含4个空值
  [
    [[], [], []],
    [[], [], []]
  ]
*/