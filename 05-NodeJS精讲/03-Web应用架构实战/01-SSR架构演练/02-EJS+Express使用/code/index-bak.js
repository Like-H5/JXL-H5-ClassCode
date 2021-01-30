const ejs = require("ejs");
const express = require("express");

let data = [
    {name: "Sz1", age: 18, sex: 0},
    {name: "Sz2", age: 16, sex: 1},
    {name: "Sz3", age: 20, sex: 0},
    {name: "Sz4", age: 21, sex: 1}
];


let app = express();

app.get("/teacher", (req, resp, next)=>{
    ejs.renderFile("./test.ejs", {data}, (err, str)=>{
        if (!err) {
            resp.send(str)
        }
    })
})

app.listen(5000, () => {
    console.log("服务器启动成功: localhost:5000")
})

