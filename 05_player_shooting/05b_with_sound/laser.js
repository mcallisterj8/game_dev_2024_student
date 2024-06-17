class Laser {
    static SPEED = 5;
    static RADIUS = 2.5;
    static DIAMETER = Laser.RADIUS * 2;

    // This will be set in main.js and used in Player class.
    static FIRE_SOUND = null;

    constructor(x, y) {
        this.x = x;
        this.y = y;        
    }

    update() {
        // Laser always goes up
        this.y -= Laser.SPEED;
        this.draw();
    }

    draw() {
        fill(255);
        ellipse(this.x, this.y, Laser.DIAMETER);
    }

    rightEdge() {
        return this.x + this.radius;
    }

    leftEdge() {
        return this.x - this.radius;
    }

    topEdge() {
        return this.y - this.radius;
    }

    bottomEdge() {
        return this.y + this.radius;
    }

    isOffScreen() {
        const isOffTopOfScreen = this.bottomEdge() < 0;
        const isOffSideOfScreen = this.rightEdge() < 0 || 
                                    this.leftEdge() > width; 

        return isOffTopOfScreen || isOffSideOfScreen;
    }
}