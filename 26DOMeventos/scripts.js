// https://www.youtube.com/watch?v=Up67WpXIy70&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=28

/* 
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - doble click al botón izquierdo del ratón
    mouseenter - cuando el raton entra en la zona del evento
    mouseleave - cuando el raton se va de la zona del evento
    mousedown - cuando pulsamos i no soltamos en botón izquierdo.
    mouseup - quando soltamos el botón izquierdo
    mousemove - cuando movemos el ratón


*/





const buttonClick = document.getElementById('button');

buttonClick.addEventListener('click', () => {
    console.log('click');
});

const buttonDblClick = document.getElementById('button');

buttonDblClick.addEventListener('dblclick', () => {
    console.log('Doble CLick');
});

const eventBox = document.getElementById('box1');

eventBox.addEventListener('mouseenter', () => {
    console.log('The mouse is on the box');
    /* box1.style.background = 'blue';
    box1.style.color = 'red'; */         //   no es la manera correcta
    box1.classList.replace('red', 'blue');
});

eventBox.addEventListener('mouseleave', () => {
    console.log('The mouse is out the box');
/*     box1.style.background = 'red';
    box1.style.color = 'blue'; */          // No es la manera correcta
    box1.classList.replace('blue', 'red');
});

eventBox.addEventListener('mouseup', () => {
    console.log('The mouse is upclicking on the box');
});

eventBox.addEventListener('mousedown', () => {
    console.log('The mouse is clicking on the box');
});

eventBox.addEventListener('mousemove', () => {
    console.log('The mouse is moving on the box');
});

/* 
Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos 
*/

const input = document.getElementById('input');

input.addEventListener('keydown', () => {
    console.log('you are pressdown a key')
});

input.addEventListener('keyup', () => {
    console.log('you are pressup a key')
});

/* input.addEventListener('keypress', () => {
    console.log('you are pressing a key')
}); */
