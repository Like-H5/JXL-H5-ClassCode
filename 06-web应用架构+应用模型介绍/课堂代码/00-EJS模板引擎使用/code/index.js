// const ejs = require("ejs");
const express = require("express");
// const fs = require("fs");
let app = express()

app.set("view engine", "ejs")

app.get("/home", (req, resp)=>{

    let data = {
        name: "Sz",
        age: 18,
        address: "上海",
        is_teacher: 1,
        is_star: 1,
        pets: ["小花", "小黑", "小红"]
    }

    // 自动的到views文件夹下方, 找到 home.ejs 文件, 做解析渲染(data) -> html页面字符串
    // 自动的将解析之后的html字符串 -> 客户端
    resp.render("home", data)
})


// app.get("/home", (req, resp)=>{
//     let pageTMP = fs.readFileSync("./views/home.html").toString();
//     let data = {
//         name: "Sz",
//         age: 18,
//         address: "上海",
//         is_teacher: 1,
//         is_star: 1,
//         pets: ["小花", "小黑", "小红"]
//     }
//     let result = ejs.render(pageTMP, data);
//     resp.send(result)
// })

app.listen(4000, () => {
    console.log("服务器启动成功: localhost:4000")
})


