// Implement a simple calculator that can perform addition, subtraction, multiplication, and division based on user input.
const theOp = prompt("Welcome to the Simple calculator.\nInput 1 for addition,\nInput 2 for subtraction,\nInput 3 for multiplication,\nInput 4 for division.");
const num1 = parseFloat(prompt("Please input the first number."));
const num2 = parseFloat(prompt("Please input the second number."));
switch(theOp) {
    case "1":
        alert(`${num1} + ${num2} is ${num1 + num2}`);
        break;
    case "2":
        alert(`${num1} - ${num2} is ${num1 - num2}`);
        break;
    case "3":
        alert(`${num1} × ${num2} is ${num1 * num2}`);
        break;
    case "4":
        alert(`${num1} ÷ ${num2} is ${num1 / num2}`);
        break;
}
