/* 
  基于内置类的原型扩展方法
    - 在内置类原型上的方法，类所对应的实例可以直接调去使用，例如 实例.方法()
    - 如果把自己的方法放到原型，当前类的实例可以直接调用，很方便
      + 注意
      + 自己扩展的方法不能影响原有内置的方法，设置方法最好加前缀：my
      + 扩展方法中的this一般都是当前实例
*/

(function() {
  /* 
    myUnique: 实现数组去重
    @params
    @return [array]去重后数组
  */
  function myUnique() {
    let obj = {}
    for(let i=0; i<this.length; i++) {
      let item = this[i]
      if(typeof obj[item] !== 'undefined') {
        this[i] = this[this.length-1]
        this.length--
        i--
        continue
      }
      obj[item] = item
    }
    obj = null
    return this
  }
  Array.prototype.myUnique = myUnique
})()

let arr = [1, 3, 1, 2, 3, 3, 4, 2]
arr = arr.myUnique().sort((a, b) => a - b).reverse().slice(2) // 链式写法(保证返回值依然是当前类的实例，一般都return this)
console.log(arr);


// 每一个字符串都是String的实例，substring方法在String.prototype上
'2222'.substring()
