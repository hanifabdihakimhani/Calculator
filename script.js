const numButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operation]');
const display = document.getElementById('display-value');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
let result = "";

function add(a, b) { return a + b };
function subtract(a, b) { return a - b };
function multiply(a, b) { return a * b };
function divide(a, b) { return a / b };

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function updateDisplay() {
}

function clearDisplay() {

}


numButton.forEach(button => {
    button.addEventListener('click', function (e) {
        number = e.target.dataset.number;
        result += number;
        display.value = result;
    })
})

operatorButton.forEach(button => {
    button.addEventListener('click', function (e) {
        operator = e.target.dataset.operation;
    })
})

equalsButton.addEventListener('click', function (e) {
    result = operate(operator, a, b);
})

clearButton.addEventListener('click', function () {
    result = "";
    display.value = result;
})