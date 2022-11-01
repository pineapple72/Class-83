/** @type {HTMLCanvasElement} */
var last_x,last_y
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var color = "black";
var width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
var line_width = 1;
mouseEvent = "empty";


if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden"
}

console.log(canvas.width,canvas.height)

/* canvas.addEventListener("mousedown", myMousedown)
canvas.addEventListener("mouseleave", myMouseleave)
canvas.addEventListener("mouseup", myMouseup)
canvas.addEventListener("mousemove", myMousemove)*/
canvas.addEventListener("touchstart",myTouchstart)
canvas.addEventListener("touchmove",myTouchmove)

function myMousedown(e){
    color = document.getElementById("color").value;
    line_width = document.getElementById("lineWidth").value;
    mouseEvent = "mousedown"
    console.log(mouseEvent)
}

function myMouseleave(e){
    mouseEvent = "mouseleave";
}
function myMouseup(e){
    mouseEvent = "mouseup"
}

function myMousemove (e){
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;

        ctx.moveTo(last_x,last_y)
        ctx.lineTo(x,y)
        ctx.stroke()
    }
    last_x = x;
    last_y = y;
}

function myTouchstart(e){
    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
}

function myTouchmove(e){
    x = e.touches[0].clientX - canvas.offsetLeft;
    y = e.touches[0].clientY - canvas.offsetTop;
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;

    ctx.moveTo(last_x,last_y)
    ctx.lineTo(x,y)
    ctx.stroke()
    last_x = x;
    last_y = y;
}