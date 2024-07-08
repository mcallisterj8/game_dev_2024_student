let positionVector = null;
let velocityVector = null;
let circle = null;

function setup() {
    createCanvas(600, 600);

    // Initialize position in the middle of the canvas
    positionVector = createVector(width / 2, height / 2);

    // Initialize velocity to move right and down
    velocityVector = createVector(2, -1);

    circle = new Circle(positionVector, velocityVector, 24);
}

function draw() {
    background(0);
    circle.update();
}
