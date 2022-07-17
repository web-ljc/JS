/* 
  Reflect
    1. 概述
      - Reflect对象是ES6为了操作对象而提供的新API，Reflect对象的设计目的：
        1. 将Object对象的一些明显属于语言内部的方法（Object.defineProperty），放到Reflect对象上，未来的新方法将只部署在Reflect对象上
        2. 修改某些Object方法的返回结果，让其变得更合理
        3. 让Object操作都变成函数行为。某些Object操作是命令式，比如in delete
        4. Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应方法。让Proxy对象方便的调用对应Reflect方法

    2. 静态方法
      - Reflect.apply(target, thisArg, args)
        - 用于绑定this对象后执行给定函数

      - Reflect.construct(target, args)
        - 等同于 new target(...args) ，提供了一种不使用new来调用构造函数的方法

      - Reflect.get(target, name, receiver)
        - 获取目标对象的属性或方法  
        - taregt   目标对象
        - name     目标属性或方法
        - receiver 读取函数时this指向

      - Reflect.set(target, name, value, receiver)
        - 设置目标对象属性及值
        - target 目标对象
        - name   目标属性或方法
        - value  属性值
        - receiver 读取函数时this指向

      - Reflect.defineProperty(target, propertyKey, attributes)
        - 等同于Object.defineProperty,用来为对象定义属性

      - Reflect.deleteProperty(obj, name)
        - 目标对象删除属性 等同于 delete obj[name], 删除成功或属性不存在返回true
        - obj  目标对象
        - name 目标属性
      
      - Reflect.has(obj, name)
        - 判断目标对象中是否包含目标属性
        - obj  目标对象
        - name 目标属性

      - Reflect.ownKeys()
        - 返回对象的所有属性，等同于 Object.getOwnPropertyNames + Object.getOwnPropertySymbols

      - Reflect.isExtensible(target)
        - 返回一个布尔值表示当前对象是否可扩展

      - Reflect.preventExtensions(target)
        - 让一个对象变为不可扩展，返回一个布尔值

      - Reflect.getOwnPropertyDescriptor(target, propertyKey)
        - 得到指定属性的描述对象
      
      - Reflect.getPrototypeOf(obj)
        - 读取对象的__proto__属性，对应Object.getPrototypeOf(obj)
        - 如果参数不是对象会直接报错

      - Reflect.setPrototypeOf(obj, newProto)
        - 设置目标对象的原型(prototype)，返回一个布尔值表示是否成功
        - 如果obj不是对象直接报错，是null和undefined也报错。


    3. 实例
*/


// Reflect.defineProperty(MyObj, 'name', {})

// Reflect.getPrototypeOf(obj)
// Reflect.setPtototypeOf(obj, Array.prototype)


// function Greeting(name) {
//   this.name = name
// }
// // const ins = new Greeting('li')
// const ins = Reflect.construct(Greeting, ['li'])


// const obj = {
//   name: 1
// }
// 'name' in obj // true
// Reflect.has(obj, 'name') // true

// var obj = {
//   foo: 4,
//   set bar(value) {
//     return this.foo + value
//   }
// }
// var myReceiver = {
//   foo: 0
// }
// Reflect.set(obj, 'bar', 1, myReceiver)
// obj.foo // 4
// myReceiver.foo // 1




// Reflect.get()
// let myObj = {
//   name: 'obj',
//   get baz() {
//     return this.name + ' hi'
//   }
// }
// let receiverObj = {
//   name: 'receiver'
// }
// Reflect.get(myObj, 'baz') // 'obj hi'
// Reflect.get(myObj, 'baz', receiverObj) // 'receiver hi'



// var loggedObj = new Proxy(obj, {
//   get(target, name) {
//     console.log('get', target, name);
//     return Reflect.get(target, name)
//   },
//   deleteProperty(target, name) {
//     console.log('delete' + name);
//     return Reflect.deleteProperty(target, name)
//   },
//   has(target, name) {
//     console.log('has', name);
//     return Reflect.has(target, name)
//   }
// })



// old
// 'name' in obj
// delete obj['name']

// new
// Reflect.has(obj, 'name')
// Reflect.deleteProperty(obj, 'name')


// old
// try {
//   Object.defineProperty(t, p, d)
  // success
// } catch(e) {
  // failure
// }

// new
// if(Reflect.defineProperty(t, p, d)) {
//   // success
// } else {
//   // failure
// }