var arr1 = [1, 1, 1], k1 = 2; // 2
var arr2 = [1, 2, 3, 4, 5, 6], k2 = 5; // 2
var arr3 = [1, 2, 3, -1, 4, 5, 6], k3 = 5; // 3

// 时间复杂度O(n^2)  空间复杂度O(1)
const numFn = (arr, k) => {
  let res = 0, num = 0, index = 0, _index
  const len = arr.length
  // 遍历数组
  for(; index < len; index++) {
    // 获取初始值
    _index = index
    res = arr[index]
    if(res === k) num +=1
    while(_index < len) {
      _index += 1
      res += arr[_index]
      if(res === k) {
        num += 1
      }
    }
  }
  return num
}

console.log(numFn(arr1, k1));
console.log(numFn(arr2, k2));
console.log(numFn(arr3, k3));