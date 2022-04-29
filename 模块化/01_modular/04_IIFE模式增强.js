// IIFE模式增强：引入依赖

(function(window) {
  let msg = 'module4'
  function foo() {
    console.info('ms=>', msg)
  }
  window.module4 = foo
})(window)