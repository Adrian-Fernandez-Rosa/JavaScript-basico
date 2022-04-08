// Necesitamos saber manejar errores, 
// Es buena práctica capturar las excepciones.

// Por ejemplo podemos tener un error del tipo:

/*
 let a= [];
 a = null;
 let b= a[0]; // lanza TypeError
 console.log("hola");
 */

 // En este caso hemos visto que generamos un error del tipo TypeError
/*
 Tenemos los siguientes Tipos de error:
 > InternalError: error interno del motor de JS
    * demasiados casos del switch
    * demasiados paréntesis en la expresión regular
    * iniciador de arreglo demasiado grande
    * demasiada recursividad
    
 > ReferenceError
    El objeto ReferenceError representa un error cuando se hace referencia a una variable inexistente.
    console.log(x/2); //reference error
 > RangeError
  El objeto rangeError indica un error cuando un valor no se encuentra dentro de un rango de valores permitidos.

 > SyntaxError
    El objeto syntaxError representa un error cuando se trata de interpretar codigo sintacticamente invalido.
    
    Al igual que en java, para capturar errores usamos try... catch.


    */
/* 
    try{
        //lanzando error nuevo
    //    throw new Error("error gravisimo"); //la ejecución no continua
         let a=[]
        a = null;
        let b= a[0];

    }catch(err){
        if(err instanceof TypeError)
            console.error("custom error", err);
            else throw err
     
 }
console.log("hola");
 */
 class miError extends Error{
     message = "Este es mi error personalizado";
 }

 try{
    throw new miError("adfaedwf");
 }catch(err){

    throw err; // es obligatorio este throw
 }