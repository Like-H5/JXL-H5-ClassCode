const express = require("express");
const data = require("./data/data.json")

let app = express();

// 跨域中间件处理
let crossDomain = (req, resp, next) => {
    resp.header("Access-Control-Allow-Origin", "*")
    resp.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    resp.header("Access-Control-Allow-Headers", "Content-Type")
    next()
}
app.use(crossDomain)

app.get("/list", (req, resp) =>{
    resp.send(data)
})

app.listen(5000, () => {
    console.log("服务器启动成功")
})