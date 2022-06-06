
function fun(n, o) {
  console.log(o)
  return {
    fun: function(m) {
      return fun(m, n)
    }
  }
}

var c = fun(0).fun(1) // undefined  0    // 0 undeifend // 1 0
c.fun(2) // 1  // 2 1   这里c没有改变
c.fun(3) // 1 x

