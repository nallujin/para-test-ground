function reco(n) {
    if (n === 0) return;
    console.log(n);
    return reco(n-1);
}

reco(10);