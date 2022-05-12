// 对象的key都会转化为字符串
let obj = {
  1: 'test',
  '1': 'user'
}
let obj2 = {
  [obj]: 2
}
console.info(obj, 'obj') // {1: 'user'} 'obj'
console.info(obj2, obj2.obj, 'obj2') // {[object Object]: 2} undefined 'obj2'


let map = new Map()
map.set('name', 'zs')
map.set('fn', function(){})
map.set('1', 9)
map.set(1, 9)
map.set({}, 9)
map.set({}, 10)
console.info(map, map.get(1), 'map') // Map(6) {'name' => 'zs', 'fn' => ƒ, '1' => 9, 1 => 9, {…} => 9, …} 9 'map'

let a = {a: 1}
let b = {}
let map2 = new Map([[1, 'test']])
map2.set(a, b)
b.b = 2
console.info(map2, map2.get(a), 'map2') // Map(2) {1 => 'test', {…} => {…}} {b: 2} 'map2'