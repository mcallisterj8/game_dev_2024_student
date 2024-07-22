class Ball {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.diameter = this.radius * 2;
  
      this.xVelocity = 2;
      this.yVelocity = 3;
      
      /*
          Suggested:
          -----------
          Create the following instance variables:
          - x
          - y
          - radius
          - diameter
          // For xVelocity & yVelocity, you can hard-code the 
          // value to be what you like, or you can modify the
          // constructor to have that be taken in during instantiation.
          - xVelocity
          - yVelocity
          
          Create following instance variables to make your code
          a bit more readable:
          - topEdge
          - bottomEdge
          - rightSide
          - leftSide
      */    
     
    }
  
    update() {
        /*
            TODO:
            Contains all of the logic related to the ball moving
            and detecting if it has hit:
                - A paddle (play or the opponent)
                - The bounds of the canvas
                    - If the top or bottom of the canvas is hit,
                        the ball should bounce off it it.
                      - If the ball hits the left or right of the canvas,
                          the ball should reset its position to be in the
                          middle of the screen, thus restarting the game.
                      
        */
  
    }
  
    draw() { // display() would be another good name for this if you like
      /*
          TODO:
          Logic related to simply drawing the ball.
          Hint: This method should be about two lines of code max.
      */
    }
  
    hits(paddle) {
        /*
            TODO: 
               Returns a boolean value of whether or not the ball has hit
               the paddle which was passed to it. This could be either the
               player's paddle or the opponent's paddle.
               
               Hint:
               One struggle will be that if the paddle passed is the player,
               then you need to check for a collision of the ball on the left
               side of the paddle (assuming your player's paddle is on the right
               of the screen); and, if you are passed the opponent paddle, then you
               need to check for a collision on the right side of the paddle (assuming
               that your opponent is on the left of the screen). Think about the value
               that the ball's velocity will have as it relates to its direction
               and how you can use that to know whether you should check for hitting
               the player's paddle or the opponent's paddle.
               
               Also, think about what it means, mathematically, to collide with a paddle.
        */
  
        /*
            Need to know: 
                - Is the ball within verticalRange?
                - Is the ball within horizontalRange?
        */
        const withinVerticalRange = this.y >= paddle.y 
                                    && this.y <= paddle.y + paddle.height;
  
        const withinHorizontalRange = (this.xVelocity > 0 ?
                                        this.x + this.radius >= paddle.x && 
                                        this.x + this.radius < paddle.x + paddle.width
                                        :
                                        this.x - this.radius < paddle.x + paddle.width &&
                                        this.x - this.radius > paddle.x);
  
    }
  
    changeXVelocity() {
      /*
          TODO:
          Change the x-velocity of the ball.
      */
    }
    
    changeYVelocity() {
      /*
          TODO:
          Change the y-velocity of the ball.
      */
    }
  }
  