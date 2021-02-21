const express = require("express");
const axios = require("axios");


// 1. 创建一个应用服务器对象
let app = express();


// 静态路由
// 传参方式: 路径 ? 键=值&键=值
// 参数获取: req.query {键: 值, 键: 值}
app.get("/article", (req, resp)=>{

    let values = req.query.id
    // console.log()

    resp.send(values)


    // 1. 请求的头部
    // let headers = req.headers
    // // 2. 请求参数
    // let ua = headers["user-agent"]
    // if (ua.includes("Mozilla")) {
    //     resp.send("正确的数据")
    // } else {
    //     resp.send("你是爬虫, 被我发现了, 给你一坨xxx")
    // }

    // resp.send(headers)

})

// 动态路由
// 传参方式: 路径/参数   /article/3
// 参数的获取: req.params
app.get("/article/:id/:group", (req, resp)=>{
    // let id = req.params.id;
    // axios.get(`https://www.qiushibaike.com/article/${id}`).then(({data}) => {
    //     console.log(data)
    //     resp.send(data)
    // })

    resp.send(req.params)
})


// 3. 开启服务器, 监听某一个特定的端口号
app.listen(3000, ()=>{
    console.log("服务器启动成功: localhost:3000");
})