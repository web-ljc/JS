let arr = [23, 1, 3, 44, 223, 1, 3, 4]

// 1. sort
// arr.sort((a, b) => a-b)
// let min = arr[0]
// let max = arr[arr.length-1]
// console.log(arr)

// 2. Math.min / Math.max
// let min = Math.min(...arr)
// let max = Math.max(...arr)
// console.log(min, max)
// 2.1 利用apply，this无所谓，主要是利用apply给函数传参，需要写成一个数组特征
// let min = Math.min.apply(, arr)

// 3. 假设法：假设第一个是最大的，让数组中每一项分别和当前假设值进行比较，如果假设值比较大则吧最大值设为新的假设值
let max = arr[0]
arr.forEach(item => max = max > item ? max : item)
console.log(max)