const express = require("express");
const path = require("path");
const fs = require("fs");

// 1. 创建一个应用服务器对象
let app = express();

app.get("/", (req, resp)=>{

    // resp.sendStatus(500)
    // resp.setHeader("Content-Type", "text/plain")
    // resp.send("abcdefg<h1>xxx</h1>")

    // resp.send([
    //     {name: "sz"},
    //     {name: "jh"}
    // ])

    // resp.json([
    //     {name: "sz"},
    //     {name: "jh"}
    // ])
    // let num = Math.round(Math.random() * 4 + 1)
    // let a_path = path.resolve(__dirname, "images", `${num}.jpeg`)
    // resp.sendFile(a_path)

    resp.setHeader("Content-Type", "image/jpeg")
    let data = fs.readFileSync("./images/1.jpeg");
    resp.send(data)

})



// 3. 开启服务器, 监听某一个特定的端口号
app.listen(3000, ()=>{
    console.log("服务器启动成功: localhost:3000");
})