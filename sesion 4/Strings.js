// Sesion 4 - Strings (cadena de caracteres)
/*
let str_sng = "Hola soy texto comilla simple";
let str_dbl = "Hola soy texto comilla doble";

console.log(str_sng);
console.log(str_dbl);

// STRING PARA ESCRIBIR HTML 

let plantilla = `
<html>
<head>
</head>
<body>

<h1>Este es un título</h1>
<p> Este es un párrafo</p>
</body>
`

console.log(plantilla);
*/
// Métodos más utilizados con cadenas de caracteres
// Cómo obtener la longitud de un string

let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice() substring() substr() (este último deprecado).

let slice_str = str.slice(0,10);

console.log(slice_str)

let substring_str = str.substring(5,10);
console.log(substring_str);

// Reemplazar parte del contenido de una cadena de texto

let cadena = "Hola mi nombre es Adrián";
console.log(cadena);

console.log(cadena.replace("Adrián", "Adri"))

let texto_largo = "Estas cosas y otras muchas, Medité en mis soledades. Sepan que no hay falsedades Ni error en estos consejos es de la boca del viejo de ande salen las verdades";


//console.log(texto_largo.replace('en','AR')); // solo sustituye la primera ocurrencia

// para reemplazar todas las ocurrencias se puede usar expreciones regulares
// Al utilizar la expresión /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/en/g,'AR'));

//---------------------------------------------------------------------------------------------------------
let stringA = " hola soy un string   ";

console.log(stringA.length);
console.log(stringA.trim().length)
//trimStart para eliminar al inicio
// trimEnd para eliminar al final


// Obtener el caracter que hay en cierto indice

let str_4 = "Hola soy el String número 4";

console.log(str_4.charAt(5));

//también se puede tratar como listas de caracteres

console.log(str_4[5]);

console.log("----------------------------------------------------------------")

// Obtener la posición de una palabra dentro de una cadena de caracteres.
let str_5 = "Hola soy Adrián y me gusta el ajedrez y el truco";

console.log(str_5.indexOf("Adrián"));

console.log(str_5.lastIndexOf("el")); //devuelve la última ocurrencia
console.log(str_5.indexOf("el"));


console.log("----------------------------------------------------------------")

// Expresiones regulares y metodos de busqueda de cadenas
// https://regexr.com

let texto_largo2= "Si el sueño fuera (como dicen) una tregua, un puro reposo de la mente, ¿por qué, si te despiertan bruscamente sientes que te han robado una fortuna?";

//cuantas veces aparece una 

console.log(texto_largo2.match(/una/g).length); //lista con todas las ocurrencias

// Si contiene una palabra

console.log(texto_largo2.includes("sueño"));


// Saber si un texto empieza con una palabra.
console.log(texto_largo2.startsWith("Si"));

// Saber si un texto termina con otra palabra.
console.log(texto_largo2.endsWith("una?"));
