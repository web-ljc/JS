
var longestPalindrome = function(s) {
  if(s.length < 2) return s
  let res = ''
  for(let i = 0; i < s.length; i++) {
    // 奇数
    helper(i, i)
    // 偶数
    helper(i, i+1)
  }
  function helper(m, n) {
    // 从0开始为中心扩散寻找
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--
      n++
    }
    // 循环完m,n的值恰好是不满足要求的时刻，m，n的边界应该是m+1 到 n-1的区间，
    // 如果n-m的距离大于res的长度，重新赋值
    if(n - m - 1 > res.length) {
      res = s.slice(m+1, n)
    }
  }
  return res
};

longestPalindrome("babad") // 3