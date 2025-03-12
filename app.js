// Lista que guarda os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
    // Pega o campo de entrada e seu valor
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços em branco extras

    // Se o campo não estiver vazio
    if (nome !== "") {
        amigos.push(nome); // Adiciona o nome na lista
        mostrarAmigos(); // Atualiza a lista na tela
        input.value = ""; // Limpa o campo de entrada
    } else {
        alert("Digite um nome antes de adicionar.");
    }
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Adiciona cada nome na lista
    for (let nome of amigos) {
        let item = document.createElement("li"); // Cria um item de lista
        item.textContent = nome; // Define o nome no item
        lista.appendChild(item); // Adiciona o item na lista
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    let sorteio = [...amigos]; // Copia a lista de amigos
    sorteio.sort(() => Math.random() - 0.5); // Embaralha a lista

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa resultados anteriores

    // Exibe os sorteios
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        let amigo1 = amigos[i];
        let amigo2 = sorteio[i];
        li.textContent = `${amigo1} tirou ${amigo2}`;
        resultado.appendChild(li);
    }
}
