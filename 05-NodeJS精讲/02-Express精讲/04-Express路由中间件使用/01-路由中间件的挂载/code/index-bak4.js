const express = require("express");


// 1. 创建一个应用服务器对象
let app = express();

// console.log(express.json())
//
app.use(express.json());
// // 能够处理json格式的参数
app.use(express.urlencoded({ extended: true }));
// 能够处理普通的&拼接参数
//
// app.use(function (req, resp, next) {
//     req.body = {
//         name: "大 sz",
//         address: "上海"
//     }
//     next()
// })


// 传参的方式:
// 怎样获取参数:
app.post("/add_person", (req, resp) => {

    console.log("接收到了 /add_person post请求", req.body)
    resp.send("ok");

})




// 3. 开启服务器, 监听某一个特定的端口号
app.listen(3000, ()=>{
    console.log("服务器启动成功: localhost:3000");
})