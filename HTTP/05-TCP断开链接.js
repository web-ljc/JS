/* 
  四次挥手
    1. 客户端  发送FIN 给 服务端，请求报文发送完，告诉服务端关闭
    2. 服务端  发送ACK 给 客户端，接受完请求报文准备关闭
    3. 服务端  发送FIN 给 客户端，响应报文发送完毕，准备关闭
    4. 客户端  发送ACK 给 服务端，响应报文接收完毕，准备关闭

  connection:keep-alive
*/