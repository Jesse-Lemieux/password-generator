
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
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("What number of characters would you like in the password?"));

  // Unless length is declare from 8-100, loop 
  while(confirmLength <= 7 || confirmLength >= 101) {
    alert("Password length must be between 8-100 characters Try again");
    var confirmLength = (prompt("What number of characters would you like in the password?"));
    } 

    // Alert informing user of password length chosen 
    alert(`Your password will have ${confirmLength} characters`);

        // Confirm characters used 
        var confirmSpecialCharacter = confirm("If you would like special characters, click OK");
        var confirmNumericCharacter = confirm("If you would like numeric characters, click OK");    
        var confirmLowerCase = confirm("If you would like lowercase characters, click OK");
        var confirmUpperCase = confirm("If you would like uppercase characters, click OK");
          // If none are chosen, loop back
          while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
            alert("You must choose at least one parameter");
            var confirmSpecialCharacter = confirm("If you would like special characters, click OK");
            var confirmNumericCharacter = confirm("If you would like numeric characters, click OK");    
            var confirmLowerCase = confirm("If you would like lowercase characters, click OK");
            var confirmUpperCase = confirm("If you would like uppercase characters, click OK");   
        } 
    
          var passwordCharacters = []
          
        if (confirmSpecialCharacter) {
          passwordCharacters = passwordCharacters.concat(specialChar)
        }
    
        if (confirmNumericCharacter) {
          passwordCharacters = passwordCharacters.concat(number)
        }
          
        if (confirmLowerCase) {
          passwordCharacters = passwordCharacters.concat(alphaLower)
        }
    
        if (confirmUpperCase) {
          passwordCharacters = passwordCharacters.concat(alphaUpper)
        }
    
          console.log(passwordCharacters)

                // Characters randomly selected based on parameters chosen are put together here
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
