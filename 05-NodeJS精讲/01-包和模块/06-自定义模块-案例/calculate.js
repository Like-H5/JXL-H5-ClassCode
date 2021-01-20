
let _result = 0;
class Calculate {
    // result = 0
    constructor(initValue) {
        _result = initValue;
    }
    jia(num) {
        _result += num;
        return this;
    }
    jian(num) {
        _result -= num;
        return this;
    }
    cheng(num) {
        _result *= num;
        return this;
    }
    chu(num) {
        _result /= num;
        return this;
    }
    getResult() {
        return _result;
    }
}


// let cal = new Calculate(1);
// console.log(cal.cheng(5).jia(2).getResult());


module.exports = {
    Calculate
};