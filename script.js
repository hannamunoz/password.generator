// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Generate random password
function generate(){
// Set password length/complexity
let complexity = document.getElementById("slider").value;

let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*+";

let password = "";

// Create for loop to choose password characters
for (var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

// Add password to textbox/display area
document.getElementById("display").value = password;

// Add password to previously generated section
document.getElementById("lastpasswords").innerHTML += password + "<br />";

}

// Set default length of slider 
document.getElementById("length").innerHTML = "Length: 64";

// Function to set length depending on slider
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}

// Function to copy password to clipboard
function copyPassword(){

document.getElementById("display").select();

document.execCommand("Copy");

alert("Password copied to clipbaord")

}