
// let name = "sz";
// let age = 18;
// console.log(name, age);
//
// console.warn("警告内容!")

//
// function jc(n) {
//     if (n === 1) return 1;
//     return n * jc(n - 1);
// }
//
// function jc2(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
//
// console.time("第一个函数");
// // 19.043ms
// // console.log(jc(1000));
// // 17.982ms
// console.log(jc2(1000));
// console.timeEnd("第一个函数")
//
// console.log(__filename);
// console.log(__dirname);


let num = 0;
let timer = setInterval(() => {
    console.log(num++);
}, 1000)
clearInterval(timer);


setTimeout(() => {
    console.log("xxx")
}, 2000)

