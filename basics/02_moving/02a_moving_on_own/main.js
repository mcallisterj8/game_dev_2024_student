let circleX, circleY;

function setup(){
    createCanvas(600, 600);
    circleX = width / 2;
    circleY = height / 2;
}

function draw(){
    background(0);
    circleY -= 2;
    circleX += 2;
    ellipse(circleX, circleY, 50);
}