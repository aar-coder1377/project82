var mouseEvent = "empty";

var color = "black";
var widthofline = 1;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);




    
function my_mousedown(e) {
    color = document.getElementById("color").value;
    widthofline = document.getElementById("widthofline").value;
    radius = document.getElementById("radius").value;
    current_postion_of_x = e.clientX - canvas.offsetLeft;
    current_postion_of_y = e.clientY - canvas.offsetTop; 
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth=widthofline
    ctx.arc(current_postion_of_x, current_postion_of_y, radius, 0, 2* Math.PI);
    ctx.stroke();
    mouseEvent = "mouseDown";
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


}
