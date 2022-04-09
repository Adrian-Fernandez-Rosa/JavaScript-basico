/* var x = 5;

var modulo = {
    x:65,
    getX: function() {
        return this.x;

    }
}

console.log(modulo.getX());
var devuelveX = modulo.getX;
console.log(devuelveX()); 

var context = {
    x:1000
}

var bindDevuelveX = devuelveX.bind(context)
console.log(bindDevuelveX() ) */

//          EJEMPLO 2

var nombre = "Pablo Pérez";
var person = {
    other: { nombre: "Carlos García"},
    nombre: "Maria Castañeda",
    getNombre: function() { return this.nombre}
}

var dameNombre = person.getNombre.bind(person.other);
console.log(dameNombre());

var dameNombre2 = person.other.nombre;
console.log(dameNombre2)

// EJEMPLO 3
/* 
Ejemplo: Crear una función ligada

El uso más simple de bind() es hacer que una función que, sin importar cómo es llamada, siempre apunte al mismo objeto con la referencia 
this. Un error común para nuevos programadores de JavaScript es que obtienen una referencia a un método de un objeto, 
posteriormente ejecutan ese método desde la referencia externa y esperan que la referencia de this 
siga apuntando al objeto original de donde se obtuvo el método (v.g. cuando se usa ese método en un callback). 
Sin el debido cuidado, el objeto original es comúnmente perdido. Creando una función ligada desde la función 
 empleando el objeto original, resuelve limpiamente este problema: */

this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, porque en este caso, "this" apunta al objeto global

// Crear una nueva función con 'this' asociado al objeto original 'module'
var boundGetX = getX.bind(module);
boundGetX(); // 81