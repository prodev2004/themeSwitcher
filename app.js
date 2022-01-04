const card = document.querySelector('.card');
const colors = document.querySelectorAll('.color');
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', () => {
    if (input.checked) 
        input.checked = false
    else 
        input.checked = true
})

colors.forEach(color => {
    color.addEventListener('click', e => {
        card.style.backgroundColor = window.getComputedStyle(e.target).getPropertyValue('background-color');
        // this will give us the background color of each of the color divs
        // after we click one of the colors I want to hide all the colors
        // so we'll just change the input checked to false
        input.checked = false;
    })
})