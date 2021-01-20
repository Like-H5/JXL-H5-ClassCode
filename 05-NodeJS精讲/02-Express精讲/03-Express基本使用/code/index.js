const express = require("express");

// 1. 创建一个应用服务器
let app = express();

/*
请求方式  请求路径  中间件
  x        x      func
  get     /persons  func
  post    /add_person  func

* */



app.use((req, resp, next)=>{
    console.log("不经过任何匹配, 直接走到这里")

    resp.ResultTemp = function (code, msg, data) {
        return {
            code,
            msg,
            data
        }
    }
    // 中间件执行, 如果匹配到一个之后, 默认不会继续往后传递, 除非你自己调用next()
    next()
})


// 2. 注册中间件, 实现各种业务逻辑
app.get("/persons", function (req, resp, next) {
    console.log("外界向: http://localhost:5000/persons 发送了一个 get 请求", req.headers);

    resp.send(resp.ResultTemp(0, "获取列表正常", [
        {
            name: "sz",
            age: 18
        }, {
            name: "xxx",
            age: 20
        }
    ] ))

})

app.post("/add_person", (req, resp, next)=>{
    console.log("执行条件: /add_person post")

    resp.send(resp.ResultTemp(0, "添加成功", {}))
})

// 3. 启动这个服务器
// 本地的局域网地址: 192.168.5.130
// 本机地址: localhost
// 127.0.0.1
app.listen(5000, function () {
    console.log("服务器启动成功");
})