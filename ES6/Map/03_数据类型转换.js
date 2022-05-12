let map = new Map([[1, 4], ['name', 'zs'], ['age', 34]])

console.info([...map]) //  [[1, 4], ['name', 'zs'], ['age', 34]]
console.log([...map.entries()])
console.info([...map.keys()]) // [1, 'name', 'age']
console.log([...map.values()]) //  [4, 'zs', 34]

// 查找出对应内容
let newArr = [...map].filter(([key, value]) => value === 'zs')
let edu = new Map(newArr)
console.info(edu, ...edu.values())

