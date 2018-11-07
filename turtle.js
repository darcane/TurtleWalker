class Turtle {
    constructor(x, y, ang) {
        this.x = x;
        this.y = y;
        this.ang = ang;
        this.pen = true;
    }

    reset() {
        push();
        translate(this.x, this.y);
        rotate(this.ang);
        this.pen = true;
        this.showTurtle = true;
    }

    forward(len) {
        len = parseInt(len);
        if (this.pen) line(0, 0, len, 0);
        translate(len, 0);
    }

    rightTurn(ang) {
        rotate(ang);
    }

    home(){
        console.log("Home command will be leave ink while going home :)");
        //beginShape(LINES);
        //vertex(0,0);
        pop();
        //vertex(width/2,height/2);
        //endShape();
        this.reset();
    }

    setxy(x,y){
        console.log("setxy command will be implemented soon!");
    }

    show() {
        let s = 4;
        if (this.showTurtle) {
            push();
            stroke(255,0,0);
            if(this.pen) fill(255,0,0);
            else noFill();
            rotate(this.ang);
            triangle(-s, -s, 0, 2*s, s, -s);
            pop();
        }
    }
}