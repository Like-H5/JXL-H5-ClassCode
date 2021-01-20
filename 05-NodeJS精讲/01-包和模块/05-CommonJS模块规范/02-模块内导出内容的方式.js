let num = 123;

function sum(n1, n2) {
    return n1 + n2;
}


// 模块内部, 有一个对象
// return module.exports

// module.exports = {}
// exports = module.exports;

// exports = {
//     xxx: 123
// }
// exports.sum = 123;
// exports.a = 123;
// exports.b = 456;

module.exports = {
    num,
    sum
}

