//Listas, array o arreglo
const lista = [1, "hola", true, undefined, null];
const lista2= new Array(2, "hola", true, undefined, null);
//otra forma 
const lista3 = new Array( 1) //agrega lugares en vacios

lista2.push("asd");
lista2.push("asd");

console.log(lista2)

for(let element of lista){
    console.log(typeof(element))
}

// Objetos 

const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martin", "Raúl"],
    tarjeta: {
            marca: "Scandisk",
            almacenamiento: 32
    },
    "altura-tarjeta": 4
};

//nuevo atributo

movil.anio = 2019;
movil.marca = "Samsung";
console.log(movil.tarjeta.marca);

console.log(movil.marca);

// Fechas

const ahora = new Date();

console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

//otra forma

const fecha_valores = new Date(2022,2,15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth()+ 1;
const anio2= ahora.getFullYear();

console.log(dia, mes, anio2);