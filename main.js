let  posY =220;
let posX= 10;
let ranH=350;
let ranH1=350;
let vb=10;
let vp=20;
let sc=0;
var stt= document.querySelector("#stt");
var score=document.querySelector("#score");
randomh();

function downer(){
    var bird = document.querySelector("#birdimg");
    posY = posY + vb;
    let py = posY.toString()+"px";
    bird.style.top= py;
    if(posY>640){
        posY=0;
    }
}

function begin(){
    vb=10; 
    vp=20;
    posX=-20;
    posY=220;
    stt.innerHTML="";
    sc=0;
    score.innerHTML="";
}

function upper(){
    var bird = document.querySelector("#birdimg");
    posY = posY -100;
    let py = posY.toString() + "px";
    bird.style.top = py;
    if(posY <20){
        posY = 220;
    }
    console.log("posy"+posY);
}

function pipeMove(){
    var piPe = document.querySelector("#pipeimg");
    var piPerotate = document.querySelector("#pipeimgrotate");
    posX = posX +vp;
    let px = posX.toString() + "px";
    piPe.style.right = px;
    piPerotate.style.right= px ;
    if(posX>=420){
        posX=-20;
    }
       
}

function randomNum(min, max){
        return Math.round((Math.random()*(max-min)+min));   
}

function randomh(){
    var piPe = document.querySelector("#pipeimg");
    var piPerotate = document.querySelector("#pipeimgrotate");
    ranH = ranH + randomNum(-100,100);
    ranH1 = 680-ranH - 200;
    let h = ranH.toString()+"px";
    let h1 = ranH1.toString()+ "px";
    if(h==h1){
        h="300px";
        h1= "180px";
    }
    if(h1<0){
         h1="180px";
    }
    if(h<0){
         h="180px";
    }
    if(ranH>500){
        ranH = randomNum(100,600);
    }
    if(ranH<20){
        ranH = randomNum(100,600);
    }
    if(ranH1>500){
        ranH1 = randomNum(100,600);
    }
    if(ranH1<20){
        ranH1 = randomNum(100,600);
    }
    piPe.style.height = h;
    piPerotate.style.height = h1;
    console.log("h:"+h);
    console.log("h1:"+h1);
   
}

function relatedfunc(){
    if(posX>=(-1)&&posX<=0){
        randomh();
    }
}

function logicGame(){
    var piPe = document.querySelector("#pipeimg");
    var piPerotate = document.querySelector("#pipeimgrotate");
    //game over logic
    if((posY+piPe.height)>700&&posX>=310&&posX<=370){
        // console.log("game over");
        vb=0;
        vp=0;
        stt.innerHTML="GAME OVER";
    }
    if(posY<piPerotate.height&&posX>=310&&posX<=370){
        // console.log("game over");
        vb=0;
        vp=0;
        stt.innerHTML="GAME OVER";
    }
    if(posY>=(piPerotate.height-10)&&posY<=(piPerotate.height+30)&&posX>=300&&posX<=550){
        vb=0;
        vp=0;
        stt.innerHTML="GAME OVER";
    }
    if(posY>=(piPerotate.height+180)&&posY<=(piPerotate.height+210)&&posX>=300&&posX<=550){
        vb=0;
        vp=0;
        stt.innerHTML="GAME OVER";
    }
    if(posY>600){
        // console.log("game over");
        vb=0;
        vp=0;
        stt.innerHTML="GAME OVER";
    }
    // score++
    if(posY>piPerotate.height&&posY<(piPerotate.height+200)&&posX>=310&&posX<=320&&vb>0){
        sc++;
        score.innerHTML=sc;
    }
   
}

const bird = setInterval(downer,100);
const pipe=setInterval(pipeMove,100);
const logic= setInterval(logicGame,100);
setInterval(relatedfunc,100);
