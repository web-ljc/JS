/* 
  函数数据类型
    1. 普通函数
    2. 类（内置&自定义）

  对象数据类型：
    1. {} [] /^$/ Date() Math arguments
    2. 实例也是对象数据类型
    3. 类的prototype也是对象数据类型，（Function.prototype除外，它是匿名函数）
    4. 函数也是对象

  函数的三种角色
    1. 普通的函数
      + 形参、实参、arguments、return
      + 私有作用域
      + 形参赋值 & 变量提升
      + 作用域链
      + 栈内存的释放和不释放（闭包）

    2. 构造函数（类）
      + 类和实例
      + prototype 和 __proto__ 原型和原型链
      + instanceof
      + constructor
      + hasOwnProperty

    3. 普通的对象
      + 它是由键值对组成的
      + name: 函数名字
      + length: 形参个数
    
    函数中的this是重点内容
  
  1. 每一个函数（普通函数、类）都是Function类的实例
  2. 所有的对象都是Object这个类的实例
  3. 函数也是对象，所以所有函数也是Object这个类的实例

  Function函数内置类 
    - 原型prototype 指向 Function.prototype
      - Function.porotype 是一个空的匿名函数
      - constructor 指向 Function函数内置类
      - __proto__ 指向 Object.prototype

    - 原型链__proto__ 指向 Function.prototype
  Object内置函数
    - 原型prototype 指向 Object.prototype
      - __proto__ 为null
    - __proto__ 因为是函数实例，所以原型链指向 Function.prototype
*/

