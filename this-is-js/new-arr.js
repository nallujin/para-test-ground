//// Manipulasi array: menambah isi array.
//// Keywords: length, join, (push, pop, unshift, shift), (slice, splice), (forEach, map), sort.
//// ----------------------------------------------------------------
let arr = ["Puja", "Wisasongko", "Cakep"];
console.log(arr);
// let arr = [];
// arr[0] = "Puja";
// arr[1] = "Wisasongko";
// arr[2] = "Keren";
//
// console.log(arr);
//
// arr[1] = undefined;
// console.log(arr);
// ----------------------------------------------------------------
//
// for (let i = 0; i < arr.length; i++) {
//     console.log("Mahasiswa ke-" + (i+1) + ": " + (arr[i]));
// }
// console.log(arr.length);
// console.log(arr.join('- '));
// ----------------------------------------------------------------
// push (+end), pop(-end), unshift(+start), shift(-start).
// arr.push("doddy");
// console.log(arr);
// ----------------------------------------------------------------
// splice(indexAwal, hapusBerapa, elemen+++)
// arr.splice(1, 2, "High", "Class");
// console.log(arr.join(" "));
// ----------------------------------------------------------------
// slice(indexAwal, indexAkhir)
// let arr2 = arr.slice(1, 3);
// console.log(arr2);
//
// let newb = "Hello world!";
// arr.forEach(function (e) {
//     console.log(e);
// });
// ----------------------------------------------------------------
let paraAngka = [1,2,10,3,20,5,8,7];
paraAngka = paraAngka.sort(function (a,b) {
    return a-b;
});
let ituAngka = paraAngka.map(function (e) {
    return e * 2;
});
console.log(ituAngka.join(' - '))