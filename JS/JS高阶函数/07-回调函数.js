/* 
  回调函数：把一个函数作为值，传递给另外一个函数，在另一个函数执行过程中，把这个函数执行
*/

function func(x, callback) {
  callback()
}
func(10, function() {})

let arr = [1, 3, 4]
arr.forEach((item, index) => {
  // 传递给forEach的箭头函数是回调函数
  // forEach内部：依次遍历数组中的每一项，每遍历一项，就会把传递的回调函数执行一次，而且在执行的时候，会把当前遍历的这一项以及这一项的索引，传递给回调函数
  console.log(item, index)
})

;(function() {
  Array.prototype.myForEach = function(callback) {
    // this - arr
    for(let i=0; i<this.length; i++) {
      callback(this[i], i)
    }
  }

  arr.myForEach((item, index) => {
    console.log(item, index);
  })
})()