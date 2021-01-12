const connect = require("connect");
// const url = require("url");
const cors = require("cors");
let app = connect();
app
  // 自己处理跨域方式
  // .use(proxy)

  // 第三方插件cors处理跨域
  .use(cors())
  .use(getData);

function proxy(req, res, next) {
  // 设置跨有   *代表全部
  res.setHeader("Access-Control-Allow-Origin", "*");
  // 设置请求头字段
  res.setHeader("Access-Control-Allow-Headers", "X-Token,Content-Type");
  next();
}

function getData(req, res) {
  res.end("哈哈哈哈");
}

app.listen(3000);
