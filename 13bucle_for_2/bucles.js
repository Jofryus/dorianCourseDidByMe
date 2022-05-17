// https://www.youtube.com/watch?v=ZK0cfptuHAI&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=14
// bucles determinados
// buble for of y for in
//      
console.log("-----------variables--------------")
console.log("let names = ['juan', 'maria','jose', 'paco'];")
let names = ['juan', 'maria','jose', 'paco'];

console.log('-----for----of-------------')

for (name of names){            //of nos devuelve el contenido de cada valor del array
    console.log(name);
}

console.log('----for----in-------------')

for (index in name){            //in nos devuelve el indice de cada valor del arrai
    console.log(index);
}


// Break y continue

console.log('---------break--------con jose-----')

for (name of names){            //of nos devuelve el contenido de cada valor del array
    if (name === 'jose'){
        break
    }
    console.log(name);
}

console.log('----------continue-----con jose------')

for (name of names){            //of nos devuelve el contenido de cada valor del array
    if (name === 'jose'){
        continue
    }
    console.log(name);
}
