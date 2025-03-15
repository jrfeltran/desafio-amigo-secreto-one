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

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("A lista de amigos está vazia, envie os nomes antes de sortear!.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let sorteioDeNome = amigos[indiceSorteado];
    let resultadoSorteio = document.getElementById("resultado");
    resultadoSorteio.innerHTML = `Você tirou ${sorteioDeNome} no amigo secreto!`;
}