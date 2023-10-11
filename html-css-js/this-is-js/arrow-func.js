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

// const box = document.querySelector('.box');
// box.addEventListener('click', function(){
//     console.log(this);
// })

// [1] Two arguments
// const sum = (num1, num2) => {return num1 + num2};

// [2] One argument
// const stringLength = (str) => console.log(`The length of ${str} is: ${str.length}`);
// let longestCithNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";
// stringLength(longestCithNameInTheWorld);

// [3] One argument, pt.2
// const stringLength = (str) => {
//     let length = str.length;
//     console.log(`The length of ${str} is ${length}.`);
//     return str.length;
// }
// stringLength("willynwilly");

// [4] One argument
// let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"];
// const showAlert = (name) => {
//     alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);
// }
// showAlert("Puja");

// [5] Nested function
// const  oneTwoThreeRotate = () => {
//     Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(tag){
//         tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
//     })
// }
//
// oneTwoThreeRotate()

// const add = (num1, num2) => num1 + num2;
// console.log(add(2,3))

const angka = [-1, 8, 9, 1, 4, -5, -4,3,2,9];
const newAngka = [];
for ( let i = 0; i < angka.length; i++) {
    if (angka >= 3) {
        newAngka.push(angka[i]);
    }

}

