const qr = require("qr-image");
const fs = require("fs");

// let result = qr.imageSync("撩课-sz", "H");
let result = qr.imageSync("http://www.baidu.com", "H");

fs.writeFileSync("./test.png", result)