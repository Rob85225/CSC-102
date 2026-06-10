// Name: Robert Jimenez
// File: code.js
// Updated: 06/05/2026
// Purpose: JavaScript functions for Assignment 2.3 - High-Low Casino Game


// -------------------------------------------------------------
// FUNCTION 1: playGame()
// This function runs when the user clicks the "Play Game" button.
// It reads the player's number, generates a random number,
// compares them, and outputs the result using innerHTML.
// -------------------------------------------------------------
function playGame() {

    // Get the player's number from the form input
    let playerNum = document.getElementById("playerNumber").value;

    // Convert the input to a number (important!)
    playerNum = Number(playerNum);

    // Generate a random number between 1 and 10
    let casinoNum = Math.floor(Math.random() * 10) + 1;

    // Call the second function to compare the numbers
    let resultMessage = compareNumbers(playerNum, casinoNum);

    // Output the results to the webpage using innerHTML
    document.getElementById("gameOutput").innerHTML =
        "You chose: " + playerNum + "<br>" +
        "Quark chose: " + casinoNum + "<br><br>" +
        resultMessage;
}


// -------------------------------------------------------------
// FUNCTION 2: compareNumbers(player, casino)
// This function accepts two parameters and returns a result string.
// It compares the player's number to the casino's number.
// -------------------------------------------------------------
function compareNumbers(player, casino) {

    // ❌ LOGIC ERROR INSERTED ON PURPOSE:
    // This condition is reversed. It should be (player > casino).
    if (player < casino) {
        return " You WIN! Quark is not pleased…";
    }

    // ❌ Also reversed on purpose:
    // This should be (player < casino), but now it's flipped.
    else if (player > casino) {
        return " You LOSE! Quark takes your latinum.";
    }

    // If equal → push (this part is still correct)
    else {
        return " It's a PUSH! Nobody wins.";
    }
}

