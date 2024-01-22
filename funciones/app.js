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

saludarPersona('katia')

function double(n){
    let dou = parseInt(n ** 2)
    console.log(dou);
    return dou
}

double(10)

function promedio(x,y,z){
    let suma = parseInt(x + y + z);
    let promedio = suma / 3;
    console.log(promedio)
    return promedio;
    
}

promedio(2,4,6)

function mayorMenor(x, y){
    let x = parseInt(prompt('introduce un numero x'))
    let y = parseInt(prompt('introduce un numero y'))

    if ( x > y) {
        alert(`${x} es el mayor`)
    } else {
        alert(`${y} es el mayor`)
    }
}

alert(`eso fue mayor y menor`)


function multiplicarMismo(num){
    console.log(num)
    return num * num
}

alert(`este es el resultado de la multiplicacion`)