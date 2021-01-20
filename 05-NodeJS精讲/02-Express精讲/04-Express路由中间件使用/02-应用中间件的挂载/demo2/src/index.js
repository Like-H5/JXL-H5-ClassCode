// 0. 三方模块引入
const express = require("express");
const path = require("path");
const {rizhiMF, notFoundMF, handlerErrorMF} = require("./middleware/sz_middleware");
const {getCurrentDate} = require("./tool/sz_dateTime");
const teacherRouter = require("./routers/teacherRouter");
const courseRouter = require("./routers/courseRouter");

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
// 讲师业务
app.use("/teacher", teacherRouter)

// 课程增删改查
app.use("/course", courseRouter)


// 2.4 404中间件
app.use(notFoundMF(path.resolve(__dirname, "./defaultPages/404.html")))

// 2.5 错误处理中间件
app.use(handlerErrorMF(path.resolve(__dirname, `./data/errors/${getCurrentDate()}.txt`), path.resolve(__dirname, "./defaultPages/500.html")))



// 3. 启动服务器
app.listen(3000, () => {
    console.log("服务器启动成功: localhost:3000/")
})