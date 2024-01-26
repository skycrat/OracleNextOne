let numeroSecreto = generarNumeroSecreto();
let intentos = 1
let numeroMaximo = 30
let listNumerosSorteados = []

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos == 1 ? 'vez':'veces'}`);
        document.getElementById("reiniciar").removeAttribute('disabled');

    }  else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreo es menor');
        } else {
                asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja()

    }

    return;
}

/*
   hay una diferencia sutil entre el getElementById, que no lleva el numeral, 
   porque él sabe que es solo por ID
   
   en el caso de querySelector, que es un selector genérico, 
   le tenemos que decir que en este caso lo que queremos es por ID, 
   usamos el numeral.
*/

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;
    console.log(numeroGenerado)
    //si ya sorteamos todos los numeros
    //if (listNumerosSorteados.length == numeroMaximo){
      //  asignarTextoElemento('h1', 'Ya hemos sorteado todos los numeros, juego finalizado');
    //}

    //Si el numero generado esta incluido en la lista
    if (listNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
    } else {
        listNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

condicionesIniciales()