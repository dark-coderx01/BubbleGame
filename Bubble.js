var score = 0;
var timer = 10;
var ranhit = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreValue").textContent = score;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 176; i++) {
    var num = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${num}</div>`;
  }

  document.querySelector("#content").innerHTML = clutter;
}

function runTimer() {
  var timerclr = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(timerclr);
      document.querySelector(
        "#content"
      ).innerHTML = `<h2>Game-Over<br>Your Score is : ${score}<br><button id="tryAgain"><a href="Bubble.html">Try Again!</a></button></h2>`;
    }
  }, 1000);
}
function getNewHit() {
  ranhit = Math.floor(Math.random() * 10);
  document.querySelector("#hitValue").textContent = ranhit;
}

document
  .querySelector("#content")
  .addEventListener("click", function (details) {
    var clickedNum = Number(details.target.textContent);
    if (clickedNum == ranhit) {
      increaseScore();
      getNewHit();
      makeBubble();
    }
  });

// getNewHit();
// runTimer();
//makeBubble();
var startGame = document.querySelector("#startGame");
startGame.addEventListener("click", makeBubble);
startGame.addEventListener("click", runTimer);
startGame.addEventListener("click", getNewHit);
var gameInfo = document.querySelector(".gameInfo");
var info = document.querySelector(".fa-circle-info");
info.addEventListener("click", show);
function show() {
  if (gameInfo.style.display === "none") {
    gameInfo.style.display = "block";
  } else {
    gameInfo.style.display = "none";
  }
}
