let inputTarefa = document.getElementById("inputTarefa")
let listaTarefas = document.getElementById("listaTarefas");
let btnAdicionar = document.getElementById("btnAdicionar");
let mensagem = document.getElementById("mensagem");

btnAdicionar.addEventListener("click", () => {

    let texto = inputTarefa.value

    if (texto === " ") {
        mensagem.innerText = "Tarefa vazia";
        mensagem.classList.remove("text-sucess");
        mensagem.classList.add("text-danger")

    } else {
        let li = document.createElement("li");
        li.innerText = texto;
        li.classList.add("list-group-item");

        listaTarefas.appendChild(li);
        
        mensagem.innerText = "Tarefa adicionada";
        mensagem.classList.remove("text-sucess");
        mensagem.classList.add("text-danger")
    }

});