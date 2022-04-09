
const imagenes = [
    'imagen-0', 'imagen-1', 'imagen-2',
    'imagen-3', 'imagen-4', 'imagen-5',
    'imagen-6', 'imagen-7', 'imagen-8'
];

const puzzle = document.getElementById('puzzle');
const piezas = document.getElementById('piezas');
const mensaje = document.getElementById('mensaje');

let terminado = imagenes.length; // = 9 => terminado

while (imagenes.length) {
    const index = Math.floor(Math.random() * imagenes.length);
    const div = document.createElement('div'); //crea div
    div.className = 'pieza';
    div.id = imagenes[index];
    div.draggable = true; //se puede mover
    //div.innerHTML = `<img draggable="false" src='recursos/${imagenes[index]}.jpg'>`;
    div.style.backgroundImage = `url("recursos/${imagenes[index]}.jpg")`;
    piezas.appendChild(div); //agregar hijo
    imagenes.splice(index, 1); //eliminamos del array, desde que indice se elimina y hasta cuanto
}

for (let i = 0; i < terminado; i++) { //simplemente creamos div con id del 0 al 9 y lo agregamos
    const div = document.createElement('div');
    div.className = 'placeholder';
    div.dataset.id = i; 
    puzzle.appendChild(div);
}

piezas.addEventListener('dragstart', e => { //cuando empieza a ser arrastrado
    e.dataTransfer.setData('id', e.target.id); //transferi el id

    // imagen fantasma  
    //var dragIcon = document.createElement('img');
    //dragIcon.src = 'blank.png';
    //dragIcon.width = 100;
    //e.dataTransfer.setDragImage(dragIcon, 0, 0);

});

puzzle.addEventListener('dragover', e => {
    e.preventDefault();
    e.target.classList.add('hover'); //añadimos clase hover para que se ponga en amarillo
});

puzzle.addEventListener('dragleave', e => {
    e.target.classList.remove('hover'); //sacarla cuando esta afuera
});

puzzle.addEventListener('drop', e => {
    
    //console.log("es un drop!")
    e.target.classList.remove('hover');
    const id = e.dataTransfer.getData('id');

    //console.log('Imagen que viene: ' + id)
    const numero = id.split('-')[1]; //separa por caracter en el medio (el segundo es el numero)
    console.log('Imagen que viene: ' + id + ' y tieney un id:' +  numero);

    if (e.target.dataset.id === numero) {
        e.target.appendChild(document.getElementById(id)); //agregamos la imagen
        terminado--;
        if (terminado === 0) {
            document.body.classList.add('ganaste');
        }
    }
});