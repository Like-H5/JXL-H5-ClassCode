const express = require("express");
const axios = require("axios");


// 1. 创建一个应用服务器对象
let app = express();

// 2. 路由中间件 挂载使用
// app.get("/", (req,resp) => {
//
//     resp.send("撩课-SZ")
// })

// 静态路由
// 传参方式: 路径 ? 键=值&键=值
// 参数获取: req.query {键: 值, 键: 值}
app.get("/article", (req, resp)=>{
    let id = req.query.id;

    // 根据id, 发送一个网络请求, 获取真正的段子内容
    // https://www.qiushibaike.com/article/123979262
    axios.get(`https://www.qiushibaike.com/article/${id}`).then(({data}) => {
        console.log(data)
        resp.send(data)
    })


})

// 动态路由
// 传参方式: 路径/参数   /article/3
// 参数的获取: req.params
app.get("/article/:id", (req, resp)=>{
    let id = req.params.id;
    axios.get(`https://www.qiushibaike.com/article/${id}`).then(({data}) => {
        console.log(data)
        resp.send(data)
    })
})


// 3. 开启服务器, 监听某一个特定的端口号
app.listen(3000, ()=>{
    console.log("服务器启动成功: localhost:3000");
})