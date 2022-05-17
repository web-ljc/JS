const a = [1, [2, [3, 4]]]

// 将数组变为字符串格式，并替换 [ ]
let str = JSON.stringify(a).replace(/\[|\]/g, '')
// 字符串分割
let arr = str.split(',')
// 遍历转换成数字
arr = arr.map(item => parseInt(item))
// 打印
console.info(arr)
