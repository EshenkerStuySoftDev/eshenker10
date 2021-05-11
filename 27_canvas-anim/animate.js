/*
  Team Gies: Ethan Shenker / Ishita Gupta
  SoftDev pd1
  K27 - Guarding Against Burnout
  2021-05-10
*/

// model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground")
var dotButton = document.getElementById("dotButton"); // GET DVD BUTTON
var dvdButton = document.getElementById("createDVD")
var stop = document.getElementById("stop")

//prepare to interact with canvas in 2D
var ctx = c.getContext('2d')

var requestID;  //init global var for use with animation frames

var radius = 0.0;
var growing = true;

//var clear = function(e) {
var clear = () => {
  console.log("clear invoked...")
  ctx.clearRect(0, 0, c.width, c.height) //
};

var drawDot = () => {
  clear()
  console.log(growing)
  console.log("drawDot invoked...")

  if (growing) {
      radius += 10
      if (radius >= c.height / 2.0) {
          console.log("this happened!")
          growing = false
          window.cancelAnimationFrame(requestID); // stop the animation
      }
  } else {
      radius -= 10
      if (radius <= 0.1) {
          growing = true
          window.cancelAnimationFrame(requestID);
      }
  }

  // draw section
  ctx.beginPath();
  ctx.arc(c.width / 2.0, c.height / 2.0, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  requestID = window.requestAnimationFrame(drawDot) // call animation again
  /*
  ...to
  Wipe the canvas,
  Repaint the circle,
  ...and somewhere (where/when is the right time?)
  Update requestID to propagate the animation.
  You will need
  window.cancelAnimationFrame()
  window.requestAnimationFrame()
  */
};

// initialize DVD logo
var dvd = new Image();
dvd.src = "logo_dvd.jpg";

// starting location for DVD image (altered to center it)
var x = (c.width / 2) - 50;
var y = (c.height / 2) - 25;

// starting direction of movement
var dx = 1;
var dy = 1;

var drawDVD = () => {
  console.log("moveDVD invoked...");
  window.cancelAnimationFrame(requestID);
  clear();

  ctx.drawImage(dvd, x, y, 100, 50);
  
  // top wall or bottom
  if ( y >= c.height - 50 || y <= 0 ) {
    dy = -dy;
  }

  // left or right border
  if ( x >= c.width - 100 || x <= 0 ) {
    dx = -dx;
  }
  
  x += dx;
  y += dy;

  requestID = window.requestAnimationFrame(drawDVD)

};

//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID )
  window.cancelAnimationFrame(requestID)

  /*
  ...to
  Stop the animation
  You will need
  window.cancelAnimationFrame()
  */
};

dotButton.addEventListener( "click", drawDot )
dvdButton.addEventListener( "click", drawDVD );
stop.addEventListener( "click",  stopIt );