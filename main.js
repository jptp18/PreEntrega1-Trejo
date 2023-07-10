/*Funciones*/ 

function verificarSoloLetras(palabra) {
    let expresionRegular = /^[a-zA-Z]+$/;
    return expresionRegular.test(palabra);
}

function contarVocales(palabra) {
    let vocalsRegex = /[aeiou]/gi;
    palabra = palabra.split("");
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        if(vocalsRegex.test(palabra[i])){
            contador++
        }
    }

    return contador;
}

function contarConsonantes(palabra) {
    let consonantRegex = /[bcdfghjklmnpqrstvwxys]/gi;
    palabra = palabra.split("");
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        if(consonantRegex.test(palabra[i])){
            contador++
        }
    }

    return contador;
    
}

/*--Funciones--*/ 



let verificado = false;
let palabra = "";

while (!verificado) {
    palabra =  prompt("Bienvenido! Ingresa una palabra!");

    if (verificarSoloLetras(palabra)){
        verificado =  true
    }else{
        alert("Ingresa solo letras!")
    }
}

let vocales = contarVocales(palabra);
let consonantes = contarConsonantes(palabra);
let longitud = palabra.length;

alert("Tu palabra: <" + palabra + "> tiene " + vocales + " vocales y " + consonantes + " consonantes y una longitud de " + longitud + " caracteres.")