const axios = require("axios");
const fs = require("fs");


const instance = axios.create({
    baseURL: 'https://www.baidu.com',
    timeout: 1000,
    headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36'}
});

instance.get("/").then(response=>{
    // console.log(response.data)
    fs.writeFileSync("./baidu.html", response.data)

})

// axios.get("https://www.baidu.com").then(response=>{
//     console.log(response.data)
// })