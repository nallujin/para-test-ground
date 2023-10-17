// Async is start something now and finish it later
// Async is non-blocking
console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback functions')
}, 2000);

console.log(3);
console.log(4);