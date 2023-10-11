let theNumber = prompt("Give me a number: ")

if (theNumber % 2 === 0) {
    alert(theNumber + " adalah bilangan GENAP.");
} else if (theNumber % 2 === 1) {
    alert(theNumber + " adalah bilangan GANJIL.");
} else {
    alert("How the hell this line got trigerred");
}