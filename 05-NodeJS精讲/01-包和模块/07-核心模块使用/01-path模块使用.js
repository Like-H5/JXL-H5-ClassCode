const path = require("path");

// /\
// console.log(path.join("a", "///b", "\c", "../../xxx.txt"));


// let path_str = path.resolve("a", "b", "../xxx.txt");
let path_str = path.resolve(__dirname, "test.txt");
// console.log(path_str)
console.log(path.extname(path_str));