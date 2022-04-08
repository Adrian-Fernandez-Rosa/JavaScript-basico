

const a =3.4;
console.log(typeof a)


//ES6
// Se simplifica mucho con las arrow functions

const add = (a,b) => a+b;

console.log(add(5,4));

//dar valor por defecto a los valores

function add2(a=2,b=3) { return a + b}

console.log(add2(2))
const name="Adrian";
console.log(`nombre: ${name}!`)