class Player {
    static SPEED = 6;
    static GRAVITY = 0.4;
    static LIFT = -12;

    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.diameter = this.radius * 2;

        this.yVelocity = 0;
    }

    update() {
        if(keyIsDown(LEFT_ARROW)) {
            this.moveLeft();
        }

        if(keyIsDown(RIGHT_ARROW)) {
            this.moveRight();
        }

        // this.yVelocity += Player.GRAVITY;        
        // this.y += this.yVelocity;        

        if(!this.isOnGround()) {
            // fall
            this.yVelocity += Player.GRAVITY;
        } else {
            // Player is on the ground - stop falling.
            this.yVelocity = 0;
        }

        this.y += this.yVelocity;

        this.x = constrain(this.x, 0 + this.radius, width - this.radius);
        this.y = constrain(this.y, 0 + this.radius, height - this.radius);        

        this.draw();
    }

    draw() {
        ellipse(this.x, this.y, this.diameter);
    }

    moveLeft() {
        this.x -= Player.SPEED;
    }

    moveRight() {
        this.x += Player.SPEED;
    }

    jump() {
        this.yVelocity += Player.LIFT;
        this.y += this.yVelocity;
    }

    isOnGround() {
        return height - this.radius === this.y;
    }
}