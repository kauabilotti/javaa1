function lancamento() {
    var tempoInicial = 10;
    console.log(tempoInicial + " segundos para o lançamento.");

    var intervalo = setInterval(function() {
        tempoInicial--;
        if (tempoInicial >= 0) {
            console.log(tempoInicial + " segundos para o lançamento.");
        } else {
            clearInterval(intervalo);
            console.log("Lançamento!");
        }
    }, 1000);
}