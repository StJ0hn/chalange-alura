//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; //lista de amigos

//função para adicionar amigo na lista de amigos que vão ser sorteados
function adicionar_amigo() {
    const entrada = document.getElementById('amigo');
    const nome = entrada.value.trim();

    if (nome !== "") { //se o input não estiver vazio
        amigos.push(nome); //adiciona o nome do amigo na lista
        mostrar_amigos();
        entrada.value = "" //limpando o campo de entrada
    }
    else{
        alert("Digite o nome de algum amigo antes de adicioná-lo na lista.");
    }
}


function mostrar_amigos() {
    if (amigos.length <= 1) {
        alert("Para efetuar o sorteio, é necessário adicionar pelo menos dois amigos.")
    }
}