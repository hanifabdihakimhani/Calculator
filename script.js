const numButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operation]');
const display = document.getElementById('display-value');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
let numbers = [];

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

function operate(operator, numbers) {
    switch (operator) {
        case '+':
            return add(numbers);
        case '-':
            return subtract(numbers);
        case '*':
            return multiply(numbers);
        case '/':
            return divide(numbers);
    }
}

function updateDisplay() {
}

function clearDisplay() {

}


numButton.forEach(button => {
    button.addEventListener('click', function (e) {
        number = e.target.dataset.number;
        numbers += number;
        display.value = numbers;
    })
})

operatorButton.forEach(button => {
    button.addEventListener('click', function (e) {
        operator = e.target.dataset.operation;
        numbers += operator;
        display.value = numbers;
    })
})

equalsButton.addEventListener('click', function (e) {
    numbers = operate(operator, a, b);
})

clearButton.addEventListener('click', function () {
    numbers = "";
    display.value = numbers;
})