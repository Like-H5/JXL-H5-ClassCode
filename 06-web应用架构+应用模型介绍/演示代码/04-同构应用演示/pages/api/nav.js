export default function handler(req, res) {
    res.status(200).json({
        "code": 0,
        "msg": "导航菜单数据获取成功!",
        "data": [
            {
                "id": 1,
                "title": "首页",
                "route": "/"
            },
            {
                "id": 2,
                "title": "课程",
                "route": "/course"
            },
            {
                "id": 3,
                "title": "讲师",
                "route": "/teacher"
            },
            {
                "id": 4,
                "title": "文章",
                "route": "/article"
            }
        ]
    })
}