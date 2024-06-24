class Enemy {
    static SIZE = 40;
    static X_VELOCITY = 1;
    static DROP = 40;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xVelocity = Enemy.X_VELOCITY;
    }

    leftEdge() {        
        return this.x;
    }

    rightEdge() {
        return this.x + Enemy.SIZE;
    }

    draw() {
        rect(this.x, this.y, Enemy.SIZE, Enemy.SIZE);
    }

    update() {
        this.x += this.xVelocity;
        this.draw();
    }

    hasHitSideOfScreen() {
        return this.leftEdge() <= 0 || this.rightEdge() >= width;
    }

    dropAndReverseDirection() {
        this.y += Enemy.DROP;
        this.xVelocity = -this.xVelocity;
    }

}