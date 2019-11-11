document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("head").style.backgroundColor = "white"
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop = "5px black solid";
//document.getElementById("head").style.transform = "rotate(15deg)";

var righteye = document.getElementById("righteye");
righteye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 10) {
            clearInterval(id);
        }
    }
}

var rightnose = document.getElementById("nose");
nose.addEventListener("click", moveNoseRight);

function moveNoseRight(e) {
    var robotPart = e.target;
    var left = 100;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.left = left + '%';
        left--;
        if (left === 45) {
            clearInterval(id);
        }
    }
}

var rightmouth = document.getElementById("mouth");
mouth.addEventListener("click", moveMouthRight);

function moveMouthRight(e) {
    var robotPart = e.target;
    var left = 100;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.left = left + '%';
        left--;
        if (left === 20) {
            clearInterval(id);
        }
    }
}

var leftarm = document.getElementById("leftarm");
leftarm.addEventListener("click", moveArmDown);

function moveArmDown(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 36) {
            clearInterval(id);
        }
    }
}