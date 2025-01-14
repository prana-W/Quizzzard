let calcInput = ""; // Stores the current calculator input

// Append a number or operator to the calculator input
function appendToCalc(value) {
    calcInput += value;
    updateCalcDisplay();
}

// Perform calculation when an operator is pressed
function performCalc(operator) {
    if (calcInput.length > 0 && !isNaN(calcInput.slice(-1))) {
        calcInput += operator;
        updateCalcDisplay();
    }
}

// Evaluate the final calculation
function calculate() {
    try {
        calcInput = eval(calcInput).toString(); // Evaluate the input string
        updateCalcDisplay();
    } catch (error) {
        calcInput = "Error";
        updateCalcDisplay();
        calcInput = ""; // Reset after error
    }
}

// Clear the calculator input
function clearCalc() {
    calcInput = "";
    updateCalcDisplay();
}

// Update the calculator display
function updateCalcDisplay() {
    const display = document.getElementById("calc-display");
    display.value = calcInput;
}
