const boxes = [];

function setup() {
    createCanvas(600, 600);
    // start off with at least one box    
    addBox();
}

function draw() {
    background(0);
    addBox();
    renderBoxes();
}

function addBox() {     
    boxes.push(new Box(width, random(height)));
}

function renderBoxes() {
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].update();
    }
}