const express = require("express");
const {execSQL} = require("./tool/sz_mysql")

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
    execSQL("select title, count, up from t_fyb;").then(result=>{
        // console.log(result)
        resp.send({
            source: "撩课风云榜 - itLike.com",
            lists: result
        })
    })
})

app.listen(5000, () => {
    console.log("服务器启动成功")
})