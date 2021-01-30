const axios = require("axios");

axios.defaults.baseURL = "http://lxt.itlike.com/api";

axios.interceptors.response.use(function (response) {
    // 正常响应时的额外处理
    console.log("先接受到请求结果")
    response.tool = 123;
    return response;
}, function (error) {
    //  错误响应时的额外处理
    return Promise.reject(error);
});


axios.get("/client/home/nav").then(response=>{
    console.log("成功", response)

}).catch(error => {
    console.log("错误", error)
})