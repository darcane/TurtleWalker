let editor;
let code;
let turtle;
const initialShape = 'pu lt 45 fd 80 rt 135 pd fd 40 rt 60 fd 60 rt 60 fd 60 rt 60 fd 40 rt 120 fd 60 lt 60 fd 60 pu rt 120 fd 60 pd fd 40 rt 60 fd 60 rt 60 fd 60 rt 60 fd 40 rt 120 fd 60 lt 60 fd 60 ht';
const shapeInPath = (new URL(document.location)).searchParams;

function setup() {
  editor = select('#editor');
  createCanvas(700, 600);
  stroke(255);
  strokeWeight(2);
  angleMode(DEGREES);
  turtle = new Turtle(width / 2, height / 2, 0);

  let shape = shapeInPath.get('shape');
  shape ?  editor.value(shape) : editor.value(initialShape);

  editor.input(walkTurtle);
  walkTurtle();
}


function debounce(func, wait, immediate) {
	let timeout;
	return function() {
		let context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
}

function walkTurtle() {
  background(51);
  push();
  turtle.reset();
  code = editor.value();
  let typing = debounce(function() {
    let shapeCode = '?shape=' + code.split(' ').join('+');
    history.replaceState('query', 'Shape', shapeCode)
  }, 1000);

  let tokens = code.split(' ');

  for (let i = 0; i < tokens.length; i++) {
    if (commands[tokens[i]]) {
      commands[tokens[i]](tokens[i + 1]);
    }
  }
  pop();
  typing();
}

function draw() {
  // put drawing code here
}