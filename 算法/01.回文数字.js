// 判断回文数字
var isPalindrome = function(x) {
  if (x < 0) return false
  // 数字转为字符串
  let arr = x.toString()
  // 获取左右数值
  let l = 0, r = arr.length - 1
  // 遍历对比相应位置的数值
  while(l < r) {
      if(arr[l] === arr[r]) {
          l++
          r--
      } else {
          return false
      }
  }
  return true
};
isPalindrome(121)
