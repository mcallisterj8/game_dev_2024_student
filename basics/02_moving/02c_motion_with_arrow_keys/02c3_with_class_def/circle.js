class Circle {
    static SPEED = 4;
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.diameter = this.radius * 2;
    }

    draw(){
        ellipse(this.x, this.y, this.diameter);
    }

    moveUp(){
        this.y -= Circle.SPEED;
        this.y = constrain(this.y, 0 + this.radius, height - this.radius);
    }

    moveDown(){
        this.y += Circle.SPEED;
        this.y = constrain(this.y, 0 + this.radius, height - this.radius);
    }

    moveLeft(){
        this.x -= Circle.SPEED;
        this.x = constrain(this.x, 0 + this.radius, width - this.radius);
    }

    moveRight(){
        this.x += Circle.SPEED;
        this.x = constrain(this.x, 0 + this.radius, width - this.radius);
    }

}