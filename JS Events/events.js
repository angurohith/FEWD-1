// JS Events

// common type of events:
// 1. Click
// 2. Mouseover
// 3. Keydown
// 4. Load
// 5. Submit

const button = document.getElementById('btn');
	button.addEventListener('click', function(event) {
		alert('Button was clicked!');
	});

button.addEventListener('mouseover', function(event) {
    console.log('Mouse over event detected on button.');
});

window.addEventListener('load', function(event) {
    console.log('Page has fully loaded.');
});

document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

// form events:
// 1. submit
// 2. focus
// 3. blur
// 4. input

const form = document.getElementById('myForm');
const nameInput = document.getElementById('inputField');

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert('Form submitted!');
    console.log('Form submitted with name:', nameInput.value);
}

form.addEventListener('submit', handleSubmit);

nameInput.addEventListener('focus', function(event) {
    console.log('Input field focused.');
});

nameInput.addEventListener('blur', function(event) {
    console.log('Input field lost focus.');
});

nameInput.addEventListener('input', function(event) {
    console.log('Current input value:', event.target.value);
});
