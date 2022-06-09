// https://www.youtube.com/watch?v=vAw2pYQzG30&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=26

/* 
Atributos

    element.getAttribute('attribute')
    element.setAttribute('attribute', value)

Clases
    element.classList.add('class', 'class', ...)
    element.classList.remove('class', 'class', ...)
    element.classList.toggle('class', [force])
    element.classList.contains('class')
    element.classList.remplace('oldClass', 'newClass')

atributos directos

    id
    value 
*/

const title = document.getElementById('title');
const name = document.getElementById('name');

console.log(title);
console.log(name);

console.log(name.getAttribute('type'));