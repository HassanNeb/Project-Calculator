let num1;
let num2;
let operator;

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

console.log(add(2, 2));
console.log(subtract(4, 2));
console.log(multiply(3, 5));
console.log(divide(15, 3));

console.log(operate(add, 2, 3));
