let positionVector = null;
let velocityVector = null;
let circle = null;
const circleRadius = 24;
const circleDiameter = circleRadius * 2;

// let xVelocity = 2;
// let yVelocity = -1;

// let x;
// let y;

function setup() {
    createCanvas(600, 600);
    // x = width / 2;
    // y = height / 2;

    // Initialize position in the middle of the canvas
    positionVector = createVector(width / 2, height / 2);

    // Initialize velocity to move right and up
    velocityVector = createVector(2, -1);
}

function draw() {
    background(0);
    // x += xVelocity;
    // y += yVelocity;

    positionVector.add(velocityVector);

    // If the object has hit the edge of the canvas, reverse velocity
    if(positionVector.x + circleRadius >= width 
        || positionVector.x - circleRadius <= 0) {
            // Flip direction
            velocityVector.x = -velocityVector.x;
    }

    if(positionVector.y - circleRadius <= 0
        || positionVector.y + circleRadius >= height
    ) {
        // Flip direction
        velocityVector.y = -velocityVector.y;
    }

    circle = ellipse(positionVector.x, positionVector.y, circleDiameter);
}