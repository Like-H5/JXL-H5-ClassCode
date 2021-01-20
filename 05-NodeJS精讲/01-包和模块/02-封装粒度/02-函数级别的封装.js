
function jia() {
    let result = 0;
    for (let i = 0, len = arguments.length; i < len; i++) {
        let num = arguments[i];
        result += num;
    }
    return result;
}

function jian(n1, n2) {
    return n1 - n2;
}

function cheng(n1, n2) {
    return n1 * n2;
}
let chu = (n1, n2) => n1 / n2;


let result = jia(1,2,3,4,5);
console.log(result);