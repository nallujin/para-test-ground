// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// FILTER -> (JAVASCRIPT LANJUTAN | xx)
const jslanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    // ambil durasi masing-masing video
    .map(item => item.dataset.duration)
    // ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        // 10:30 -> [10, 30] split
        const parts = waktu.split(`:`).map(part => parseFloat(part));
        return parts[0] * 60 + parts[1];
    })
    // jumlahkan semua detik
    .reduce((total, detik) => total + detik);
    // ubah formatnya jadi hh/mm/ss
    const jam = jslanjut/3600;
// simpan di DOM
console.log(jslanjut);
console.log(jam);
