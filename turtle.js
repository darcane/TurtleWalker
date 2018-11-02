const commands = {
    "fd": function (amt) {
        turtle.forward(amt);
    },
    "bk": function (amt) {
        turtle.forward(-amt);
    },
    "rt": function (amt) {
        turtle.rightTurn(amt);
    },
    "lt": function (amt) {
        turtle.rightTurn(-amt);
    },
    "pd": function (amt) {
        turtle.pen = true;
    },
    "pu": function (amt) {
        turtle.pen = false;
    }
}


class Turtle {
    constructor(x, y, ang) {
        this.x = x;
        this.y = y;
        this.ang = ang;
    }

    reset() {
        translate(this.x,this.y);
        rotate(this.ang);
        this.pen = true;
    }

    forward(len) {
        len = parseInt(len);
        if (this.pen) {
            line(0, 0, len, 0);
        }
        translate(len, 0);
    }

    rightTurn(ang) {
        rotate(ang);
    }
}