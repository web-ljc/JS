
function deepClone(obj){
  if (typeof obj !== 'object') return obj
  let newObj = new obj.constructor
  for (let key in obj) {
    if(!Object.is(obj[key], obj)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}

const objs = { a: 123, b: [1, 2, 3]};
objs.target = objs;
const result2 = deepClone(objs);
console.log(result2, 9);