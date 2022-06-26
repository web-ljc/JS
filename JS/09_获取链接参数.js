
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

// 基于正则封装
const queryRULParams = (url) => {
  let result = {},
    reg1 = /([^?=&#]+)=([^?=&#]+)/g,
    reg2 = /#([^?=&#]+)/g
  url.replace(reg1, (n, x, y) => result[x] = y)
  url.replace(reg2, (n, x) => result['HASH'] = x)
  return result
}

// 随机获取4位数
const queryCode = () => {
  let area = 'abcdefg',
    result = '',
    i = 0
  for(; i < 4; i++) {
    let ran = Math.round(Math.random() * 61)
    result += area.charAt(ran)
  }
  return result
}