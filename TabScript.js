
function limpar() {
    document.location.reload(true)
}

function Exibir() {

    var Numero = parseInt(document.getElementById("Numero").value);
    var resposta = document.getElementById('resposta');
    var tabuada = '';
    

    if (isNaN(Numero)) {
        alert("Escolha uma valor!")
    }
    else {

        for (let contador = 1; contador <= 10; contador++) {
            tabuada += Numero + " x " + contador + " = " +
                Numero * contador + "<br />";

            resposta.innerHTML = tabuada;
        }
    }
}