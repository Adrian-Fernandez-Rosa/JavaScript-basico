let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800]

for (let i = 0; i < lista.length; i++){
    console.log(lista[i]* 2);
}


// Estructura for ... of

for (const valor of lista) {
    console.log(valor);
}


// Estructura forEach (flecha)

lista.forEach(valor => {
    console.log(valor);
});


let persona = {
    nombre: "Adrian",
    apellido: "Fernández Rosa",
    edad: 30,
    isDeveloper: true
}

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]) //salen los valores ( "Adrian", "Fernandez Rosa", etc)
}


// ETIQUETAS (LABELS) EN BUCLES
// labels
/*

bucleDecenas: while (true){
   bucleUnidades: while (true) {
        console.log(`El numero actual es: + ${decenas}${unidades}`);
        unidades++;

        if ( unidades ===10){
            unidades = 0;
            break bucleUnidades;
        }

    }
    decenas++;
    if (decenas === 2){
        console.log(`El numero actual es: + ${decenas}${unidades}`);
        break bucleDecenas;
    }
}*/
//existe una forma mas sencilla de hacerlo

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true){
    bucleUnidades: while (true) {
         console.log(`El numero actual es: + ${decenas}${unidades}`);
         unidades++;
 
         if ( unidades ===10){
             unidades = 0;
             break bucleUnidades;
         }
 
         if (decenas === 2){
       //     console.log(`El numero actual es: + ${decenas}${unidades}`);
            break bucleDecenas;
        }

     }
  
     
     decenas++;
 }