// 创建一个指定大小的buffer
function show1() {
  // 创建一个只有2个字节的buffer数据
  const buf1 = Buffer.alloc(2, "abcd");
  // 因为规定了两个字节，所有后面的不显示
  console.log(buf1);
  console.log(buf1.length);
  // toJSON进行Unicode编码展示
  console.log(buf1.toJSON());
}
// show1();

// 根据内容创建buffer，不指定缓存大小创建buffer
function show2() {
  const buf2 = Buffer.from("hellow buffer");
  // 写入到buffer
  buf2.write("buffer really good");
  // 从缓存区读取buffer数据
  console.log(buf2.toString());
}
// show2();
