// Membuat object
// Object literal
let mhs1 = {
    nama: "Sandhika Galih",
    nrp: '1231231231',
    email: "sandhikagalih@unpas.ac.id",
    jurusan: "Teknik Informatika"
}

let mhs2 = {
    nama: "Dodi",
    nrp: '3321231231',
    email: "dodd@unpas.ac.id",
    jurusan: "Teknik Industri"
}


// Function declaration
function buatObjMhs(nama, nrp, email, jurusan) {
    let mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

let mhs3 = buatObjMhs("bujang", "1233213213", "bahlul@gmail.com", "Teknik Gelembung");
// console.log(mhs3.jurusan);


// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

let mhs7 = new Mahasiswa("Wasu", "8908908901", "wuish@gmail.com", "Teknik Membaca");


// Membuat object
function Halo() {
    console.log(this);
}

let btk = {};
btk.shu = function() {
    console.log(this);
}

new btk.shu();
btk.shu();











