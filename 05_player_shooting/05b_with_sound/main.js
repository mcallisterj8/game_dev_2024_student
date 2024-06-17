const FIRE_KEY = 32; // space bar
const lasers = [];

let player = null;

function preload() {
    /**
     * In order to use loadSound(), you must have the following import in index.html:
     * https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js
     */

    Laser.FIRE_SOUND = loadSound("assets/sounds/laser_fire.mp3");

}

function setup() {
    createCanvas(600, 600);
    player = new Player(width / 2, height - 20, 20);
}

function draw() {
    background(0);
    
    player.update();

    renderLasers();
}

function renderLasers() {
    // Loop through array of lasers, and call update() 
    // on each of them
    for(let i = lasers.length - 1; i >= 0; i--) {
        lasers[i].update();

        if(lasers[i].isOffScreen()) {
            // Remove from array
            lasers.splice(i, 1);
        }
    }

}

function keyPressed() {
    if(keyCode === FIRE_KEY) {
        // shoot a laser
        lasers.push(player.shoot());        
    }
}