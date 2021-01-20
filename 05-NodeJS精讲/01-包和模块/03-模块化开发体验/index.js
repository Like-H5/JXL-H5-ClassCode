

// fs
const fs = require("fs");
// console.log(fs)

// 1. 读取文件内容数据
let data = fs.readFileSync("./data.txt").toString()
data = data.split("\r\n");


// 2. 判定结果
let result = data.map(age=> +age >= 18 ? "成年": "未成年");
console.log(result);

// 3. 把结果写入到一个新的文件
fs.writeFileSync("./result.txt", result.join("\r\n"))