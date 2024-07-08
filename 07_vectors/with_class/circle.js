class Circle {

    constructor(positionVector, velocityVector, circleRadius) {
        this.positionVector = positionVector;
        this.velocityVector = velocityVector;
        this.radius = circleRadius;
        this.diameter = this.radius * 2;
    }

    draw() {
        ellipse(this.positionVector.x, this.positionVector.y, this.diameter);
    }

    update() {
        // Add the current velocity to the position
        this.positionVector.add(this.velocityVector);

        // If hit either side, change the direction
        if(this.hasHitSideOfCanvas()) {
            this.velocityVector.x = - this.velocityVector.x;
        }

        // If hit top or bottom, change the direction
        if(this.hasHitTopOrBottomOfCanvas()) {
            this.velocityVector.y = - this.velocityVector.y;
        }

        this.draw();
    }

    rightSide() {
        return this.positionVector.x + this.radius;
    }

    leftSide() {
        return this.positionVector.x - this.radius;
    }

    top() {
        return this.positionVector.y - this.radius;
    }

    bottom() {
        return this.positionVector.y + this.radius;
    }

    hasHitSideOfCanvas() {
        return this.rightSide() >= width || this.leftSide() <= 0;
    }
    
    hasHitTopOrBottomOfCanvas() {
        return this.top() <= 0 || this.bottom() >= height;
    }
}