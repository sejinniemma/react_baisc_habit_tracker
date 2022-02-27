"use strict";

// 1. bring all input value on the list
// 2. remove list when click trash button
// 3. all reset when click reset button
// 4. save the data to the boxes

const calender = document.querySelector(".date");
const cafeSelect = document.querySelector("#cafe-select");
const coffeeInput = document.querySelector(".coffeeName");
const priceInput = document.querySelector(".price");
const addBtn = document.querySelector(".addBtn");
const items = document.querySelector(".items");
const resetBtn = document.querySelector(".resetBtn");
const total = document.querySelector(".total");
let totalPrice = 0;

function onAdd() {
  const coffeeInputValue = coffeeInput.value;
  const priceInputValue = Number(priceInput.value);
  const date = document.querySelector(".date");
  const cafeSelectValue = cafeSelect.value;
  const curretDate = date.value;
  const item = createElement(
    coffeeInputValue,
    priceInputValue,
    curretDate,
    cafeSelectValue
  );
  items.appendChild(item);
  addPrice(priceInputValue);
  coffeeInput.value = "";
  priceInput.value = "";
  coffeeInput.focus();
}

function addPrice(price) {
  totalPrice += price;
  total.textContent = `Total price : $${totalPrice}`;
}

function createElement(coffeeName, price, date, cafe) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");
  itemRow.innerHTML = `
    ${date} ${coffeeName} ${cafe} $${price}
    <div class="underline"></div>
`;
  return itemRow;
}

addBtn.addEventListener("click", () => {
  if (coffeeInput.value === "" || priceInput.value === "") {
    return;
  }
  onAdd();
});

function keyPress(input) {
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      onAdd();
    }
  });
}

keyPress(coffeeInput);
keyPress(priceInput);

resetBtn.addEventListener("click", () => {
  items.innerHTML = "";
  total.textContent = "";
});
