// ------------ Objeto Math ---------------------------
// se utiliza para operaciones matematicas mas complicadas

// ------------- PROPIEDADES ---------------------------

// no podemos utilizar Math i asignarlo a una variable (NO pi = Math.PI) tenemos que utilizar directamente Math.pi

Math.PI;
Math.Eº;
let num1 = 5;
let num2 = -3;
let num3 = 5.4;
let num4 = -5.6;
let num5 = 0;

console.log(' --- PROPIEDADES i declaracion de variables ---')
console.log(`Math.PI = ${Math.PI} (constante Pi)`);
console.log(`Math.E = ${Math.E} (constante Eulet)`);
console.log(`num = ${num1}`);
console.log(`num = ${num2}`);
console.log(`num = ${num3}`);
console.log(`num = ${num4}`);
console.log(`num = ${num5}`);

// ------------- MÉTODOS -----------------------------
console.log(' --- MÉTODOS ---');
// --- Math.abs(x)------ devuelve el valor absoluto de x -----------
console.log(' - Math.abs(x) -> devuelve el valor absoluto de x ---')
console.log('Math.abs(num1) = ' + Math.abs(num1));
console.log('Math.abs(num2) = ' + Math.abs(num2));

// --- Math.ceil(x)---- devuelve el entero más pequeño mayor o igual a x (redondeo a la alza)-------------
console.log(' - Math.ceil(x) -> devuelve el entero más pequeño mayor o igual a x (redondeo a la alza)---')
console.log('Math.ceil(num3) = ' + Math.ceil(num3));
console.log('Math.ceil(num4) = ' + Math.ceil(num4));

// --- Math.floor(x)---- devuelve el entero mas grande menor o igual a x (redondeo a la baja)-------------
console.log(' - Math.floor(x) -> devuelve el entero más pequeño mayor o igual a x (redondeo a la baja)---')
console.log('Math.floor(num3) = ' + Math.floor(num3));
console.log('Math.floor(num4) = ' + Math.floor(num4));

// --- Math.pow(x, y)------ devuelve la potencia de x elevado a y -----------
console.log(' - Math.pow(x, y) -> devuelve la potencia de x elevado a y ---')
console.log('Math.pow(num1, num2) = ' + Math.pow(num1, num2));
console.log('Math.pow(num2, num1) = ' + Math.pow(num2, num1));
console.log('Math.pow(5, 3) = ' + Math.pow(5, 3));

// --- Math.round(x)------- devuelve el valor de x redondeado al entero más cercano ----------
console.log(' - Math.round(x) -> devuelve el valor de x redondeado al entero más cercano  ---')
console.log('Math.round(num3) = ' + Math.round(num3));
console.log('Math.round(num4) = ' + Math.round(num4));

// --- Math.random()------ genera un número pseudoaleatorio entre 0 y 1 -----------
console.log(' - Math.random() -> genera un número pseudoaleatorio entre 0 y 1 ---')
console.log('Math.random() = ' + Math.random());
console.log('Math.random() = ' + Math.random());
console.log('para consrguir numeros aleatorios entre 0 i 100 multiplicamos por 100 i redondeamos')
console.log('Math.round(Math.random()*100) = ' + Math.round(Math.random()*100));
console.log('para consrguir numeros aleatorios entre min i max usamos la formula *(max-min)+min')
console.log('Math.round(Math.random()*(20-10)+10 = ' + Math.round(Math.random()*(20-10)+10));

// --- Math.sign(x)-------- devuelve el ligno de la x , que indica si x es positivo, negativo o cero ---------
console.log(' - Math.sign(x) -> devuelve el ligno de la x , que indica si x es positivo, negativo o cero---')
console.log('Math.sign(num1) = ' + Math.sign(num1) + '-> Positivo');
console.log('Math.sign(num2) = ' + Math.sign(num2) + '-> Negativo');
console.log('Math.sign(num5) = ' + Math.sign(num5) + '-> Cero');

// --- Math.sqrt(x)------ devuelve la raiz cuadrada de x -----------
console.log(' - Math.sqrt(x) -> devuelve la raiz cuadrada de x  ---')
console.log('Math.sqrt(num1) = ' + Math.sqrt(num1));
console.log('Math.sqrt(2565) = ' + Math.sqrt(2565));