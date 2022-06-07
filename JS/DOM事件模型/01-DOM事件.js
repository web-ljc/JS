
/* 
  ## DOM事件模型

  ### 1. DOM事件的基础知识
    - 事件是元素天生自带的默认操作行为
      + 不论是否绑定了方法，当我们操作的时候，就会把对应的事件触发
    - 事件绑定是给元素的某个行为绑定一个方法
      + 目的是当事件行为触发的时候，可以做一些事
    - 常用的事件行为
      + 鼠标的事件行为
        - click      点击
        - dbclick    双击
        - mousedown  鼠标按下
        - mouseup    鼠标抬起
        - mousemove  鼠标移动
        - mouseover  鼠标滑过
        - mouseout   鼠标滑出
        - mouseenter 鼠标进入
        - mouseleave 鼠标离开
        - mousewhell 鼠标滚轮滚动
      + 键盘事件
        - keydown    按下任意按键
        - keyup      释放任意按键
        - keypress   除Shift、Fn、CapsLock外任意按键被按住（连续触发）
*/

box.onclick = function() {
  console.log(123)
}