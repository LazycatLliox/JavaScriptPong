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



let xSpeed = 4;
let ySpeed = 2;

const PADDLE_WIDTH = 5;
const PADDLE_HEIGHT = 20;
const PADDLE_OFFSET = 10;
let leftPaddleTop = 10;
let rightPaddleTop = 30;

document.addEventListener("mousemove", e =>{
    rightPaddleTop = e.y - canvas.offsetTop
});

let ballPosition = {x: 20, y: 30}

function Draw(){
    // fill the canvas with black
    ctx.fillStyle = "black"; 
    ctx.fillRect(0, 0, width, height);

    // Everything Else Will be white 
    ctx.fillStyle = "white";
    
    // draw ball
    ctx.fillRect(ballPosition.x, ballPosition.y, BALL_SIZE, BALL_SIZE);

    // Draw Paddles 
    ctx.fillRect(
        PADDLE_OFFSET, 
        leftPaddleTop,
        PADDLE_WIDTH,
        PADDLE_HEIGHT
    );

    ctx.fillRect(
        width - PADDLE_WIDTH - PADDLE_OFFSET,
        rightPaddleTop,
        PADDLE_WIDTH,
        PADDLE_HEIGHT

    );
}

function Update(){
    ballPosition.x += xSpeed;
    ballPosition.y += ySpeed;
    
}

function checkPaddleCollision(ball, paddle){
    // check if the paddle and ball overlap vertically and horizontally
    return(
        ball.left < paddle.right &&
        ball.right < paddle.left &&
        ball.top < paddle.bottom &&
        ball.bottom < paddle.top
    )
}

function checkCollision(){
    let ball = {
        left: ballPosition.x, 
        right: ballPosition.x + BALL_SIZE,
        top: ballPosition.y,
        bottom: ballPosition.y + BALL_SIZE
    }

    if(ball.left < 0 || ball.right > width){
        xSpeed = -xSpeed; 
    }

    if(ball.top < 0 || ball.bottom > height){
        ySpeed = -ySpeed;
    }

    let leftPaddle = {
        left: PADDLE_OFFSET,
        right: PADDLE_OFFSET + PADDLE_WIDTH,
        top: leftPaddleTop,
        bottom: leftPaddleTop + PADDLE_HEIGHT
    }


    let rightPaddle = {
        left: PADDLE_OFFSET,
        right: PADDLE_OFFSET + PADDLE_WIDTH,
        top: rightPaddleTop,
        bottom: rightPaddleTop + PADDLE_HEIGHT
    }

    if(checkPaddleCollision(ball, leftPaddle)){
        //left paddle collision happened
        xSpeed = Math.abs(xSpeed)
    }

    if(checkPaddleCollision(ball, rightPaddle)){
        xSpeed = -Math.abs(xSpeed)
    }
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
    checkCollision();

    setTimeout(gameLoop, 30);
}

gameLoop();

