let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log(`Angkot no. ${noAngkot} beroperasi dengan baik.`);
    noAngkot++;
}

console.log("\n" + noAngkot +"\n");

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    console.log(`Angkot no. ${noAngkot} sedang tidak beroperasi.`);
}