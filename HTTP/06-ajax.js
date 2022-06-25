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
  
  ### HTTP请求方式
    - GET系列请求
      + GET
      + DELETE  从服务器删除数据
      + HEAD    获取响应头内容，响应主体内容不要
      + OPTIONS 试探性请求，发个请求给服务器，看服务器能否接收返回
    - POST请求
      + POST
      + PUT  把传递信息存储到服务器上（一般用于大文件和大型数据传输）
      
    GET系列请求一般用于从服务器获取信息，给的少拿的多，POST系列请求一般用于从服务器推送信息，给的多拿的少
    
    - 客户端怎么把信息传给服务器？
      + 问号传参   xhr.open('GET', '/date?xxx=111')
      + 设置请求头  xhr.setRequestHeader([key], [val])
      + 设置请求体  xhr.send(请求主体信息)
    - 服务端怎么把信息返回给客户端？
      + 通过响应头
      + 通过响应主体(大部分基于响应主体返回)
  
  ### AJAX状态码
    - xhr.readyState 获取状态码
      - 0 UNSEND 未发送（创建一个XHR，初始状态为0）
      - 1 OPENED 已经打开（执行了xhr.open）
      - 2 HEADERS_RECEIVED 响应头信息已经返回给客户端（发送请求后，服务器会依次返回响应头和响应主体的信息）
      - 3 LOADING 等待服务器返回响应的内容
      - 4 DONE 响应主体信息已经返回给客户端
  
  ### 超时
    - xhr.timeout = 1000 // 设置超时时间
    - xhr.ontimeout = function() {
      xhr.abort() // 终止请求
    }
  
  所有方法
    1. xhr.abort()
    2. xhr.getAllResponseHeaders()
    3. xhr.getResponseHeader([key])
    4. xhr.open()
    5. xhr.overrideMimeType() // 重写mime类型
    6. xhr.send()
    7. xhr.setRequestHeader()
*/



// 1. 创建ajax实例
let xhr = new XMLHttpRequest // IE用的 new ActiveXObject()

xhr.timeout = 10 // 设置AJAX超时时间
xhr.ontimeout = function() {
  console.log('请求超时');
  xhr.abort() // 手动中断AJAX请求
}

// xhr.withCredentials = true // 在跨域请求中是否允许携带证书（携带COOKIE）

// 2. 打开url（配置发送请求的信息）
  // METHOD: HTTP请求方式
  // URL:    请求地址
  // ASYNC:  设置同步或异步（默认是TRUE异步）
  // USER-NAME: 传递给服务器的用户名
  // USER-PASS: 传递给服务器的密码
xhr.open('GET', './json/xxx.json', true)

xhr.setRequestHeader('name', 'test') // 设置请求头信息，不能是中文和乱七八糟字符，需要编译 encodeURIComponent

// 3. 监听AJAX状态，在状态为X的时候，获取服务器响应的内容
// AJAX状态码：0 1 2 3 4

// xhr.status
// xhr.responseText
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && /^(2|3)\d{2}$/.test(xhr.status)) {
    // 获取响应主体信息
    let result = xhr.responseText // 一般用responseText, 因为服务器返回的信息一般都是JSON格式字符串
    // xhr.response
    // xhr.responseType // 响应回来type
    // xhr.responseXML // 返回的是XML格式用 responseXML

    // 获取的服务器时间是标准的日期格式对象
    // new Date() 能把格林尼治时间转为北京时间
    let serverTime = xhr.getResponseHeader('Date')
    new Date(serverTime)

  }
}

// 4. 发送请求
// send中放的是请求主体的内容
xhr.send(null)

// AJAX任务（发送一个请求给服务器，从服务器获取对应内容）从SEND后开始，到xhr.readyState===4的时候任务结束

