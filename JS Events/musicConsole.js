// Music console example
const playButton = document.querySelector('#playButton');
const stopButton = document.querySelector('#stopButton');
const volumeSlider = document.querySelector('#volumeSlider');
const playStatus = document.querySelector('#playStatus');

playButton.addEventListener('click', function() {
    console.log('Playing music!');
});

stopButton.addEventListener('click', function() {
    console.log('Music stopped.');
});

volumeSlider.addEventListener('input', function(event) {
    console.log('Volume changed to:', event.target.value);
});

// Keyboard events for sound effects
document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        console.log('Spacebar pressed - Play/Pause!');
    }
});