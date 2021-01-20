// 0. 三方模块引入
const express = require("express");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const {rizhiMF, notFoundMF, handlerErrorMF} = require("./middleware/sz_middleware");
const {getCurrentDate} = require("./tool/sz_dateTime");


// 1. 创建一个应用服务器
let app = express();

// 2. 挂载中间件

// 2.0 post请求参数处理中间件(如果日志中间件内部, 涉及post参数的处理, 需要把这个中间件提前)
app.use(express.json(), express.urlencoded({extended: true}))

// 2.1 日志中间件
app.use(rizhiMF(path.resolve(__dirname, `./data/logs/${getCurrentDate()}.txt`)))

// 2.2 静态资源服务中间
app.use(express.static(path.resolve(__dirname, "./public")))


// 2.3 路由中间件
app.get("/favicon.ico", (req, resp) => {
    resp.send("ok")
})
app.get("/teachers", (req, resp) => {
    abc()
    resp.send([
        {
            name: "sz",
            age: 18
        },
        {
            name: "jh",
            age: 20
        }
    ])
})

let upload = multer({ dest: 'uploads/' })
app.post("/add_teacher", upload.single('header'), (req, resp)=>{
    let oldPath = req.file.path;
    let fileName = "" + Date.now() + Math.round(Math.random() * 1000)
    let extName = path.extname(req.file.originalname)
    let newPath = `public/userHeaders/${fileName}${extName}`

    fs.renameSync(oldPath, newPath)
    let headerFile = `/userHeaders/${fileName}${extName}`;
    const {name, age} = req.body;
    resp.send(`添加讲师成功: ${name} ${age} ${headerFile}`)
})



// 2.4 404中间件
app.use(notFoundMF(path.resolve(__dirname, "./defaultPages/404.html")))

// 2.5 错误处理中间件
app.use(handlerErrorMF(path.resolve(__dirname, `./data/errors/${getCurrentDate()}.txt`), path.resolve(__dirname, "./defaultPages/500.html")))



// 3. 启动服务器
app.listen(3000, () => {
    console.log("服务器启动成功: localhost:3000/")
})