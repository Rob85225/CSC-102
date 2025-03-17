// Function to simulate the Dice Duel game
function playGame() {
    // Generate a random number between 1 and 6 for the player's dice
    const playerRoll = getRandomNumber(1, 6);
    // Generate a random number between 1 and 6 for the house's dice
    const houseRoll = getRandomNumber(1, 6);

    // Calculate the sum of the dice rolls
    const playerSum = playerRoll + houseRoll;

    // Determine the result based on the sum of the dice rolls
    let resultMessage = ""; // Placeholder for the result message
    if (playerSum > 7) {
        resultMessage = `🎉 You rolled a ${playerRoll} and ${houseRoll} (Total: ${playerSum}). You WIN!`;
    } else if (playerSum === 7) {
        resultMessage = `🤝 You rolled a ${playerRoll} and ${houseRoll} (Total: ${playerSum}). It's a TIE!`;
    } else {
        resultMessage = `😢 You rolled a ${playerRoll} and ${houseRoll} (Total: ${playerSum}). You LOSE.`;
    }

    // Display the result message in the designated HTML element
    document.getElementById("result").innerHTML = resultMessage;
}

// Utility function to generate a random number within a given range
function getRandomNumber(min, max) {
    // Use Math.random() to generate a number between min and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
