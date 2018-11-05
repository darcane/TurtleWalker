let editor;
let code;
let turtle;

function setup() {
  editor = select('#editor');
  createCanvas(700, 600);
  stroke(255);
  strokeWeight(2);
  angleMode(DEGREES);

  turtle = new Turtle(width / 2, height / 2, -90);

  editor.input(walkTurtle);
  walkTurtle();
}

function walkTurtle() {
  background(51);
  push();
  turtle.reset();
  code = editor.value();
  let tokens = code.split(' ');
  for (let i = 0; i < tokens.length; i++) {
    if (comargless[tokens[i]]) {
      comargless[tokens[i]]();
    } else if (com1arg[tokens[i]] && tokens[i + 1]) {
      com1arg[tokens[i]](tokens[i + 1]);
    } else if (com2arg[tokens[i]] && tokens[i + 1] && tokens[i + 2]) {
      com2arg[tokens[i]](tokens[i + 1], tokens[i + 2]);
    }
  }
  turtle.show();
  pop();
}

function draw() {

}