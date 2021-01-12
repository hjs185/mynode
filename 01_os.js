// os为node内置api
const os = require("os");
// cpu-stat为第三方依赖 packjson引入
const cpuStat = require("cpu-stat");

// 查看内存占用率
function showMem() {
  const mem = (os.freemem() / os.totalmem()) * 100;
  console.log(`内存占用率-${mem}`);
}

// 查看cpu占用率(cpu-stat)
function showCpu() {
  // node中回调函数第一个基本上参数基本都是error
  cpuStat.usagePercent((err, percent) => {
    console.log(`Cpu占用率-${percent}`);
  });
}

showMem();
showCpu();
