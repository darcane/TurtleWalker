let editor;
let code;
let turtle;

function setup() {
  editor = select('#editor');
  createCanvas(700, 600);
  stroke(255);
  strokeWeight(2);
  angleMode(DEGREES);
  turtle = new Turtle(width / 2, height / 2, 0);

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
    if (commands[tokens[i]]) {
      commands[tokens[i]](tokens[i + 1]);
    }
  }
  pop();
}

function draw() {
  // put drawing code here
}