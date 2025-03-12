// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    let amigo = document.getElementById('amigo');
    if (amigo.value) {
        amigos.push(amigo.value);
        const listaAmigos = document.getElementById('listaAmigos');
        const li = document.createElement('li');
        li.textContent = amigo.value;
        listaAmigos.appendChild(li);
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
    } else {
        alert("Amigo no puede estar vacio")
    }
    amigo.value = '';
}

function sortearAmigo() {
    if(amigos.length) {
        randomAmigoNro = Math.floor(Math.random() * amigos.length);
        amigoSeleccionado = amigos[randomAmigoNro];
        const resultado = document.getElementById('resultado');
        const li = document.createElement('li');
        li.textContent = amigoSeleccionado;
        resultado.appendChild(li);
    } else {
        alert("Ingresa a tus amigo primero");
    }
}