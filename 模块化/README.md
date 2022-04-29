## 模块化
  - 避免命名冲突
  - 更好的分离，按需加载
  - 更高复用性
  - 高可维护性

## 模块化规范
  - CommonJS
    + 规范
      - 每个文件可以当作一个模块
      - 在服务器端：模块的加载运行时同步加载
      - 在浏览器端：模块需要提前编译打包处理
    + 基本语法
      - 暴露模块
        - module.exports = obj
        - exports.xxx = obj
        - 暴露的模块是 exports 对象
      - 引入模块
        - require(xxx)
          - 第三方模块： xxx 为模块名
          - 自定义模块： xxx 为模块路径
    + 实现
      - 服务器端实现
        - node.js
      - 浏览器端实现
        - Browserify / 浏览器端的打包工具
        - 打包指令：browserify js/app.js -o dist/bundle.js

  - AMD
    + 规范
      - 专门用于浏览器端，模块的加载是异步的
    + 基本语法 
      - 暴露模块
        - 没有依赖的模块 define(function() { return 模块 })
        - 有依赖的模块 define(['m1', 'm2'], function(m1, m2) {return 模块})
      - 引用模块
        - require(['m1', 'm2'], function(m1, m2) {使用m1/m2})
      ```js
        // js/modules/define2.js
        define(['defineFn', 'jquery'], function(defineFn, $) {
          let msg = 'defineMsg'
          function showMsg() {
            console.info(msg, defineFn.getName(), $('#btn'))
          }
          return { showMsg }
        })
        // js/main.js
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
      ```
    + 实现
      - 浏览器端
        - Require.js
        ```js
          // 引入require文件，并指定入口
          <script data-main="js/main.js" src="js/libs/require.js"></script>
        ```


  - CMD // 阿里内部规范，卖给国外了
  - ES6
    + 规范
      - 依赖模块需要编译打包处理
      - 语法
        - 导出模块 export
          ```js
            // 默认暴露,只能写一个
            export default function(){}
            // 按需暴露,按需暴露可以写多个，可以与默认暴露共写
            export arr = []
            export str = 'str'
          ```
        - 引入模块 import
          ```js
            // 引入默认暴露
            import obj from './obj'
            // 按需暴露，解构引入，可以重命名
            import {arr as newArr, str} from './obj2'
            import * as obj2 from './obj2'
          ```
    + 实现
      - 工具 babel
        - 定义package.json文件
        - 安装
          ```js
            yarn add @babel/core @babel/cli @babel/preset-env -D
          ```
        - 从ES6编译成commonjs格式es5
          ```js
            npx babel js/src -d js/lib
          ```
        - 处理commonjs模块化
          ```js
            browserify js/app.js -o dist/bundle.js
          ```

  - CommonJs与ES6区别
    - 前者支持动态导入，也就是 `require(${path}/xx.js)`，后者目前不支持，但是已有提案
    - 前者是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。而后者是浏览器异步导入，服务器同步
    - 前者在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。但是后者采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化
    - 后者会编译成 `require/exports` 来执行的