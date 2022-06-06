
function Foo() {
  getName = function() {
    console.log(1)
  }
  return this
}
Foo.getName = function() {
  console.log(2)
}
Foo.prototype.getName = function() {
  console.log(3);
}

var getName = function() {
  console.log(4);
}
function getName() {
  console.log(5);
}


Foo.getName() // 2 Foo对象方法
getName() // 4 window.getName
Foo().getName() // 1 window.getName
getName() // 1 // window.getName

new Foo.getName() // 2   // 执行优先级问题 1. Foo.getName() 2. new Fn
new Foo().getName() // 3  // 1. 先执行new Foo() 创造实例 2. 执行实例下方法
new new Foo().getName() // 3 
// 1. 先 new Foo() 创建实例f 
// 2. 因为 new f 级别低于 f.getName() 先执行实例下方法 f.getName 
// 3. 再执行 new

/* 
  运算符优先级
    20 ()
    19 成员访问 / new fn() / 函数调用  // 执行从左到右
    18 new fn
*/