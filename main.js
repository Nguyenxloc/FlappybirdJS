let posY = 220;
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
var stt = document.querySelector("#stt");
var score = document.querySelector("#score");
randomHOfPipe1();
randomHOfPipe2();

function downer() {
    var bird = document.querySelector("#birdimg");
    posY = posY + vb;
    let py = posY.toString() + "px";
    bird.style.top = py;
    if (posY > 640) {
        posY = 0;
    }
}

function begin() {
    randomHOfPipe1();
    randomHOfPipe2();
    vb = 2;
    vp = 1;
    winOrLose = 1;
    posXofPipe1 = -20;
    posXofPipe2 = -350;
    posY = 220;
    stt.innerHTML = "";
    sc = 0;
    score.innerHTML = "";
}

function upper() {
    if (winOrLose == 1) {
        var bird = document.querySelector("#birdimg");
        posY = posY - 120;
        let py = posY.toString() + "px";
        bird.style.top = py;
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
        posXofPipe1 = -80;
        randomHOfPipe1();
        
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
        posXofPipe2 = -20;
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

function checkH(h, hRotate) {
    if (h == hRotate) {
        h = "300px";
        hRotate = "180px";
    }
    if (hRotate < 0) {
        hRotate = "180px";
    }
    if (h < 0) {
        h = "180px";
    }
    if (ranHOfPipe1 > 500) {
        ranHOfPipe1 = randomNum(100, 600);
    }
    if (ranHOfPipe1 < 20) {
        ranHOfPipe1 = randomNum(100, 600);
    }
    // if (ranHOfPipeRotate1 > 500) {
    //     ranHOfPipeRotate1 = randomNum(100, 600);
    // }
    // if (ranHOfPipeRotate1 < 20) {
    //     ranHOfPipeRotate1 = randomNum(100, 600);
    // }
}

function randomHOfPipe1() {
    var pipe1 = document.querySelector("#pipe1img");
    var pipeRotate1 = document.querySelector("#pipe1imgrotate");
    ranHOfPipe1 = ranHOfPipe1 + randomNum(-100, 100);
    ranHOfPipeRotate1 = 680 - ranHOfPipe1 - 200;
    let hPipe1 = ranHOfPipe1.toString() + "px";
    let hPipeRotate1 = ranHOfPipeRotate1.toString() + "px";
    checkH(hPipe1, hPipeRotate1);
    pipe1.style.height = hPipe1;
    pipeRotate1.style.height = hPipeRotate1;
    // pipe3.style.height = hPipe3;
    // pipeRotate3.style.height = hPipeRotate3;
}
function randomHOfPipe2(){
    var pipe2 = document.querySelector("#pipe2img");
    var pipeRotate2 = document.querySelector("#pipe2imgrotate");
    ranHOfPipe2 = ranHOfPipe2 + randomNum(-100, 100);
    ranHOfPipeRotate2 = 680 - ranHOfPipe2 - 200;
    let hPipe2 = ranHOfPipe2.toString() + "px";
    let hPipeRotate2 = ranHOfPipeRotate2.toString() + "px";
    checkH(hPipe2, hPipeRotate2);
    pipe2.style.height = hPipe2;
    pipeRotate2.style.height = hPipeRotate2;
}

function relatedfunc() {
    if (posXofPipe1 >= (-1) && posXofPipe1 <= 0) {
        randomHOfPipe1();
    }
}

function logicGame() {
    var pipe1 = document.querySelector("#pipe1img");
    var pipeRotate1 = document.querySelector("#pipe1imgrotate");
    var pipe2 = document.querySelector("#pipe2img");
    var pipeRotate2 = document.querySelector("#pipe2imgrotate");
    var pipe3 = document.querySelector("#pipeimg");
    var pipeRotate3 = document.querySelector("#pipe2imgrotate");
    //game over logic
    if ((posY + pipe1.height) > 700 && posXofPipe1 >= 310 && posXofPipe1 <= 370) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        stt.innerHTML = "GAME OVER";
        console.log("posY = " + posY);
        console.log()
    }
    if (posY < pipeRotate1.height && posXofPipe1 >= 310 && posXofPipe1 <= 370) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        stt.innerHTML = "GAME OVER";
    }
    if (posY >= (pipeRotate1.height - 10) && posY <= (pipeRotate1.height + 30) && posXofPipe1 >= 300 && posXofPipe1 <= 550) {
        vb = 0;
        vp = 0;
        stt.innerHTML = "GAME OVER";
    }
    if (posY >= (pipeRotate1.height + 180) && posY <= (pipeRotate1.height + 210) && posXofPipe1 >= 300 && posXofPipe1 <= 550) {
        vb = 0;
        vp = 0;
        stt.innerHTML = "GAME OVER";
    }
    if (posY > 600) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        stt.innerHTML = "GAME OVER";
    }
    // score++
    if (posY > pipeRotate1.height && posY < (pipeRotate1.height + 200) && posXofPipe1 >= 310 && posXofPipe1 <= 320 && vb > 0) {
        sc++;
        score.innerHTML = sc;
    }

    // hit to pipe2 
    if ((posY + pipe2.height) > 700 && posXofPipe2 >= 310 && posXofPipe2 <= 370) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        stt.innerHTML = "GAME OVER";
    }
    if (posY < pipeRotate2.height && posXofPipe2 >= 310 && posXofPipe2 <= 370) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        stt.innerHTML = "GAME OVER";
    }
    if (posY >= (pipeRotate2.height - 10) && posY <= (pipeRotate2.height + 30) && posXofPipe2 >= 300 && posXofPipe2 <= 480) {
        vb = 0;
        vp = 0;
        stt.innerHTML = "GAME OVER";
    }
    if (posY >= (pipeRotate2.height + 180) && posY <= (pipeRotate2.height + 210) && posXofPipe2 >= 300 && posXofPipe2 <= 480) {
        vb = 0;
        vp = 0;
        stt.innerHTML = "GAME OVER";
    }
    if (posY > 600) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        stt.innerHTML = "GAME OVER";
    }
    // score++
    if (posY > pipeRotate2.height && posY < (pipeRotate2.height + 200) && posXofPipe2 >= 310 && posXofPipe2 <= 320 && vb > 0) {
        sc++;
        score.innerHTML = sc;
    }
}


function logicGameOver() {
    var pipe1 = document.querySelector("#pipe1img");
    var pipeRotate1 = document.querySelector("#pipe1imgrotate");
    var pipe2 = document.querySelector("#pipe2img");
    var pipeRotate2 = document.querySelector("#pipe2imgrotate");
    var pipe3 = document.querySelector("#pipeimg");
    var pipeRotate3 = document.querySelector("#pipe2imgrotate");
    var line =document.querySelector('#line-div');
    //game over logic
    //hit to the edge
    if ((posY + pipe1.height) > 700 && posXofPipe1 >= 315 && posXofPipe1 <= 370) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to below pipe1 edge");
    }
    if (posY < pipeRotate1.height && posXofPipe1 >= 315 && posXofPipe1 <= 370) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to above pipe1 edge");
    }
    //hit to the floor or ceil
    if (posY >= (pipeRotate1.height - 10) && posY <= (pipeRotate1.height + 15) && posXofPipe1 >= 310 && posXofPipe1 <= 480) {
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to ceil pipe1");
    }
    if (posY >= (pipeRotate1.height + 180) && posY <= (pipeRotate1.height + 210) && posXofPipe1 >= 310 && posXofPipe1 <= 480) {
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to floor pipe1");
    }
    if (posY > 600) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to ground A");
    }


    // hit to pipe2 
    //hit to the edge
    if ((posY + pipe2.height) > 700 && posXofPipe2 >= 315 && posXofPipe2 <= 370) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to below pipe2 edge");
    }
    if (posY < pipeRotate2.height && posXofPipe2 >= 315 && posXofPipe2 <= 370) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to above pipe2 edge");
    }
    //hit to the floor or ceil
    if (posY >= (pipeRotate2.height - 10) && posY <= (pipeRotate2.height + 30) && posXofPipe2 >= 310 && posXofPipe2 <= 450) {
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to ceil pipe2");
    }
    if (posY >= (pipeRotate2.height + 180) && posY <= (pipeRotate2.height + 210) && posXofPipe2 >= 310 && posXofPipe2 <= 450) {
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to floor pipe2");
    }
    if (posY > 600) {
        // console.log("game over");
        vb = 0;
        vp = 0;
        winOrLose = 0;
        stt.innerHTML = "GAME OVER";
        console.log("case hit to ground B");
    }

}

function logicGameScore() {
    var pipe1 = document.querySelector("#pipe1img");
    var pipeRotate1 = document.querySelector("#pipe1imgrotate");
    var pipe2 = document.querySelector("#pipe2img");
    var pipeRotate2 = document.querySelector("#pipe2imgrotate");
    var pipe3 = document.querySelector("#pipeimg");
    var pipeRotate3 = document.querySelector("#pipe2imgrotate");
    // score++
    if (posY > pipeRotate1.height && posY < (pipeRotate1.height + 200) && posXofPipe1 >= 310 && posXofPipe1 <= 320 && vb > 0) {
        sc++;
        score.innerHTML = sc;
    }
    // score++
    if (posY > pipeRotate2.height && posY < (pipeRotate2.height + 200) && posXofPipe2 >= 310 && posXofPipe2 <= 320 && vb > 0) {
        sc++;
        score.innerHTML = sc;
    }
}

const bird = setInterval(downer, 10);
const pipe1 = setInterval(pipe1Move, 10);
const pipe2 = setInterval(pipe2Move, 10);
// const pipe3 = setInterval(pipe3Move, 100);
const logic = setInterval(logicGameOver, 50);
const logic1 = setInterval(logicGameScore, 100);
setInterval(relatedfunc, 50);
