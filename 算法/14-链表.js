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

  ## 链表
    链表时有序的：不一定是连续的存储空间
    - append   往链表尾部添加元素
    - insert   特定位置添加
    - remove   根据内容移除项
    - removeAt 根据索引移除项
    - indexOf  找到索引
    - isEmpty  判断链表是否为空
    - size     链表长度
*/

const LinkedList = (function() {
  class Node{
    constructor(element) {
      this.element = element
      this.next = null
    }
  }

  let length = new WeakMap()
  let head = new WeakMap()
  return class LinkedList {
    constructor() {
      length.set(this, 0)
      head.set(this, null)
    }
    append(element) {
      let node = new Node(element),
        current
      if(this.getHead() === null) {
        head.set(this, node)
      } else {
        current = this.getHead()
        while(current.next) {
          current = current.next
        }
        current.next = node
        let l = this.size()
        l++
        length.set(this, l)
        console.log(this.getHead());
      }
    }
    getHead() {
      return head.get(this)
    }
    size() {
      return length.get(this)
    }
  }
})()

const list = new LinkedList()
list.append(0)
list.append(1)
list.append(2)
list.append(3)