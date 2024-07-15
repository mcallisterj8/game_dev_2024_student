function setup(){
    createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255, 255, 255); // fill the shape with white color
  
  beginShape();
  vertex(100, 100); // First vertex at (100, 100)
  vertex(200, 100); // Second vertex at (200, 100)
  vertex(150, 200); // Third vertex at (150, 200)
  endShape(CLOSE);  // Close the shape
}