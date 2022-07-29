const buttonsNumbers = document.querySelectorAll(".number");

const btnMultiplication = document.querySelector("#multiplication");
const btnPlus = document.querySelector("#plus");
const btnMinus = document.querySelector("#minus");
const btnClear = document.querySelector("#clear");
const btnRadix = document.querySelector("#radix");
const btnCube = document.querySelector("#cube");
const btnSquared = document.querySelector("#squared");
const btnDivider = document.querySelector("#divider");
const btnEqual = document.querySelector("#equal");
const btnComma = document.querySelector("#comma");

const screen = document.getElementById("screen");

let numberOnScreen = [];
let controlNumbers = [];
let result = 0;

buttonsNumbers.forEach((btn) => {
  btn.onclick = () => {
    if (numberOnScreen.length < 18) {
      if(btn.textContent === ',') {
        btn.textContent = '.'
      }
      numberOnScreen.push(btn.textContent);
      screen.value = numberOnScreen.join("");
    }
  };  
});

btnPlus.addEventListener("click", () => handleMathAccount("+"));

btnMinus.addEventListener("click", () => handleMathAccount("-"));

btnMultiplication.addEventListener("click", () => handleMathAccount("*"));

btnDivider.addEventListener("click", () => handleMathAccount("/"));


btnRadix.addEventListener("click", () => {
  let number = Number(screen.value);
  number = Math.sqrt(number);
  screen.value = number;
});

btnSquared.addEventListener("click", () => {
  let number = Number(screen.value);
  number = number * number;
  screen.value = number;
});

btnCube.addEventListener("click", () => {
  let number = Number(screen.value);
  number = number * number * number;
  screen.value = number;
});

btnEqual.addEventListener("click", result);

btnClear.addEventListener("click", clear);

function clear() {
  controlNumbers = [];
  result = 0;
  numberOnScreen = [];
  screen.value = 0;
}

function result() {
  controlNumbers = [...controlNumbers, getValueScreen()];
  console.log(controlNumbers);
  result = eval(controlNumbers.join(""));
  screen.value = result;

  controlNumbers = [];
  result = 0;
}

function handleMathAccount(sign) {
  controlNumbers = [...controlNumbers, getValueScreen(), sign];
  numberOnScreen = [];
  screen.value = 0;
}



function getValueScreen() {
  return Number(screen.value);
}