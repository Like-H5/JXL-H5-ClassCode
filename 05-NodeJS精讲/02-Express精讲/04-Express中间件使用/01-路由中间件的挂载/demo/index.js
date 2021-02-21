const express = require("express");

let data = [
    {
        id: 1,
        title: "标题1",
        content: "内容1"
    },{
        id: 2,
        title: "标题2",
        content: "内容2"
    }
]

let app = express();

// 0. 处理post请求的参数
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// 文章增删改查

// 1. 文章查询接口
/*
    请求方式: get
    请求路径: /articles
    请求参数:
    响应数据结构: []
* */
app.get("/articles", (req, resp) => {
    resp.send(data)
})


// 2. 文章新增接口
// post /add_article title,content 添加结果
app.post("/add_article", (req, resp)=>{
    let id = Date.now()
    const {title="", content=""} = req.body;
    let article = {
        id,
        title,
        content
    }
    data.push(article)

    resp.send({
        code: 0,
        msg: "新增文章成功",
        article_id: id
    })
})


// 3. 删除接口
// get /del_article id  删除结果
app.get("/del_article", (req, resp)=>{
    let {id} = req.query;
    if (id === undefined) {
        resp.send({
            code: -1,
            msg: "请传递需要删除的id值"
        })
    } else {

        let del_index = data.findIndex(item=>item.id === +id)
        data.splice(del_index, 1);
        resp.send({
            code: 0,
            msg: "删除成功" + id
        })

    }
})


// 4. 改
// post /edit_article id, title, content 修改结果
app.post("/edit_article", (req, resp)=>{
    const {id, title, content} = req.body;

    let article = data.find(item=>item.id === +id);
    article.title = title;
    article.content = content;

    resp.send({
        code: 0,
        msg: "修改成功",
        data: article
    })
})

app.listen(3000, () => {
    console.log("服务器启动成功: localhost:3000")
})