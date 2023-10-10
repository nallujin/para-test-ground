//
// function ubahWarnap2() {
//     p2.style.backgroundColor = 'lightblue';
// };
// function ubahWarnap3() {
//     p3.style.backgroundColor = 'lightblue';
// };
//
// const p3 = document.querySelector('.p3');
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnap2;
// p3.onclick = ubahWarnap3;
//
// const p4 = document.getElementsByTagName('p')[3];
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const li = document.createElement('li');
//     const liText = document.createTextNode('item nyasar');
//     li.appendChild(liText);
//     ul.appendChild(li);
// });

const p3 = document.querySelector('.p3');
p3.addEventListener('dblclick', function(){
    p3.style.backgroundColor = 'lightgreen';
})