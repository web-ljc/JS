// 没有依赖模块
(function(window) {
  let name = 'foo.js'
  function getName() {
    return name
  }
  window.foo = {getName}
})(window)