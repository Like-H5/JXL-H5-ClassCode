const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/other.js",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "js/bundle.js"
    }
}