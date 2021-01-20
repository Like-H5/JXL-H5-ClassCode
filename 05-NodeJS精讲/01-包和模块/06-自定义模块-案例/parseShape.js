const fs = require("fs");
const data = require("./data.json");
const {Circle, Rect, Square} = require("./shape");

// console.log(data, typeof data)

let circles = data.filter(obj => obj.type === "circle");
circles.forEach(obj=>{
    let c = new Circle(obj.r);
    obj.zc = c.zc()
    obj.mj = c.mj()
});
console.log(circles)

//
// let circles = [], rects = [], squares = [];
//
// for (let i = 0, len = data.length; i < len; i++) {
//     let shapeObj = data[i];
//     console.log(shapeObj)
//     let type = shapeObj.type;
//     if (type === "circle") {
//         let c = new Circle(shapeObj.r);
//         shapeObj.zc = c.zc()
//         shapeObj.mj = c.mj()
//         circles.push(shapeObj)
//     } else if (type === "rect") {
//         let r = new Rect(shapeObj.width, shapeObj.height);
//         shapeObj.zc = r.zc()
//         shapeObj.mj = r.mj()
//         rects.push(shapeObj)
//     } else if (type === "square") {
//         let s = new Square(shapeObj.width);
//         shapeObj.zc = s.zc()
//         shapeObj.mj = s.mj()
//         squares.push(shapeObj)
//     }
// }
//
// fs.writeFileSync("./圆.json", JSON.stringify(circles))
// fs.writeFileSync("./长方形.json", JSON.stringify(rects))
// fs.writeFileSync("./正方形.json", JSON.stringify(squares))

// console.log(circles, rects, squares)