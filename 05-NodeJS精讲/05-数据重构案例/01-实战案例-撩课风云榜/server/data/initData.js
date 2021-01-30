const data = require("./data.json");
const {execSQL} = require("./tool/sz_mysql")

console.log(data)
data.lists.forEach(({title, count, up})=>{
    execSQL("insert into t_fyb (title, count, up) values (?, ?, ?);", [title, count, up]).then(result=>{
        console.log(result)
    })
})