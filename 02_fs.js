const fs = require("fs");

function show1() {
  // 同步读取文件
  const data1 = fs.readFileSync("./package.json");
  // buffer格式
  console.log(data1);
  // 字符串格式
  console.log(`同步读取文件${data1.toString()}`);

  // 异步读取
  fs.readFile("./package.json", function (err, data) {
    console.log(`异步读取文件${data.toString()}`);
  });
}
// show1();

// 颗粒化处理
function show2() {
  function promisify(fn) {
    return function () {
      let args = Array.from(arguments);
      return new Promise((resolve, rejects) => {
        args.push(function (err, data) {
          if (err) {
            rejects(err);
          } else {
            resolve(data);
          }
        });
        fn.apply(null, args);
      });
    };
  }

  let readfile = promisify(fs.readFile);
  readfile("./package.json").then(res => {
    console.log(res.toString());
  });
}
// show2();

// node v>8  自带util工具包  有promiseify
function show3() {
  const { promisify } = require("util");
  let readfile = promisify(fs.readFile);
  readfile("./package.json").then(res => {
    console.log(res.toString());
  });
}
// show3();

// 可以实现删除文件创建文件拷贝文件等功能
function show4() {
  // 创建文件夹
  // fs.mkdir("test", function (err, data) {
  //   console.log(data);
  // });
  // 删除文件夹
  // fs.rmdir("test", function (err, data) {
  //   console.log(data);
  // });
}
// show4();
