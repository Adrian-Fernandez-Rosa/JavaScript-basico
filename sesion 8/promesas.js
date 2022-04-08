//IMPLEMENTACION CON PROMESAS
const doTask = (repeticiones) => new Promise((resolve, reject) => {
    const num = [];
    for (let i = 0; i < repeticiones; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      num.push(number);
      if (number === 6) {
        reject({
          error: true,
          message: "Se ha sacado un 6"
        });
      }
    }
    resolve({
      error: false,
      value: num
    });
  });
  
  doTask(1)
    .then(result => console.log("Tiradas correctas: ",result.value))
    .catch(err => console.error("Ha ocurrido algo: ", err.message));

    //El método Promise.reject(reason) retorna un objeto Promise que es rechazado por la razón específicada.

    //El método Promise.resolve(value) retorna un objeto Promise que es resuelto con el valor dado. Si el valor es una promise, esa promise es devuelta; 
    //    si el valor es un thenable (si tiene un método "then"), 
    // el valor devuelto le seguirá a ese thenable, adoptando su estado; de otro modo la promise devuelta estará completada con el valor.