let valor = document.getElementById("valor");
let btnTrocar = document.getElementById("btnTrocar");
let item = document.getElementById("listaTexto");

btnTrocar.addEventListener("click", () => {

    let textoArmazenado = valor.value;

    if (textoArmazenado) {

        let novoItem = document.createElement("li");

        novoItem.className = "list-group-item";

        novoItem.innerText = textoArmazenado;

        item.appendChild(novoItem);

        valor.value = "";
    }

});