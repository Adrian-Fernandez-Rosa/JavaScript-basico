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