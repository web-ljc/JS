/* 
  ### 建立TCP连接（三次握手）

    Client                                            Server
  
    SYN_SEND      ---> SYN=1 seq=J         --->       SYN_RECV

    ESTABLISHED   <-- SYN=1 ACK=1 ack=J+1 seq=K  <--  SYN_RECV

    ESTABLISHED   --> ACK=1 ACK=K+1         -->       ESTABLISHED


    1. 客户端发送SYN包（seq=J）到服务端，并进入SYN_SEND状态，等待服务器确认
    2. 服务端接收SYN包，确认客户端的SYN（ack=J+1），同时发送一个SYN包（seq=K），服务器进入SYN_RECV
    3. 客户端接收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=K+1)，此包发送完毕，客户端和服务器进入ESTABLISHED状态，完成三次握手


  ### HTTP报文
    - 请求报文：所有经过传输协议，客户端传递给服务器的内容
      + 起始行
      + 请求头
      + 请求主体

    - 响应报文：所有经过传输协议，服务器返回给客户端的内容
      + HTTP状态码
      + 响应头
      + 响应主体

    - HTTP报文： 请求报文 + 响应报文
  
  ### 响应状态码
    - 2XX
      - 200 OK          成功
      - 201 CREATED     一般用于告诉服务器创建一个新文件，最后服务器创建成功后返回状态码
      - 204 No Content  对于某些请求（PUT/DELETE），服务器不想处理，可以返回空内容，用204状态码告知

    - 3xx
      - 301 Moved Permanently 永久重定向（永久转移）
      - 302 Moved Temporarily 临时重定向，现在主要用307处理
      - 307 临时重定向， 主要用于：服务器的负载均衡等
      - 304 Not Modified 协商缓存

    - 4xx
      - 400 Bad Request  传递给服务器的参数错误
      - 401 Unauthorized 无权限访问
      - 404 Not Found    请求地址错误
    
    - 500 Internal Server Error 未知服务器错误
    - 503 Service Unavailable   服务器超负荷
*/