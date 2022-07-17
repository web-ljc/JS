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
// const Stack = (function() {
//   // 私有成员 weakMap
//   const Stack = function() {
//     this.items = []
//   }
//   Stack.prototype.push = function(elem) {
//     this.items.push(elem)
//   }
//   Stack.prototype.pop = function() {
//     return this.items.pop()
//   }
//   Stack.prototype.peek = function() {
//     return this.items[this.items.length - 1]
//   }
//   return Stack
// })()

// 私有成员
// const Stack = (function() {
//   // 私有成员 weakMap
//   const _items = new WeakMap()
//   console.log(_items);
//   const Stack = function() {
//     _items.set(this, [])
//   }
//   Stack.prototype.push = function(elem) {
//     _items.get(this).push(elem)
//   }
//   Stack.prototype.pop = function() {
//     return _items.get(this).pop()
//   }
//   Stack.prototype.peek = function() {
//     return _items.get(this)[_items.get(this).length - 1]
//   }
//   Stack.prototype.size = function() {
//     return _items.get(this).length
//   }
//   return Stack
// })()

// 类形式
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
    pop() {
      return _items.get(this).pop()
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

// 进制的互转  10转成2进制 1010
// 10 / 2 = 5, rem = 0
// 5 / 2 = 2, rem = 1
// 2 / 2 = 1, rem = 0
// 1 / 2 = 0, rem = 1


function divideBy2(num, base) {
  let remStack = new Stack(),
    rem,
    res = '',
    digits = '0123456789abcdef';
  while(num > 0) {
    rem = num % base
    remStack.push(rem)
    num = Math.floor(num / base)
  }
  while(!remStack.isEmpty()) {
    res += digits[remStack.pop()]
  }
  return res
}
console.log(divideBy2(1000, 8));
