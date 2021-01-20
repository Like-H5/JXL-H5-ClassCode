
class Level1 {
    static jia() {
        let result = 0;
        for (let i = 0, len = arguments.length; i < len; i++) {
            let num = arguments[i];
            result += num;
        }
        return result;
    }
    static jian(n1, n2) {
        return n1 - n2;
    }
}

class Level2 {
    static cheng(n1, n2) {
        return n1 * n2;
    }
    static chu = (n1, n2) => n1 / n2;
}

class SzDate {
    static getYear() {
        return (new Date()).getFullYear()
    }
}


console.log(SzDate.getYear());

console.log(Level1.jia(1, 2, 3));