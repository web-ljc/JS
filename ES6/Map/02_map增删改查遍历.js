let obj = {num: 1}
let map = new Map()

map.set(obj, 9) // set设置map键值对，不赋值会变成undefined
map.set('name', 9) // map设置不存在的变量，转换为空字符串

console.info(map.get('name'), 'get') // get 获取map对象中某个属性

console.info(map.has('name'), 'has') // has 判断map对象包含某个属性

// console.info(map.delete(obj)) // delete 删除map中对应属性返回 ture

console.info(map, 'Map')


// 遍历map
let newMap = new Map([['name', 'zs'], ['age', 19]])
newMap.set('性别', '男')
// console.info(newMap.keys()) //  {'name', 'age', '性别'}  获取所有key, object类型
// console.info(newMap.values()) // {'zs', 19, '男'} 获取values
// console.info(newMap.entries()) // {'name' => 'zs', 'age' => 19, '性别' => '男'} 获取所有键值对
console.info(newMap, 'newMap')
// for of 遍历
for(let [key, value] of newMap.entries()) {
  console.info(key, value)
}
// forEach 遍历
newMap.forEach((item, key) => console.info(key, item))


/* 
  Map
    字典的数据结构，存储不重复的值，[key, value]形式存储，key可以是任意值
    - 属性
      size: 返回字典包含的元素个数
    - 操作方法
      - set(key, value)
      - get(key)
      - has(key)
      - delete(key)
      - clear()
    - 遍历方法
      - keys() // 获取所有key，对象格式
      - values() // 获取所有值
      - entries() // 获取所有键值对
      - forEach() // 遍历
      - for...of // 遍历
  Set
    集合，类似于数组，但是成员是唯一个，没有重复的值
    本身是一个构造函数，用来生成构造函数
    let arr = new Set(arr1)
*/