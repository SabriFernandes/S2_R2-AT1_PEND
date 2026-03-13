let inputTarefa = document.getElementById("inputTarefa");
let listaTarefas = document.getElementById("listaTarefas");
let btnAdicionar = document.getElementById("btnAdicionar");

btnAdicionar.addEventListener("click", () => {

    let textoTarefa = inputTarefa.value;

    // verifica se o campo não está vazio
    if (textoTarefa.trim() !== "") { //.trim não deixa espaço em branco

        // cria o item da lista
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = textoTarefa;

        // cria o botão remover
        let btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover";
        btnRemover.className = "btn btn-danger btn-sm ms-2";

        // adiciona o botão dentro do li
        li.appendChild(btnRemover);

        // adiciona o li na lista
        listaTarefas.appendChild(li);

        // evento para remover a tarefa
        btnRemover.addEventListener("click", () => {
            li.remove();
        });

        // limpa o input
        inputTarefa.value = " ";
    }

});