/*
    Team Portal: Saqif Abedin & Ethan Shenker
    SoftDev pd1
    K25 -- I See a Red Door...
    2021-05-04
*/

var dotOrRect = true;

function toggle() {
    dotOrRect = !dotOrRect
    if (dotOrRect) {
        document.getElementById("label").innerHTML = "Drawing Mode: Rectangle"; // changes HTML text
    } else {
        document.getElementById("label").innerHTML = "Drawing Mode: Dot"; 
    }
}

function clearCanvas() {
    const canvas = document.getElementById("slate")
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height) // clears entire rect based on canvas state variables
}

function draw(x, y) {

    const canvas = document.getElementById("slate")
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#ffffff'

    if (dotOrRect) {
        ctx.fillRect(x, y, 56, 35) // larger rect
    } else {
        ctx.fillRect(x, y, 3, 3) // tiny rect = dot
    }

}
