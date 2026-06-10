// Assignment 3.2 - User Input Validation
// Author: Robert Jimenez

// This function runs when the form is submitted
function validateForm() {

    // Get first name from input box
    let first = document.getElementById("firstName").value;

    // Get last name from input box
    let last = document.getElementById("lastName").value;

    // Combine first + space + last
    let fullName = first + " " + last;

    // Get ZIP code from input box
    let zip = document.getElementById("zip").value;

    // Get message area for output
    let msg = document.getElementById("message");

    // Clear previous messages
    msg.innerHTML = "";

    // -------------------------------
    // NAME VALIDATION
    // -------------------------------

    // Check if full name is longer than 20 characters
    if (fullName.length > 20) {
        msg.innerHTML = "❌ Your full name is too long. Must be 20 characters or less.";
        return false; // Stop program
    }

    // -------------------------------
    // ZIP CODE VALIDATION
    // -------------------------------

    // Check if ZIP is exactly 5 characters AND all digits
    if (zip.length !== 5 || isNaN(zip)) {
        msg.innerHTML = "❌ ZIP code must be exactly 5 digits.";
        return false; // Stop program
    }

    // -------------------------------
    // IF EVERYTHING IS VALID
    // -------------------------------

    msg.innerHTML = "🎉 Access Granted!<br><br>Here is the secret message:<br><br><b>The cake is a lie.</b>";

    return false; 
    // Prevents page refresh so innerHTML stays visible
}
