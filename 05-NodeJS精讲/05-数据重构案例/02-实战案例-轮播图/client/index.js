const express = require("express");

let app = express();

app.use(express.static("public"))

app.listen(3000, () => {
    console.log("前端服务器启动成功")
})