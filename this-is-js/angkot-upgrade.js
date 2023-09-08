let penumpang = [];
let tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length === 0) {   // jika angkot kosong
        penumpang.push(namaPenumpang);  // tambah penumpang di awal array
        return penumpang;   // kembalikan isi array & keluar dari function
    } else {    // else
        for (let i= 0; i < penumpang.length; i++){   // telusuri seluruh kursi dari awal
            if (penumpang[i] === undefined) {   // jika ada kursi kosong
                penumpang[i] = penumpang.splice(i, 0, namaPenumpang);   // tambah penumpang di kursi tersebut
                return penumpang;// kembalikan isi array & keluar dari function
            } else if (penumpang[i] === namaPenumpang){// jika sudah ada nama yang sama
                console.log(namaPenumpang + " sudah ada di dalam angkot, no. " + i); // tampilkan pesan kesalahannya
                return penumpang;   // kembalikan isi array & keluar dari function
            } else {    // jika seluruh kursi terisi
                penumpang.push(namaPenumpang);// tambah penumpang di akhir array
                return penumpang;    // kembalikan isi array & keluar dari function
            }
        }
    }
}

tambahPenumpang("jamal", penumpang);
tambahPenumpang("ucup", penumpang);
tambahPenumpang("mamat", penumpang);
tambahPenumpang("soni", penumpang);
tambahPenumpang("panjul", penumpang);
penumpang[1] = undefined;
tambahPenumpang("pickup", penumpang);
console.log(penumpang);