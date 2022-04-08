// Números en JS
/*
NaN, proviene del acrónimo en inglés «Not a Number». Este acrónimo se usa generalmente en algunos lenguajes de programación 
para expresar un resultado imposible de calcular, como el caso de las raíces negativas, indeterminaciones, etc., retornando NaN como resultado de la operación.
*/
let n = 3;
console.log(n == 3);

let n2 = NaN;
//si comparamos n2 === NaN dara false
//mejor hacerlo 
console.log(isNaN(n2));

// CONSTANTES:
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.NaN);

//es entero

console.log(Number.isInteger(4.5));

//convertir a entero
console.log(Number.parseInt("55.2$")) //lo convierte con exito

// toExponential(), toFixed, toPrecision
console.log((1.1).toExponential(4)); //agrega decimales

console.log()
let num1=(1.24).toFixed(6); //lugares despues de la ,
console.log(num1);

let num3 = 2.14234;
let numFloat = parseFloat(num3);
console.log(typeof numFloat)
console.log((1.12).toPrecision(4));

// random()

let a = Math.random()*10;
console.log(a);

let b= Math.trunc(a); //quedarse con el entero
console.log(b);

let c= 0.6+ b;
console.log(c)

// Convertir número a string
console.log("------------")
let decimal = 255;
let resultado;
resultado = decimal.toString();

console.log(resultado);

//en base 16 hexadecimal

resultado = decimal.toString(16);
console.log(resultado); //convertido a hexadecimal ff