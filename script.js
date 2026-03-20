let mensagem = document.getElementById("mensagem"); // pega o elemento onde a mensagem vai aparecer
let btnTrocar = document.getElementById("btnTrocar"); // pega o botão

btnTrocar.addEventListener("click", () => { // quando clicar no botão
 mensagem.innerText = "Mensagem trocada"; // muda o texto da mensagem
    
});