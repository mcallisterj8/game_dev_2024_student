
let player = null;

function setup() {
    createCanvas(600, 600);
    player = new Player(width / 2, height - 20, 20);
}

function draw() {
    background(0);
    
    player.update();
}