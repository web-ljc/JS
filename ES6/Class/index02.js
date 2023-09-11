// ES6中类的创建
// 1. #height私有属性，不会被子类继承
// 2. age = 23 给实例添加添加属性，会被继承
// 2. getName = () => {} 给实例添加添加方法，会被继承
// 3. Parent.prototype.x = 2  给原型添加属性
// 3. getAge() {} 给原型添加方法，会共享
// 4. static sex="man" 给构造函数添加属性，会被继承
// 4. static getSex(){} 给构造函数添加属性，会被继承
class Parent{
  // 等价于构造函数体
  constructor(names) {
    // console.log(1);
    this.name = names
  }
  // 设置私有属性
  #height = 100
  // 给实例设置属性
  age = 23
  queryName = () => {
    console.log(this.name, this.#height);
  }

  // 直接写的方法就是在原型上的 Fn.prototype.getX()
  // 属性需要通过原型设置 Parent.prototype.x = 2
  querAge() {
    console.log('Parent age: ' + this.age)
  }

  // 设置static，把当前Fn当作普通对象设置的键值对，只能通过类去调用Fn.queryX()
  static querySex() {
    console.log('Paernt Static: ', this.z)
  }
  static sex = 'man'
}

// 1. 子类继承父类 extends
// 1. 子类继承父类，要在constructor中自定义属性，必须先执行super()，否则报错，因为父类有同名的实例属性和方法需先按父级处理
// 1. ES5是先创建子类实例，再继承父类属性和方法，ES6是先继承后实例
// 2. super当函数调用，代表父类的构造函数，相当于A.prototype.constructor.call(this)
// 2. super当对象时，普通指向父类的原型对象【调用父类方法，更改父类属性时this指向子类，通过call改变了this指向】，在静态方法中指向父类【方法内部的this指向子类】
// 3. 使用super必须显式指定作为函数还是对象

// 1. 子类的__proto__属性，标识构造函数的继承，指向父类
// 2. 子类pototype属性的__proto__属性，表示方法的继承，指向父类的prototype属性
// 实例的继承 子类实例的原型的原型是父类的原型 p2.__proto__.__proto__ === p1.__proto__

class Child extends Parent{
    constructor(names, school) {
        super(names) // super当函数调用，代表父类的构造函数，相当于A.protorype.constructor.call(this)
        // console.log(2); 查看执行顺序
        this.school = school
    }
    school = 'yg'
    getName = () => {
        super.querAge() // 父类原型对象
        console.log(this.name, this.age);
    }
    static getParentSex() {
        super.querySex()
    }
}

let newFn = new Parent('老大')
let newChild = new Child('老二', 'yg')

// Parent.sex // 100
// Parent.querySex() // 100，函数中的this指向类

// console.log(newFn);
// newFn.queryName() // 调用实例上的方法

// Child.sex // 100 子类继承父类的静态方法，采用的是浅拷贝，对象会复用
// Child.getParentSex()

// console.log(newChild);
// newChild.getName()

console.log(Child.__proto__ === Parent);
console.log(Child.prototype.__proto__ === Parent.prototype);
