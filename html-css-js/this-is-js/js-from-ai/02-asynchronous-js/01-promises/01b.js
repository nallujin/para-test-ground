// Create a promise that rejects after a delay of 3 seconds and prints an error message when it rejects.
let errProm = new Promise((resolve, reject) => {
    let theNumber = 19;
    let yourGuess = 23;
    if ( theNumber === yourGuess ) {
      setTimeout(() => resolve(`Your guess is correct (${yourGuess}).`), 3000);
    } else if ( theNumber !== yourGuess) {
        setTimeout(() => reject(`Your guess is incorrect (${yourGuess}). The correct answer is ${theNumber}.`), 3000);
    }
}).then(message => console.log(message))
.catch(message => console.log(message));