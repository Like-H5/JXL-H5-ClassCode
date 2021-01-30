const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
let uploader = multer({dest: "./public/images"})
const data = require("../data/data.json")

let router = express.Router();

router.get("/list", (req, resp) => {
    resp.render("index", {data})
})

router.get("/add", (req, resp) => {
    resp.render("add")
})

router.post("/add",uploader.single("lb_img"),(req, resp) => {

    let newPath = req.file.path + path.extname(req.file.originalname)
    fs.renameSync(req.file.path, newPath)

    let pathArray = newPath.split(path.sep)
    let fullPath = `${path.sep}images${path.sep}` + pathArray[pathArray.length - 1];
    let title = req.body.title;
    console.log(fullPath, title)

    let item = {title, imgSrc: fullPath};
    data.push(item);
    fs.writeFileSync("./data/data.json", JSON.stringify(data))

    resp.render("success")
})

module.exports = router;