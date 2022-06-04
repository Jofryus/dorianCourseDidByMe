// https://www.youtube.com/watch?v=5tKPYrtHHEk&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=23

// spread Operator ( operador de expansion)  ...

const numbers = [-12, 2, 3, 23, 43, 2, 3];
console.log(numbers);
console.log(...numbers);

console.log('------- ejemplo 1 ---------');
// ejemplo 1 -- enviar elemento de un array a una función
const nums = [1,2,3]
const addNumbers = ((a, b, c) => {
    console.log(a+b+c);
})
addNumbers(1,2,3);          // numeros enviados pos separado
addNumbers(...nums)         // numeros enviados en un array
addNumbers(...numbers)         // numeros enviados en un array mas largo, coge los 3 primeros porque asi es la funcion

console.log('------- ejemplo 2 ---------');
// ejemplo 2 -- añadir un array a otro array
let users1 = ['marta', 'jaime', 'laura'];
let users2 = ['javier', 'david', 'rosa', 'juan', 'mercedes']
users1.push(...users2);
console.log(users1);

console.log('------- ejemplo 3 ---------');
// ejemplo 3 -- copiar arrays
numbersNew = [...numbers]
console.log(numbersNew);

console.log('------- ejemplo 4 ---------');
// ejemplo 4 -- concatenar arrays
array1 = [1, 2, 3];
array2 = [5, 7, 9];
let arrayConcat = [...array1, ...array2];
console.log(arrayConcat);

console.log('------- ejemplo 5 ---------');
// ejemplo 5 -- enviar a una funcion un numero de parametros indefinido(parametros REST)
const restParams = (...numbers) => {
    console.log(numbers);
    console.log(...numbers);
}
restParams(1,2,3,4,5,6,7)

console.log('------- ejemplo 6 ---------');
// ejemplo 6 -- trabajar con Math, ahora ya pldemos trabajar con arrays

console.log(Math.max(...numbers));

console.log('------- ejemplo 7 ---------');
// ejemplo 6 -- eliminar dublicados
console.log([...new Set(numbers)]) // set elimina los objetos duplicados de un array.
