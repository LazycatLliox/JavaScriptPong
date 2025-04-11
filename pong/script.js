/*
    JS Tennis
    By Atreyu Blum
    Created Spring 2025
    From the book: JavaScript crashcourse
*/
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

const BALL_SIZE = 5;
//A JS array is a group of key: value pairs inside of {}
/*
Refactoring: Software Devlopment term for modifying some code without changing it's behavior, usually makes the code easy to use.
*/

let ballPosition = {x: 20, y: 30}

let xSpeed = 4;
let ySpeed = 2;



function Draw(){
    ctx.fillStyle = "black"; 
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "white";
    ctx.fillRect(ballPosition.x, ballPosition.y, BALL_SIZE, BALL_SIZE);
}

function Update(){
    ballPosition.x += xSpeed;
    ballPosition.y =+ ySpeed;
}


/*
    The Game Loop: it orchestrates everything that happens for each frame of the game:
    1. Clear Canvas
    2. Draw Image(s)
    3. Get player Input
    4. Update State
    5. Check Collisions
    6. Wait a Short time
    7. Repeat
*/

function gameLoop(){
    Draw();
    Update();

    setTimeout(gameLoop, 30);
}

gameLoop();

