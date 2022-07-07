/* 
  数据结构
    1. 数组
    2. 栈
    3. 队列
    4. 链表
    5. 树
    6. 堆
    7. 哈希表
    8. 图

  ## 栈
    栈：数据集合；有序；后进先出（LIFO）
    栈顶、栈底
      - push 新增元素
      - pop  移除栈顶元素
      - peek 返回栈顶的元素
      - isEmpty 是否是空
      - clear 移除所有元素
      - size  元素个数
*/

// 单例设计模式
const Stack = (function() {
  // 私有成员 weakMap
  const _items = new WeakMap()
  console.log(_items);

  return class Stack {
    constructor() {
      _items.set(this, [])
    }
    push(elem) {
      _items.get(this).push(elem)
    }
    pop(elem) {
      return _items.get(this).pop(elem)
    }
    peek() {
      return _items.get(this)[_items.get(this).length - 1]
    }
    isEmpty() {
      return _items.get(this).length === 0
    }
    clear() {
      _items.set(this, [])
    }
    size() {
      return _items.get(this).length
    }
    toString() {
      return _items.get(this).toString()
    }
  }
  
})()

const stack = new Stack()
const stack2 = new Stack()
stack.push(1)
stack.push(2)
console.log(stack, stack2);
