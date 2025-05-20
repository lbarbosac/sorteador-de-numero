let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1; // número entre 1 e 10
}

function verificarChute() {
    const chute = parseInt(document.querySelector('.container__input').value);
    const mensagem = document.querySelector('.texto__paragrafo');
    const titulo = document.querySelector('h1');

    if (isNaN(chute) || chute < 1 || chute > 10) {
        titulo.textContent = "Valor inválido!";
        mensagem.textContent = "Digite um número entre 1 e 10.";
        return;
    }

    if (chute === numeroSecreto) {
        titulo.textContent = "Parabéns!";
        mensagem.textContent = `Você acertou o número secreto (${numeroSecreto}) com ${tentativas} tentativa(s)!`;
        document.getElementById("reiniciar").disabled = false;
    } else {
        titulo.textContent = "Tente novamente!";
        mensagem.textContent = chute > numeroSecreto ? "O número secreto é menor." : "O número secreto é maior.";
        tentativas++;
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;

    document.querySelector('h1').textContent = "";
    document.querySelector('.texto__paragrafo').textContent = "";
    document.querySelector('.container__input').value = "";
    document.getElementById("reiniciar").disabled = true;
}
