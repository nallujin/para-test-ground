let lagi = true;
while(lagi){
// menangkap pilihan player
let p = prompt("pilih: gajah, semut, orang");
let hasil = "";

// menangkap pilihan computer & generate bilangan random.
let comp = Math.random();
if (comp < (1/3)) {
    comp = "gajah";
} else if (comp >= (1/3) && comp < (2/3)) {
    comp = "semut";
} else {
    comp = "orang";
}

// menentukan hasil
if (p === comp) {
    hasil = "seri";
} else if (p === "gajah") {
    // if (comp === "semut") {
    //     alert("anda kalah");
    // } else if ("orang") {
    //     alert("anda menang");
    // }
    hasil = (comp === "orang") ? "menang" : "kalah";
} else if (p === "semut") {
    // if (comp === "gajah") {
    //     alert("anda menang");
    // } else if (comp === "orang") {
    //     alert("anda kalah");
    // }
    hasil = (comp === "gajah") ? "menang" : "kalah";
} else if (p === "orang") {
    // if (comp === "gajah") {
    //     alert("anda kalah");
    // } else if (comp === "semut") {
    //     alert("anda menang");
    // }
    hasil = (comp === "semut") ? "menang" : "kalah";
} else {
    hasil = "memasukkan pilihan yang salah";
}

alert("Anda memilih " + p + ",\n" + "Komputer memilih " + comp + ".\n" + "Anda " + hasil + ".");
let ask = confirm("Apakah anda ingin bermain lagi?");
    if (ask === false) {
        lagi = false;
    }
    else {
        lagi = true;
    }
}

alert("terima kasih telah bermain, bos")