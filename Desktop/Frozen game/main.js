"use strict";

const gameBtn = document.querySelector(".game__button");
const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");
const gameField = document.querySelector(".game__field");
const fieldWidth = gameField.getBoundingClientRect().width;
const fieldHeight = gameField.getBoundingClientRect().height;

const popUp = document.querySelector(".pop-up");
const popUpMessage = document.querySelector(".pop-up__message");
const popUpRefresh = document.querySelector(".pop-up__refresh");

const olafSound = new Audio("sound/olaf_pull");
const fireHalfWidth = 55;
const fireHalfHeight = 80;
const GAME_DURATION_SEC = 10;

let started = false;
let OLAF_COUNT = 20;
let FIRE_COUNT = 20;
let score = 0;
let timer = null;

//Game start!!
gameBtn.addEventListener("click", () => {
  if (started === false) {
    startGame();
  } else stopGame();
});

function startGame() {
  gameField.innerHTML = "";
  started = true;
  initGame();
  startGameTimer();
  showStopButton();
  hidePopUpMessage();
}

function stopGame() {
  started = false;
  stopGameTimer();
  hideGameButton();
  showWithPopUPMessage("Replay?");
}

//Create items and make them to be located randomly in the field
function initGame() {
  addItem("olaf", OLAF_COUNT, "images/Olaf.png");
  addItem("fire", FIRE_COUNT, "images/fire.png");
}

function addItem(className, count, imgPath) {
  const x = 0;
  const y = 0;
  const x2 = fieldWidth - fireHalfWidth;
  const y2 = fieldHeight - fireHalfHeight;

  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("src", imgPath);
    item.setAttribute("class", className);
    item.style.position = "absolute";
    item.style.left = `${randomNumber(x, x2)}px`;
    item.style.top = `${randomNumber(y, y2)}px`;
    gameField.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Game Timer
function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  makeTimer(remainingTimeSec);

  timer = setInterval(() => {
    makeTimer(--remainingTimeSec);
    if (remainingTimeSec == 0) {
      clearInterval(timer);
      finishGame(score === OLAF_COUNT);
    }
  }, 1000);
}

function stopGameTimer() {
  clearInterval(timer);
}

function makeTimer(sec) {
  const minute = Math.floor(sec / 60);
  const second = Math.floor(sec % 60);
  return (gameTimer.textContent = `${minute} : ${second}`);
}

//pop up
function showWithPopUPMessage(text) {
  popUp.style.visibility = "visible";
  popUpMessage.textContent = text;
}

function hidePopUpMessage() {
  popUp.style.visibility = "hidden";
}

// Game button
function hideGameButton() {
  gameBtn.classList.add("hide");
}

function showGameButton() {
  gameBtn.classList.remove("hide");
}

function showStopButton() {
  gameBtn.innerHTML =
    '<img width="70" height="70" src="images/stop.png" alt="button" />';
  gameBtn.style.visibility = "visible";
}

// remove olaf

gameField.addEventListener("click", onFiledClick);

function onFiledClick(event) {
  const target = event.target;
  if (!started) {
    return;
  }
  updateScoreBoard(score);
  if (target.matches(".olaf")) {
    target.remove();
    score++;
    updateScoreBoard(score);
    if (score === OLAF_COUNT) {
      finishGame(true);
    }
  } else if (target.matches(".fire")) {
    finishGame(false);
  }
}
function updateScoreBoard(score) {
  gameScore.textContent = OLAF_COUNT - score;
}

function finishGame(win) {
  started = false;
  showWithPopUPMessage(win ? "YOU WON🎊" : "YOU LOST😈");
  stopGameTimer();
  hideGameButton();
}

// Relpay button
popUpRefresh.addEventListener("click", startGame);
