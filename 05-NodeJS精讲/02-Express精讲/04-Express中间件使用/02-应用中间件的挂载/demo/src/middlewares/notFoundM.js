const path = require("path");
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

module.exports = {
    notFoundMF
}


