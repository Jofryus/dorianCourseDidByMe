// https://www.youtube.com/watch?v=M1HnizZ6diM&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=10
// Array
//      nos perrmite almacenar varios datos agrupados
//      puede ser qualquier tipo de dato
//      se pueden mezclar los tipos
//      se pueden añadir o quitar datos

// let numero = 5

// let array = []

let nums = [1,2,3,4,5,6,7,8,9,10]

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

numbers.textContent = (`let nums = [1,2,3,4,5,6,7,8,9,10]`)
result.textContent = (`nuestro array es: nums = ${nums} `)
