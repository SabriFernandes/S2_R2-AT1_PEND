let nomeUsuario = document.getElementById("nomeUsuario");
let mensagem = document.getElementById("mensagem");
let btnCadastrar = document.getElementById("btnCadastrar");
let nome

btnCadastrar.addEventListener("click", () => {

    nome = nomeUsuario.value;

    if (nome) {
        mensagem.innerText = `Olá ${nome}, seja bem-vindo!`;
    }
});