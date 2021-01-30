const express = require("express");
const data = require("./data/data.json")

let app = express();

// 注册模板引擎 ejs
app.set("view engine", "ejs")

app.get("/itlike", (req, resp) => {

    resp.render("list", {data})

})


app.listen(5000, ()=>{
    console.log("服务器启动成功")
})