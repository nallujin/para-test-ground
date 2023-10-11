// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
}

let angkot1 = new Angkot("Paijo", ["Lawang", "Arjosari"], [], 0);
let angkot2 = new Angkot("Painem", ["Malang", "Jakarta"], [], 0);