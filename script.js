let red = document.getElementById("color1Original");
let yellow = document.getElementById("color2Original");
let green = document.getElementById("color3Original");
let blue = document.getElementById("color4Original");
let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");
let scoreCount = document.getElementById("count");
let clickSound = document.getElementById("clickSound")

let correctOrder = []
let playerInput = []

function getNumber(){
    let randomNumber = Math.floor(Math.random()*(4- 1 + 1) + 1)
    correctOrder.push(randomNumber);
    let i = 0
    function getColor(){
        setTimeout( function() {
            if (correctOrder[i] == 1 && red.id){
                red.style.animation = "pulse 1s 1";
                setTimeout(function() {red.style.animation = "none"}, 1000 );
            } else if (correctOrder[i] == 2){
                yellow.style.animation = "pulse 1s 1";
                setTimeout(function() {yellow.style.animation = "none"}, 1000 )
            } else if (correctOrder[i] == 3){
                green.style.animation = "pulse 1s 1";
                setTimeout(function() {green.style.animation = "none"}, 1000 )
            } else if (correctOrder[i] == 4){
                blue.style.animation = "pulse 1s 1";
                setTimeout(function() {blue.style.animation = "none"}, 1000 )
            }
            i++
            if(i < correctOrder.length){
                getColor();
            }
         },1000)
        }
        if(playerInput.length != 1){
            playerInput.length = 0
        }
        getColor()
        console.log(correctOrder)
}

async function play() {
    var audio = clickSound;
    audio.play();
}


function matchInputs() {
if(playerInput.length == correctOrder.length){
    setTimeout(getNumber(),1000)
    scoreCount.innerHTML++
    play()
}
}

function redClick(){
    playerInput.push(1)
    console.log(playerInput)
    matchInputs()
    red.style.animation = "pulse 1s 1";
    setTimeout(function() {red.style.animation = "none"}, 1000 );
}

function yellowClick(){
    playerInput.push(2)
    console.log(playerInput)
    matchInputs()
    yellow.style.animation = "pulse 1s 1";
    setTimeout(function() {yellow.style.animation = "none"}, 1000 );
}

function greenClick(){
    playerInput.push(3)
    console.log(playerInput)
    matchInputs()
    green.style.animation = "pulse 1s 1";
    setTimeout(function() {green.style.animation = "none"}, 1000 );
}

function blueClick(){
    playerInput.push(4)
    console.log(playerInput)
    matchInputs()
    blue.style.animation = "pulse 1s 1";
    setTimeout(function() {blue.style.animation = "none"}, 1000 );
}

startButton.addEventListener('click', getNumber)
red.addEventListener('click', redClick)
yellow.addEventListener('click', yellowClick)
green.addEventListener('click', greenClick)
blue.addEventListener('click', blueClick)


