/* 
  事件对象
    - 给元素的事件行为绑定方法，当事件行为触发方法会被执行，不仅被执行而且还会把当前操作的相关信息传递给这个函数
    - 如果电脑绘板操作，获取PointerEvent实例 -> PointerEvent.prototype -> MouseEvent.prototype -> UIEvent.prototype -> Event.prototype -> Object.prototype
    - 如果鼠标操作，获取MouseEvent类的实例 -> MouseEvent.prototype -> UIEvent.prototype -> Event.prototype -> Object.prototype
    - 如果键盘操作，获取KeyboardEvent类的实例 - 键盘对象
    - 还有：普通事件对象（Event）、手指事件对象（TouchEvent）等
*/

btn4.onclick = function(ev) {
  // clientX / clientY 当前触发点距离当前窗口 左上角 X/Y轴坐标
  // pageX / pageY 触发点距离当前页面左上角 X / Y轴坐标  （有滚动条）
  // type 事件类型
  // target/srcElement 事件源（操作哪个元素）
  // preventDefault() 用来阻止默认行为的方法 / 不兼容浏览器用 ev.returnValue = false
  // stopPropagation() 阻止冒泡传播 / 不兼容浏览器用 ev.cancelBubble = ture
  // console.log(ev);
}

/*
  事件对象和函数以及给谁绑定的事件没啥必然关系，它存储的是当前本次操作的相关信息
    1. 操作一次之后有一份信息，所有方法中获取的信息都是一样的
    2. 第二次操作，存储的信息会把上一次存储的信息替换掉
  每一次事件触发，浏览器都会处理：
    1. 捕获当前操作的行为（把操作信息获取到），通过创建MouseEvent等类的实例，得到事件对象EV
    2. 通知所有绑定的方法（符合执行条件的）开始执行，并把EV当作实参传递给每个方法，所以在每个方法中得到的事件对象其实是一个
    3. ....
    4. 后面在重新出发这个事件行为，会重新获取本次操作的信息，用新的信息替换老的信息，然后继续之前步骤
*/

// 3个ev是同一个对象
btn4.addEventListener('click', function(ev) {
  console.log(ev);
})
btn4.addEventListener('click', function(ev) {
  console.log(ev);
})
document.body.addEventListener('click', function(ev) {
  console.log(ev);
})

link.onclick = function(ev) {
  console.log(ev);
  ev.preventDefault() // 阻止默认跳转
  // return false // 返回false 阻止跳转
}

/* 
  键盘事件对象
  - key / code 存储的都是按键名称 'a' 'KeyA'
  - keyCode / which 存储的是键盘按键对应的码值
  - 方向键 37 38 39 40 / 左上右下
  - 空格 space 32
  - 回车 enter 13
  - 回退 back  8
  - 删除 del   46
  - shift      16
  - ctrl       17
  - alt        18
*/
// 按钮事件 onkeydown / onkeyup
// link.onkeydown = 
link.onkeyup = function(ev) {
  console.log(ev)
}

