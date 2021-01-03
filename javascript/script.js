// Generate random password
function generate() {
    // Set password length/complexity
    let complexity = document.getElementById("slider").value;

    let uppercase = document.getElementById("uppercase").checked;

    let lowercase = document.getElementById("lowercase").checked;

    let numbers = document.getElementById("numbers").checked;

    let characters = document.getElementById("characters").checked;

    let uppercaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let lowercaseValues = "abcdefghijklmnopqrstuvwxyz";

    let numbersValue = "1234567890"

    let charactersValue = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    let values = (uppercase ? uppercaseValues : '') + (lowercase ? lowercaseValues : '') + (numbers ? numbersValue : '') + (characters ? charactersValue : '');

    let password = "";

    // Check if at least one box is seected
    if (uppercase || lowercase || numbers || characters) {
        // Create for loop to choose password characters
        for (var i = 0; i < complexity; i++) {
            password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
        }

        // Add password to textbox/display area
        document.getElementById("display").value = password;

        // Add password to previously generated section
        document.getElementById("lastpasswords").innerHTML += password + "<br />";
    } else {
        // If no boxes are sleceted alert user to check at lease one box
        alert("Please select at least one checkbox.")
    }

}

// Set default length of slider 
document.getElementById("length").innerHTML = "Length: 64";

// Function to set length depending on slider
document.getElementById("slider").oninput = function () {
    document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
}

// Function to copy password to clipboard
function copyPassword() {

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipbaord")

}