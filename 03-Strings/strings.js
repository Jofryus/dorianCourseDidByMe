// --- métodos i propiedades de los strings-------------
// -------Metodo: todo aquello que la cadena puede hacer, ej. convertirse en mayúsculas.
// -------Propiedades: Caracteristicas de la cadena por ser cadena. ej. longitud

    //  cadena.método ()
    //  cadena.propiedad

let cadena = 'hello world';

// PROPIEDADES
console.log('------- PROPIEDADES ---------------------');
console.log('--- cadena.length -----------');
console.log('cadena = ' + cadena);
console.log('length --> devuelve la longitud de la cadena contando espacios');
console.log('cadena.length de "' + cadena + '" es = a ' + cadena.length);
     
// MÉTODOS
console.log('------- MÉTODOS ---------------------');

console.log('--- toUpperCase() --------');
console.log('cadena = ' + cadena);
console.log('toUpperCase() --> devuelve la cadena en mayúsculas sin variar el valor del string');
console.log('cadena.toUpperCase() de "' + cadena + '" es ' + cadena.toUpperCase());
let cadena2 = cadena.toUpperCase();
console.log('cadena2 = cadena.toUpperCase() = ' + cadena2);

console.log('--- toLowerCase() --------');
console.log('cadena2 = ' + cadena2);
console.log('toLowerCase() --> devuelve la cadena en minúsculas sin variar el valor del string');
console.log('cadena2.toLowerCase() de "' + cadena2 + '" es ' + cadena2.toLowerCase());

console.log('--- indexOf(string) --------');
console.log('cadena = ' + cadena);
console.log('indexOf(string) --> devuelve la primera posicion de la cadena donde se encuentra el string parametro');
console.log('cadena.indexOf("wo") de "' + cadena + '" esta en la posicion ' + cadena.indexOf('wo'));

console.log('--- replace(string a remplazar, string nuevo) --------');
console.log('cadena = ' + cadena);
console.log('replace(string a remplazar, string nuevo) --> remplaza el string a remplazar por el nuevo string');
console.log('cadena.replace("world", "amigo") de "' + cadena + '" se convierte en --> ' + cadena.replace('world', 'amigo'));

console.log('--- substring(inicio [,fin]) --------');
console.log('cadena = ' + cadena);
console.log('substring(inicio [,fin])  --> extrae los caracteres desde el inicio hasta el fin, si no se incluye fin extrae hasta el final');
console.log('cadena.substring(6, 9) de "' + cadena + '" se convierte en --> ' + cadena.substring(6, 9));

console.log('--- slice(inicio [,fin]) --------');
console.log('cadena = ' + cadena);
console.log('slice(inicio desde el principio  [,fin desde el final])  --> igual que substring extrae los caracteres pero indicando el inicio desde el principio i el final desde el final');
console.log('cadena.slice(2, -3) de "' + cadena + '" se convierte en --> ' + cadena.slice(2, -3));

console.log('--- trim()) --------');
let cadena3 = "    la vida es bella y hay que disfrutarla     "
console.log('cadena3 = ' + cadena3);
console.log('trim()  --> elimina los espacios al inicio i al final');
console.log('cadena.trim() de ->' + cadena3 + '<- se convierte en -->' + cadena3.trim() + '<-');

console.log('--- startsWith(valor [,inicio])) --------');
console.log('cadena3 = ' + cadena3);
console.log('startsWith(valor [,inicio])  --> sirve para saber si un string empieza por un valor, devuelve true o false, el valor inicio nos indica desde donde va ha empezar a contar');
console.log('cadena.startsWith("h" [,inicio]) de ->' + cadena3 + '<- empieza por "h"? -->' + cadena3.startsWith('h') + '<-');
console.log('cadena.startsWith("la vida" , 4) de ->' + cadena3 + '<- en el 4 caracter empieza "la vida"? -->' + cadena3.startsWith('la vida', 4) + '<-');

console.log('--- endsWith(valor [,inicio])) --------');
console.log('cadena3 = ' + cadena3);
console.log('endsWith(valor [,inicio])  --> sirve para saber si un string acaba por un valor, devuelve true o false, el valor inicio nos indica desde donde va ha empezar a contar');
console.log('cadena.endsWith(" " ,6) de ->' + cadena3 + '<- tiene un " " en el caracter 6? -->' + cadena3.endsWith(' ', 6) + '<-');
console.log('cadena.endsWith("disfrutarla     ") de ->' + cadena3 + '<- acaba con "disfrutarla     "? -->' + cadena3.endsWith('disfrutarla     ') + '<-');

console.log('--- includes(valor [,inicio]) --------');
console.log('cadena = ' + cadena);
console.log('includes(valor [,inicio]) --> devuelve si en la cadena encuentra el valor indicado, el parametro inicio nos indica desde que posicion empieza, i nos devuelve true o false');
console.log('cadena.includes("l") de "' + cadena + '" hay una "l" en el string? ' + cadena.includes("l"));
console.log('cadena.includes("e", 4) de "' + cadena + '" hay una "e" en el string empezando en el caracter 4? ' + cadena.includes("e", 4));

console.log('--- repeat(valor) --------');
console.log('cadena = ' + cadena);
console.log('repeat(valor) --> repite el valor de la cadena valor veces');
console.log('cadena.repeat(3) de "' + cadena + '" se combierte en ' + cadena.repeat(3));
console.log('"r".repeat(10) de  se combierte en ' + 'r'.repeat(10));

console.log('--- template Strings --------');
let nombre = 'Juan';
let apellido = 'Ramirez';
let edad = 25;
console.log('let nombre = "Juan"');
console.log('let apellido = "Ramirez"');
console.log('let edad = 25');

console.log('los template string sirven para simplificar la concatenación de datos en los strings')
console.log ("console.log('Hola ' + nombre + ' ' + apellido + '. Tienes ' + edad + ' años')");
console.log ('Hola ' + nombre + ' ' + apellido + '. Tienes ' + edad + ' años');
console.log ("console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años`)")
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años`);