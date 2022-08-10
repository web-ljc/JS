// 执行次数O(n)  T = 3n + 4
function sum (a) {
  let sum = 0 // 1
  // 1 n+1 n
  for(let i=0; i< a.length; i++)  {
    sum += a[i] // 1n
  }
  return sum // 1
}

// 二维数组 执行次数O(n^2) T = 3n^2 + 4n + 4
// 或者O(m*n)
function sum2(a) {
  let sum = 0
  for(let i = 0; i < a.length; i++) {
    for(let j = 0; j < a[i].length; j++) {
      sum += a[i][j]
    }
  }
  return sum
}

// 执行次数  O(n+m)
function sum4(a, b) {
  let sum = 0 // 1
  // 1 n+1 n
  for(let i=0; i< a.length/2; i++)  {
    sum += a[i] // 1n
  }
  for(let i=0; i< b.length; i++)  {
    sum += a[i] // 1n
  }
  return sum // 1
}

// 执行次数O(1)  执行次数是一个常数
// 不会随着规模增长而增长
function sum5(a) {
  return a[0] + a[a.length-1]
}

// 执行次数  O(n)
function sum3(a) {
  let sum = 0 // 1
  // 1 n+1 n
  for(let i=0; i< a.length/2; i++)  {
    sum += a[i] // 1n
  }
  return sum // 1
}


// 二分树查找O(logn)

