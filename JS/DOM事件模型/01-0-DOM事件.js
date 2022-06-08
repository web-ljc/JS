
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
      + 移动端手指事件
        - 单手指事件模型 Touch
          - touchstart  手指按下
          - touchmove   手指移动
          - touchend    手指松开
          - touchcancel 操作取消（一般应用于非正常状态下操作结束）
        - 多手指操作 Gesture
          - gesturestart
          - gesturechange / gestureupdate
          - gestureend
          - gesturecancel
      + 表单事件
        - focus  获取焦点
        - blur   失去焦点
        - change 内容改变
        - input  输入事件
      + 音视频常用事件
        - canplay  可以播放（资源没有加载完，播放中可能会卡顿）
        - canplaythrought 可以播放（资源已经加载完，播放中不会卡顿）
        - play    开始播放
        - playing 播放中
        - pause   暂停播放
      + 其它常用事件
        - load   资源加载完
        - unload 资源卸载
        - beforeunload 当前页面关闭之前
        - error  资源加载失败
        - readystatechange AJAX请求状态改变事件
        - contextmenu  鼠标右键触发
*/

/* 
  DOM0事件绑定  VS  DOM2事件绑定
    - DOM0
      - 元素.on事件行为 = function() {
        元素.on事件行为 = null // 移除事件绑定
      }
    - DOM2
      - 元素.addEventListener(事件行为, function(){}, true/false)
      - IE6-8 元素.attachEvent('on事件行为', function(){})
  
    - DOM0事件绑定原理：
      给元素的私有属性赋值，当事件触发，浏览器会帮我们把赋的值执行，导致‘只能给当前元素某一个事件行为绑定一个方法’
    - DOM2事件绑定原理：
      基于原型链查找机制，找到EventTarget.prototype上的方法并且执行，此方法执行，会把给当前元素某个事件行为绑定所有方法，
      存放到浏览器默认的事件池中，当事件行为触发，会把事件池中存储的对应方法，依次按照顺序执行‘给当前元素某一个事件行为绑定一个方法’
      事件池存在去重机制‘同一个元素，同一个事件类型，在事件池中只能存储一遍这个方法，不能重复存储’
    
    - DOM0 和 DOM2 可以混合使用，执行顺序以绑定顺序为主
    - DOM0绑定的事件行为，DOM2都支持，能绑定更多事件行为

*/

// 事件绑定
document.body.onclick = function() {
  console.log(11111)
}
// 第2次绑定会覆盖第一次
document.body.onclick = function() {
  console.log(123, this)
  document.body.onclick = null // 移除绑定方法
}

// dom2事件绑定，一般用实名函数
function func() {
  console.log(3333);
  // 移除事件绑定：从事件池中移除，所以需要制定好事件类型、方法等信息（要和绑定时候一样才能移除）
  document.body.removeEventListener('click', func, false)
}
// 事件绑定
document.body.addEventListener('click', func, false)

// 基于addEventListener向事件池增加方法，存在去重的机制‘同一个元素，同一个事件类型，在事件池中只能存储一遍这个方法不能重复’
// 事件池中事件会绑定顺序执行
function fn1() {console.log(1);}
function fn2() {console.log(2);}
function fn3() {console.log(3);}
document.body.addEventListener('click', fn2, false) // 2
document.body.addEventListener('click', fn3, false) // 3
document.body.addEventListener('click', fn1, false) // 1
document.body.addEventListener('click', fn1, false)

window.addEventListener('DOMContentLoaded', function() {
  console.log('只要DOM结构加载完就会触发');
})