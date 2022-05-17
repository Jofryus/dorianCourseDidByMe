// Operadores Matemáticos ---------------------------------------------
let a = 5;
let b = 2;
console.log('--- Operadores Matemáticos ---');
console.log('a = ' + a);
console.log('b = ' + b);
console.log('a + b = ' + (a + b));     // suma
console.log('a - b = ' + (a - b));     // resta
console.log('a * b = ' + (a * b));     // multiplicacion
console.log('a / b = ' + (a / b));     // division
console.log('a % b = ' + (a % b));     // resto de la division (modulo)

// Operadores de asignación ---------------------------------------------
let c = 4;
let nombre;
console.log('--- Operadores de asignación ---')
nombre = 'Joan';                        // =                asignación
console.log('c = 4')
console.log('c += 3 = ' + (c += 3) + ' (c = c + 3)');    // (c = c + 3)      suma y asignación
console.log('c -= 3 = ' + (c -= 3) + ' (c = c - 3)');    // (c = c - 3)      resta y asignación
console.log('c *= 3 = ' + (c *= 3) + ' (c = c * 3)');    // (c = c * 3)      multiplicación y asignación
console.log('c /= 3 = ' + (c /= 3) + ' (c = c / 3)');    // (c = c / 3)      división y asignación
console.log('c %= 3 = ' + (c %= 3) + ' (c = c % 3)');    // (c = c % 3)      modulo y asignación


// Operadores incremento o decremento ---------------------------------------------

let d = 5;
console.log('--- Operadores incremento o decremento ---')
console.log('d = ' + d);
console.log('post incremento de d (d++) = ' + d++);
console.log('despues d = ' + d);
console.log('pre incremento de d (++d) = ' + ++d);
