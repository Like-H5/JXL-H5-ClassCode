const path = require("path");
const fs = require("fs");
const {getCurrentTime} = require("../tools/dateTime")

const {sendMail} = require("../tools/sz_email")

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
    handlerErrorMF
}