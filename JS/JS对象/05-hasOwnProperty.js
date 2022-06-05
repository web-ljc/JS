/* 
  hasOwnProperty
  - 检测某一个属性名是否为当前对象的私有属性
  - 'in' 检测这个属性是否属于某个对象（不管是私有属性还是公有属性，只要是它的属性，结果就为true）
  - 自己堆中有就是私有属性，需要基于__proto__查找的就是公有属性（IE浏览器10以下不允许使用__proto__）
*/

let arr = [1, 3]
console.log('0' in arr); // true
console.log('push' in arr); // true

console.log(arr.hasOwnProperty('0')); // true
console.log(arr.hasOwnProperty('push')); // false
console.log(arr.__proto__.hasOwnProperty('push')); // true

// 检测公有属性
Object.prototype.hasPubProperty = function(key) {
  // 是当前对象的属性，且不是私有属性
  return key in this && !this.hasOwnProperty(key)
}

console.log(arr.hasPubProperty('push'), 9)