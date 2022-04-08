 // ################ DECLARACIÓN DE UN SET
 /*
    Desde ES6 tenemos un nuevo tipo de estructura, los set
    Los set son parecidos a los arrays, pero tienen algunas diferencias,
    La gran direcencia son la gestión de duplicados.
    En un set no está permitido guardar valores duplicados.
    En realidad un array es una colección de índices y un Set es una colección de claves.
    Una colección de índices, es una colección de datos que ese encuentras ordenados por un índice.
    Una colección de claves, es una colección de datos que usa claves y esas claves contienen elementos con los 
    que podemos iterar en el orden en el que fueron insertados.

 */
  // inicilizamos con un set vacío
  
   // const miSet = new Set(); 
  
  // o con valores
  
  //const miSet = new Set([1, 2, 2, 3, 4, 4]) 
  //miSet // vemos como no permite duplciados y sus métodos

  //const mySet = new  Set(1) nos da error ya que siempre tiene que ser un objeto iterable

  // ################ AÑADIR ELEMENTOS
  
 
  const mySet = new Set([1, 2, 3]); 
  //mySet.add('45');
  //mySet.add('45');

  // En un Set siempre se almacenarán los nuevos valores al final del mismo.
  // Si ya existe lo ignorará
 // mySet;

  //mySet.delete(2); //Borrar elementos. //elimina directo el 2 (no es indice)
  //mySet
  console.log(mySet.values()) // iterator
  //mySet.size // tamaño del Set

  /* En un set no podemos acceder directo a un elemento, es solo una colección de claves. solo podremos
     Iterar todos sus elementos a través de un loop.
     */

     const SetLoop = new Set([1,2,3]);

     /* for (let valor of SetLoop){
         console.log(valor);
     } */

     // en ES6
     SetLoop.forEach(valor => console.log(valor));

     //############ BUSCAR EN UN SET
     // Utilizaremos el método has, que nos devolvera un true o false,
     // en función de si existe el valor buscado o no.

     const myset4 = new Set([1,2,3,5]);

     // BUSCAR EN UN SET

     // ############### Buscar en un SET
  // utilizaremos el método has, que nos devolverá un true o un false, en función de si existe el valor buscado o no.
   
    const mySet2 = new Set([1, 2, 3]);
    console.log(mySet.has(1)); 
    // true
    console.log(mySet.has(4));
    // false

    console.log("---------------------------------------------------------------------------------------------");

    /*
     ¿Qué son los objetos?
     No es más que una variable especial que puede contener más variables en su interior. De esta forma, tenemos la posibilidad de organizar múltiples variables
     de la misma temática dentro de un objeto.

    */

     const objeto = new Object(); //objeto <<genérico vacío>>

     // Lo comun es hacerlo de manera literal

     const persona = {
         nombre: "Pepe",
         edad: 30,
         id: 10
     };

     //acceder propiedades
     persona.nombre;
     //etc

     //otra forma
     console.log(persona['nombre']);

     //como ordenar Array de objetos 

    let objs = [
         {nombre: "Pami", apellido: "Pacio"},
          {nombre: "prendete", apellido: "ese"},
          {nombre: "Adrian", apellido: "fer"}
     ]

     function compare( a, b){
         if(a.nombre < b.nombre){
             return -1;
         }
         if(a.nombre > b.nombre){
            return 1;
        }
        return 0;
     }
     objs.sort(compare);

     console.log(objs); //ordenado por nombre

     console.log("-------------------------------------------------------------------------------------------------------------------------------------------");

     let fecha = new Date();

     console.log(fecha);
     console.log(fecha.toLocaleDateString());

     console.log(fecha.toJSON()); // en Json.

     console.log(fecha.toUTCString()); //pasa a utc0

     console.log("-------------------------------------------------------------------------------------------------------------------------------------------");

     let apellido = null;

     console.log(!apellido); //devuelve true

     apellido = undefined;
     console.log(typeof apellido === 'undefined'); //true

     