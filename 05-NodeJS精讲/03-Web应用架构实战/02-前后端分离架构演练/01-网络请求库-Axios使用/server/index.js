const express = require("express");

let app = express();

// 跨域中间件处理
let crossDomain = (req, resp, next) => {
    resp.header("Access-Control-Allow-Origin", "*")
    resp.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    resp.header("Access-Control-Allow-Headers", "Content-Type")
    next()
}
app.use(crossDomain)


app.get("/list", (req, resp)=>{
    resp.send([
        {name: "sz", age: 18},
        {name: "cf", age: 16}
    ])
})

app.listen(5000, () => {
    console.log("服务器启动成功")
})