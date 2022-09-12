/*
  1 生成 1-100W 整数
  2 写一个算法将他们打乱
  3 再写一个算法将他们排序
  4 输出一下程序的总执行时间
*/


// 生成1-100W数字
const initData = (w) => {
  const arr = []
  for(let i = 0; i < w * 10000; i++) {
    arr[i] = i + 1
  }

  // shuffle_simple(arr)
  // shuffle(arr)
  fisher_yates_shuffle(arr)
  return arr
}
// 简单排序算法 500
const shuffle_simple = (arr) => {
  return arr.sort((x, y) => Math.random() - .5)
}

// 排序，拉大随机数之间的差距 500
const shuffle = (arr) => {
  const m = []
  const N = arr.length * arr.length * arr.length
  for(let i = 0; i < arr.length - 1; i++) {
    m[i] = Math.floor(Math.random() * N)
  }
  return arr.sort((x, y) => m[x] - m[y])
}

// O(n)的打乱算法 77
// 当前项与后边随机一项进行替换
// 求值范围[m, n)   m + Math.floor(Math.random() * (n-m))
const fisher_yates_shuffle = (arr) => {
  for(let i = 0; i < arr.length -1; i++) { // 2n + 2
    const j = i + Math.floor(Math.random() * (arr.length - i)); // 从i后随机找一个数字j
    // c1*n c2*n
    [ arr[i], arr[j] ] = [ arr[j], arr[i] ] // 替换位置
  }
}

// console.time('A')
const arr = initData(10)
// console.timeEnd('A')



// 存储100W条数据
// file.js写好打印，然后执行 node file.js > name.json
for(let i=0; i < arr.length; i++) {
  console.log(arr[i]);
}


