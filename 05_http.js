const http = require("http");
http
  .createServer(function (request, response) {
    // request客户端向服务端发送的数据
    // response服务的响应的数据
    const { url, method, headers } = request;
    response.write("1111111111");
    response.end();
  })
  .listen(8081, function () {
    console.log("成功了");
  });
