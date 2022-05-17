// Condicionales con switch -------------------
// switch nos permite elegir entre varias opciones sin recorrerlas  todas 

// sintaxis simple
let a = 5;
switch (a) {

    case 1: console.log(`a tiene el valor ${a}`);
    break;
    case 2: console.log(`a tiene el valor ${a}`);
    break;
    case 3: console.log(`a tiene el valor ${a}`);
    break;
    case 4: console.log(`a tiene el valor ${a}`);
    break;
    default: console.log(`${a} no cumple los requisitos`);
}


// sintaxis multiple
let b = 2;
switch (b) {

    case 1:
    case 2: console.log(`a tiene el valor de 1 o 2`);
    break;
    case 3: 
    case 4: console.log(`a tiene el valor de 3 o 4`);
    break;
    default: console.log(`${a} no cumple los requisitos`);
}
