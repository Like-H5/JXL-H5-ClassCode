const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const data = require("../data/data.json")

let uploader = multer({dest: "./public/images"})


let router = express.Router();

router.get("/list", (req, resp)=>{
    resp.send(data)
})

router.post("/add",uploader.single("lb_img"), (req, resp) => {

    let newPath = req.file.path + path.extname(req.file.originalname)

    fs.renameSync(req.file.path, newPath)

    let pathArray = newPath.split(path.sep)
    let fullPath = `${path.sep}images${path.sep}` + pathArray[pathArray.length - 1];
    let title = req.body.title;

    let item = {title, imgSrc: fullPath};
    data.push(item);
    fs.writeFileSync("./data/data.json", JSON.stringify(data))

    resp.send({
        code: 0,
        msg: "添加轮播成功!",
        data: item
    })
})

module.exports = router;