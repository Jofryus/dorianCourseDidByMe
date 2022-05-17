// Ejercicio Ordenar 3 numeros de mayor a menor
/* let a = 3;
let b = 5;
let c = 74;

 */


const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = prompt('Introduzca el primer número');
let b = prompt('Introduzca el segundo número');
let c = prompt('Introduzca el tercer número');

numbers.textContent = `Los numeros introducidos son ${a}, ${b}, ${c}`


/* // ---------------------------- My solution
if (a > b){             // a es mayor que b
    if (b > c) {        // a es mayor que b i que c
        // el orden esta bien i no movemos nada e imprimimos
        result.textContent = `1los numeros de mayor a menor son ${a}, ${b}, ${c}`
    } else              // a es mayor que b pero no sabemos si de c
        if (a > c){     // a es mayor que b i que c, pero c es mayor que 
            result.textContent = `2los numeros de mayor a menor son ${a}, ${c}, ${b}`
        } else {        // c es mayor que a i que b, pero a es mayor que b
            result.textContent = `3los numeros de mayor a menor son ${c}, ${a}, ${b}`
        }
} else {                // b es mayor que a
    if (a > c){         // b es mayor que a pero a es mayor que C
        result.textContent = `4los numeros de mayor a menor son ${b}, ${a}, ${c}`
    } else {            // b es mayor que a pero c es mayor que a
        if (b > c){     // b es mayor que c i c es mayor que a
            result.textContent = `5los numeros de mayor a menor son ${b}, ${c}, ${a}`
        } else {        // c es mayor que b i b es mayor que a 
            result.textContent = `6los numeros de mayor a menor son ${c}, ${b}, ${a}`
        }
    }
}
 */

// ------------------------------- Other Solution
if (a > b && a > c) {
    if (b > c) {
        result.textContent = `1los numeros de mayor a menor son ${a}, ${b}, ${c}`
    } else {
        result.textContent = `2los numeros de mayor a menor son ${a}, ${c}, ${b}`
    }
} else if (b > a && b > c){
    if (a > c) {
        result.textContent = `4los numeros de mayor a menor son ${b}, ${a}, ${c}`
    } else {
        result.textContent = `5los numeros de mayor a menor son ${b}, ${c}, ${a}`
    }
} else if (c > a && c > b) {
    if (b > a) {
        result.textContent = `6los numeros de mayor a menor son ${c}, ${b}, ${a}`
    } else {
        result.textContent = `3los numeros de mayor a menor son ${c}, ${a}, ${b}`
    }
}