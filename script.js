var timer=60;
var score=0;

function makeBubble(){
    var clutter = ""

for (var i=1;i<=152;i++){
    rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector('#pbtm').innerHTML = clutter;
}


function runTimer(){
    var timerInt = setInterval(()=>{
      if(timer>=0){
      document.querySelector('#TimerValue').innerHTML = timer;
      timer--;
      }else{
        clearInterval(timerInt);
      }
    },1000);  
} 

function getNewHit(){
    var rn = Math.floor(Math.random()*10);
    document.querySelector('#hitVal').textContent = rn;
}

function increaseScore(){
    score+=10;
    document.querySelector('#scoreVal').textContent = score;
}

runTimer();
makeBubble();
getNewHit();