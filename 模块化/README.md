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
  - CMD // 阿里内部规范，卖给国外了
  - ES6