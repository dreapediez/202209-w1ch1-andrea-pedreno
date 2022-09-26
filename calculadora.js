let getNumber = 0;
let result = 0;
let accumulated = null;

const elementsBody = document.querySelector("#screen");
const resetButton = document.querySelector(".reset");
const numbers = document.querySelectorAll(".number");
const comaButton = document.querySelector(".coma")
const functionButton = document.querySelectorAll(".function");

const addEventListenerFunction = () => {

    numbers.forEach(button => {
        button.addEventListener('click', function () {
            if (getNumber === 0) {
                elementsBody.value = '';
            }
            elementsBody.value = elementsBody.value + button.value;
            getNumber = getNumber + button.value;
        });
    });
    resetButtonFunction(); 
    comaButtonFunction();
    buttonFunction();
}

const resetButtonFunction = () => {
    resetButton.addEventListener('click', function () {
        elementsBody.value = '';
        result = 0;
        getNumber = 0;
    });
}

const comaButtonFunction = () => {
    comaButton.addEventListener('click', function () {
        if (!elementsBody.value.includes(',')) {
            elementsBody.value += ',';
            getNumber += ',';
        }
    });
}
const buttonFunction = () => {
    functionButton.forEach(functions => {
        functions.addEventListener('click', function () {
            if (functions.value !== '=') {
                accumulated = functions.value;
            }
            results(functions.value)
        });
    });
}

const results = operations => {
    switch (accumulated) {
        case '/':
            div();
            break;
        case '√':
            root();
            break;
        case '%':
            percent();
            break;
        case '*':
            multi();
            break;
        case '-':
            subtract();
            break;
        case '+':
            sum();
            break;
        default:
            break;
    }
    elementsBody.value = result;
    if (operations === '=') {
        getNumber = 0;
        accumulated = null;
    }
};

const div = () => {
    if (result !== 0) {
        result /= parseFloat(getNumber);
    } else {
        result = parseFloat(getNumber);
    }
    getNumber = 0;
}

const root = () => {
    result = Math.sqrt(parseFloat(elementsBody.value));
    getNumber = 0;
}

const percent = () => {
    result = parseFloat(elementsBody.value) / 100;
    getNumber = 0;
}

const multi = () => {
    if (result !== 0) {
        result *= parseFloat(getNumber);
    } else {
        result = parseFloat(getNumber);
    }
    getNumber = 0;
}

const subtract = () => {
    if (result !== 0) {
        result -= parseFloat(getNumber);
    } else {
        result = parseFloat(getNumber);
    }
    getNumber = 0;
}

const sum = () => {
    result += parseFloat(getNumber);
    getNumber = 0;
}


const calculator = () => {
    addEventListenerFunction();
}
calculator();