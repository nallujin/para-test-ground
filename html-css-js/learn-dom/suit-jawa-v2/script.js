function getPilihanComputer() {
    const comp = Math.random();
    if (comp < (1/3)) {
        return "gajah";
    }
    else if (comp >= (1/3) && comp < (2/3)) {
        return "semut";
    }
    else {
        return "orang";
    }
}

function getHasil(comp, player) {
    if (player === comp) {
        return "SERI";
    } else if (player === "gajah") {
        return (comp === "orang") ? "MENANG" : "KALAH";
    } else if (player === "semut") {
        return (comp === "gajah") ? "MENANG" : "KALAH";
    } else if (player === "orang") {
        return (comp === "semut") ? "MENANG" : "KALAH";
    }
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if ( i === gambar.length) {
            i = 0;
        }
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        putar();

        setTimeout(function () {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            const info = document.getElementsByClassName('info')[0];
            info.innerHTML = hasil;
        }, 1000);


    });
});