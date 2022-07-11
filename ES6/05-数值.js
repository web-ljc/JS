/* 
  1. 二进制和八进制
    - 二进制前缀 Ob
    - 八进制前缀 Oo


  2. 数值分隔符
    let num = 12_000_000
    - 不能放在数值的最前面或最后面
    - 不能2个或2个以上的分隔符连在一起
    - 小数点的前后不能有分隔符
    - 科学计数法里，表示指数的e或E前后不能有分隔符
    - 不支持Number / parseInt / parseFloat 处理分隔符字符串，主要为了书写方便，不是为了处理外部输入的数据


  3. Number.isFinite() / Number.isNaN()
    - Number.isFinite() 检查一个数值是否为有限的finite，参数不是数值一律返回ture
    - Number.isNaN()    检查一个值是否为NaN
    - 传统方法先调用Number()将非数值的值转为数值，再进行判断，这两个方法只对数值有效


  4. Number.parseInt() / Number.parseFloat()
    - 和parseInt() / parseFloat()行为完全保持不变，减少全局性方法


  5. Number.isInteger()
    - 判读一个数值是否为整数，参数不是数值返回false
    - JS采用IEEE745标准，数值存储是64位双精度格式，数值精度最多可达53个二进制（1个隐藏位与52个有效位），如果精度超过这个限度，第54位及后面的位就会被丢弃，可能会误判


  6. Number.EPSILON
    - 一个极小的常量Number.EPSILON，表示1与大于1的最小浮点数之间的差
      Number.EPSILON === Math.pow(2, -52)


  7. 安全整数和 Number.isSafeInteger()
  8. Math对象的扩展
  9. BigInt数据类型

*/

Number.isInteger(12) // true
Number.isInteger(12.3) // false
Number.isInteger(12.0) // true
Number.isInteger() // false
Number.isInteger(null) // false


Number.isFinite(15) // true
Number.isFinite(1.5) // true
Number.isFinite(NaN) // false
Number.isFinite(Infinity) // false
Number.isFinite('foo') // false
Number.isFinite('15') // false
Number.isFinite(true) // false

Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true

