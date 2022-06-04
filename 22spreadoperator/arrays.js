// https://www.youtube.com/watch?v=Be4i1N09XzQ&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=22
// Array II
//      

// *** .from(interable) --> convierte el arrai en un elemento interable 
console.log('.from(interable)')
let word = 'hello world';
console.log(Array.from(word));          // convierte el string en un array con todos sus caracteres

// *** .sort([callback]) --> oldenalos elementos de un array alfabéticamente(valor unicode), si pasamos un callback los ordena en funcion del algoridmo que passemos
console.log('.sort([callback])')
const letters = ['b', 'c', 'z', 'a'];

console.log('--------- ejemplo 1 ---------')
console.log(letters.sort());    // ordena alfabéticamente esto con numeros no funciona, tendriamos que enviar un callback

console.log('--------- ejemplo 2 ---------')
const numbers = [1, 8, 100, 300, 3];
console.log(numbers.sort((a,b)=>a-b));

        /* function menorMayor(a, b){           esta rs la funcion que interpreta sort
            if (a-b < 0) return -1;
            if (a-b > 0) return 1;
            if (a == b) return 0;
        }; */

// *** .forEach(callback(currentValue, [index]))    --> ejecuta una funcion que edica una vez por cada elemento del array.
console.log('.forEach(callback(currentValue, [index]))')
const numbersForeach = [12, 25, 47, 84, 98];

console.log('--------- ejemplo 1 ---------')
numbersForeach.forEach((number)=>console.log(number));

console.log('--------- ejemplo 2 ---------')
numbersForeach.forEach((number, index) =>
    console.log(`${number} está en la posicion ${index}`));

// *** .some(callback) --> comprueva si un elemento del array cumple la condicion.

const wordsSome = ['HTML', 'CSS', 'JavaScript', 'PHP']
console.log('.some(callback)');
console.log(wordsSome.some(word => word.length>5));

// *** .every(callback) --> comprueva si todos los elemento del array cumple la condicion.
console.log('.every(callback)');
console.log(wordsSome.every(word => word.length>2));
console.log(wordsSome.every(word => word.length>5));

// *** .map(callback) --> transforma los elementos de un array y devuelve un nuevo array;
console.log('.map(callback)');
const numbersMap = [12, 25, 47, 84, 98];
numbersMap.map((number)=>console.log(number*2));

// *** .filter(callback) --> transforma los elementos de un array y devuelve un nuevo array;
console.log('.filter(callback)');
greater40 = numbersMap.filter((number) => number>40);
console.log(greater40);

// *** .reduce(callback) --> transforma los elementos de un array y devuelve un nuevo array;
const users = [
    {
        name: 'user 1',
        online: true 
    },
    {
        name: 'user 2',
        online: false 
    },
    {
        name: 'user 3',
        online: false 
    },
    {
        name: 'user 4',
        online: true 
    },
    {
        name: 'user 5',
        online: true 
    },
    {
        name: 'user 6',
        online: false 
    },
    {
        name: 'user 7',
        online: true 
    },
]

console.log('.reduce(callback)');
console.log('--------- ejemplo 1 ---------')
console.log(numbersMap.reduce((a, b)=> a+b))

console.log('--------- ejemplo 2 ---------')
const usersOnline = users.reduce((cont, user) => {
    if (user.online) cont++;
    return cont
},0)        // el 0 es para que cont se inicialice como numero i tenga el valor 0
console.log(`Hay ${usersOnline} usuarios conectados`);