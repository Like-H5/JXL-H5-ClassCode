const express = require('express');
const bwlRouter = require("./routers/bwlRouter")

let app = express();

// 跨域中间件处理
let crossDomain = (req, resp, next) => {
    resp.header("Access-Control-Allow-Origin", "*")
    resp.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    resp.header("Access-Control-Allow-Headers", "Content-Type")
    next()
}
app.use(crossDomain)

app.use(express.json(), express.urlencoded({extended: true}))

function resultTemp(code, msg, data) {
    return {
        code,
        msg,
        data
    }
}
// 挂载工具函数的中间件
app.use((req, resp, next) => {
    resp.tool = {
        resultTemp
    }
    next()
})


app.use("/bwl", bwlRouter)

app.listen(5000, () => {
    console.log("后端服务器启动成功!")
})