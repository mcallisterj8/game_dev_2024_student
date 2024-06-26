class Player {
    static SPEED = 6;
    static GRAVITY = 0.4;

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

        this.yVelocity += Player.GRAVITY;
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
}