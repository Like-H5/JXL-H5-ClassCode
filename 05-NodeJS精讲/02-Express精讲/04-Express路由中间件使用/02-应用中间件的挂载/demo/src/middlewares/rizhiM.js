const {getCurrentTime} = require("../tools/dateTime")
const fs = require("fs");
const path = require("path");

let rizhiMF = function (rizhiFilePath) {
    if (!path.isAbsolute(rizhiFilePath)) {
        throw Error("必须要传递一个绝对路径")
    }

    return (req, resp, next) =>{

        // 日志记录
        //
        let current = getCurrentTime();
        let method = req.method;
        let path = req.path;
        let params = {};
        if (method.toLowerCase() === "get") {
            params = req.query;
        } else if(method.toLowerCase() === "post") {
            params = req.body;
        }
        let ua = req.headers["user-agent"];

        let result = `
    =============================================
    请求时间: ${current}
    请求方法: ${method}
    请求路径: ${path}
    请求参数: ${JSON.stringify(params)}
    客户端信息: ${ua}
    =============================================
    `
        fs.appendFile(rizhiFilePath, result, ()=>{
            console.log("写入日志成功")
        })
        // 继续传递请求 响应 next

        next()
    }
}


module.exports = {
    rizhiMF
}