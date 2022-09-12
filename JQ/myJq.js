
/* 
  
*/

// 自执行匿名函数
(function () {
  // 40-110 定义了一些变量和函数                jQuery = function(){}

  // 163-254 给JQ对象添加一些方法和属性          jQuery.fn = jQuery.prototype = {}

  // 256-326 JQ的继承方法                     jQuery.extend = jQuery.fn.extend

  // 328-494 JQuery.extend()扩展一些工具方法   jQuery.extend({})

  // 533-2977   Sizzle 复杂选择器的实现（独立的）  Sizzle=(function(){ })()

  // 3456-3548  回调对象:函数的一个统一管理       jQuery.Callbacks = function(){}  // 发布订阅

  // 3691-4037  Deferred延迟对象，对异步的统一管理      // Promise

  // support  功能检测，不同版本浏览器

  // 4239-4387   Data() 数据缓存

  // 4560-4624   queue()  队列管理，顺序管理

  // attr() prop() 对元素的属性操作

  // on() trigger() 事件操作相关方法

  // DOM操作：添加 删除 获取 包装 DOM筛选

  // css() 样式操作

  // 提交的数据和ajax

  // animate() 运动的方法

  // offset() 位置和尺寸的方法

  // Jq支持模块化，可以在各平台使用

  // 10901 对外提供接口                       window.jQuery = window.$ = jQuery;  
})()