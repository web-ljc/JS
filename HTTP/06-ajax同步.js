/* 
  ### AJAX的基础操作
    // 1. 创建实例
    let xhr = new XMLHttpRequest()
    // 2. 打开URL
    xhr.open('GET', './json/xxx.json', true)
    // 3. 监听AJAX状态
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4 && /^(2|3)\d{2}$/.test(xhr.status)) {
        console.log(xhr.responseText);
      }
    }
    // 4.发送请求
    xhr.send(null)
  
*/

// 同步
let xhr = new XMLHttpRequest
xhr.open('GET', 'json/json.json', false)
xhr.onreadystatechange = function() { // 只有响应主体返回后，才会继续执行
  console.log(xhr.readyState); // 4 使用AJAX同步编程，不能在状态为2的时候获取响应头部信息，只能在状态码为4的时候获取头部和主体信息
}
xhr.send(null)

;(function() {
  let xhr = new XMLHttpRequest
  xhr.open('GET', 'json/json.json', false)
  xhr.send(null) // 执行完后，只有状态码为4才会继续处理下面代码
  // 状态码为4的时候绑定的，状态不会再变，方法不会执行
  xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
  }
})()