/* 
  事件的传播机制
    捕获阶段：从最外层向最里层事件源依次进行查找（目的：为了冒泡阶段时间计算好传播的层级路径）
      - （从外向内的顺序）  CAPTURING_PHASE:1
    
    目标阶段：当前元素的相关事件行为触发 => AT_TARGET:2

    冒泡传播：触发当前元素的某一个事件行为，不仅它的这个行为被触发了，而且它的所有上级元素（一只到window），相关的事件行为都会被触发
      - （从内到外的顺序）BUBBLING_PHASE:3

  DOM0 绑定的方法，只能在目标阶段和冒泡阶段触发执行
  DOM2 绑定的方法，可以控制在捕获阶段执行
  
  box.addEventListener('click', function(){
    // false代表在冒泡阶段执行此方法
    // ture代表在捕获阶段执行此方法
  }, false)
*/

document.body.onclick = function() {
  console.log('body');
}

btn4.onclick = function(ev) {
  console.log('dvi4', ev);
  // ev.stopPropagation()
}

/* 
  mouseover 和 mouseenter的本质区别
  1. mouseover本身不是进入，而是看鼠标在谁上面，从子元素进入到父元素，触发父元素的mouserover，从父元素进入子元素触发父元素的mouseout
  
  2. mouseenter/mosueleave  默认阻止事件冒泡传播 父元素进入到子元素，从子元素重新进入父元素，父元素的enter和leave都不会触发

  - 盒子有后代元素，尽可能用mouseenter
  - 需要基于冒泡传播做事情，只能用mouseover
*/