let arr = []
let map = new WeakMap()
map.set(arr, 2)
map.set(arr, 9)
console.info(map.get(arr))
// console.info(map.delete(arr))

console.info(map, 'WeakMap')

/* 
  ## WeakMap
    - weakMap 是弱引用类型，key只能是对对象
      因为key是引用对象，当对象被清除，key对象值会自动delete，所以不能遍历操作
    - 方法
      - set(key, val) // 设置key val
      - delete(key)  // 删除
      - has(key)
      - get(key)
    
*/

let arr2 = new Set([1, 3, 1, 4])
console.info([...arr2])