const express = require("express");


let obj = {name: "sz", age: 18};

console.log(typeof JSON.stringify(obj));


let app = express();

app.use(express.static("public"))

app.post("/register", function (req, resp, next) {

    resp.send("注册成功!")
})

app.get("/itlike", function (req, resp, next) {
    console.log("接收到请求: ", req);
    // abc();
    // resp.send({
    //     name: "sz",
    //     age: 18
    // })

    resp.setHeader("Content-Type", "text/plain")

    resp.send(`
    <h1>撩课-Sz</h1>
    
    `)
})

// localhost
// 127.0.0.1
// 192.168.5.130
app.listen(5000, function () {
    console.log("服务器启动成功!")
})