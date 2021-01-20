
// 引入的是一个文件夹(包)
// 找到包的描述文件, 主入口 main
const {Square} = require("./shape")

let s = new Square(6)
console.log(s.mj());
console.log(s.zc());