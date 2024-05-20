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

  if(keyIsDown(UP_ARROW)) {  
      circleY -= speed;
    
  } else if(keyIsDown(DOWN_ARROW)){
      circleY += speed;        
  }

  if(keyIsDown(RIGHT_ARROW)) {
      circleX += speed;

  } else if(keyIsDown(LEFT_ARROW)){
      circleX -= speed;    
    
  }
  circleX = constrain(circleX, 0 + circleRadius, width - circleRadius);
  circleY = constrain(circleY, 0 + circleRadius, height - circleRadius);

  ellipse(circleX, circleY, circleDiameter);
}

