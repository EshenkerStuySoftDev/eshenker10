/*
    Team Portal: Saqif Abedin & Ethan Shenker
    SoftDev pd1
    K25 -- I See a Red Door...
    2021-05-04
*/

// model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground")
var dotButton = document.getElementById("buttonCircle")
var stopButton = document.getElementById("buttonStop")

//prepare to interact with canvas in 2D
var ctx = c.getContext('2d')

//set fill color to team color
ctx.fillStyle = "#1060FF"

var requestID;  //init global var for use with animation frames


//var clear = function(e) {
var clear = () => {
  console.log("clear invoked...")
  ctx.clearRect(0, 0, c.width, c.height) //
};

var radius = 0.0;
var growing = true;

//var drawDot = function() {
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


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );