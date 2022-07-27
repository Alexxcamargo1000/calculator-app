const buttonsNumbers = document.querySelectorAll(".number");

const btnMultiplication = document.querySelector("#multiplication");
const btnPlus = document.querySelector("#plus");
const btnMinus = document.querySelector("#minus");
const btnClear = document.querySelector("#clear");
const btnComma = document.querySelector("#comma");
const btnRadix = document.querySelector("#radix");
const btnCube = document.querySelector("#cube");
const btnSquared = document.querySelector("#squared");
const btnDivider = document.querySelector("#divider");
const btnEqual = document.querySelector("#equal");

const screen = document.getElementById("screen");

let numberOnScreen = [];
let controlNumbers = [];
let result = 0;

buttonsNumbers.forEach((btn) => {
  btn.onclick = () => {
    if (numberOnScreen.length < 18) {
      numberOnScreen.push(Number(btn.textContent));
      screen.value = numberOnScreen.join("");
    }
  };
});

btnPlus.addEventListener("click", () => {
  controlNumbers = [...controlNumbers, Number(screen.value), '+'];
  numberOnScreen = [];
});

btnMinus.addEventListener("click", () => {
  controlNumbers = [...controlNumbers, Number(screen.value), '-'];
  numberOnScreen = [];
});

btnEqual.addEventListener("click", () => {
  controlNumbers = [...controlNumbers, Number(screen.value)];
  console.log(controlNumbers);
  result = eval(controlNumbers.join(""))
  screen.value = result;

  controlNumbers = [];
  result = 0;
});

btnClear.addEventListener("click", clear);


function clear() {
  controlNumbers = [];
  result = 0;
  numberOnScreen = [];
  screen.value = 0;
}