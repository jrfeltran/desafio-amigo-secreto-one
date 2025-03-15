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