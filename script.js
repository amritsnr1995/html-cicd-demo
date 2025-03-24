document.addEventListener('DOMContentLoaded', function() {
    const colorButton = document.getElementById('colorButton');
    const heading = document.querySelector('h1');
    
    colorButton.addEventListener('click', function() {
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        heading.style.color = randomColor;
    });
});
