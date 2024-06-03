let player;

function setup() {
    createCanvas(600, 600);
    player = new Player(width / 2, height / 2, 25);
}

function draw() {
    background(0);

    player.update();
}
