
// 1 打印时间
console.time('A')
for(let i = 0; i < 10; i++) {
}
console.timeEnd('A') // A:0.017... ms
// 打印经过多少毫秒


// 2 性能测试
let t1 = new Date()
for(let i= 0; i < 1000000; i++) {
}
console.log(new Date() - t1) // 2  毫秒
