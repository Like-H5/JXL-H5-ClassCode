const {Calculate} = require("./calculate")

let c = new Calculate(1);

class Shape {
    mj() {
        throw Error("需要子类实现")
    }
    zc() {
        throw Error("需要子类实现")
    }
}

class Circle extends Shape {
    constructor(r) {
        super()
        this.r = r;
    }
    mj() {
        // return Math.PI * this.r ** 2
        return c.cheng(Math.PI).cheng(this.r).cheng(this.r).getResult()
    }
    zc() {
        c.resetValue(1)
        // return 2 * Math.PI * this.r;
        return c.cheng(2).cheng(Math.PI).cheng(this.r).getResult();
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super()
        this.width = width;
        this.height = height;
    }
    mj() {
        c.resetValue(this.width)
        return c.cheng(this.height).getResult()
    }
    zc() {
        c.resetValue(this.width)
        return c.jia(this.height).cheng(2).getResult();
    }
}

class Square extends Rect {
    constructor(width) {
        super(width, width);
    }
}

module.exports = {
    Circle,
    Rect,
    Square
}