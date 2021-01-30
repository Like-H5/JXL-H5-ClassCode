const express = require("express");
const {getCurrentTime} = require("./tool/sz_dateTime")
const data = require("./data/data.json")
const fs = require("fs");

let app = express();
app.use(express.static("public"))
app.set("view engine", "ejs");
app.use(express.json(), express.urlencoded({extended: true}))

app.get("/bwl/list", (req, resp) => {
    resp.render("index", {data})
})
app.get("/bwl/add", (req, resp) => {
    resp.render("add")
})
app.get("/bwl/edit/:id", (req, resp) => {
    let id = req.params.id;
    let item = data.find(item=>item.id === id)
    resp.render("edit", {item})
})

app.post("/bwl/add", (req, resp) => {

    const {title, content} = req.body;
    let id = Date.now() + Math.random() + Math.random() + ""
    let currentTime = getCurrentTime()

    data.push({
        id,
        currentTime,
        title,
        content
    })
    fs.writeFile("./data/data.json", JSON.stringify(data), () => {
        console.log("追加数据成功")
    })


    resp.redirect("/bwl/list")

    // 获取留言板的内容
    // id
    // currentTime
    // title
    // content


})
app.get("/bwl/del", (req, resp) => {
    const {id} = req.query;
    let idx = data.findIndex(item=>item.id === id);
    data.splice(idx, 1);

    fs.writeFile("./data/data.json", JSON.stringify(data), () => {
        console.log("追加数据成功")
    })

    resp.redirect("/bwl/list")
})
app.post("/bwl/edit", (req, resp) => {

    const {id, title, content} = req.body;

    let item = data.find(item=>item.id === id)
    item.title = title;
    item.content = content;

    fs.writeFile("./data/data.json", JSON.stringify(data), () => {
        console.log("追加数据成功")
    })

    resp.redirect("/bwl/list")

    // 获取留言板的内容
    // id
    // currentTime
    // title
    // content


})

app.use((req, resp) => {
    resp.render("404")
})

app.listen(5000, () => {
    console.log("服务器启动成功")
})