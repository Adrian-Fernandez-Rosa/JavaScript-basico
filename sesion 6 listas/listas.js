const array0 = new Array("a", "b", "c");

const array = ["1","2","3"]; // Array con 3 elementos
const empty = []; //vacio
const mixto = ["hola", 45, true]; // Array mixto


//otra forma 
const arrayB = new Array("a","b");

const ArrayE = new Array(4); //4 elementos

console.log(ArrayE);

arrayB.push("nuevo elemento");

console.log(arrayB);


// POP
// Elimina y devuelve el último elemento del array

const arrayD = [1,2,3];
const arrayF =[arrayD.pop()];
console.log(arrayD); // 1, 2
console.log(arrayF); // 3

// UNSHIFT
// Añade uno o varios elementos al inicio del array.
// Devuelve tamaño del array.

const arrayUnshift = ["a", "b", "c"];

console.log(arrayUnshift.unshift("1")); //también devuelve el length
console.log(arrayUnshift)


// CONCAT
// Concatena valores al final, y devuelve el array.

const arrayConcat = ["1", "2", "c"];
arrayConcat.concat("hola", "2");
console.log(arrayConcat);
console.log(arrayConcat.concat("hola", "2")); //no modifica el array, hay que crear uno nuevo para que concatene.


// SLICE
// Devuelve los elementos desde posición ini hasta end

const avesSlice = ["Pato", "Pollo", "Gallina", "Canario"];

console.log(avesSlice.slice(0,2)); // pato y pollo (hasta indice>2)


// SPLICE
// Elimina y Devuelve array de los elementos eliminados
// Modifica el array.

const avesSplice = ["Pato", "Pollo", "Gallina", "Canario"];
// console.log(avesSplice.splice(0,2)) //pato y pollo
const avesBorradas = avesSplice.splice(0,2);
console.log(avesBorradas)
console.log(avesSplice); //si modifica



// JOIN
// Devuelve un string mostrando cada elemento separado por lo que pongamos de parametro
const avesJoin = ["Pato", "Pollo", "Gallina", "Canario"];
console.log(avesJoin.join(" y "));


// SPLIT en string

console.log("Adrián ayuda a todos".split(" "));  //devuelve array [Adrián, "ayuda", "a", "todos"]

// FROM en String
// Devuelve array letra por letra

console.log(Array.from("Hola")); // ["H", "o", "l", "a"]

const avesEsArray = ["Pato", "Pollo", "Gallina", "Canario"];
let avesString = "Gorrión";

console.log(Array.isArray(avesEsArray)); // true
console.log(Array.isArray(avesString)); // false


// INCLUDES 
// Comprueba si el elemento esta contenido en el array.

const avesincluido = ["Pato", "Pollo", "Gallina", "Canario"];

console.log(avesincluido.includes("Pato"));
console.log(avesincluido.includes("Pollo","Polls")); // si uno ya esta devuelve true
console.log(avesincluido.includes("Pollo")); 


// INDEXOF
// Devuelve la posición de la primera aparición desde from

const avesIndex = ["Pato", "Pollo", "Gallina", "Canario" ,"Pato", "Pollo", "Gallina", "Canario","Pato"];

console.log(avesIndex.indexOf("Pato"))
console.log(avesIndex.indexOf("Patc",2)) //empieza a buscar desde el elemento 2, si devuelve -1 no encuentra


// SORT 
// ordena por orden alfabetico

const avesurOrdened = ["Pato", "Pollo", "Gallina", "Canario"];
avesurOrdened.sort();
console.log(avesurOrdened); // modifica
avesurOrdened.reverse();

// Si queremos otros ordenes tenderemos que hacer nuestra propia función de ordenación.

const n = [1,11,2,3,12];

const numeros = [3, 23, 12];

console.log( numeros.sort(function(a, b){ return b - a }));
console.log( numeros.sort(function(a, b){ return a - b }));

console.log(n.sort(function(a, b){ return a - b })); // ascendente


console.log("----------------------------------------------------------------------------------------");

// LAS ARRAY FUNCTIONS
// Son métodos que permiten hacer operaciones con todos los elementos del array.


// FOR EACH

const arrayA = ["a", "b", "c", "d"];

//arrayA.forEach((e) => console.log(e)); //imprimiendo cada elemento
 
// Para dotarles de utilidad les pasaremos una función de callback como parámetro.

// Los parámetros son e(elemento) i(posición) y a (array);

const avesFlecha = ["Pato", "Pollo", "Gallina", "Canario", "Periquito"]
avesFlecha.forEach((e) => console.log(e)); 
avesFlecha.forEach((e, i) => console.log(e, i));  //imprimiendo elemento + indice
avesFlecha.forEach((e, i, a) => console.log(e, i, a[0])) //imprimiendo elemento + indice + primer elemento del array

// FUNCION EVERY
// Comprobaremos que todos los elementos cumplen una condición que se especifica en el callback

console.log(arrayA.every((e) => e.length == 1)); // true

// FUNCION SOME 
// Igual pero es si "al menos" uno de los elementos cumple con loa condicción.

const arraySome = ["a", "b", "cc", "d"];

console.log(arraySome.some((e) => e.length == 2));

// MAP (transformaciones)
//tendremos un nuevo array con los cambios que le pasemos.

const arrM = ["Pato", "Pollo", "Gallina", "Canario", "Periquito"];

const nuevoArr = arrM.map((e) => e.length);
console.log(nuevoArr); // los length de cada elemento


// FILTER O FILTRADO

const nuevoArrFilter = arrM.filter((e) => e.charAt(0)=== "P"); //en lugar de charAt se puede usar e[0] también
console.log(nuevoArrFilter); // nuevo array con los elementos comenzados con p.

// FIND (BÚSQUEDA)
// Nuevos en ES6, buscamos elementos en un array.
// Nos devuelve el primer elemento que encuentra.

console.log(arrM.find((e) => e.length == 7)); // Devuelve la primer ocurrencia
console.log(arrM.findIndex((e) => e.length == 7)); // devuelve el indice de la primer ocurrencia


// ITERADORES
// En ES6 hay unos nuevos métodos muy útiles para recorrer todos los elementos de un array.

// KEYS
// Obtiene un array con las keys (posiciones).

const arrI = ["Pato", "Pollo", "Gallina", "Canario", "Periquito"];

const keys =[...arrI.keys()];

console.log(keys); //indices.
//más adelante ampliaremos