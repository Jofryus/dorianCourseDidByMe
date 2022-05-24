// funciones son procesos para simplificar el trabajo i ayudan a modulizar el codigo.

// las funciones deven realizar una sola tarea.

/* function nombreFuncion(){               // anteriormente
    // codigo de la funcion
}

const nombreFuncion = () => {           // actualmente en ES6
    // codigo de la funcion
} */

// los parametros van en los parentesis

// pueden devolver valores con return

/* function saludar(){
    console.log('hola');
} */

const saludar = () => console.log('hola');
const saludarCliente = (user) => console.log(`hola ${user}`);

const suma = (num1, num2) =>{
    if (num1 == 2){
        return num1+num2;
    }
    return num1
}

saludar()
saludarCliente('Pepe')
console.log(suma(3,5));