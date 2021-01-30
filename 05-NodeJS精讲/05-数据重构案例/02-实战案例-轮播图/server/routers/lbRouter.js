const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const {execSQL} = require("../tool/sz_mysql")

let uploader = multer({dest: "./public/images"})


let router = express.Router();

router.get("/list", (req, resp)=>{
    execSQL("select title, imgSrc from t_lbt;").then(result=>{
        resp.send(result);
    })
})

router.post("/add",uploader.single("lb_img"), (req, resp) => {

    let newPath = req.file.path + path.extname(req.file.originalname)

    fs.renameSync(req.file.path, newPath)

    let pathArray = newPath.split(path.sep)
    let fullPath = `${path.sep}images${path.sep}` + pathArray[pathArray.length - 1];
    let title = req.body.title;

    execSQL("insert into t_lbt (title, imgSrc) values (?, ?);", [title, fullPath]).then(result=>{
        if (result.affectedRows >= 1) {
            resp.send({
                code: 0,
                msg: "插入成功",
                data: {
                    id: result.insertId,
                    title,
                    imgSrc: fullPath
                }
            })
        }
    })

})

module.exports = router;