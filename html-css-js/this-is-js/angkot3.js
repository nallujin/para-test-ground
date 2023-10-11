let jmlAngkot = 10;
let angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
    }
}