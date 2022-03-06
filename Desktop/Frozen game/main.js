"use strict";

const gameBtn = document.querySelector(".game__button");
const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");
const gameField = document.querySelector(".game__field");
const fieldWidth = gameField.getBoundingClientRect().width;
const fieldHeight = gameField.getBoundingClientRect().height;
const elsaHalfWidth = 55;
const elsaHalfHeight = 80;

gameBtn.addEventListener("click", () => {
  addItem();
});

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
