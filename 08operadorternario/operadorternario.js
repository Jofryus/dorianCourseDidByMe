// el operador ternario se utiliza como el if --- https://www.youtube.com/watch?v=8lb8DLK9C84&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=9









const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let num = prompt('Introduzca el primer número');


(num %2 == 0) ? 
    (numbers.textContent = (`has untroducido el numero ${num}`),
    result.textContent = (`el ${num} es par`)
    )
    : 
    (numbers.textContent = (`has untroducido el numero ${num}`),
    result.textContent = (`el ${num} es impar`)
    );