const counter = document.getElementById('counter');
const pause = document.getElementById('pause');
let timer = 0;
let pauseBtn = false;
function time(){
  pause.addEventListener('click', ()=> {
    pauseBtn = pauseBtn ? true:false;
  }
  if (pauseBtn) {
    clearInterval(intervalID);
  }
}

let intervalID = setInterval(function () {
  timer++;
  counter.innerText = timer;
}, 1000);
