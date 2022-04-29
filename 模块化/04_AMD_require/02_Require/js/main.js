(function() {

  requirejs.config({
    base: '/js', // 基本路径，出发点在根目录
    paths: { // 配置路径
      defineFn: './modules/defineFn',
      define2: './modules/define2',
      jquery: './libs/jquery-1.11.1'
    }
  })

  requirejs(['define2'], function(define2) {
    define2.showMsg()
  })
})()