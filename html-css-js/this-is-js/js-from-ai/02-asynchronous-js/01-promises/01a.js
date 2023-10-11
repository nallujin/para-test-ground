// Create a promise that resolves after a delay of 2 seconds and prints a message when it resolves.
let promDelay = new Promise((resolve) => {
    setTimeout(() => {resolve("Hello world!");},2000);
});
promDelay.then(message => console.log(message));