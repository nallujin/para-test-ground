// DOM SELECTION
// document.getElementById(); -> returns element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = "#CCC";
judul.innerHTML = 'Sandhika Galih';

// document.getElementsByTagName(); -> returns array -> HTML collection
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length - 1; i++) {
    p[i].style.backgroundColor = "green";
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName(); -> HTML Collection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = "halo bos";