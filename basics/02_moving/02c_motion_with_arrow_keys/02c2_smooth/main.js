let circleX, circleY;
const circleRadius = 25;
const circleDiameter = circleRadius * 2;
const speed = 4;

function setup() {
  createCanvas(600, 600);
  circleX = width / 2;
  circleY = height / 2;
}

function draw() {
  background(0);
  const isWithinRightBounds = circleX + circleRadius <= width;
  const isWithinLeftBounds = circleX - circleRadius >= 0;

  const isWithinUpperBounds = circleY - circleRadius >= 0;
  const isWithinLowerBounds = circleY + circleRadius <= height;

  if(keyIsDown(UP_ARROW)) {
    if(keyCode === UP_ARROW && isWithinUpperBounds){
      circleY -= speed;    
    
    }
    
  } else if(keyIsDown(DOWN_ARROW)){
    if(keyCode === DOWN_ARROW && isWithinLowerBounds){
      circleY += speed;    
    }
  }

  if(keyIsDown(RIGHT_ARROW)) {
    if (keyCode === RIGHT_ARROW && isWithinRightBounds) {    
      circleX += speed;
            
    }
  } else if(keyIsDown(LEFT_ARROW)){
    if (keyCode == LEFT_ARROW && isWithinLeftBounds) {
      circleX -= speed;    
    }
  }

  ellipse(circleX, circleY, circleDiameter);
}

