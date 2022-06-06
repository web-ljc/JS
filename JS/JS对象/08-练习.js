(function() {
  function Fn() {
    this.x = 100
    this.y = 200
    this.getX = function() {
      console.log(this.x)
    }
  }
  Fn.prototype.getX = function() {
    console.log(this.x);
  }
  Fn.prototype.getY = function() {
    console.log(this.y);
  }
  let f1 = new Fn
  let f2 = new Fn
  
  console.log(f1.getX === f2.getX) // false
  console.log(f1.getY === f2.getY); // true
  console.log(f1.__proto__.getY === Fn.prototype.getY); // true
  console.log(f1.__proto__.getX === f2.getX); // false
  console.log(f1.getX === Fn.prototype.getX); // false
  console.log(f1.constructor); // Fn
  console.log(Fn.prototype.__proto__.constructor); // Object(){} // 做错了
  f1.getX() // 100
  f1.__proto__.getX() // undefined
  f2.getY() // 200
  Fn.prototype.getY() // undefined
})()

;(function() {
  function fun() {
    this.a = 0
    this.b = function() {
      console.log(this.a)
    }
  }
  fun.prototype = {
    b: function() {
      this.a = 20
      console.log(this.a)
    },
    c: function() {
      this.a = 30
      console.log(this.a)
    }
  }
  let myFn = new fun()
  myFn.b() // 0
  myFn.c() // 30
})()

/* 
  重构类的原型：让某个类的原型指向新的堆内存地址（重新定向）
    - 问题：重定向后的空间不一定有constructor属性，这样导致类和原型的机制不完整，需要手动再给新的原型空间设置constructor属性
    - 问题：在重新指向之前，我们需要确保原有原型的堆内存中没有设置属性和方法，因为重定向后原有的属性和方法就没啥用了
    - 内置类的原型，由于担心更改后会让内置方法都消失，禁止给内置类原型的空间重定向

  实例本身并没有 constructor 属性，是根据原型链向上找的，如果类的prototype属性重定向 需要注意constructor属性指向
  实例本身有 __proto__ ，没有prototype， 类有prototype
*/

;(function() {
  function C1(name) {
    if(name) {
      this.name = name
    }
  }
  function C2(name) {
    this.name = name
  }
  function C3(name) {
    this.name = name || 'join'
  }
  C1.prototype.name = 'Tom'
  C2.prototype.name = 'Tom'
  C3.prototype.name = 'Tom'
  console.log((new C1().name) + (new C2().name) + (new C3().name)) // 'Tomundefinedjoin'
  // + 遇到字符串直接字符串拼接 'Tom'+undefined+'join', 没有遇到字符串进行Number转换
  // - * / 都会进行一个Number转换
})()

;(function() {
  function Fn(num) {
    this.x = this.y = num
  }
  Fn.prototype = {
    // constructor: Fn,
    x: 20,
    sum: function() {
      console.log(this.x + this.y)
    }
  }
  let f = new Fn(10)
  console.log(f.sum === Fn.prototype.sum) // true
  f.sum() // 20
  Fn.prototype.sum() // NaN
  console.log(f.constructor); // Object  // Fn的prototype指向新对象，没有constructor属性，顺着原型链向上找，找到Object.prototype的constructor指向Object
})()

;(function() {
  function Fn() {
    let a = 1
    this.a = a
  }
  Fn.prototype.say = function() {
    this.a = 2
  }
  Fn.prototype = new Fn
  let f1 = new Fn
  Fn.prototype.b = function() {
    this.a = 3
  }
  console.log(f1.a) // 1
  console.log(f1.prototype) // undefined
  console.log(f1.__proto__) // Fn实例 {a: 1, b:fn}
  console.log(f1.b) // function(){}
  console.log(f1.hasOwnProperty('b')) // false
  console.log('b' in f1); // true
  console.log(f1.constructor === Fn); // true  顺着原型链去找constructor属性
})()

;(function() {
  function Fn() {
    this.x = 100
    this.y = 200
  }
  Fn.prototype.getX = function() {
    console.log(this.x)
  }
  let f1 = new Fn // __proto__ 指向初始原型 constructor 指向类

  Fn.prototype = {
    getY: function() {
      console.log(this.y)
    }
  }
  let f2 = new Fn // __proto__ 指向新对象 constructor 指向Object
  
  console.log(f1.constructor) // Fn()
  console.log(f2.constructor) // Object()
})()

;(function() {
  Number.prototype.plus = function(n) {
    return this + n
  }
  Number.prototype.minus = function(m) {
    return this - m
  }
  let n = 10
  let m = n.plus(10).minus(5)
  console.log(m)
})()


