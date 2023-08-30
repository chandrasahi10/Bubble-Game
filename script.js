var timer=60;
var score=0;
var hitRn = 0;

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
        document.querySelector('#pbtm').innerHTML = `<h1 style="color:#4e253e;">Game Over</h1>`;
      }
    },1000);  
} 

function getNewHit(){
    hitRn = Math.floor(Math.random()*10);
    document.querySelector('#hitVal').textContent = hitRn;
}

function increaseScore(){
    score+=10;
    document.querySelector('#scoreVal').textContent = score;
}

document.querySelector('#pbtm')
.addEventListener("click", function(details){
  var clickedNumber =  Number(details.target.textContent);
  if(clickedNumber == hitRn){
    increaseScore();
    makeBubble();
    getNewHit();
  }
})

runTimer();
makeBubble();
getNewHit();