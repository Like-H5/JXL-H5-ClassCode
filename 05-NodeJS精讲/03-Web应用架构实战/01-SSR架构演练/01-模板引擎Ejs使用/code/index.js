const ejs = require("ejs");

let data = [
    {name: "Sz1", age: 18, sex: 0},
    {name: "Sz2", age: 16, sex: 1},
    {name: "Sz3", age: 20, sex: 0},
    {name: "Sz4", age: 21, sex: 1}
];


ejs.renderFile("./test.ejs", {data}, (err, str)=>{
    if (!err) {
        console.log(str)
    }
})

