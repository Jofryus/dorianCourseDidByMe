// las funciones asociadas a objetos se llaman METODOS
// los objetos se crean de manera diferente

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    
        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }

    saludar() {
        return 'Hola,  me llamo ${this.nombre} y tengo ${this.edad} años.';
    };
};

const juan = new Persona('juan', 'garcia', 23);

console.log(juan)
saludar()