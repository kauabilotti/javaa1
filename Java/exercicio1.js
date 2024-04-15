function somarNumero() {
    let soma = 0;
    let continuar = true;

    while(continuar) {
        let numero = parseFloat(prompt("Digite um numero (ou digite '0' para encerrar):"));


        if (!isNaN(numero)){
            soma += numero;
        }else{
            alert("por favor, digite um numero valido");
        }

        continuar = confirm("deseja adicionar mais numeros?");
    }
    alert("A soma dos numeros e:" + soma);
}