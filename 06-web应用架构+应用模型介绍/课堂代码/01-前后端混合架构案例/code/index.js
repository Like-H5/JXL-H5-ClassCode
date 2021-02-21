const express = require("express");
let data = require("./data/data.json")

let app = express();

app.set("view engine", "ejs");

app.get("/fyb", (req, resp) => {
    // 1. 准备页面需要的数据
    // 2. 准备页面模板
    // 3. 数据 -> 模板
    // 4. 响应 渲染好的html字符串
    resp.render("list", data)

})

app.listen(4000, () => {
    console.log("服务器启动成功")
})