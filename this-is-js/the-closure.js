// function init() {
//     let nama = 'Sandhika';
//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();
//
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }
//
// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');
//
// selamatPagi("Sandhika");
// selamatMalam("Galih");
// console.dir(selamatMalam);
//
// let counter = 0;
// let add = function () {
//     return ++counter;
// }

// The Trial.
function realFood () {
    const theName= "Jin";
    function realName() {
        return `Hello ${theName}, Good morning.`;
    }
    return realName;
}

nott = realFood();
console.log(nott());