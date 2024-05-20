class Box {
    static SPEED = 2;
    static WIDTH = 20;
    static HEIGHT = 30;

    constructor(x, y) {
        this.x = x;
        this.y = y;        
    }

    update() {
        console.log('x position:', this.x);
        this.x -= Box.SPEED;
        this.draw();
    }

    draw() {
        fill(255);
        rect(this.x, this.y, Box.WIDTH, Box.HEIGHT);
    }
    
}