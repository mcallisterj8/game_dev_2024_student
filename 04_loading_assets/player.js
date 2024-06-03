class Player {
    static SPEED = 6;
    static GRAVITY = 0.4;
    static LIFT = -12;

    constructor(x, y, radius, image){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.diameter = this.radius * 2;
        this.yVelocity = 0;
        this.image = image;

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
        // ellipse(this.x, this.y, this.diameter);

    /**
     * With P5 JS, when you use an image, you are getting a containing rectangle
     * to place the image inside of. The top-left corner of the image is placed at
     * the coordinates (this.x, this.y). This means that the position (this.x, this.y)
     * corresponds to the top-left corner of the rectangle that contains the image.
     *
     */
        // image(this.image, this.x, this.y, this.diameter, this.diameter);


        /**
         * If you would like to center the image inside of the containing rectangle, you do this,
         * in the case that you have a circular image, like we do.
         * Notice that doing this allows us to not have to change the logic for the collision
         * on the sides of the "bird". Doing this gives us the animation we want.
         */
        image(
            this.image, 
            this.x - this.radius, 
            this.y - this.radius, 
            this.diameter, 
            this.diameter);
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