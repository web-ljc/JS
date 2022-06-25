
/* 

  #### 获取url
    - window.loaction.href
  
  #### 页面跳转
    - 当前页面跳转
      window.location.href = '' 
    - 跳转新窗口
      window.open()
  
  请求的地址中如果出现非有效UNICODE编码内容，现代版浏览器会默认进行编码
    1. 基于encodeURI编码，可以基于decodeURI解码，一般用encodeURI编码整个URL，整个URL中的特殊字符都会自动编译
    2. encodeURIComponent / decodeURIComponet，相对于encodeURI来说不用给整个URL编码，而是给URL部分信息进行编码
    客户端和服务端进行信息传输的时候，如果需要把请求的地址和信息编码，基于以上2种方式处理，服务器端也存在这些方法，可以统一编码

    3. 客户端还存在一种针对中文的编码方式 escape / unsecape，这种方式只应用客户端页面之间自己处理，列表跳详情
*/

// 获取url地址
let url = window.location.href
console.log(url);

let newUrl = '//www.jd.com'

// 跳转页面
// window.location.href = newUrl // 当前页面
// window.open(newUrl) // 打开新窗口

