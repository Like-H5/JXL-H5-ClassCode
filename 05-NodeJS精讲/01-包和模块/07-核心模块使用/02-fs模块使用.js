const fs = require("fs");

// let content = fs.readFileSync("test.txt");
// console.log(content.toString())

// fs.readFile("test2.txt", (err, data) => {
//     // if (err) throw Error("出现错误");
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data.toString())
// })
//
// let result = []
// for (let i = 0; i < 100; i++) {
//     let name = `撩课-Sz-${i}`;
//     result.push(name);
//
// }
// fs.writeFileSync("./result.txt", result.join("\r\n"))
// console.log(fs.readFileSync("./result.txt").toString());
//
//
// fs.writeFile("./result.txt", result.join("\r\n"), ()=>{
//     console.log("写入完毕")
//     console.log(fs.readFileSync("./result.txt").toString());
// })


// for (let i = 0; i < 100; i++) {
//     let name = `撩课-Sz-${i}`;
//     fs.appendFile("./appendFile.txt", name, () => {
//         console.log("追加成功")
//     })
// }

for (let i = 0; i < 100; i++) {
    let name = `撩课-Sz-${i}`;
    fs.appendFileSync("./appendFile.txt", name)
}


