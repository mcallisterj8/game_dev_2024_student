const boxes = [];
const FRAME_AMOUNT = 100;

function setup() {
    createCanvas(600, 600);
    // start off with at least one box    
    addBox();
}

function draw() {
    background(0);
    
    if(frameCount % FRAME_AMOUNT === 0){
        addBox();
    }

    renderBoxes();
}

function addBox() {     
    boxes.push(new Box(width, random(height)));
}

function renderBoxes() {
    for(let i = boxes.length - 1; i >= 0; i--) {
        boxes[i].update();

        if(boxes[i].isOffScreen()) {
            // remove box from array
            boxes.splice(i, 1);
        }
    }
}