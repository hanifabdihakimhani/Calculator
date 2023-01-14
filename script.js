const numButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operation]');
const display = document.getElementById('display-value');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
let numbers = [];
let operator;
let currentInput = "";

function add(numbers) {
    let num = numbers.reduce((acc, currentValue) => {
        return acc + currentValue;
    });
    return num;
};

function subtract(numbers) {
    let num = numbers.reduce((acc, currentValue) => {
        return acc - currentValue;
    })
    return num;
};

function multiply(numbers) {
    let num = numbers.reduce((acc, currentValue) => {
        return acc * currentValue;
    })
    return num;
};

function divide(numbers) {
    let num = numbers.reduce((acc, currentValue) => {
        return acc / currentValue;
    })
    return num;
};

function operate(operator) {
    let result = numbers[0];
    switch (operator) {
        case '+':
            result = add(numbers);
            break;
        case '-':
            result = subtract(numbers);
            break;
        case '*':
            result = multiply(numbers);
            break;
        case '/':
            result = divide(numbers);
            break;
    }
    return result;
}


numButton.forEach(button => {
    button.addEventListener('click', function (e) {
        currentInput += e.target.dataset.number;
        display.value = currentInput;
    })
})

operatorButton.forEach(button => {
    button.addEventListener('click', function (e) {
        operator = e.target.dataset.operation;
        numbers.push(parseFloat(currentInput));
        currentInput = "";
        display.value = operator;
    })
})

equalsButton.addEventListener('click', function (e) {
    numbers.push(parseFloat(currentInput));
    let result = operate(operator);
    display.value = result;
    currentInput = "";
    numbers = [result];
    operator = "";
})

clearButton.addEventListener('click', function () {
    display.value = "";
    numbers = [];
    operator = "";
    currentInput = "";
})