const fs = require('fs')
const insertion_sort = require('./02.数组排序')
// 获取数据
const numberStr = fs.readFileSync('./data/10W.json', 'utf-8')
// 分割成数组
const number = numberStr.split('\n')


const t1 = new Date().getTime()
// 排序
// number.sort((x, y) => x - y)
insertion_sort(number)

const t2 = new Date().getTime() - t1

console.log(`finished: ${ t2 } ms`)

