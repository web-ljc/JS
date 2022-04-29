
define(function() {
  let name = 'define'
  function getName() {
    return name
  }
  // 暴露模块
  return { getName }
})