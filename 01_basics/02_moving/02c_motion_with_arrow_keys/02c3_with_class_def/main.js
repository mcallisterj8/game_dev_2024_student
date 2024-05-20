let circleObj; // Make sure name is not 'circle' or will conflict with p5.js circle() function

function setup() {
  createCanvas(600, 600);
  circleObj = new Circle(width / 2, height / 2, 25);
}

function draw() {
  background(0);
  circleObj.update();
  circleObj.draw();

}

