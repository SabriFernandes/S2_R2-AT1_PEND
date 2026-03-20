let inputTarefa = document.getElementById("inputTarefa"); // pega o campo onde digita a tarefa
let listaTarefas = document.getElementById("listaTarefas"); // pega a lista de tarefas
let btnAdicionar = document.getElementById("btnAdicionar"); // pega o botão

btnAdicionar.addEventListener("click", () => { // quando clicar no botão

    let textoTarefa = inputTarefa.value; // pega o que foi digitado

    if (textoTarefa.trim() !== "") { // verifica se não está vazio

        let li = document.createElement("li"); // cria um item da lista
        li.className = "list-group-item d-flex align-items-center justify-content-between"; // coloca estilo

        let div = document.createElement("div"); // cria uma div
        li.appendChild(div); // coloca a div dentro do li

        let checkbox = document.createElement("input"); // cria um checkbox
        checkbox.type = "checkbox"; // define como checkbox
        checkbox.className = "me-2"; // espaço do lado
        div.appendChild(checkbox); // coloca na div

        let texto = document.createElement("texto"); // cria o texto da tarefa
        texto.innerText = textoTarefa; // coloca o texto digitado
        div.appendChild(texto); // adiciona na div

        let btnRemover = document.createElement("button"); // cria botão remover
        btnRemover.innerText = "Remover"; // texto do botão
        btnRemover.className = "btn btn-danger btn-sm ms-2"; // estilo do botão
        li.appendChild(btnRemover); // coloca no li

        listaTarefas.appendChild(li); // adiciona a tarefa na lista

        checkbox.addEventListener("change", () => { // quando marcar/desmarcar
            if (checkbox.checked) { // se estiver marcado
                li.style.backgroundColor = "lightgreen"; // muda para verde
            } else {
                li.style.backgroundColor = "white"; // volta para branco
            }
        });

        btnRemover.addEventListener("click", () => { // quando clicar em remover
            li.remove(); // remove a tarefa
        });

        inputTarefa.value = ""; // limpa o campo depois de adicionar
    }

});