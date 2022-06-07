/* 
  DOM及基础操作
    ### 获取DOM的方法
      1. document.getElementById() 
        - 指定在文档中，基于元素的ID或这个元素对象
      2. [context].getElementsByTagName() 
        - 在指定上下文（容器中），通过标签名获取一组元素集合
      3. [context].getElementsByClassName()
        - 在指定上下文（容器中），通过类名获取一组元素集合（不兼容IE6-8）
      4. document.getElementsByName()
        - 在整个文档中，通过标签的name属性值获取一组节点集合（一般用于表单元素）
      5. document.head / document.body / document.documentElement
        - 获取页面中的 head / body / html
      
      6. [context].querySelector([selector])
        - 在指定上下文中，通过选择器获取到指定元的元素对象（不兼容IE6-8）  
      7. [context].querySelectorAll([selector])
        - 在指定上下文中，通过选择器获取到指定元的元素集合（不兼容IE6-8）
        
        document.querySelector('#box')
        document.querySelectorAll('.box')
    
    ### DOM元素
      - documnet
      - document.documentElement
      - document.head
      - document.body
      - childNodes // 所有子节点
      - children // 所有元素子节点， ie6-8会把注释节点当作元素节点获取到
      - parentNode
      - firstChild / firstElementChild
      - lastChild / lastElementChild
      - previousSibling / previousElementSibling
      - nextSibling / nextElementSibling // 所有带element的ie6-8不兼容
    
    ### DOM的增删改查
      - document.createElement([Tag-name])
      - document.createTextNode([Text content])
      - 字符串拼接，然后基于innerHTML/innerText存到容器
      
      - [Parent].appendChild([new-element]) // 拼接子节点
      - [Parent].insertBefore([new-element], [element]) // 插入节点

      - [Element].cloneNode([true/false]) // 克隆节点
      - [Parent].removeChild([element]) // 移除节点

    ### 设置自定义属性
      - [Element].xxx = xxx // 添加
      - console.log([Element].xxx) // 获取
      - delete [Element].xxx // 删除

      - [Element].setAttribute('xxx', xxx) // 添加
      - [Element].getAttribute('xxx') // 获取
      - [Element].removeAttribute('xxx') // 删除
    
    ### 获取元素样式和操作样式
      #### 修改元素样式
      - [Element].style.xxx = xxx // 修改设置行内样式
      - [Element].className = xxx // 设置样式类

      #### 获取元素的样式
      - console.log([Element].style.xxx) // 获取的是当前元素写在行内上的样式，没写在行内获取不到
    
    ### JS盒子模型属性
      - 基于一些属性和方法，让我们能够获取到当前元素的样式信息,例如clientWidth
      - client（可视区域）
        + width / height
          - 可视区域宽高 width+padding
        + top / left
          - 可视区域的border

      - offset
        + width / height
          - 元素的 width + padding + border
        + top / left
          - 相对于父级参照物的偏移
        + parent
          - 父级参照物，body的父级参照物为null

      - scroll
        + width / height
          - 滚动区域真实宽高
        + top / left
          - 滚动条卷去的宽高
      
      - 获取属性方法： 
        + window.getComputedStyle([element],[伪类]) 
          - 获取当前元素所有经过浏览器计算过的样式
          - 只要元素在页面中呈现出来，那么所有的样式都是经过浏览器计算的
          - 在IE6-8不兼容，需要基于currentStyle获取
          - 参数（元素， 伪类）
          - 结果 CSSStyleDeclaration 这个类的实例，包含了当前元素的所有样式信息

        + [element].currentStyle

*/

/*
  client 可视区域的宽高（内容区+左右padding）
    1. 内容溢出与否无影响
    2. 获取的结果是没有单位的
    3. 获取的结果是整数，它会自己进行四舍五入（其余的盒模型属性也是）
*/

console.log(box.clientWidth); // 240 200 + 20 + 20
console.log(box.clientHeight); // 241 200.6 + 20 + 20
// 获取左边框和上边框大小
console.log(box.clientLeft); // 左边框 10
console.log(box.clientTop); // 上边框 10

// 获取当前页面一屏幕（可视化）区域的宽高
let winW = document.documentElement.clientWidth
console.log(winW); // 可视化区域的宽
let winH = document.documentElement.clientHeight
console.log(winH); // 可视化区域的高


// 在client基础加上 border === 盒子本身的宽高
console.log(box.offsetWidth); // width + padding（左+右） + border（左+右）
console.log(box.offsetHeight);

// 父参照物和它的父元素没有必然联系，父参照物查找：同一个平面中，最外层元素是所有后代元素的父参照物
// 基于position: relative/absolute/fixed 可以让元素脱离文档流（一个新的平面），从而改变元素的父参照物
// documnet.body.offsetParent === null
console.log(box.offsetParent); // 获取它的父参照物（不一定是父元素）
console.log(box.offsetTop); // 距离其父参照物的上偏移
console.log(box.offsetLeft); // 距离其父参照物的左偏移（当元素的外边框到父参照物里边框）


// 在没有内容溢出的情况下，获取的结果和client一样
// 有内容溢出的情况下，获取的结果 约等于 真实内容的宽高 （上/下padding + 真实内容的高度/宽度）
// 1.不同浏览器获取的结果不同
// 2. 设置overflow属性值对最后的结果也会产生影响
console.log(box.scrollWidth); 
console.log(box.scrollHeight);
// 竖向滚动条卷去的高度
// 横向滚动条卷去的宽度
// 1. 边界值 min = 0  / max = 整个高度scrollHeight - 屏幕高度clientHeight
// 2. 13个盒子模型属性，只有这两个是‘可读写’的属性，其余都是‘只读’属性
console.log(box.scrollTop);
console.log(box.scrollLeft);
// 获取页面真实高度
console.log(document.documentElement.scrollHeight);


let styleObj = getComputedStyle(box)
console.log(styleObj['backgroundColor']);

/*
  css盒模型  box-sizing:
    content-box（传统盒模型，改变padding、border盒子大小变化
    border-box(IE盒模型 改变padding和border不会改变盒子大小)
*/