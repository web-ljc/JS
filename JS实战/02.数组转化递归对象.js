

;(function() {
  // 给定一个数组实现对象递归
  let arr = [] // ['A', 1, 2, 'B', 'C', 3]

  // {
  //   A: {
  //     1: {
  //       2: {
  //         B: {
  //           C: {
  //             3: null,
  //           },
  //         },
  //       },
  //     },
  //   },
  // };
  // [] => null
  function toPro() {
    if(!arr.length) return
    let i = len = arr.length - 1, obj = {}
    for (; i > 0; i--) {
      let one = arr[i],
        tow = arr[i-1],
        newObj = {} 
      i === len ? newObj[one] =  null : newObj = obj
      obj = {}
      obj[tow] = newObj
    }
    console.log(obj);
  }
  toPro()
})()