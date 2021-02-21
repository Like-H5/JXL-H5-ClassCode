const express = require("express");
const path = require("path");

let app = express();

app.use(express.static("public"))

app.use((req, resp) => {

    resp.sendFile(path.resolve(__dirname, "./views/404.html"))
})

app.listen(3000, () => {
    console.log("前端服务器启动成功")
})