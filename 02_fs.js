const fs = require("fs");
const path = require("path");

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

// 往文件写入数据（覆盖）
function show5() {
  fs.writeFile(
    path.join(__dirname, "./temp.txt"),
    JSON.stringify({ id: 10 }),
    err => {
      if (err) {
        // 读文件是不存在报错
        // 意外错误
        // 文件权限问题
        // 文件夹找不到(不会自动创建文件夹)
        console.log(err);
      } else {
        console.log("success");
      }
    }
  );
}
// show5();

// 往文件写入数据（追加）
function show6() {
  fs.appendFile(
    path.join(__dirname, "./temp.txt"),
    JSON.stringify({ id: 10 }),
    err => {
      if (err) {
        // 读文件是不存在报错
        // 意外错误
        // 文件权限问题
        // 文件夹找不到(不会自动创建文件夹)
        console.log(err);
      } else {
        console.log("success");
      }
    }
  );
}
show6();
