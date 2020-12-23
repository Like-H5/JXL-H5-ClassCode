window.onload = function () {
    // 整个网页资源都已经加载完毕(渲染完毕)
    let box = document.getElementsByClassName("box")[0];
    box.onclick = function () {
        alert(123)
    }
    box.onmouseover = function () {
        console.log("进来了")
    }
    box.onmouseout = function () {
        console.log("出去了")
    }
}