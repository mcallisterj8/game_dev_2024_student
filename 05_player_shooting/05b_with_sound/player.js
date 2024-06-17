class Player {
    static SPEED = 5;

    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.diameter = this.radius * 2;

        this.rightEdge = this.y - this.radius;
    }

    update() {
        this.move();
        this.draw();
    }

    draw() {
        fill(255);
        ellipse(this.x, this.y, this.diameter);
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

    move() {
        // Move left or right
        if(keyIsDown(LEFT_ARROW)) {
            this.x -= Player.SPEED;

        } else if(keyIsDown(RIGHT_ARROW)) {
            this.x += Player.SPEED;
        }

        this.x = constrain(this.x, 0 + this.radius, width - this.radius);
    }

    shoot() {
        Laser.FIRE_SOUND.play();
        return new Laser(this.x, this.topEdge());
    }
}