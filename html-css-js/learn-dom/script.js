const theBody = document.getElementsByTagName('body')[0];
const theButton = document.querySelector('button#btn');
theButton.addEventListener('click', function(){
    theBody.classList.toggle('warna');
});

const btnBaru = document.createElement('button');
const textBtn = document.createTextNode('Acak Warna');
btnBaru.appendChild(textBtn);
btnBaru.setAttribute('type', 'button');
theButton.after(btnBaru);

btnBaru.addEventListener('click', function () {
    const r = Math.round(Math.random()*255+1);
    const g = Math.round(Math.random()*255+1);
    const b = Math.round(Math.random()*255+1);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

sMerah = document.querySelector('input[name=sMerah]');
sHijau = document.querySelector('input[name=sHijau]');
sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

sHijau.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

sBiru.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

document.body.addEventListener('mousemove', function (event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;

});