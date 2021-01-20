const express = require("express");
const {rizhiMF} = require("./middlewares/rizhiM")
const path = require("path");
const fs = require("fs");
const {getCurrentDate, getCurrentTime} = require("./tools/dateTime")
const {notFoundMF} = require("./middlewares/notFoundM")
const {handlerErrorMF} = require("./middlewares/handlerErrorM")

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

let app = express();

app.use(express.json(), express.urlencoded({extended: true}))

app.use(rizhiMF(path.resolve(__dirname, `./logs/${getCurrentDate()}.txt`)))


// app.use((req, resp, next) => {
//     console.log(req.path)
//     let fullPath = path.resolve(__dirname, "public", "."+req.path)
//     if (fs.existsSync(fullPath)) {
//         resp.sendFile(fullPath)
//     } else {
//         next()
//     }
// })

app.use(express.static(path.resolve(__dirname, "./public")))


app.get("/", (req, resp) => {
    // abc();
    resp.send("get /");
})


app.get("/course", (req, resp) => {
    resp.send("get /course");
})

app.post("/register",upload.single("header"), (req, resp, next)=>{
    let file = req.file;

    let oldPath = req.file.path;
    let fileName = "" + Date.now() + Math.round(Math.random() * 1000)
    let extName = path.extname(req.file.originalname)
    let newPath = `public/userHeaders/${fileName}${extName}`

    fs.renameSync(oldPath, newPath)


    let content = req.body;
    content.header = `/userHeaders/${fileName}${extName}`

    resp.send(content)
})

// 前面所写的路由, 都没有匹配到
app.use(notFoundMF(path.resolve(__dirname, "./defaultPages/404.html")))

// 在最后的位置, 注册一个错误处理中间件(4个参数的中间件)
app.use(handlerErrorMF(path.resolve(__dirname, `./errors/${getCurrentDate()}.txt`), path.resolve(__dirname, "./defaultPages/500.html")))


app.listen(5000, () => {
    console.log("服务器启动成功")
})