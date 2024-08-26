let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    }

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorDeUsuario").value);


    if (numeroDeUsuario === numeroSecreto) {
         asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces" }`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroSecreto > numeroDeUsuario) {
            asignarTextoElemento("p","El Numero Secreto es Mayor");
        }  else {
            asignarTextoElemento("p","El Numero Secreto Es Menor");
        } 
        intentos++
        limpiarCaja();

    }   
    return;
}

function limpiarCaja() {
    document.querySelector("#valorDeUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","ya todos los numeros fueron asignados");
    } else{

    
        //si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
    
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado; 
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1","juego del numero secreto");
    asignarTextoElemento("p",`dime un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiciniarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    // inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");

}

condicionesIniciales();


