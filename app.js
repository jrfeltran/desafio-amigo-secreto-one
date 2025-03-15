let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let texto = input.value.trim();

    if (texto) {
        amigos.push(texto);
        input.value = "";
        atualizarLista();
    } else {
        alert("Por favor, insira um nome.");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("A lista de amigos está vazia! Adicione nomes antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let sorteioDeNome = amigos[indiceSorteado];
    let resultadoSorteio = document.getElementById("resultado");
    resultadoSorteio.innerHTML = `Você tirou <strong>${sorteioDeNome}</strong> no amigo secreto!`;
}