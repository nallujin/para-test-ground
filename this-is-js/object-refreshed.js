// 1. Object literal
// let mahasiswa1 = {
//     nama: "Sandhika",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
// }
// let mahasiswa2 = {
//     nama: "Doddy",
//     energi: 20,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
// }


// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {}
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//
//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan...`)
//     }
//
//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain...`)
//     };
//
//     return mahasiswa;
// }
//
// let sandhika = Mahasiswa("Sandhika", 10);
// let doddy = Mahasiswa("Doddy", 20);


// 3. Constructor Function
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan...`)
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain...`)
//     },
//     tidur: function (jam) {
//         this.energi += (jam*2);
//         console.log(`Halo ${this.nama}, selamat tidur...`)
//     }
// }
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }
//
// let sandhika =  Mahasiswa("Sandhika", 10);
// let doddy =  Mahasiswa("Doddy", 20);


// 4. Class
// class Mahasiswa{
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }
//
//     makan = function (porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama} selamat makan!`;
//     }
//
//     main = function (jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama} selamat bermain!`;
//     }
//
//     tidur = function (jam) {
//         this.energi += (jam*2);
//         return `Halo ${this.nama} selamat tidur!`;
//     }
// }
// let sandhika = new Mahasiswa("Sandhika", 10);


// JS Prototype
// let Mahasiswa = function (nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }
//
// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`)
// };
//
// Mahasiswa.prototype.main = function (jam) {
//     this.energi += jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`)
// };
//
// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam*2;
//     console.log(`Halo ${this.nama}, selamat malam dan selamat tidur!`)
// };
//
// puja = new Mahasiswa("Puja", 10);

// Execution Context (2 phase; creation & execution)
// var nama = "Sandhika"; // CREATION PHASE, GLOBAL CONTEXT
// console.log(nama);
// CREATION PHASE PADA GLOBAL CONTEXT
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window


// console.log(sayHello());
// var nama = `Sandhika`;
// var umur = 33;
// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun`;
// }

// var nama = "Sandhika Galih";
// var username = "@sandhikagalih";
//
// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }
//
// console.log(cetakURL(username));

// Hoisting.
// function a() {
//     console.log("ini a");
//     function b(){
//         console.log("ini b");
//         function c() {
//             console.log("ini c");
//         }
//         c();
//     }
//     b();
// }
// a();
