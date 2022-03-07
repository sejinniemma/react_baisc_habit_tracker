"use strict";

const gameBtn = document.querySelector(".game__button");
const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");
const gameField = document.querySelector(".game__field");
const popUp = document.querySelector(".pop-up");
const popUpMessage = document.querySelector(".pop-up__message");

const fieldWidth = gameField.getBoundingClientRect().width;
const fieldHeight = gameField.getBoundingClientRect().height;
const elsaHalfWidth = 55;
const elsaHalfHeight = 80;
let started = false;
const timer = 60;

gameBtn.addEventListener("click", () => {
  startGame();
});

function startGame() {
  started = true;
  addItem();
  startGameTimer();
  showStopButton();
}

function stopGame() {
  started = false;
  showWithPopUPMessage("You loose");
  stopGameTimer();
  hideGameButton();
}

//pop up

function showWithPopUPMessage(text) {
  popUp.style.visibilty = visible;
  popUpMessage.textContent = text;
}

//Game Timer
function startGameTimer() {
  let gameTimer = timer;
  makeTimer(gameTimer);
  const clearInterval = setInterval(() => {
    if (gameTimer === 0) {
      clearInterval.remove();
    }
    makeTimer(--gameTimer);
  }, 1000);
}

function makeTimer(sec) {
  const minute = Math.floor(sec / 60);
  const second = Math.floor(sec % 60);
  return (gameTimer.textContent = `${minute} : ${second}`);
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
}

//addItem
function addItem() {
  creatItem("images/Olaf.png", 10, "olaf");
  creatItem("images/elsa.png", 10, "elsa");
}

function creatItem(url, count, className) {
  const x = 0;
  const y = 0;
  const x2 = fieldWidth - elsaHalfWidth;
  const y2 = fieldHeight - elsaHalfHeight;

  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("src", url);
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
