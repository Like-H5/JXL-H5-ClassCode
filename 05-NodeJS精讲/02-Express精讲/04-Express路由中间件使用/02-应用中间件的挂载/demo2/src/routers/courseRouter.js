const express = require("express")

// 讲师增删改查
let courseRouter = express.Router();
courseRouter.get("/list", (req, resp)=>{
    resp.send("课程列表获取")
})
courseRouter.get("/del", (req, resp) => {
    resp.send("课程删除")
})
courseRouter.post("/edit", (req, resp) => {
    resp.send("课程修改")
})
courseRouter.post("/add", (req, resp) => {
    resp.send("课程新增")
})

module.exports = courseRouter;