let inputTarefa = document.getElementById("inputTarefa") // pega o campo onde digita a tarefa
let listaTarefas = document.getElementById("listaTarefas"); // pega a lista de tarefas
let btnAdicionar = document.getElementById("btnAdicionar"); // pega o botão adicionar
let mensagem = document.getElementById("mensagem"); // pega o local onde aparece a mensagem

btnAdicionar.addEventListener("click", () => { // quando clicar no botão

    let texto = inputTarefa.value // pega o que foi digitado

    if (texto === " ") { // verifica se está vazio (apenas espaço)
        mensagem.innerText = "Tarefa vazia"; // mostra mensagem de erro
        mensagem.classList.remove("text-sucess"); // remove classe de sucesso
        mensagem.classList.add("text-danger") // adiciona classe de erro (vermelho)

    } else {
        let li = document.createElement("li"); // cria um item da lista
        li.innerText = texto; // coloca o texto digitado
        li.classList.add("list-group-item"); // adiciona estilo

        listaTarefas.appendChild(li); // adiciona na lista
        
        mensagem.innerText = "Tarefa adicionada"; // mensagem de sucesso
        mensagem.classList.remove("text-sucess"); // remove classe de sucesso
        mensagem.classList.add("text-danger") // adiciona classe (aqui está vermelho também)
    }

});