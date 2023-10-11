let penumpang = [];
let tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length === 0) {   // jika angkot kosong
        penumpang.push(namaPenumpang);  // tambah penumpang di awal array
        return penumpang;   // kembalikan isi array & keluar dari function
    } else {    // else
        for (let i= 0; i < penumpang.length; i++){   // telusuri seluruh kursi dari awal
            if (penumpang[i] === undefined) {   // jika ada kursi kosong
                penumpang[i] = namaPenumpang;    // penumpang.splice(i, 1, namaPenumpang);   // tambah penumpang di kursi tersebut
                return penumpang;   // kembalikan isi array & keluar dari function
            } else if (penumpang[i] === namaPenumpang){// jika sudah ada nama yang sama
                console.log(namaPenumpang + " sudah ada di dalam angkot, no. " + i); // tampilkan pesan kesalahannya
                return penumpang;   // kembalikan isi array & keluar dari function
            } else if ( i === penumpang.length - 1) {    // jika seluruh kursi terisi
                penumpang.push(namaPenumpang);// tambah penumpang di akhir array
                return penumpang;    // kembalikan isi array & keluar dari function
            }
        }
    }
}

let hapusPenumpang = function (namaPenumpang, penumpang) {
    // if (penumpang.find(penumpang => penumpang === namaPenumpang) === undefined) {
    //     console.log(namaPenumpang + " tidak ada di dalam Angkot.");
    // } else if (penumpang.find(penumpang => penumpang === namaPenumpang) === namaPenumpang) {
    //
    // }
    if (penumpang.length === 0) {
        console.log("Angkot masih kosong!");
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (namaPenumpang === penumpang[i]) {
                penumpang[i] = undefined;
                return penumpang;
            }
            else if (i === penumpang.length - 1) {
                console.log(namaPenumpang + "tidak ada di dalam Angkot.");
                return penumpang;
            }
        }
    }
}

// tambahPenumpang("jamal", penumpang);
// tambahPenumpang("ucup", penumpang);
// tambahPenumpang("mamat", penumpang);
// tambahPenumpang("soni", penumpang);
// tambahPenumpang("panjul", penumpang);
// penumpang[1] = undefined;
// tambahPenumpang("pickup", penumpang);
// tambahPenumpang("panjul", penumpang);
console.log(penumpang);
