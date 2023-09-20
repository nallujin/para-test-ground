// Write a program that checks if a given number is even or odd. Print the result.
theInput = parseInt(prompt("Please input your desired number!"));

if (theInput % 2 === 0) {
    alert(`${theInput} is even.`);
} else if (theInput % 2 !== 0) {
    alert(`${theInput} is odd.`);
}