let nomeUsuario = document.getElementById("nomeUsuario"); // pega o campo onde o usuário digita o nome
let mensagem = document.getElementById("mensagem"); // pega o lugar onde a mensagem vai aparecer
let btnCadastrar = document.getElementById("btnCadastrar"); // pega o botão
let nome // variável para guardar o nome

btnCadastrar.addEventListener("click", () => { // quando clicar no botão

    nome = nomeUsuario.value; // pega o nome digitado

    if (nome) { // verifica se foi digitado algo
        mensagem.innerText = `Olá ${nome}, seja bem-vindo!`; // mostra mensagem com o nome
    }
});