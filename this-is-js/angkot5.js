let jmlAngkot = 10;
let angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot < 7) {
        console.log("Ankgot no. " + noAngkot + " beroperasi dengan baik.");
    } else if (noAngkot === 8 || noAngkot === 10) {
        console.log("Angkot no. " + noAngkot + " sedang lembur.");
    } else {
        console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi");
    }
}