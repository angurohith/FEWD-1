const img = document.getElementById('myImage');
const nameee = document.getElementById('name');
const button = document.getElementById('evolveButton');
const container = document.querySelector('#imageContainer');

function evolve() {
    img.setAttribute('src', 'https://image.lexica.art/full_jpg/5540aad7-61fd-46cc-a7cf-edf490ab1e1b');
    nameee.innerText = 'Evolved PIMP';
    container.style.backgroundColor = 'gold';
}

button.addEventListener('click', evolve);