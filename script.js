let inputTarefa = document.getElementById("inputTarefa");
let listaTarefas = document.getElementById("listaTarefas");
let btnAdicionar = document.getElementById("btnAdicionar");

btnAdicionar.addEventListener("click", () => {

    let textoTarefa = inputTarefa.value;

    if (textoTarefa.trim() !== "") { //Trim é para não haver partes em branco

        let li = document.createElement("li");
        li.className = "list-group-item d-flex align-items-center justify-content-between";

        let div = document.createElement("div");
        li.appendChild(div);

        let checkbox = document.createElement("input"); // criar checkbox
        checkbox.type = "checkbox";
        checkbox.className = "me-2";
        div.appendChild(checkbox);

        let texto = document.createElement("texto");// criar texto da tarefa
        texto.innerText = textoTarefa;
        div.appendChild(texto);

        let btnRemover = document.createElement("button"); // criar botão remover
        btnRemover.innerText = "Remover";
        btnRemover.className = "btn btn-danger btn-sm ms-2";
        li.appendChild(btnRemover);

        // adicionar tarefa na lista
        listaTarefas.appendChild(li);

        // mudar cor quando marcar
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                li.style.backgroundColor = "lightgreen";
            } else {
                li.style.backgroundColor = "white";
            }
        });

        // remover tarefa
        btnRemover.addEventListener("click", () => {
            li.remove();
        });

        // limpar input
        inputTarefa.value = "";
    }

});