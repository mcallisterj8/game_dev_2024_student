function setup() { 
	createCanvas(400, 400); // create a canvas of size 400x400 pixels
}

function draw() {
  background(0);
  fill(255, 255, 255); // fill the shape with white color
  
  let radius = 100;
  let totalVertices = 10;
  
  beginShape();
  for (let i = 0; i < totalVertices; i++) {
    // TWO_PI is defined in P5 JS as the circumference of the
    // circle in radians.
    let angle = map(i, 0, totalVertices, 0, TWO_PI);
    let x = 200 + radius * cos(angle);
    let y = 200 + radius * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);
}