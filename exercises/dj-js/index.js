
document.getElementById("box").addEventListener("mouseover", mouseOver);
document.getElementById("box").addEventListener("mouseout", mouseOut);
 
function mouseOver(){
    document.getElementById("box").style.backgroundColor = "blue";
}
function mouseOut(){
    document.getElementById("box").style.backgroundColor = "purple";
}

document.getElementById("box").addEventListener("mousedown", mouseDown);
document.getElementById("box").addEventListener("mouseup", mouseUp);

function mouseDown(){
    document.getElementById("box").style.backgroundColor = "red";
}
function mouseUp(){
    document.getElementById("box").style.backgroundColor = "yellow";
}

document.getElementById("box").addEventListener("doubleclick", ondblclick);

function ondblclick(){
    document.getElementById("box").style.backgroundColor = "green";
}

document.getElementById("page").addEventListener("mouseover", mouseOver);
document.getElementById("page").addEventListener("mouseout", mouseOut);
 
function mouseOver(){
    document.getElementById("page").style.backgroundColor = "orange";
}
function mouseOut(){
    document.getElementById("page").style.backgroundColor = "white";
}