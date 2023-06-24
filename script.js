const chance =["Rock","paper","sissor"]; 
const winningcombo=[["Rock","sissor"],["sissor","paper"],["paper",'Rock']]
let x;
const resultshow=document.getElementById("result");
const restartbutton=document.getElementById("restart")


function startgame(){
    playerwin=0;
    computerwin=0;
    scoreupdate();
    computermssge("");


    resultshow.classList.remove("show")
}
startgame
function getcomputerchoice(){
    x=Math.floor(Math.random()*3);
    return chance[x];

}
let playerwin=0;
let computerwin=0;

let mycombo;

const drawcombo=[["Rock","Rock"],["sissor","sissor"],["paper","paper"]];

var choice1=document.getElementById('playerrock')

choice1.addEventListener('click',handleClick1)

function handleClick1(e){
    x=getcomputerchoice();
    mycombo=["Rock",x]
    Result();   
    computermssge(x); 
    overcheck(); 
}
function myfunction(value){
    return (value.toString()===mycombo.toString());
}

const choice2=document.getElementById('playersissor')

choice2.addEventListener('click',handleClick2)

function handleClick2(e){
    x=getcomputerchoice();
    mycombo=["sissor",x]
    Result();   
    computermssge(x); 
    overcheck(); 
}

const choice3=document.getElementById('playerpaper')

choice3.addEventListener('click',handleClick3)

function handleClick3(e){
    x=getcomputerchoice();
    mycombo=["paper",x]
    Result();   
    computermssge(x);
    overcheck(); 
}

function Result(){
    if(winningcombo.some(myfunction)){
        score("win")
    }
    else if(drawcombo.some(myfunction)){
        score("draw");
    }
    else {
        score("lost");
    }
   


}

function score(str){
    if(str=="win"){
        playerwin+=1;
    }
    else if(str=="lost"){
        computerwin+=1;}
    
        scoreupdate();
}

function scoreupdate(){
    document.getElementById('playerscore').innerText="player score: "+playerwin;

    document.getElementById('computerscore').innerText="computer score: "+computerwin;

}

function computermssge(message){
    if(message===""){
        document.getElementById("computermssge").innerText=message;
}
    document.getElementById("computermssge").innerText="computer choose: "+message;
}




function overcheck(){
    if(playerwin==5){
        document.getElementById("winnin_mssge").innerText ="player Wins"
        resultshow.classList.add("show");
        restartbutton.addEventListener("click",startgame)


    }
    if( computerwin==5){
        document.getElementById("winnin_mssge").innerText= "computer Wins"
        resultshow.classList.add("show");
        restartbutton.addEventListener("click",startgame)
    }
    // else{
    //      startgame();
    //  }
}






