// ---------------------------------------------
// Global variable to store the movement interval
// ---------------------------------------------
let movementInterval;

// -------------------------------------------------------
// Function called when Start button is clicked
// Disables Start button, enables Stop button, starts moving image
// -------------------------------------------------------
function startMovement() {

    // Disable Start button
    document.getElementById("startButton").disabled = true;

    // Enable Stop button
    document.getElementById("stopButton").disabled = false;

    // Start interval to move image every 1 second
    movementInterval = setInterval(moveImageRandomly, 1000);
}

// -------------------------------------------------------
// Function called when Stop button is clicked
// Disables Stop button, enables Start button, stops movement
// -------------------------------------------------------
function stopMovement() {

    // Disable Stop button
    document.getElementById("stopButton").disabled = true;

    // Enable Start button
    document.getElementById("startButton").disabled = false;

    // Stop the movement interval
    clearInterval(movementInterval);
}

// -------------------------------------------------------
// Function that moves the meme image to a random location
// -------------------------------------------------------
function moveImageRandomly() {

    // Get the meme image element
    const meme = document.getElementById("memeImage");

    // Generate random X and Y positions within the window
    const randomX = Math.floor(Math.random() * (window.innerWidth - meme.width));
    const randomY = Math.floor(Math.random() * (window.innerHeight - meme.height));

    // Apply new position using CSS transform
    meme.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
