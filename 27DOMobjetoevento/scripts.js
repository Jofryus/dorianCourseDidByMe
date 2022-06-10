// https://www.youtube.com/watch?v=UVPnw_APpAk&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=28

const form = document.getElementById('form');
const input = document.getElementById('input');

input.addEventListener('keyup', (event) => {
    console.log(event.target)
})

/* window.addEventListener('click', (event) => {
    console.log(event);
}) */

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('El formulario se ha enviado!!')
})