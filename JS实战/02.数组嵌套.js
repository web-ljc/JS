// 一：一维数组转为多维数组
// 数据源：
const data = [
  { "id": 0, "name": "柯莱特大学", "parent_id": -1 }, 
  { "id": 1, "name": "教育部", "parent_id": 0 }, 
  { "id": 2, "name": "技术部", "parent_id": 0 }, 
  { "id": 3, "name": "销售部", "parent_id": 0 }, 
  { "id": 4, "name": "交付部", "parent_id": 0 }, 
  { "id": 5, "name": "金山云交付部", "parent_id": 4 },
  { "id": 6, "name": "解决方案部门", "parent_id": 4 }, 
  { "id": 7, "name": "后端组", "parent_id": 6 }, 
  { "id": 8, "name": "前端组", "parent_id": 6 }, 
  { "id": 9, "name": "测试组2", "parent_id": 6 }]
// 目标：
const data2 = [
  {"id":0,"name":"柯莱特大学","parent_id":-1,
    "children":[
      {"id":1,"name":"教育部","parent_id":0},
      {"id":2,"name":"技术部","parent_id":0},
      {"id":3,"name":"销售部","parent_id":0},
      {"id":4,"name":"交付部","parent_id":0, 
      "children":[
        {"id":5,"name":"金山云交付部","parent_id":4},
        {"id":6,"name":"解决方案部门","parent_id":4,
        "children":[
          {"id":7,"name":"后端组","parent_id":6},
          {"id":8,"name":"前端组","parent_id":6},
          {"id":9,"name":"测试组2","parent_id":6}]
        }]
    }]
  }]

// 解析：柯莱特大学相当于跟部门，它的下面会有子部门。它们之间的关联关系通过parent_id和 自身id 进行关联。
// 子部门的parent_id和它父级部门的id是相等的。


/* 
  思路
    1. 遍历数组，找到 -1 和 0，进行拼接到新数组
    2. 剩余内容，找到数组对应id进行拼接，因为对象是引用类型，所以会自动处理children
*/
function dealTreeData(data) {
  let newData = []
  for(let i = 0; i < data.length; i++) {
    // 根节点
    if(data[i].parent_id === -1) {
      newData.push(data[i])
      newData[0].children = []
    } else if (data[i].parent_id === 0) {
      newData[0].children.push(data[i])
    } else {
      data.forEach((item, index) => {
        if(item.id === data[i].parent_id) {
          if(!data[index].children) {
            data[index].children = []
          }
          data[index].children.push(data[i])
        }
      })
    }
  }
  return newData
}

let newData = dealTreeData(data)
console.info(newData, 9)