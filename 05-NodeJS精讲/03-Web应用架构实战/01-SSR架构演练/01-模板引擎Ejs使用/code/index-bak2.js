const ejs = require("ejs");
const fs = require("fs");


let data = [
    {name: "Sz1", age: 18},
    {name: "Sz2", age: 19},
    {name: "Sz3", age: 20},
    {name: "Sz4", age: 21}
];


let temp = fs.readFileSync("./test.ejs").toString()

let result = ejs.render(temp, {data})
console.log(result)