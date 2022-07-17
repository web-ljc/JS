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

  ## 队列
    先进先出
    - enqueue 入列
    - dequeue 出列
    - front   最前的元素
    - isEmpty 是否为空
    - size    列的长度
*/

// 队列
const Queue = (function() {
  // 私有成员 weakMap
  const _items = new WeakMap()
  console.log(_items);

  function QueueElement(elem, priority) {
    this.elem = elem
    this.priority = priority
  }

  return class Stack {
    constructor() {
      _items.set(this, [])
    }
    enqueue(elem, priority) {
      let queueElement = new QueueElement(elem, priority)
      let added = false
      
      let i = 0,
        len = _items.get(this).length;
      for(; i < len; i++) {
        if(queueElement.priority < _items.get(this)[i].priority) {
          _items.get(this).splice(i, 0, queueElement)
          added = true
          break
        }
      }

      if(!added) {
        _items.get(this).push(queueElement)
      }
    }
    dequeue() {
      return _items.get(this).shift()
    }
    front() {
      return _items.get(this)[0]
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
      return _items.get(this)
    }
  }
})()

// 优先队列
const a = new Queue()
a.enqueue('d',4)
a.enqueue('b',2)
a.enqueue('a',1)
a.enqueue('c',3)
// a.dequeue()
console.log(a, a.toString()); // '2,3,4'
console.log(a.isEmpty()); // false
console.log(a.front()); // 2
console.log(a.size()); // 3
