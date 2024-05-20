// TODO: Define any global variables you need.

function setup() {
	// TODO: Create the canvas and any other setup you need.
}

function draw() {
  background(0);

  /* 
	  TODO:
	  Update and display paddles and ball
	  Check for ball hits to the paddle and respond accordingly.
  */
	if(ball.hits(leftPaddle) || ball.hits(rightPaddle)) {
		ball.changeXVelocity();
	}
  
}
