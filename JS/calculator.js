let calcInput = "";

function appendToCalc(value) {
  calcInput += value;
  updateCalcDisplay();
}

function performCalc(operator) {
  if (calcInput.length > 0 && !isNaN(calcInput.slice(-1))) {
    calcInput += operator;
    updateCalcDisplay();
  }
}

function calculate() {
  try {
    calcInput = eval(calcInput).toString();
    updateCalcDisplay();
  } catch (error) {
    calcInput = "Error";
    updateCalcDisplay();
    calcInput = "";
  }
}

function clearCalc() {
  calcInput = "";
  updateCalcDisplay();
}

function updateCalcDisplay() {
  const display = document.getElementById("calc-display");
  display.value = calcInput;
}
