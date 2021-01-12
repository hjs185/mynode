const http = require("http");
const fs = require("fs");

const key = fs.readFileSync("./privkey.pem");
const cert = fs.readFileSync("./cacert.pem");

const options = {
  key,
  cert
};

http
  .createServer(options, function (req, res) {
    res.writeHead(200);
    res.write("11123");
    res.end();
  })
  .listen(9090);

// 没成功
