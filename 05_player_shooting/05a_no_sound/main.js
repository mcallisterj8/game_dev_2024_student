const FIRE_KEY = 32; // space bar
const lasers = [];

let player = null;

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