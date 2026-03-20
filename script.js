let valor = document.getElementById("valor"); // pega o campo onde o usuário digita
let btnTrocar = document.getElementById("btnTrocar"); // pega o botão
let item = document.getElementById("listaTexto"); // pega a lista onde vai adicionar os itens

btnTrocar.addEventListener("click", () => { // quando clicar no botão

    let textoArmazenado = valor.value; // pega o texto digitado

    if (textoArmazenado) { // verifica se não está vazio

        let novoItem = document.createElement("li"); // cria um item da lista

        novoItem.className = "list-group-item"; // adiciona estilo (Bootstrap)

        novoItem.innerText = textoArmazenado; // coloca o texto dentro do item

        item.appendChild(novoItem); // adiciona o item na lista

        valor.value = ""; // limpa o campo depois de adicionar
    }

});