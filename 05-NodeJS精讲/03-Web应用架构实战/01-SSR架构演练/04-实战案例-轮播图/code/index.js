const express = require("express");
const path = require("path");
const lunboRouter = require("./routers/lunboRouter");

let app = express();

// 注册模板引擎 ejs
app.set("view engine", "ejs")

app.use(express.static(path.resolve(__dirname, "public")))

app.use("/lunbo", lunboRouter)


app.listen(5000, () => {
    console.log("服务器启动成功")
})