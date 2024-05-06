let circleX, circleY;
const circleRadius = 25;
const circleDiameter = circleRadius * 2;
let xVelocity = 2;
let yVelocity = 3;

function setup() {
  createCanvas(600, 600);
  circleX = width / 2;
  circleY = height / 2;
}

function draw() {
  background(0);

  circleX += xVelocity;
  circleY -= yVelocity;

  // check x-axis collisions
  if(circleX + circleRadius > width || circleX - circleRadius < 0) {
    // reverse direction
    xVelocity = -xVelocity;
  }

  // check y-axis collisions
  if(circleY + circleRadius > height || circleY - circleRadius < 0) {
    // reverse direction
    yVelocity = -yVelocity;
  }

  ellipse(circleX, circleY, circleDiameter);
}