
var lengthOfLongestSubstring = function(s) {
  let res = []
  let max = 0
  // 遍历字符串
  for (let str of s) {
    // 数组包含s，就一直从头删除
    while (res.includes(str)) {
      res.shift()
    }
    // 数组拼接
    res.push(str)
    // 替换最大max
    max = Math.max(max,res.length)
  }
  console.info(max)
  return max
};

lengthOfLongestSubstring('bbbbb')  // 1
lengthOfLongestSubstring('abcabcbb') // 3
lengthOfLongestSubstring('pwwkew') // 3