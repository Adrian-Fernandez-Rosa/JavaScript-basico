/* 
class Ave {}

const gallina =new Ave() */

/* class Persona{
    saludo() { return "Hola"}
}

const carlos = new Persona;

console.log(carlos.saludo());


class Coche {
    constructor(a, b) { //se llama asi el constructor de js
        this.propiedad1 = a;
        this.propiedad2 = b;
    }
    metodoo(){
        console.log(this.propiedad1 + this.propiedad2)
    }
}

miCoche = new Coche(1,2);

miCoche.metodoo();

*/

// Los métodos static son accesibles desde la clase.
// Ejemplos static

 /*    class Persona { 
        constructor() {
            console.log("Hemos creado una nueva persona");
            this.nacionalidad = "Sin definirr";
        }
            saludo() { return "Hola/Hello"}
        
            static tipo() { // Los métodos static siempre accesibles sin new();

                return "Soy una persona";
            }
    }

    console.log(Persona.tipo());

    const Carlos = new Persona;
    Carlos.saludo();
    console.log(Carlos.nacionalidad);
  Carlos.tipo();  //error los métodos static no son para objetos
  Carlos.nacionalidad ="España"
  console.log(Carlos.nacionalidad); //ya que tiene this */


  // Podemos definir propiedades fuera del constructor

/*     class Persona {
        pelo = 'negro'
        constructor() {
            console.log("Persona creada")
        }
    }

    const carlos = new Persona;

    console.log( carlos.pelo)
    carlos.pelo="rubio"
    console.log(carlos.pelo) */

    // PROPIEDADES Y METODOS PRIVADOS

   /*  class Persona {
        #id = 'person' //propiedad privada
        constructor(){
            console.log("persona creada")
        }
        #dameid() { return this.#id} //metodo privado
        idpublico() { return this.#dameid()}
    }

    const carlos = new Persona

    console.log(carlos.idpublico())
 */
    // ÁMBITOS CLASE Y MÉTODO.

    /*
    Tenemos el ámbito de método, las variables declaradas dentro del método seran accesibles
    solo en el método, mientras que "this" es accesible a nivel de clase

    */
/* 
    class Coche {
        constructor() {
          //const tipo = "Sedan";
          this.tipo = "Ranchera"
          console.log("Mi tipo de coche es " + this.tipo);
        }
        arranca(a) {
          //let llave = a
          this.llave = a
          console.log(`En marcha con ${this.llave}!`) 
        }
        dameTipo() {
         // console.log(`El tipo es: ${this.tipo} y tiene ${llave}`);
          console.log(`El tipo es: ${this.tipo} y tiene ${this.llave}`);
          console.log(`El tipo es: ${this.tipo} `);
        }
      }

      const miCoche = new Coche(); 
     console.log( miCoche.tipo)
      miCoche.arranca(1)
      miCoche.dameTipo()

      console.log(miCoche.llave)
 */
      // GETTER
 /*      class Coche {
        constructor(n) {
          this.tipo = n;
        }
        get miTipo() {
          return "Mi coche es de tipo " + this.tipo;
        }
      }
      const miCoche = new Coche("Gasolina");
     // miCoche
      miCoche.miTipo

      // esto no funciona veremos los setters
      const coche = new Coche(1);
      console.log(coche.tipo) */


         // #############################  Setters 
      // mismo concepto de getters (get) pero esta vez para stablecer información

         // Ejemplo de setters

  /*      
           class Coche {
              constructor(n) {
                this._tipo = n;
              }
              get miTipo() {
                return "Mi coche es de tipo " + this._tipo;
              }
              set miTipo(n) {
                this._tipo = n;
              }
            }

            const miCoche = new Coche("Gasolina");
            //miCoche
            miCoche.miTipo
            miCoche.miTipo = "Diésel"
            miCoche.miTipo
        */

            
        // ########## Herencia de clases
        // Con la herencia podemos establecer una "jerarquía" de elementos y reutilizar características dependiendo del nivel de cada elemento.
        // Desde ES6 podemos "extender" una clase 

          // Ejemplo de herencia
          // Clase de primer nivel o padre

       /*    class Automovil { // Clase Padre
            constructor() {
              this.marca
              console.log("Constructor de la clase padre Automovil.");
            }
            arrancar() {
              console.log("Vehículo en marcha!");
            }
          }


          class Coche extends Automovil {
            constructor() {
              super();
              console.log("Constructor de coche, heredado de padre");
            }
          }

          class Camion extends Automovil  {
            constructor(ruedas, tipo) {
              super();
              this.ruedas = ruedas
              this. tipo = tipo
              console.log(`Soy un camión de ${ruedas} ruedas y de tipo ${tipo}"`);
            }
          }


           const miCoche = new Coche()
        miCoche.arrancar()
        miCoche.marca = "Seat"
        miCoche.marca

        const miCamion = new Camion(8, 'Frigo')
        miCamion.arrancar() */


      //  Polimorfismo
        // Es la posibilias de llamar métodos en común de diferentes objetos
  
        //Ejemplo de polimorfismo
          
      
          class Clase1 {
            descripcion() { console.log("Descripción de la clase 1");}
          }
  
          class Clase2 {
            descripcion() {console.log("Descripción de la clase 2");}
          }
  
          const des = (obj) => { 
            console.log(typeof obj)
            console.log(typeof obj.descripcion)
            if(typeof obj.descripcion == 'function') obj.descripcion()
          }
          
          const c1 = new Clase1()
          const c2 = new Clase2()
          
            console.log(c1.descripcion());
            console.log(c2.descripcion());
          //c2.descripcion()
          console.log(des(c1))
         // descripcion(c2)


         /*
    Javascript no tiene "interfaces" derivado de su tipo inferido, pero si existen en TypeScript, el superset de Javascript que implementa el tipado estático

    TypeScript ofrece la posibilidad de trabajar con interfaces, que son un tipo de construcción utilizada en la Programación Orientada a Objetos.


            interface sumergibleInterface {
              tiempoMaxBajoElAgua: number;
              profundidadMaxima: number;
              repelerAgua(): void;
            }
*/

