// 现代版浏览器都有“渲染队列”机制：发现某一行要修改元素的样式，不立即渲染，而是看下一行，如果下一行也会改变样式
// 则把修改样式的操作放到‘渲染队列中’，一直到不再是修改样式的操作后，整体渲染一次，引发一次回流

// 引发一次回流
// box.style.width = '100px'
// box.style.height = '100px'
// box.style.background = 'red'
// box.style.margin = '20px auto'


// 引发2次回流,写属性过程有读属性过程，会触发2次回流，应该读写分离
box.style.width = '100px'
box.style.height = '100px'
console.info(box.offsetWidth) // 获取样式
box.style.background = 'red'
box.style.margin = '20px auto'

/* 
  浏览器遇到 link / img / audio / video等是异步去加载资源信息（浏览器会分配一个新的线程去加载，主线程继续向下渲染页面）
  如果遇到script 或者 @import 则让主线程去加载资源信息（同步）

  页面渲染
  A. 浏览器渲染页面的步骤
    1. 解析HTML，生成DOM树，解析CSS，生成CSSOM树
    2. 将 DOM树 和 CSSOM树 结合，生成渲染树Render Tree
    3. Layout(回流)：根据生成的渲染树，计算它们在设备视口（viewport）内的确切位置和大小
    4. Painting(重绘)：根据渲染树以及回流得到的几何信息，得到节点的绝对像素
    5. Display：将像素发送给GPU，展示在页面上

  B. DOM的重绘和回流
    1. 重绘：元素样式的改变（但宽高、大小、位置不变）
    2. 回流：元素的大小或位置发生了变化（当页面布局和几何信息发生变化的时候），触发了重新布局，大致渲染树重新计算布局和渲染
    3. 回流一定触发重绘，重绘不一定会回流
  
  C. 性能优化：避免DOM的回流
    1. 放弃传统的dom操作，基于vue/react开始数据影响视图模式
      - 虚拟dom / diff算法
    2. 分离读写操作（现代的浏览器都有渲染队列的机制）
      - 获取样式 offsetTop、offsetLeft、offsetWidth、offsetHeight、clientTop、clientLeft
      - clientWidth、clientHeightscropllTop、scrollLeft、scrollWidth、scrollHeight....
    3. 样式集中更改
      - box.className = 'box'
      - box.style.cssText = 'width:20px;height:20px'
    4. 缓存布局信息
      - 原理分离读写
      - 读写操作会触发2次回流，更改后只触发1次回流
        div.style.left = div.offsetLeft + 1 + 'px'
        div.style.top = div.offsetTop + 1 + 'px'
        改为
        let curLeft = div.offsetLeft, curTop = div.offsetTop
        div.style.left = curLeft+1+'px'; div.style.top = curTop+1+'px';
    5. 元素批量修改
      - 将DOM存储到变量中集中修改
        // 回流10次
        for(let i=0; i<10; i++) {
          let span = document.createElement('span')
          span.innerHtml=i
          box.appendChild(span)
        }
        // 回流1次, 文档碎片：文档存储容器
        let frg = document.createDocumentFragment()
        for(let i=0; i<10; i++) {
          let span = document.createElement('span')
          span.innerHTML = i
          frg.appendChild(span)
        }
        box.appenChild(frg)
        frg = null
    6. 动画效果应用到position属性为absolute或fixed元素上（脱离文档流）
    7. css3硬件加速
      - 使用 transform / opacity 不会引发回流
    8. 牺牲平滑度换取速度
    9. 避免table布局和使用css的js表达式
*/