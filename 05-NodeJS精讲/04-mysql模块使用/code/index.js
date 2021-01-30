const {execSQL} = require("./tool/sz_mysql")

execSQL("select * from t_nav;").then(result=>{
    console.log(result)
})

execSQL("select * from t_news;").then(result=>{
    console.log(result)
})