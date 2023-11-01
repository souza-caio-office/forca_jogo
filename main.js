var letrasDigitadas = [];
var palavraSecretaPorLetra = [];
var listaDinamica = [];
/*
saudade
    [
        0 --> s,
        1 --> a....
    ]




*/
var tentativas = 6;
var palavras = ['DESCARTE CORRETO', 'MEIO AMBIENTE', 'PLASTICO REUTILIZVEL', 'BIOSFERA', 'CACHOEIRA', 'NATUREZA',
    'PLANTA', 'PRESERVACAO DA MATA', 'FAUNA', 'FLORA', 'AGUA', 'HABITAT',
    'SOL', 'POLUICAO', 'AQUECIMENTO GLOBAL', 'VANDERLEIA', 'MUDANCA CLIMATICA',
];
// cria a apalavra secreta
var palavraSecreta = criarPalavraSecreta();

// cria uma lista com a palavra secreta separado na lista por cada letra
palavraSecretaPorLetra = palavraSecreta.split('');


montarPalavraNaTela(palavraSecretaPorLetra)

/////////////////////////// FUN��ES
function criarPalavraSecreta() {
    // gera um indice aleat�rio entre 0 e 30 para servir de apoio na escolha da palavra que est� na lista
    var indexPalavra = parseInt(Math.random() * palavras.length);
    // passa o indice sorteado para a lista referenciar a palavra Secreta
    var palavraSecreta = palavras[indexPalavra];
    return palavraSecreta
}
function montarPalavraNaTela(palavraSecreta) {
    var palavraTela = document.getElementById("palavra-secreta");

    palavraTela.innerHTML = ""
    for (i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecretaPorLetra[i] == ' ') {
            listaDinamica[i] = "-"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        } else if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra) {
    if (tentativas > 0) {
        var resposta = document.getElementById("box-resposta")
        resposta.innerText = "";
        if (verificaSeLetraNaoFoiDigitada(letra) == 0) { // lista vazia e primeira letra escolhida   
            mudarStyleLetra("tecla-" + letra)
            comparaListas(letra)
            montarPalavraNaTela(palavraSecreta)
        }
        else if (verificaSeLetraNaoFoiDigitada(letra) == 1) {//letra repetida
            resposta.innerText = "A letra >>> " + letra + " <<< ja foi usada"
        }
        else {//letra nova
            letrasDigitadas.push(letra);
            mudarStyleLetra("tecla-" + letra)
            comparaListas(letra)
            montarPalavraNaTela(palavraSecreta)
        }
    }
}
function verificaSeLetraNaoFoiDigitada(letra) {
    response = 0;
    if (letrasDigitadas.length < 1) {
        letrasDigitadas.push(letra);
        response = 0;
    }
    else {
        for (i = 0; i <= letrasDigitadas.length; i++) {
            if (letra == letrasDigitadas[i]) {
                // se o retorno for maior ou igual a 0 existe no array o valor procurado
                if (function jaTemLetra() {
                    return (letrasDigitadas.indexOf(letra) >= 0);
                }) {
                    return response = 1
                }
            }
            else {
                response = 2;
            }
        }
    }
    return response;
}
function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#006400"
    document.getElementById(tecla).style.color = "#FFFFFF"
}
function windowRefresh(){
    window.location.reload();
}
function comparaListas(letra) {
    var resposta = document.getElementById("box-resposta")
    var pos = palavraSecretaPorLetra.indexOf(letra);
    if (pos == -1) {// significa que a letra n�o existe na palavra secreta
        tentativas--
        var tentativasRestantes = document.getElementById("box-tentativas")
        tentativasRestantes.innerHTML = "TENTATIVAS : " + tentativas
        if (tentativas == 0) {
            resposta.innerHTML = "VOCÊ PERDEU  ; -- A PALAVRA SECRETA ERA - " + palavraSecreta
        }
    } else {
        for (i = 0; i < palavraSecretaPorLetra.length; i++) {
            if (palavraSecretaPorLetra[i] == ' ') {
                listaDinamica[i] = ' ';
            } else if (palavraSecretaPorLetra[i] == letra) {
                listaDinamica[i] = palavraSecretaPorLetra[i];
            }
        }
    }
    var vitoria = "sim";
    for (var i = 0; i < palavraSecretaPorLetra.length; i++) {
        if (listaDinamica[i]  != palavraSecretaPorLetra[i]) {
            vitoria = "nao"
        }
    }
    if (vitoria == "sim") {
        resposta.innerHTML = "PARABENS VOCÊ GANHOU "
        tentativas = 0;
    }
}







