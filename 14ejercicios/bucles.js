/* https://www.youtube.com/watch?v=4xdtWCiYWS4&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=15

8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no. 

*/

/* 1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings */

/* const saludo = document.getElementById('saludo');
const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
let nombre1 = prompt('introduce tu nombre');
let edad1 = prompt('introduce tu edad');
// console.log(nombre, edad);           //control
let nedad = Number(edad1)+1;
// console.log(nedad)                   //control
nombre.textContent = (`${nombre1}`)
edad.textContent = (`${edad1}`)
saludo.textContent = (`Hola ${nombre1}, tienes ${edad1} años y el año que viene tendrás ${nedad} años`) */

/* 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado) */

/* const figura = document.getElementById('figura');
const area = document.getElementById('area');
let myarea = null;
let myfigura = prompt('Introduce de que figura quieres calcular el area (triangulo, rectangulo o circulo)?');
switch (myfigura) {

    case 'triangulo': 
        base = prompt('introduce la base del triangulo en m');
        altura = prompt('introduce la altura del triangulo en m');
        figura.textContent = (`${myfigura}`);
        myarea = (Number(base)*Number(altura))/2;
        // console.log(myarea)                   //control
        area.textContent = (`${myarea} m²`);
    break;
    case 'rectangulo': 
        base = prompt('introduce la base del rectangulo en m');
        altura = prompt('introduce la altura del rectangulo en m');
        figura.textContent = (`${myfigura}`);
        myarea = (Number(base)*Number(altura));
        // console.log(myarea)                   //control
        area.textContent = (`${myarea} m²`);
    break;
    case 'circulo': 
        radio = prompt('introduce el radio del circulo en m');
        figura.textContent = (`${myfigura}`);
        myarea = ((Math.PI)*(Number(radio))**2);
        // console.log(myarea)                   //control
        area.textContent = (`${myarea} m²`);
    ;
    break;
} */

/* 3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar
 */

/* const numero = document.getElementById('numero');
const resultado = document.getElementById('resultado');
numtxt = prompt('introduce el radio del circulo en m');
let num1 = Number(numtxt);
let result = [];
for (i=0; i<num1+1; i++){
    if (i%2 == 0){
        result.push(i, 'es par --');
    }   else {
        result.push(i, 'es impar --');
    }
    console.log(result)  
}
num2 = result.join(' ')
numero.textContent = (`Hasta el numero ${num1} los numeros son: `);
resultado.textContent = (`${num2}`); */

/* 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad */

/* // -----------------------per treballar amb html
const numero = document.getElementById('numero');
const resultado = document.getElementById('resultado');
numtxt = prompt('Introduzca el numero que desea saber si es Primo');
num = Number(numtxt);
//------------------ variables
let esprimo = true;
// -----------------------funcions principals
if (num > 0){
    let divi = 2;
    while ((divi < num) && (esprimo == true)) {
        if ((num % divi == 0) && (num != divi)) {
            esprimo = false;
            console.log(esprimo);
            break;
5        }
        divi++
        console.log(num / divi);
    }
    console.log(esprimo)
}
// funcions de resultat
let primosino = null;
if (esprimo==true) {
    primosino = 'SI';
}else{
    primosino = 'NO';
}
7// -----------------imprimir per HTMl

numero.textContent = (`el numero ${num}`);
resultado.textContent = `${primosino} es primo` */

/* 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

!5 = 5*4*3*2*1 = 120 */

/* const numero = document.getElementById('numero');
const resultado = document.getElementById('resultado');
numtxt = prompt('Introduzca el numero a Factorizar');
num = Number(numtxt);
let result = 1;
let operation = [];

for (num; num != 0; num--){
    result = result * num;
    operation.push(num);
//    console.log(result);                  // control
}
// console.log(operation.join('*'));        // control

numero.textContent = (`el numero a factorizar es ${num}`);
resultado.textContent = `el factorial de ${numtxt}! = ${operation.join(' * ')} = ${result}`; */

/* 6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido */

/* const numero = document.getElementById('numero');
const resultado = document.getElementById('resultado');

let total = 0;
let numeros = [];

while (total < 50){
    num = prompt('Introduce un numero');
    total = total + Number(num);
    numeros.push(Number(num))
//    console.log(total)                // control
}
// console.log(numeros.join(' + '));    // control
// console.log(total);                  // control

numero.textContent = (`Se han introducido ${numeros.length} numeros y son: ${numeros.join(' - ')}`);
resultado.textContent = (`el tesultado es: ${numeros.join(' + ')} = ${total}`) */

/* 7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares */

/* const numero = document.getElementById('numero');
const resultado = document.getElementById('resultado');

let numberslist = [5, 9, 13, 42, 22];
let pares = [];
let impares = [];

for (num of numberslist ){
    let random = Math.round((Math.random()*10));
    let result =  num * random;
    console.log(`${num} * ${random} = ${result}`);

    if (result % 2 != 0){
        impares.push(result);
    } else {
        pares.push(result);
    }
}
console.log(`la lista de numeros es: ${numberslist}`);
console.log(`los pares son : ${pares}`);
console.log(`los impares son: ${impares}`); */

/* 8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23 */

/* const numero = document.getElementById('numero');
const resultado = document.getElementById('resultado');

let letraslist = ['A', 'B', 'C', 'D', 'E', 'F' ,'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P' ,'Q', 'R', 'S', 'T', 'V', 'W'];

 dni = prompt('Introduce un numero de DNI (max 8 digitos) i asignaremos una letra');

 index = Number(dni) % 23;
 console.log(index);
 letra = letraslist[index];
 console.log(letra);

 numero.textContent = (`El numero introducido es ${dni} `);
resultado.textContent = (`el dni con letra seria: ${dni} ${letra}`) */

/* 9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra. */

/* const numero = document.getElementById('numero');
const resultado = document.getElementById('resultado');

palabra = prompt('Introduce una palabra: ')

let longitud = palabra.length;
// console.log(longitud)
let numvocal = 0; 

let vocales = ['a', 'e', 'i', 'o', 'u']

for (letra of palabra){
    for (vocal of vocales){
        if (letra == vocal){
            numvocal++
        }
    }
}

numero.textContent = (`Has introducido la palabra ${palabra}`);
resultado.textContent = (`En la palabra ${palabra} hay ${numvocal} vocales i ${palabra.length - numvocal} consonantes`)

// console.log(numvocal, numconsonant = palabra.length - numvocal) */

/* 10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.  */

const numero = document.getElementById('numero');
const resultado = document.getElementById('resultado');

const colores = ["azul", "amarillo", "rojo", "verde", "rosa"]
let enLista = false;

colorElejido = prompt('introduce un color:')

for (color of colores){
    if (color == colorElejido){
        enLista = true;
        break;
    }
}
console.log(enLista)

numero.textContent = (`Has introducido el color ${colorElejido}`);

if (enLista==true){
    resultado.textContent = (`El color ${colorElejido} SI esta en la lista de colores ${colores}`);
    console.log(enLista)
}else{
    resultado.textContent = (`El color ${colorElejido} NO esta en la lista de colores ${colores}`);
    console.log(enLista)
}