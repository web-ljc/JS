// 对比2个数组
// baabc   //b  a a
// abc
let arr1 = ['a', 'b']
let arr2 = ['a', 'b', 'c']

// 1. 数组遍历
for (let i = 0; i < arr2.length; i++) {
  let z = i
  for(let j = 0; j < arr1.length; j++) {
    if(arr1[j] == arr2[z]) {
      z = z + 1
    } else {
      break
    }
    if (j === arr1.length -1) {
      isHas = true
    }
  }
}

// 2. 转换成字符串