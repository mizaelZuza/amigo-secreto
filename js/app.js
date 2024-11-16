let arrayNomes = [];

function adicionar() {
    const entradaNomes = document.getElementById("nome-amigo").value;
    incluirNomeNaLista(entradaNomes.toUpperCase());
    entradaNomes = "";
}

function incluirNomeNaLista(nome) {
    if (nome == "") {
        alert("Erro ao tentar inserir o nome! O campo nome está vazio.");
        return;
    }
    if (arrayNomes.includes(nome)) {
        alert("O nome digitado já consta na lista. Entre com seu sobrenome ou apelido.");
        return;
    }

    const nomesIncluidos = document.getElementById("lista-amigos");
    arrayNomes.push(nome);

    if (nomesIncluidos.textContent == "") {
        nomesIncluidos.textContent = nome;
    } else {
        nomesIncluidos.textContent = `${nomesIncluidos.textContent}, ${nome}`;
    }

}
function ignoreCase(array, valor) {
    return array.some(function (elemento){
        return elemento.toLowerCase() === valor.toLowerCase();
    });
}

function sortear() {
    if (arrayNomes.length > 3) {
        let listaAleatoria = embaralha(arrayNomes);

        for (let i = 0; i < listaAleatoria.length; i++) {
            if (i == listaAleatoria.length - 1) {
                sorteados(listaAleatoria[i], listaAleatoria[0]);
            } else {
                sorteados(listaAleatoria[i], listaAleatoria[i + 1]);
            }
        }
    } else {
        alert("A quantidade de nomes é inferior a necessária para a realização do sorteio! Insira pelo menos 4 nomes.");
    }

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
    return lista;
}

function sorteados(primeiroNome, segundoNome) {
    const listaSorteio = document.getElementById("lista-sorteio");
    if (listaSorteio.textContent == "") {
        listaSorteio.innerHTML = `${primeiroNome} --> ${segundoNome}<br/>`;
    } else {
        listaSorteio.innerHTML += `${primeiroNome} --> ${segundoNome}<br/>`;
    }
}

function reiniciar() {
    arrayNomes = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}