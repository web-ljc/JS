//  IIFE模式：匿名函数字调用（闭包）

(function(window) {
  let msg = 'module3'
  function foo() {
    console.info('msg=>', msg)
  }
  window.module3 = {foo}
})(window)