alert('Selamat datang..');
let lagi = true;
while(lagi) {
    let nama = prompt('Masukkan nama');
    alert('Halo ' + nama);
    lagi = confirm('coba lagi?');
}
alert('terima kasih');