
// Password generator : chooses chacrters from a length of 8-100 to randomly generate password

//Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// Character Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Declared Variables 
var confirmLength = "";

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Unless length is declare from 8-100, loop 
  while(confirmLength <= 7 || confirmLength >= 101) {
    alert("Password length must be between 8-100 characters Try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    } 

    // Alert informing user of password length chosen 
    alert(`Your password will have ${confirmLength} characters`);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
