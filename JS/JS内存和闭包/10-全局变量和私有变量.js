var a = 12, b = 13, c = 14

function fn(a) {
  /*
    形参赋值
      a = 12
    变量提升
      var b
  */
  console.log(a, b, c); // 12, undefined, 14
  var b = c = 20
  console.log(a, b, c); // 12, 20, 20
}

fn(a)
console.info(a, b, c) // 12 13 20

/* 
  在私有作用域中，只有2种情况是私有变量
  1. 声明过的变量（带 var / function）
  2. 形参也是私有变量
  剩下的都不是私有变量，都需要基于作用域链的机制向上查找
*/