var color = 'blue'
let o = {
  color: 'red'
}
function sayColor() {
  console.info(this.color)
}

sayColor() // blue
sayColor.apply(o) // red 使用apply方法，扩充函数赖以运行的作用域，可直接调用运行
sayColor.call(o) // red 使用call方法，扩充函数赖以运行的作用域，可以直接调用运行
let say = sayColor.bind(o) // 使用bind方法，创建一个函数的实例，this值会绑定传给bind()函数的值
say() // red
sayColor() // blue