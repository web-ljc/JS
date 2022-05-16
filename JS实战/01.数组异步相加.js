//通过调用下面的addRemote,实现add方法
//addRemote仅能计算两个数字之和
//add可以传入任意多个数字，返回的是这些数字之和
const addRemote = async (a, b) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 1000);
  });

// 实现方法
async function add(...inputs) {
  // 等待1秒后获取返回结果
  let res = 0
  // 遍历循环
  for(let i = 0; i < inputs.length; i ++) {
    res = await addRemote(res, inputs[i])
  }
  // 返回Prmose的resolve实例
  return Promise.resolve(res)
}

//请用示例验证运行结果：
add(1, 2).then((result) => {
  console.log(result); //3
});
add(3, 5, 2).then((result) => {
  console.log(result); //10
});