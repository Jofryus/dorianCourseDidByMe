// https://www.youtube.com/watch?v=vAw2pYQzG30&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=26

/* 
Atributos

    element.getAttribute('attribute')
    element.setAttribute('attribute', value)

Clases
    element.classList.add('class', 'class', ...)        -- añade classe
    element.classList.remove('class', 'class', ...)     -- borra classe
    element.classList.toggle('class', [force])          -- añade si no tiene, borra si la tiene
    element.classList.contains('class')                 -- devuelve true o false si la ltiene o no
    element.classList.remplace('oldClass', 'newClass')  -- canvia una classe por otra

atributos directos

    id
    value 
*/

const title = document.getElementById('title');
const name = document.getElementById('name');

console.log(title);
console.log(name);

console.log(name.getAttribute('type'));