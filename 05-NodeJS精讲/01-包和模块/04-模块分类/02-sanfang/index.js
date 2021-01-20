const axios = require("axios");
const fs = require("fs");

// console.log(axios)

axios.get("http://lxt.itlike.com/api/client/home/ad_course").then(response=>{
    // console.log(response.data)
    fs.writeFileSync("./test.json", JSON.stringify(response.data))
}).catch(error=>{
    console.log("error", error)
})