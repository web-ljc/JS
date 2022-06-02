
/* 
  1. 创建循环初始值
  2. 设置（验证）循环执行的条件
  3. 条件成立执行循环体中的内容
  4. 当前循环结束执行步长累计操作
*/

for(var i = 0; i < 5; i++) {
  // console.info(i) // 0 1 2 3 4
}
console.info(i) // 5

// 循环体中2个关键词
// continue：结束当前这轮循环（continue后面的代码不再执行），继续执行下一轮循环
// break： 强制结束整个循环（break后面代码不再执行），而且整个循环直接结束

for(var i = 0; i < 10; i++) {
  if (i>=2) {
    i++
    continue
  }
  if(i >= 6) {
    i--
    break
  }
  i++
  console.info(i)  // 1
}
console.info(i) // 10

/*
  ## 循环
    - 重复做某些事情就是循环
    1. for循环
    2. for in 循环
    3. for of 循环
    4. while 循环
    5. do while 循环
*/