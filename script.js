let timer =60;
let score = 0;
let hitn=0;
function makeBubble (){
    let bubbleElement="";
    for (let i = 1; i <113; i++) {
        bubbleElement +=  `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector("#sbottom").innerHTML = bubbleElement;
}

function timerBubble(){
    let timerint = setInterval(function(){
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").innerHTML = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#sbottom").innerHTML=`<h1>Game Over<h1>`      
        }
    },1000);
}

function newhit(){
    hitn = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML = hitn;
}

function increasescore(){
    score +=10;
    document.querySelector("#score").innerHTML = score;
}

document.querySelector("#sbottom").addEventListener("click", function(detals)
{
    let clickNumber=Number(detals.target.textContent);
    if (clickNumber=== hitn){
        increasescore();
        makeBubble();
        newhit();
    }
}); 

makeBubble();
timerBubble();
newhit();