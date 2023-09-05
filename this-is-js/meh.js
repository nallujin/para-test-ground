let kosong = "";

for (let i = 10; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        kosong += "*"
    }
    kosong += "\n"
}

console.log(kosong)