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

// const pGajah = document.getElementsByClassName('gajah')[0];
// const pOrang = document.getElementsByClassName('orang')[0];
// const pSemut = document.getElementsByClassName('semut')[0];
// pGajah.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     const info = document.getElementsByClassName('info')[0];
//     info.innerHTML = hasil;
// });
//
// pOrang.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     const info = document.getElementsByClassName('info')[0];
//     info.innerHTML = hasil;
// });
//
// pSemut.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     const info = document.getElementsByClassName('info')[0];
//     info.innerHTML = hasil;
// });

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    setInterval()
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
        const info = document.getElementsByClassName('info')[0];
        info.innerHTML = hasil;
    });
});