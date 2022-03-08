"use strict";

const gameBtn = document.querySelector(".game__button");
const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");
const gameField = document.querySelector(".game__field");
const popUp = document.querySelector(".pop-up");
const popUpMessage = document.querySelector(".pop-up__message");
const popUpRefresh = document.querySelector(".pop-up__refresh");
const fieldWidth = gameField.getBoundingClientRect().width;
const fieldHeight = gameField.getBoundingClientRect().height;
const elsaHalfWidth = 55;
const elsaHalfHeight = 80;
let started = false;
let OLAF_COUNT = 10;
let ELSA_COUNT = 10;
let score = null;
const GAME_DURATION_SEC = 15;
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
  addItem("elsa", ELSA_COUNT, "images/elsa.png");
}

function addItem(className, count, imgPath) {
  const x = 0;
  const y = 0;
  const x2 = fieldWidth - elsaHalfWidth;
  const y2 = fieldHeight - elsaHalfHeight;

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
    if (remainingTimeSec === 0) {
      clearInterval(timer);
      finishGame(score === OLAF_COUNT ? true : false);
    }
    makeTimer(--remainingTimeSec);
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
  updateScoreBoard(OLAF_COUNT);
  if (target.matches(".olaf")) {
    target.remove();
    score++;
    updateScoreBoard(score);
    if (score === OLAF_COUNT) {
      finishGame(true);
    }
  } else if (target.matches(".elsa")) {
    finishGame(false);
  }
}
function updateScoreBoard(score) {
  gameScore.textContent = OLAF_COUNT - score;
}

function finishGame(win) {
  started = false;
  showWithPopUPMessage(win ? "You win" : "You loose");
  stopGameTimer();
  hideGameButton();
}

// Relpay button
popUpRefresh.addEventListener("click", startGame);
