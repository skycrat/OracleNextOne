let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function clicado() {
    alert('El boton fue clicado');
}

function ciudadDeBrasil(){
    let ciudad = prompt('Ingrese el nombre de una ciudad de Brasil: ');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function jsLove(){
    alert('Yo amo JS');
}

function operacionSuma(){
    let x = parseInt(prompt("Ingrese un número"));
    let y = parseInt(prompt("Ingrese el segundo número"));

    alert(`La suma entre ${x} y ${y} es: ${x+y}`);
}
