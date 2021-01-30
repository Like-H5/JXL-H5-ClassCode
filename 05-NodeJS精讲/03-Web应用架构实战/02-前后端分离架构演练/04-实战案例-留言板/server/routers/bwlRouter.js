const express = require('express');
const {getCurrentTime} = require("../tool/sz_dateTime")
const data = require("../data/data.json")
const fs = require("fs");

let router = express.Router();




router.post("/add", (req, resp) => {
    const {title, content} = req.body;
    let id = Date.now() + Math.random() + Math.random() + ""
    let currentTime = getCurrentTime()

    let item = {
        id,
        currentTime,
        title,
        content
    }
    data.push(item)
    fs.writeFile("./data/data.json", JSON.stringify(data), () => {
        console.log("追加数据成功")
    })

    resp.send(resp.tool.resultTemp(0, "添加成功", item))

})

router.get("/list", (req, resp)=>{
    resp.send(resp.tool.resultTemp(0, "查询结果成功", data))
})

router.get("/detail/:id", (req, resp) => {
    const {id} = req.params;
    let item = data.find(item=>item.id === id)
    resp.send(resp.tool.resultTemp(0, "查找成功", item))
})

router.get("/del", (req, resp)=>{
    const {id} = req.query;
    let idx = data.findIndex(item=>item.id === id);
    data.splice(idx, 1);

    fs.writeFile("./data/data.json", JSON.stringify(data), () => {
        console.log("追加数据成功")
    })
    resp.send(resp.tool.resultTemp(0, "删除成功", {}))
})

router.post("/edit", (req, resp) => {

    const {id, title, content} = req.body;

    let item = data.find(item=>item.id === id)
    item.title = title;
    item.content = content;

    fs.writeFile("./data/data.json", JSON.stringify(data), () => {
        console.log("追加数据成功")
    })

    resp.send(resp.tool.resultTemp(0, "修改成功", {}))


})



module.exports = router;