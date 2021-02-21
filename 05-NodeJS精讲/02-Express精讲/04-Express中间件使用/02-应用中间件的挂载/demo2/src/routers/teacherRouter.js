const express = require("express")

// 讲师增删改查
let teacherRouter = express.Router();
teacherRouter.get("/list", (req, resp)=>{
    resp.send("讲师列表获取")
})
teacherRouter.get("/del", (req, resp) => {
    resp.send("讲师删除")
})
teacherRouter.post("/edit", (req, resp) => {
    resp.send("讲师修改")
})
teacherRouter.post("/add", (req, resp) => {
    resp.send("讲师新增")
})

module.exports = teacherRouter;