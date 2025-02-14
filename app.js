// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre) {
        amigos.push(nombre);
        actualizarLista();
        input.value = '';
    }
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (amigos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];
        const li = document.createElement('li');
        li.textContent = `El amigo secreto es: ${amigoSecreto}`;
        resultado.appendChild(li);
    } else {
        const li = document.createElement('li');
        li.textContent = 'No hay nombres en la lista.';
        resultado.appendChild(li);
    }
}