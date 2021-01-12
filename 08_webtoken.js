const jwt = require("jsonwebtoken");
// 参数1:'内容'
// 参数2：秘钥
// 参数3：配置

const miyao = "abcdef";

const data = {
  name: "wanghao"
};

// const token = jwt.sign(data, miyao, { expiresIn: 1000 });
// 生成token方法
jwt.sign(data, miyao, (err, data) => {
  console.log(data);
});

let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoid2FuZ2hhbyIsImlhdCI6MTYxMDM1NDI3NCwiZXhwIjoxNjEwMzU1Mjc0fQ.9z2t8ngrb8p0MsGv8fDy2_RUJ1DaVD0KU4t9xfJPyTg`;
// 解析token方法
jwt.verify(token, miyao, (err, data) => {
  console.log(data);
});
