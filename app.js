// Recepcionando o usuário
alert('Seja Bem vindo ao Sorteador de Amigo Secreto!');

let amigosSecretos = [];
let listaDeAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

// Adicionando amigos
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome === '') {
        alert('Por favor, digite um nome antes de adicionar.');
        return;
    }

    amigosSecretos.push(nome);
    limparCampo();
    atualizarLista();
    console.log('Nome inserido: ', nome);
}

function limparCampo() {
    document.getElementById('amigo').value = '';
}

// Function para atualizar a lista
function atualizarLista() {
    listaDeAmigos.innerHTML = ''; // Limpar a lista existente

    amigosSecretos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        listaDeAmigos.appendChild(item);
    });
}

// Function para sortear um amigo secreto
function sortearAmigo() {
    if (amigosSecretos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
        return;
    }

    // Embaralhar a lista para garantir que o sorteio seja aleatório
    embaralharAmigos();

    // Limpar o resultado anterior
    resultado.innerHTML = '';

    // Escolher um amigo aleatoriamente da lista embaralhada
    let amigoEscolhido = amigosSecretos[Math.floor(Math.random() * amigosSecretos.length)];
    
    // Exibir o amigo escolhido
    resultado.innerHTML = `<li>O seu amigo ou amiga secreto(a) é: ${amigoEscolhido}</li>`;
}

// Function para embaralhar a lista de amigos
function embaralharAmigos() {
    for (let i = amigosSecretos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosSecretos[i], amigosSecretos[j]] = [amigosSecretos[j], amigosSecretos[i]];
    }
}

// Function para limpar a lista e recomeçar o sorteio
function limparLista() {
    amigosSecretos = [];
    atualizarLista();
    resultado.innerHTML = '';
}