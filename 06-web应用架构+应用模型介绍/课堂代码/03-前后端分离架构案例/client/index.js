const express = require("express");
const path = require("path");

let app = express();

app.get("/list", (req, resp)=>{
    resp.sendFile(path.resolve(__dirname, "./list.html"))
})

app.listen(3000, ()=>{
    console.log("前端部署服务器启动成功: localhost:3000/")
})