var colors = generateRandom(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;

for (var i =0; i<squares.length;++i){
    //initial colors of the squares
    squares[i].style.background = colors[i];
    //add listener to clickers
    squares[i].addEventListener("click",function(){
    var clickedColor = this.style.background;
    // console.log(clickedColor,pickedColor);
    if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        // h1.style.background = clickedColor;
    }else{
        this.style.background = "#232323";
        messageDisplay.textContent = "Try again";
    }
    });
}
function changeColors(color){
    //change all the squares to given color
    for (var i =0; i<squares.length;++i){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandom(num){
    //generate random colors and push to the arr
    var arr = []
    for (var i = 0; i<num;++i){
        arr.push(randomColor())
    }
    return arr;    
}

function randomColor(){
    //chosing value for rgb
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ', ' + b + ")";
}
