let milli = 0;
let fullMilli = `0${milli}`;
let sec =  0;
let fullSec = `0${sec}`;
let stopwatch = `${fullSec} : ${fullMilli}`;
document.getElementById("timer").innerHTML = stopwatch;
let startTimer;
function start() {
  clearInterval(startTimer);
  startTimer = setInterval(startFunc, 10);    
}

function stop() {
clearInterval(startTimer);
}
function reset() {
    clearInterval(startTimer);
    milli =  0;
    sec =  0;
    stopwatch = `0${sec} : 0${milli}`;
    document.getElementById("timer").innerHTML = stopwatch;  
}
function startFunc() {
    milli += 1
   if(milli > 99) {
    milli = 0;
    sec += 1;
   }
   if(milli < 10) {
    fullMilli =`0${milli}`;
   }
   else{
    fullMilli =`${milli}`; 
   }
   
   if(sec < 10) {
    fullSec = `0${sec}`;
   }
   else{
    fullSec = `${sec}`;
   }
   stopwatch = `${fullSec} : ${fullMilli}`;
   document.getElementById("timer").innerHTML = stopwatch;
   }

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);