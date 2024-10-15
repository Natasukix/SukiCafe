document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    
    startButton.addEventListener('click', function() { // Use 'click', not 'Onclick'
        console.log("Button clicked!");  // This will log to the console
        window.location.href = 'game.html';  // Navigate to game.html
    });
});
