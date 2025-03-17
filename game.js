// Function to simulate the Craps game
function playCraps() {
    // Generate two random numbers between 1 and 6 (inclusive) for the dice
    const die1 = rollDie();
    const die2 = rollDie();

    // Calculate the sum of the two dice
    const sum = die1 + die2;

    // Variable to hold the game result message
    let resultMessage = "You Rocked It!";

    // Check for Craps (lose condition)
    if (sum === 7 || sum === 11) {
        resultMessage = `🎲 You rolled ${die1} and ${die2} (Total: ${sum}). CRAPS – You lose!`;
    }
    // Check if both dice are equal and even (win condition)
    else if (die1 === die2 && die1 % 2 === 0) {
        resultMessage = `🎲 You rolled ${die1} and ${die2}. Double evens! You WIN!`;
    }
    // Any other outcome results in a push
    else {
        resultMessage = `🎲 You rolled ${die1} and ${die2} (Total: ${sum}). It's a PUSH!`;
    }

    // Output the result to the webpage
    document.getElementById("result").innerHTML = resultMessage;
}

// Utility function to generate a random number between 1 and 6
function rollDie() {
    // Math.random generates a number between 0 and 1, which is scaled to 1-6
    return Math.floor(Math.random() * 6) + 1}
