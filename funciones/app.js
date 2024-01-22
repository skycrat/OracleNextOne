let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);

    //el triple igual es una validacion que sale verdadera si es igual
    //en valor y en tipo de datos, de lo contrario resulta falso
    console.log(numeroDeUsuario === numeroSecreto);
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);



//desafios
function saludar(palabra){
    alert(`${palabra}`);
}

saludar('Hola, Mundo')

function saludarPersona(nombre){
    alert(`Hola, ${nombre}`);
}

function double(n){
    let dou = n ** 2
    console.log(dou);
    return dou
}

function promedio(x,y,z){
    let suma = parseInt(x + y + z);
    let promedio = suma / 3;
    return promedio;
    console.log(promedio)
}

function mayorMenor(x, y){
    if ( x > y){
        alert(`${x} es el mayor`)
    } else {
        alert(`${y} es el mayor`)
    }
}

function multiplicarMismo(num){
    let mul = num * num
    console.log(mul)
}

