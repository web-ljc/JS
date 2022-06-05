/* 
  工厂设计模式 Factory Pattern
    - 函数中返回对象
    - 低耦合、高内聚
*/

function createPerson(name) {
  let person = {}
  person.name = name
  return person
}

let girl = createPerson('test')