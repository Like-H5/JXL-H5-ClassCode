const {sum} = require("./tool")

window.onload = function () {

    let dom = `
        <div class="box">
            <h1>${sum(2, 3)}</h1>
        </div>
    `

    // 假设页面当中, 存在一个容器 #root
    let rootDom = document.getElementById("root");
    rootDom.innerHTML = dom;
}