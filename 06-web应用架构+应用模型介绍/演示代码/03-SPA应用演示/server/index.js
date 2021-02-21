const express = require("express");
const path = require("path");

// 1. 创建一个应用服务器对象
let app = express();

app.use(express.static("public"))
app.get("/", (req, resp)=>{
    resp.sendFile(path.resolve(__dirname, "public/index.html"))
})
// 3. 开启服务器, 监听某一个特定的端口号
app.listen(3000, ()=>{
    console.log("服务器启动成功: localhost:3000");
})