// https://www.youtube.com/watch?v=UVPnw_APpAk&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=28

const gallery = document.getElementById('gallery')

gallery.addEventListener('click', (event) => {
    console.log(event.target.textContent);
    event.target.classList.add('red');
})