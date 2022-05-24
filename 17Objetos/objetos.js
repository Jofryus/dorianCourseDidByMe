// Objetos introduccion

// los objetos tienen propiedades i acciones

// ej propiedades anchura, altura etc.

// acciones calculo de area, etc



const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego', 'David']
}

console.log(person.name);           // imprime el nombre
console.log(person['name']);        // imprime el nombre

for (const key in person){          // imprime todas las key de person
    console.log(key);
}

for (const key in person){          // imprime el valor de la key de person
    console.log(person[key]);
}

for (const son of person.sons){     // imprime el valor de person.son
    console.log(son);
}

// para imprimir todo el objeto con template string

console.log(`Hola ${person.name}. Tienes ${person.age} años, que tal estan tus hijos ${person.sons.join(', ')}`)