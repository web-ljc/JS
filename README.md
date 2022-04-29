## JS基础知识点

  ### 面向对象
    如何创建类，以及类之间是如何继承的
  ### 模块化
    模块化：CommonJs、AMD、ES6

  - CommonJs与ES6区别
    - 前者支持动态导入，也就是 `require(${path}/xx.js)`，后者目前不支持，但是已有提案
    - 前者是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。而后者是浏览器异步导入，服务器同步
    - 前者在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。但是后者采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化
    - 后者会编译成 `require/exports` 来执行的

  ### ES6

  #### 箭头函数
  
  #### Promise
    ES6异步编程，新的解决方案

  ### JS
  - 手撕new方法
  - 手撕深拷贝

  
