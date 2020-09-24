// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables

var passwordLength = 1;
var lowerCase = true;
var upperCase = true;
var numberCase = true;
var specialCase = true;
var passwordOpt = {
lCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
uCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
special = [" ", "!", "#", "%", "^", "*", "+", "-", "_", "?", ".", "~"]
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
