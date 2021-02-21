const express = require("express");

let articles = [
    {
        id: "1",
        title: "今天吃饭了吗1?",
        content: "吃的啥, 吃的大闸蟹1!"
    },
    {
        id: "2",
        title: "今天吃饭了吗2?",
        content: "吃的啥, 吃的大闸蟹2!"
    },
    {
        id: "3",
        title: "今天吃饭了吗3?",
        content: "吃的啥, 吃的大闸蟹3!"
    }
]


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
    // console.log("监听到了请求", req)
    // 1. 接收到网络请求, 获取请求信息 req
    //   req, 获取到文章id
    let id = req.query.id;
    // console.log(id, typeof id)
    // 2. 根据id, 检索出对应的文章对象
    let obj = articles.find(item=>item.id === id)
    // console.log(obj);

    // 3. 响应回给客户端
    resp.send(obj)
})

// 动态路由
// 传参方式: 路径/参数   /article/3
// 参数的获取: req.params
app.get("/article/:id", (req, resp)=>{
    let id = req.params.id;
    // console.log(id, typeof id)
    // 2. 根据id, 检索出对应的文章对象
    let obj = articles.find(item=>item.id === id)
    // console.log(obj);

    // 3. 响应回给客户端
    resp.send(obj)
})


// 3. 开启服务器, 监听某一个特定的端口号
app.listen(3000, ()=>{
    console.log("服务器启动成功: localhost:3000");
})