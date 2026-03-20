
let inputTarefa = document.getElementById("inputTarefa"); // pega o campo de input
let listaTarefas = document.getElementById("listaTarefas"); // pega a lista onde vão as tarefas
let btnAdicionar = document.getElementById("btnAdicionar"); // pega o botão de adicionar

btnAdicionar.addEventListener("click", () => { // quando clicar no botão

    let textoTarefa = inputTarefa.value; // pega o texto digitado

    if (textoTarefa.trim() !== "") { // verifica se não está vazio (trim remove espaços)

        let li = document.createElement("li"); // cria um item da lista
        li.className = "list-group-item d-flex align-items-center justify-content-between"; // adiciona estilos

        let div = document.createElement("div"); // cria uma div para organizar
        li.appendChild(div); // coloca a div dentro do li

        let checkbox = document.createElement("input"); // criar checkbox
        checkbox.type = "checkbox"; // define como checkbox
        checkbox.className = "me-2"; // adiciona espaçamento
        div.appendChild(checkbox); // coloca dentro da div

        let texto = document.createElement("texto"); // criar texto da tarefa (OBS: não é uma tag padrão)
        texto.innerText = textoTarefa; // coloca o texto digitado
        div.appendChild(texto); // adiciona na div

        let btnRemover = document.createElement("button"); // criar botão remover
        btnRemover.innerText = "Remover"; // texto do botão
        btnRemover.className = "btn btn-danger btn-sm ms-2"; // estilos do botão
        li.appendChild(btnRemover); // adiciona o botão no li

        // adicionar tarefa na lista
        listaTarefas.appendChild(li); // coloca o item na lista

        // mudar cor quando marcar
        checkbox.addEventListener("change", () => { // quando marcar/desmarcar
            if (checkbox.checked) { // se estiver marcado
                li.style.backgroundColor = "lightgreen"; // muda cor para verde
            } else {
                li.style.backgroundColor = "white"; // volta para branco
            }
        });

        // remover tarefa
        btnRemover.addEventListener("click", () => { // quando clicar em remover
            li.remove(); // remove o item da lista
        });

        // limpar input
        inputTarefa.value = ""; 
    }

});