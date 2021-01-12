const fs = require("fs");
// const http = require("http");

// http
//   .createServer(function (req, res) {
const rs = fs.createReadStream("./data/vue.js");
let arr = [];
// 监听数据
rs.on("data", function (chunk) {
  arr.push(chunk);
  console.log(chunk, 111111111);
});
// 监听结束
rs.on("end", function () {
  console.log("成功了");
  // res.end(Buffer.concat(arr).toString());
});
// 监听错误
rs.on("error", function (err) {
  console.log(err);
});
// })
// .listen(9000);
