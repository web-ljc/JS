let person = {
  name: 'ls',
  age: 20
}
console.log(person.age) // 20
console.log(person['name']) // ls
console.log(person.sex) // undefined


/* 
  ## object对象数据类型-普通对象
    - {[key]: [value]} 任何一个对象都是由0到多组简直对(属性: 属性值)组成的
    - 获取属性名的值
      1. 对象.属性名
      2. 对象[属性名]
      3. 如果属性名不存在，默认的属性值是undefined
      4. 如果属性名是数字，则不能使用点的方式获取属性值，需要[]获取
    - 增加
      + person.new = 2
    - 删除
      + delete person.new
    - 更改
      + person.name = 'zs'
*/