const express = require("express");
// const data = require("./data/data.json")
const path = require("path");

let app = express();

// 跨域中间件处理
let crossDomain = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if(req.method==="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
}
app.use(crossDomain)

app.get("/fyb_data", (req, resp) => {
    // resp.send(data)
    resp.sendFile(path.resolve(__dirname, "./data/data.json"), () => {
        console.log("yes")
    })
})

app.listen(4000, () => {
    console.log("服务器启动成功: localhost:4000/")
})