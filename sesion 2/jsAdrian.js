


let cosa =3;

console.log(typeof cosa) //String
//toma el tipo de dato segun como se comporte


/*

*/


/* const sumar = function(param1, param2){
    var suma = param1 + param2;
    return suma;
}


console.log(sumar(2,2)) */



/* var pasaMayusculas = function(param1){
    var mayusculas = param1.toUpperCase();
    return mayusculas;
}

console.log(pasaMayusculas("asd"))
 */

//let a;

//console.log(typeof(a)); //undefined


/*
 En javascript una variable declarada fuera de una función es una variable global y siempre es pasada por referencia a otros ámbitos
  vamos a ver la diferencia entre variable local y global

    */
 
  // Ejemplo 1

 /*  let i = "global"

  function foo() {
      let i = "local";
      console.log('8:'+ i); //local
  }

  foo();
  console.log('11: '+ i); 

if ("A"<"B"){
    var a="scope"; //poco recomendable
  
}

console.log(a)
 */


//ejemplo let

/* function foo2() {
    if(true){
        var i = 1;

    }
    console.log(i); //referenceErrror: i is not defined
}

foo2(); */


// La instruccion const
// ejemplo

/*
Los objetos: Colección de tipos de datos primitivos u otros objetos.
    Colección de datos primitivos
    (array o lista)

*/


/* let DiasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

console.log(DiasSemana.length)
console.log(DiasSemana[5])
DiasSemana.push('Osvaldo')
console.log(DiasSemana)
DiasSemana.splice(4,1) // primer param desde donde, y segundo cuantos //eliminacion
DiasSemana.pop() //elimina el ultimo
console.log(DiasSemana)
 */


var obj = {
    numero : 10,
    texto: "Nuevo texto",
    objHijo: {
        numero: 20,
        textoh: "Nuevo texto hijo"
    }
}

//console.log(obj.numero)
//console.log(obj.objHijo.numero)
//console.log(obj.objHijo.textoh)
//console.log(obj['objHijo']) //muestra objHijo


  
    let persona = {
    nombre: ['Bob', 'Smith'],
    edad: 32,
    genero: 'masculino',
    intereses: ['música', 'esquí'],
    bio: function () {
    console.log(this.nombre[0] + '' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
    },
    saludo: function() {
    console.log('Hola, Soy '+ this.nombre[0] + '. ');
    }
    };

 /*    persona.nombre
    persona.nombre[0]
    persona.edad
    persona.intereses[1]
    persona.bio()
    persona.saludo() */


    // FECHAS EN JS 

    var miFecha = new Date("February 28, 1992, 07:20:00")

   // console.log(miFecha)

    const fecha2 = new Date();

    console.log(fecha2.getDay()) //devuelve 3 (miercoles)
    console.log(fecha2.getDate()) // Día 6 del més
    console.log(fecha2.getMonth()) // 3 Abril (desde 0)

    console.log(fecha2.getFullYear()) //2022
    console.log(fecha2.getHours()) // Horas
    console.log(fecha2.getMinutes()) // Minutos
    console.log(fecha2.getSeconds()) // Segundos
    console.log(fecha2.getMilliseconds()) // mili segundos desde comienzo de minuto
    console.log(fecha2.getTimezoneOffset()) //diferencia horaria en minutos contra utc 0
    console.log(fecha2.getTime()) // Tiempo unix

