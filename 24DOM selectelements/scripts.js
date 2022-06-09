// https://www.youtube.com/watch?v=OqfhPpJeJ-c&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=24

// document.getElementById('id') - acceder a un elemento a través de su id
const title = document.getElementById('title');

//console.log(title);

title.textContent = 'DOM - Acceder a elementos/nodos modificado desde el JS'

// document | element.qwrySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

const paragraph = document.querySelector('.paragraph');
const paragraphElement = paragraph.querySelector('span');

// console.log(paragraph.textContent);
// console.log(paragraphElement.textContent);

//document.querySelectorAll('selectorCSS') - accede a todos los elementos que coincidan con el selector CSS, devuelve un nodelist

const paragraph1 = document.querySelectorAll('.paragraph');
const paragraphSpread = [...document.querySelectorAll('.paragraph')];

console.log(paragraph1);        // no es un array por eso no se pueden hacer ciertas cosas.

paragraph1[0].style.color = 'red';
paragraphSpread.map(p => p.style.color = 'green');