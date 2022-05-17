// FLujo de un programa-----------------
// el flujo va de arruba a abajo, nosotros podremos decidir con los condicionales si esa linea se ejecuta o no.

// Condicionales simples --------------------------------
// if (condición) {código a ejecutar}
let num1 = 7;

if (num1 > 0){
    console.log(`${num1} es mayor que 0`)
}


// Condicionales compuestos ----------------------------
// if (condición) {codigo a ejecutar si condicion cierta} else {codigo a ejecutar si condicion falsa}

let num2 = 5;

if (num2 > 0){
    console.log(`${num2} es mayor que 0`)
} else {
    console.log(`${num2} es menor que 0`)
}

// condicionales Multiples -------------------------------
let num3 = 0;

if (num3 > 0){
    console.log(`${num3} es mayor que 0`)
} else if (num3 < 0) {
    console.log(`${num3} es menor que 0`)
}else {
    console.log(`${num3} es igual que 0`)
}

// Operadores logicos
// (AND - && ) i (OR - ||)

// Ejercicio Ordenar 3 numeros de mayor a menor
let a = 3;
let b = 5;
let c = 74;


if (a > b){             // a es mayor que b
    if (b > c) {        // a es mayor que b i que c
        // el orden esta bien i no movemos nada e imprimimos
        console.log(`los numeros de mayor a menor son ${a}, ${b}, ${c}`);
    } else              // a es mayor que b pero no sabemos si de c
        if (a > c){     // a es mayor que b i que c, pero c es mayor que b
            console.log(`los numeros de mayor a menor son ${a}, ${c}, ${b}`);
        } else {        // c es mayor que a i que b, pero a es mayor que b
            console.log(`los numeros de mayor a menor son ${c}, ${a}, ${b}`);
        }
} else {                // b es mayor que a
    if (a > c){         // b es mayor que a pero a es mayor que C
        console.log(`los numeros de mayor a menor son ${b}, ${a}, ${c}`);
    } else {            // b es mayor que a pero c es mayor que a
        if (b > c){     // b es mayor que c i c es mayor que a
            console.log(`los numeros de mayor a menor son ${b}, ${c}, ${a}`);
        } else {        // c es mayor que b i b es mayor que a 
            console.log(`los numeros de mayor a menor son ${c}, ${b}, ${a}`);
        }
    }
}