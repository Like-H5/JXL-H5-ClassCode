const path = require("path");
const fs = require("fs");
const {getCurrentTime} = require("../tool/sz_dateTime")
const {sendMail} = require("../tool/sz_email")


let notFoundMF = function (notFoundFilePath) {
    if (!path.isAbsolute(notFoundFilePath)) {
        throw Error("必须要传递一个绝对路径")
    }
    return  (req, resp) => {
        // console.log("资源没有找到")
        // resp.sendStatus(404)
        // resp.send("<h1>资源没有找到</h1>")

        // resp.status(404)
        // resp.send("<h1>资源没有找到</h1>")
        // resp.status(404).send("<h1>资源没有找到</h1>")

        resp.status(404).sendFile(notFoundFilePath)
    }
}

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


let handlerErrorMF = function (errorFilePath, errorResponseFilePath) {
    if (!path.isAbsolute(errorFilePath) || !path.isAbsolute(errorResponseFilePath)) {
        throw Error("请传入一个绝对路径")
    }

    return (err, req, resp, next) => {
        let err_type = err.name;
        let err_msg = err.message;
        let err_stack = err.stack;
        let info = `
        =======================================
        错误类型: ${err_type}
        错误描述: ${err_msg}
        错误时间: ${getCurrentTime()}
        错误堆栈: ${err_stack}
        =======================================
        `
        fs.appendFile(errorFilePath, info, () => {
            sendMail("501562071@qq.com", "错误报告", info)
        })

        resp.status(500).sendFile(errorResponseFilePath)
    }

}


module.exports = {
    notFoundMF,
    rizhiMF,
    handlerErrorMF
}
