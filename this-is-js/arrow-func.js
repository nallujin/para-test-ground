// Function expression
// const tampilNama = function (nama) {
//     return `Halo ${nama}!`
// }

// Implicit return
// const tampilNama = nama =>  `Halo ${nama}!`;
// const pagi = () => 'Hello world!';
//
//
// console.log(tampilNama('cuy'));
// console.log(pagi());

// Closure v 2.0
// function createCounter() {
//     let counter = 0;
//
//      const increment = () => {counter += 1};
//
//     const getCount = () => counter;
//     return {increment, getCount};
// }
//
// let counter1 = createCounter();
// counter1.increment();
// counter1.increment();
// console.log(counter1.getCount()); // Should output 2
//
// const counter2 = createCounter();
// counter2.increment();
// console.log(counter2.getCount()); // Should output 1

// Konsepthis pada arrow function
// Constructor function
// const Mahasiswa = function () {
//     this.nama = "sandhika";
//     this.umur = 33;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, saya umur ${this.umur}`)
//     }
// }
//
// const sandhika = new Mahasiswa();

// Arrow function
// const Mahasiswa = function () {
//     this.nama = "sandhika";
//     this.umur = 33;
//     this.sayHello = () =>  {
//         console.log(`Halo, nama saya ${this.nama}, saya umur ${this.umur}`)
//     }
// }
//
// const sandhika = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function(){
    console.log(this);
})