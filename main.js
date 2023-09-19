let posY = 220;
let posXofBase1 = -250;
let posXofBase2 = 250;
let posXofPipe1 = -20;
let posXofPipe2 = -350;
let posXofPipe3 = -150;
let ranHOfPipe1 = 350;
let ranHOfPipeRotate1 = 350;
let ranHOfPipe2 = 350;
let ranHOfPipeRotate2 = 350;
let ranHOfPipe3 = 350;
let ranHOfPipeRotate3 = 350;
let vb = 2;
let vp = 1;
let sc = 0;
let winOrLose = 1;// 0 lose 1 win
let countCircle = 0;// how many round of movement ?
let flapCount = 1;
// let bird = setInterval(downer, 10);
// let birdMovent = setInterval(flaper, 100);
// let pipe1 = setInterval(pipe1Move, 10);
// let pipe2 = setInterval(pipe2Move, 10);
// let base = setInterval(moveBase, 10);
// let logic = setInterval(logicGameOver, 1);
// let logic1 = setInterval(logicGameScore, 50);
let bird =setInterval(downer, 10);
let birdMovent = setInterval(flaper, 100);
let pipe1 = setInterval(pipe1Move, 10);
let pipe2 = setInterval(pipe2Move, 10);
let base = setInterval(moveBase, 10);
let logic = setInterval(logicGameOver, 1);
let logic1 = setInterval(logicGameScore, 50);
var stt = document.querySelector("#stt");
var score = document.querySelector("#score");
var birdPlayer = document.querySelector("#bird1img");
clearRam();
function downer() {
    posY = posY + vb;
    let py = posY.toString() + "px";
    birdPlayer.style.top = py;
    if (posY > 660) {
        posY = 0;
    }
}

function flaper() {
    flapCount = flapCount + 1;
    if (flapCount == 4) {
        flapCount = 1;
    }
    let dir = "bird" + flapCount + ".png";// auto generate like "bird1.png"
    birdPlayer.src = "img/" + dir;
}

function begin() {
    clearRam();
    bird = setInterval(downer, 10);
    birdMovent = setInterval(flaper, 100);
    pipe1 = setInterval(pipe1Move, 10);
    pipe2 = setInterval(pipe2Move, 10);
    base = setInterval(moveBase, 10);
    logic = setInterval(logicGameOver, 1);
    logic1 = setInterval(logicGameScore, 50);
    randomHOfPipe1();
    randomHOfPipe2();
    vb = 2;
    vp = 1;
    winOrLose = 1;
    countCircle = 0;
    posXofPipe1 = -20;
    posXofPipe2 = -350;
    posXofBase1 = -250;
    posXofBase2 = 250;
    posY = 220;
    stt.innerHTML = "";
    sc = 0;
    score.innerHTML = "";
}

function upper() {
    if (winOrLose == 1) {
        var bird1 = document.querySelector("#bird1img");
        posY = posY - 120;
        let py = posY.toString() + "px";
        bird1.style.top = py;
        if (posY < 20) {
            posY = 220;
        }
    }
}

function pipe1Move() {
    var pipe1 = document.querySelector("#pipe1img");
    var piperotate1 = document.querySelector("#pipe1imgrotate");
    posXofPipe1 = posXofPipe1 + vp;
    let px1 = posXofPipe1.toString() + "px";
    pipe1.style.right = px1;
    piperotate1.style.right = px1;
    if (posXofPipe1 >= 500) {
        //corrosive effect
        //run()
        //start again
        randomHOfPipe1();
        posXofPipe1 = -80;
    }
    if (posXofPipe1 == 410) {
        countCircle++;
    }
}



function pipe2Move() {
    var pipe2 = document.querySelector("#pipe2img");
    var piperotate2 = document.querySelector("#pipe2imgrotate");
    // posXofPipe3 = posXofPipe1 + vp;
    if (posXofPipe1 >= 250 || posXofPipe2 != -20) {
        posXofPipe2 = posXofPipe2 + vp;
    }
    let px2 = posXofPipe2.toString() + "px";
    pipe2.style.right = px2;
    piperotate2.style.right = px2;
    if (posXofPipe2 >= 500) {
        //corrosive effect
        //run()
        //start again
        randomHOfPipe2();
        posXofPipe2 = -80;
    }
    if (posXofPipe2 == 410) {
        countCircle++;
    }
}

function pipe3Move() {
    var pipe3 = document.querySelector("#pipe3img");
    var piperotate3 = document.querySelector("#pipe3imgrotate");

    // posXofPipe3 = posXofPipe1 + vp; 
    if (posXofPipe2 >= 160 || posXofPipe3 != 20) {
        posXofPipe3 = posXofPipe3 + vp;
    }
    let px3 = posXofPipe3.toString() + "px";
    pipe3.style.right = px3;
    piperotate3.style.right = px3;
    if (posXofPipe3 >= 400) {
        //corrosive effect
        //run()
        //start again
        posXofPipe3 = -20;
    }
}


function randomNum(min, max) {
    return Math.round((Math.random() * (max - min) + min));
}



function randomHOfPipe1() {
    var pipe1 = document.querySelector("#pipe1img");
    var pipeRotate1 = document.querySelector("#pipe1imgrotate");
    ranHOfPipe1 = randomNum(20, 300);
    ranHOfPipeRotate1 = 680 - ranHOfPipe1 - 250;
    let hPipe1 = ranHOfPipe1.toString() + "px";
    let hPipeRotate1 = ranHOfPipeRotate1.toString() + "px";
    pipe1.style.height = hPipe1;
    pipeRotate1.style.height = hPipeRotate1;
    // pipe3.style.height = hPipe3;
    // pipeRotate3.style.height = hPipeRotate3;
}

function randomHOfPipe2() {
    var pipe2 = document.querySelector("#pipe2img");
    var pipeRotate2 = document.querySelector("#pipe2imgrotate");
    ranHOfPipe2 = randomNum(20, 300);
    ranHOfPipeRotate2 = 680 - ranHOfPipe2 - 250;
    let hPipe2 = ranHOfPipe2.toString() + "px";
    let hPipeRotate2 = ranHOfPipeRotate2.toString() + "px";
    pipe2.style.height = hPipe2;
    pipeRotate2.style.height = hPipeRotate2;
}

function moveBase() {
    var base1 = document.querySelector("#base1img");
    var base2 = document.querySelector("#base2img");
    posXofBase1 = posXofBase1 + vp;
    posXofBase2 = posXofBase2 + vp;
    let baseX1 = posXofBase1.toString() + "px";
    let baseX2 = posXofBase2.toString() + "px";
    base1.style.right = baseX1;
    base2.style.right = baseX2;
    if (posXofBase1 >= 500) {
        posXofBase1 = -500;
    }
    if (posXofBase2 >= 500) {
        posXofBase2 = -500;
    }
}

function relatedfunc() {
    if (posXofPipe1 >= (-1) && posXofPipe1 <= 0) {
        randomHOfPipe1();
    }
}


function logicGameOver() {
    var pipe1 = document.querySelector("#pipe1img");
    var pipeRotate1 = document.querySelector("#pipe1imgrotate");
    var pipe2 = document.querySelector("#pipe2img");
    var pipeRotate2 = document.querySelector("#pipe2imgrotate");
    var pipe3 = document.querySelector("#pipeimg");
    var pipeRotate3 = document.querySelector("#pipe2imgrotate");
    var line = document.querySelector('#line-div');
    //game over logic
    //hit to the edge
    if ((posY + pipe1.height) > 700 && posXofPipe1 >= 315 && posXofPipe1 <= 320) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to below pipe1 edge");
        clearRam();
    }
    if (posY < pipeRotate1.height && posXofPipe1 >= 315 && posXofPipe1 <= 320) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to above pipe1 edge");
        clearRam();
    }
    //hit to the floor or ceil
    if (posY >= (pipeRotate1.height + 10) && posY <= (pipeRotate1.height + 15) && posXofPipe1 >= 310 && posXofPipe1 <= 480) {
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to ceil pipe1");
        clearRam();
    }
    if (posY >= (pipeRotate1.height + 180) && posY <= (pipeRotate1.height + 250) && posXofPipe1 >= 310 && posXofPipe1 <= 450) {
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to floor pipe1");
        clearRam();
    }
    if (posY > 600) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to ground A");
        clearRam();
    }


    // hit to pipe2 
    //hit to the edge
    if ((posY + pipe2.height) > 700 && posXofPipe2 >= 315 && posXofPipe2 <= 320) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to below pipe2 edge");
        clearRam();
    }
    if (posY < pipeRotate2.height && posXofPipe2 >= 315 && posXofPipe2 <= 320) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to above pipe2 edge");
        clearRam();
    }
    //hit to the floor or ceil
    if (posY >= (pipeRotate2.height + 10) && posY <= (pipeRotate2.height + 15) && posXofPipe2 >= 310 && posXofPipe2 <= 480) {
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to ceil pipe2");
        clearRam();
    }
    if (posY >= (pipeRotate2.height + 180) && posY <= (pipeRotate2.height + 250) && posXofPipe2 >= 310 && posXofPipe2 <= 450) {
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to floor pipe2");
        clearRam();
    }
    if (posY > 600) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to ground B");
        clearRam();
    }

}

function logicGameScore() {
    var pipe1 = document.querySelector("#pipe1img");
    var pipeRotate1 = document.querySelector("#pipe1imgrotate");
    var pipe2 = document.querySelector("#pipe2img");
    var pipeRotate2 = document.querySelector("#pipe2imgrotate");
    var pipe3 = document.querySelector("#pipeimg");
    var pipeRotate3 = document.querySelector("#pipe2imgrotate");
    if (winOrLose == 1) {
        score.innerHTML = countCircle;
    }
}

function clearRam() {
    clearInterval(bird);
    clearInterval(birdMovent);
    clearInterval(pipe1);
    clearInterval(pipe2);
    clearInterval(base);
    clearInterval(logic);
    clearInterval(logic1);
}


