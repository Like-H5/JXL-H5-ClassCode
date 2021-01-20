const fs = require("fs");

let data = [
    {
        type: "circle",
        r: 6
    },
    {
        type: "circle",
        r: 5
    },
    {
        type: "circle",
        r: 4
    },
    {
        type: "rect",
        width: 4,
        height: 6
    },
    {
        type: "rect",
        width: 5,
        height: 6
    },
    {
        type: "square",
        width: 10
    }
]

fs.writeFileSync("./data.json", JSON.stringify(data));