// // DOM Manipulation
//
// // Bikin tag, bikin isi, masukkan isinya ke dalam tag-nya
// const pBaru = document.createElement('p');
// const teksPBaru = document.createTextNode('Paragraf baru');
//
// // Simpan tulisan ke dalam paragraf
// pBaru.appendChild(teksPBaru);
//
// //Simpan PBaru di akhir section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);
//
//
// // Memasukkan sebuat list di urutan ke-2
// const liBaru = document.createElement('li'); // Membuat vas bunga
// const teksLiBaru = document.createTextNode('Item baru'); // Mengambil bunga
// liBaru.appendChild(teksLiBaru); // Meletakkan bunga pada vas
// const ul = document.querySelector('section#b ul'); // Men-target ul
// const li2 = ul.querySelector('li:nth-child(2)'); // Men-target list ke-2
//
// ul.insertBefore(liBaru, li2); // Meletakkan 'Item baru' pada list ke-2
//
// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);
//
//
// // Merubah paragraf 4 menjadi h2
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul baru!');
// h2Baru.appendChild(teksH2Baru);
// sectionB.replaceChild(h2Baru, p4);
//
// h2Baru.style.backgroundColor = 'lightgreen';
// liBaru.style.backgroundColor = 'lightgreen';
// pBaru.style.backgroundColor = 'lightgreen';

const iniVas = document.createElement('li');
const iniBunga = document.createTextNode('item nyasar');
iniVas.appendChild(iniBunga);
const meja = document.querySelector('section#b ul');
const meTing = meja.querySelector('li:nth-child(2)')
meja.insertBefore(iniVas, meTing);