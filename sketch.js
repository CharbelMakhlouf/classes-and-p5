let shapes = [
  new Circle(0, 200, 50, 'red'),
  new Rectangle(70, 150, 80, 60, 'blue'),
  new Triangle(150, 300, 200, 250, 250, 300, 'green')
];

function setup() {
  createCanvas(1400, 700);
}

function draw() {
  background('aqua');
  for (let shape of shapes) {
    shape.draw();
    shape.move(1, 0);
  }
}

