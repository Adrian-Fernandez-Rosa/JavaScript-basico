/*
    MÓDULOS ES6

   > JS siempre ha tenido el problema de la organización del código, sobre todo en aplicaciones grandes.
   > Siempre se nos llenaban los archivos js de funciones y clases para organizar mejor el código de nuestras aplicaciones.
   
   > Pero tener todo en un fichero es poco eficiente, la mayoría de los lenguajes de programación se organizan en módulos,
     o sistemas modulares para organizar la información.
   > Vimos en el curso CSS como SaSS nos ayudaba a organizar modularmente los archivos .scss que posteriormente se compilaban
     en un solo .css.
   > En el lado del cliente esto se "solucionaba" con llamadas a sucesivos archivos .js pero con el problema de ser poco 
     eficiente, sobrecargar al servidor y tener cuidado con el orden de carga.
   > En ECMAScript ES6 aparecen los módulos ES o ESM, que permiten exportar e importar datos entre distintos ficheros de JS,
     con las palabras claves.

     > export
       Exporta datos (variables, funciones, clases...)
       del fichero actual hacia otros que lo importen.

     > import
      Importa datos (variables, funciones, clases...) dede un .js al que lo solicita.

      EJEMPLO:
      > Creamos un fichero exporta.js.
      > ojo ponemos type: module en el package.json.


*/

// Ejemplo 1
   // import { numero } from "./exporta.js";
  /*   
  import { numero, miFuncion } from "./exporta.js"; //entre llaves elementos y propiedades para importar
    console.log(numero);
    console.log(miFuncion());
 */

//EJEMPLO IMPORTACION POR DEFECTO.
    import miImportacione from "./exporta.js"; //notar que en el archivo exporta no esta la referencia miImportacione 
    //se le puede poner cualquier nombre debido a
    //const porDefecto = () => "Soy la función por defecto."
    //export { porDefecto as default}; 
    console.log(miImportacione())

    // IMPORTACION TOTAL DE LO QUE EL OTRO ARCHIVO EXPORTA
    import * as miImportacion from './exporta.js';
    console.log(miImportacion.saludar());
    console.log(miImportacion.despedir());
    // y a la por defecto
    console.log(miImportacion.default());

    import './ejecuta.js'; //lo ejecuto primero