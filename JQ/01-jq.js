
// 匿名函数入参传入window
//  1. 函数内部调用window，直接找参数速度更快
//  2. 入参window会被压缩，不然没办法压缩。 例如压缩成 e
// 入参undefined
//  1. 防止函数内部访问的undefined被更改
(function(window, undefined) {
  // 严格模式
  "use strict"

  let
    // 1变量名称方便压缩， 2定义名称方便后期可维护
    rootjQuery,

    readyList,

    // 1定义变量方便压缩
    location = window.location,
    document = window.document,
    docElem = document.documentElement

    // 构造函数
    function Jquery() {
      return new Jquery.prototype.init()
    }
    Jquery.prototype.init = function() {}
    Jquery.prototype.say = function() {}
    // Jquery原型上的init方法的原型 指向 Jquery的原型
    Jquery.prototype.init.prototype = Jquery.prototype

    Jquery.fn = Jquery.prototype = {
      jquery: version, // 版本
      constructor: Jquery, // 构造函数指向
      init: function(selector, context) { // 初始化和参数的管理
        // 元素 作用域

        // 判断非正常情况selector $("") $(null) $(undefined) $(false)
        if (!selector) {
          return this
        }

      },
      selector: 2,
      length: 1,
      toArray: 1,
    }

})(window)


// $() Jquery()
// $('li', 'ul')

// const T1 = new Jquery()
// T1.init() // 执行初始化
// Jquery().say()