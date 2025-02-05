//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
//Variável para instanciar a lista de amigos
let listaAmigoSecreto = [];
function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Por favor, digite o nome de um amigo.");
        return;
    }
    listaAmigoSecreto.push(amigo);
    document.getElementById("amigo").value = "";
    exibirAmigos();
}   
//Função para Exibir os Amigos
function exibirAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigoSecreto.length; i++) {
        let amigo = listaAmigoSecreto[i];
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);    
    }
}
//Função para sortear Amigos

function sortearAmigo() {
    let amigoSecreto = listaAmigoSecreto[Math.floor(Math.random() * listaAmigoSecreto.length)]; 
    let resultado = document.getElementById("resultado");
    resultado.textContent = "O amigo secreto escolhido foi: " + amigoSecreto;   
}     
