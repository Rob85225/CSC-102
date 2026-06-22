// -----------------------------------------------------
// Global variable to control the loop
// -----------------------------------------------------
let keepGoing = true;

// -----------------------------------------------------
// Function to check if the user's input is a palindrome
// -----------------------------------------------------
function checkPalindrome() {

    // Get the user's input
    let text = document.getElementById("userInput").value;

    // Remove spaces and convert to lowercase
    let cleaned = text.replace(/\s+/g, "").toLowerCase();

    // Reverse the cleaned string
    let reversed = cleaned.split("").reverse().join("");

    // Compare original cleaned string to reversed string
    if (cleaned === reversed) {
        // Output palindrome message using innerHTML
        document.getElementById("result").innerHTML = `"${text}" IS a palindrome!`;
    } else {
        // Output NOT palindrome message using innerHTML
        document.getElementById("result").innerHTML = `"${text}" is NOT a palindrome.`;
    }

    // Ask user if they want to continue
    document.getElementById("continueMessage").innerHTML = "Would you like to enter another word?";
    document.getElementById("continueButton").style.display = "inline-block";
    document.getElementById("stopButton").style.display = "inline-block";
}

// -----------------------------------------------------
// Function to continue the loop
// -----------------------------------------------------
function continueLoop() {

    // Clear previous messages
    document.getElementById("result").innerHTML = "";
    document.getElementById("continueMessage").innerHTML = "";

    // Hide buttons
    document.getElementById("continueButton").style.display = "none";
    document.getElementById("stopButton").style.display = "none";

    // Clear input box
    document.getElementById("userInput").value = "";
}

// -----------------------------------------------------
// Function to stop the loop
// -----------------------------------------------------
function stopLoop() {

    // Display exit message
    document.getElementById("result").innerHTML = "Thank you for using the Palindrome Checker!";

    // Hide buttons
    document.getElementById("continueButton").style.display = "none";
    document.getElementById("stopButton").style.display = "none";

    // Clear continue message
    document.getElementById("continueMessage").innerHTML = "";
}
