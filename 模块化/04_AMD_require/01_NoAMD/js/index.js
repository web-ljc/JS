// 定义有依赖模块
(function(window, foo) {
  let msg = 'index'
  function bar() {
    console.info(msg, foo.getName())
  }
  window.index = {bar}
})(window, foo)