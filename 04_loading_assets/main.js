const SPACE_BAR = 32;

let player;
let birdImage = null;
let bg = null;


/**
 * Timing: The preload() function is called before the setup() function and
 * ensures that all assets are fully loaded before the rest of the sketch begins to execute.
 *
 * Execution: It is executed only once, similar to setup().
 *
 * Blocking Behavior: During the execution of preload(), the sketch will pause,
 * preventing the setup() function from running until all the assets have been loaded.
 * This ensures that the assets are available for immediate use in setup() and draw().
 */
function preload() {
    bg = loadImage("./assets/mountains.jpg");
    birdImage = loadImage("./assets/bird.png");
}

function setup() {
    createCanvas(600, 600);
    player = new Player(width / 2, height / 2, 25, birdImage);
}

function draw() {
    background(bg);

    player.update();
}

function keyPressed(){
    if(keyCode === SPACE_BAR && player.isOnGround()) {
        player.jump();
    }
}
