let enemy = null;

function setup() {
    createCanvas(600, 600);

    enemy = new Enemy(width / 2, height / 2);
}

function draw() {
    background(0);

    enemy.update();
    if(enemy.hasHitSideOfScreen()) {
        enemy.dropAndReverseDirection();
    }
}