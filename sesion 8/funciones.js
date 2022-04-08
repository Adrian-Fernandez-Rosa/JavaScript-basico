

//argumentos por defecto

function suma(a=1, b=2){
    return a + b;
};

console.log(suma());

let miSuma;

function sumar(a, b){
    miSuma= a+b;
    return true;
}

sumar(2,4); //modificamos la variable global misuma

console.log(miSuma);

// FUNCION ARROW

const sumando = (a,b) => a + b;

let resultado = sumando(1, 5)
console.log(sumando(2,3));
console.log(resultado);

// Las funciones también son un tipo de dato

console.log(typeof sumando); // tipo function


// FUNCIONES ANONIMAS

/*
    Las funciones anónimas o funciones lambda son un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una 
    variable y haciendo referencia a ella cada vez que queramos utilizarla
*/

const saludo = function () {
    return "Hola";
};

const otroSaludo = () => "hola2";

console.log(saludo());
console.log(otroSaludo());



// FUNCIONES CALLBACK O RETROLLAMADAS

// Consiste en pasar por parámetro una función a otra función

//Tenemos una función B
/*
const b = function() {
    console.log("Somos la función b");

}

const e = function() {
    console.error("Error");
    console.log("Error");
}

const miFuncion = function (callback, callbackError, option =0){
    if(option > 1) callback();
    else callbackError();

};

let o=0;
miFuncion(b,e,o);
*/


// Función auto ejecutable con parámetros.

(function (name){
    console.log(`!Hola, ${name}!`); //Hola Adrián
})("Adrian");


 // Uso de this.

 const a = function() {
     console.log(this);
 }

 const b2 = () => console.log(this); //imprime todo lo que tiene la funcion

 //a();

/*
                LAS PROMESAS
 Las promesas son un concepto para resolver el problema de asincronía de una forma mucho más elegante y práctica que, 
 por ejemplo, utilizando funciones callbacks directamente.

 Como su propio nombre indica, una promesa es algo que, en principio pensamos que se cumplirá pero en el futuro pueden ocurrir varias cosas.

*/

const d = () => "fin";
/* 
import "isomorphic-fetch"
import { resolve } from "path";
globalThis.fetch = fetch */

/* fetch(d)
.then(Response => response.text())
.then(data => console.log(data))
.finally(() => console.log("Terminado."))
.catch(error => console.error(data)); */
    
