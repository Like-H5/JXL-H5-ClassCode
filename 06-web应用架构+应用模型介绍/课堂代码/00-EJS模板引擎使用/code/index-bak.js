const ejs = require("ejs");
const express = require("express");

let app = express()

app.get("/home", (req, resp)=>{
    let pageTMP = `
        <div>
            <h1>姓名: <%=name%></h1>
            <h2>年龄: <%=age%></h2>
            <h3>地址: <%=address%></h3>
        </div>
        <span>
            是否是讲师:
            <%=is_teacher===1?"是": "否"%>
        </span>
        <% if (is_star === 0) { %>
         <span>非星级</span>
        <% } else { %>
         <p>星级</p>
        <% } %>


        <ul>

       <% for(let i = 0, len = pets.length; i < len; i ++) { %>
        <li><%=pets[i]%></li>
       <% } %>
    </ul>


    `
    let data = {
        name: "Sz",
        age: 18,
        address: "上海",
        is_teacher: 1,
        is_star: 1,
        pets: ["小花", "小黑", "小红"]
    }


    let result = ejs.render(pageTMP, data);
    resp.send(result)
})

app.listen(4000, () => {
    console.log("服务器启动成功: localhost:4000")
})


