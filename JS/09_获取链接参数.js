
const myParams = () => {
  // 1.通过window.loaction.search 属性可以直接获取 ? 后边的内容
  let search = window.loaction.search  // ?name=test&age=5
  // 2.分割成数组
  let arr = search.slice(1).split('&') // ['name=test', 'age=5']
  // 3.遍历处理
  for (let i = 0; i < arr.length; i++) {
      let str = arr[i],
          [key, val] = str.split('=')
      // val 添加 decodeURIComponent 进行解码，防止汉字乱码
      arr[i] = { [key] : decodeURIComponent(val) }
  }
  console.info(arr) // [{name: 'test', age: '5'}]
  return arr
}

/*
  编码转译
  - encodeURIComponent 编码
  - decodeURIComponent 解码，解析汉字
*/