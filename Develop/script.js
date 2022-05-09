var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseArray = uppercase.split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArray = lowercase.split("");
var specialCharacters = "!@#$%^&*()/<>;;{[}]~`+";
var specialCharactersArray = specialCharacters.split("");
var numbers = "1234567890";
var numbersArray = numbers.split("");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var characters = [];
  var resultPassword = "";

  var totalLength = prompt(
    "How Many Characters Do You Want Your Password to Be?\n8-128"
  );

  if (totalLength < 8 || totalLength > 128) {
    alert(
      "Your Password Needs to Be Between 8 and 128 Characters. Please Restart."
    );
  } else {
    if (confirm("Contain Uppercase Letters?")) {
      Array.prototype.push.apply(characters, uppercaseArray);
    }
    if (confirm("Contain Lowercase Letters?")) {
      Array.prototype.push.apply(characters, lowercaseArray);
    }
    if (confirm("Contain Numbers?")) {
      Array.prototype.push.apply(characters, numbersArray);
    }
    if (confirm("Contain Special Characters?")) {
      Array.prototype.push.apply(characters, specialCharactersArray);
    }
    if (characters.length === 0) {
      alert(
        "You Must Select at Least One Type of Character to Generate a Password. Please Restart."
      );
    } else {
      for (var i = 0; i < totalLength; i++) {
        var random = Math.floor(Math.random() * characters.length);
        resultPassword += characters[random];
      }
    }
  }

  passwordText.innerHTML = resultPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
