// https://www.youtube.com/watch?v=u7KF30wOth0&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=12
// Array
//      

let array1 = [1,2,3,4,5]

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

numbers.textContent = (`let array1 = [1,2,3,4,5]`)
result.textContent = (`nuestro array es: nums = ${array1} `)


// bucle while     --------  puede que no se ejecute nunca
let pass = '';

while (pass != 'hola') {
    pass = prompt('introduce la contraseña: ')
}

console.log('contraseña correcta')


// bucle do - while    -----------  como minimo se ejecuta una vez

do{
    pass= prompt('Introduzca contraseña: ')
} while (pass != 'hola')

console.log('contraseña correcta')