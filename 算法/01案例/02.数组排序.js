
// 数组排序
// sort() 比较简单
// 双for循环，缺点是内层for循环要和剩余所有的对比

// 插入排序
// for循环+while循环，当前值和已经排序值逐个对
// 最好O(n) 最坏O(n^2) 平均(n^2)
const insertion_sort = (arr) => {
  for(let j = 1; j < arr.length; j++) {
    const key = arr[j] // 获取当前值 3
    let i = j - 1 // 数组前一位
    while(i >= 0 && arr[i] > key) { // 逐渐向前找值，且 > 当前值  1 4 > 2
      arr[i+1] = arr[i] // 当前值 = 前一项的值  [3, 4, 2] -- [3, 4, 4] -- [3, 3, 4]
      i--
    }
    arr[i+1] = key // 将当前项赋给最开始的值 [2, 3, 4]
  }
}

// let arr = [4, 3, 2, 1]
// insertion_sort(arr)
// console.log(arr); // [1, 2, 3, 4]

module.exports = insertion_sort


/**
 * 分治
 * 分： 将问题分解成子问题，子问题规模变小但问题不变
 * 治：递归解决子问题，子问题的子问题，当子问题足够小，就直接解决
 * 和：合并子问题的解
 * 
 * 代表：归并排序、快速排序
 * 
*/