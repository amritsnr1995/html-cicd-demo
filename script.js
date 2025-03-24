document.addEventListener('DOMContentLoaded', function() {
    const colorButton = document.getElementById('colorButton');
    const heading = document.querySelector('h1');
    
    colorButton.addEventListener('click', function() {
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        heading.style.color = randomColor;
    });
});

// Add this inside your existing DOMContentLoaded event handler
const darkModeButton = document.getElementById('darkModeButton');

darkModeButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    darkModeButton.textContent = 'Toggle Light Mode';
  } else {
    darkModeButton.textContent = 'Toggle Dark Mode';
  }
});
