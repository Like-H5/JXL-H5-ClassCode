const express = require("express");
const lbRouter = require("./routers/lbRouter")

let app = express();

// 跨域中间件处理
let crossDomain = (req, resp, next) => {
    resp.header("Access-Control-Allow-Origin", "*")
    resp.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    resp.header("Access-Control-Allow-Headers", "Content-Type")
    next()
}
app.use(crossDomain)

app.use(express.static("public"))

app.use("/lb", lbRouter);

app.listen(5000, () => {
    console.log("后端服务器启动成功: localhost:5000")
})