// Global variables

var generateBtn = document.querySelector("#generate")

var passwordLength = 1;
var passwordTxt = "";

var passwordOpt = {
  lowerCase: true,
  lCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: true,
  uCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numberCase: true,
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCase: true,
  special: ["!", "#", "%", "^", "*", "+", "-", "_", "?", ".", "~"],
}


// User inputs

// Define password length
function defineLength() {
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
  } else {
    passwordLength = prompt("Please enter a number between 8 and 128.");
    defineLength();
  }
}

// Define password conditions
function chooseCond() {
  alert("Please select at least one of the following:")
  passwordOpt.lowerCase = confirm("Would you like to include lowercase letters? Click 'OK' for yes, 'Cancel' for no");
  passwordOpt.upperCase = confirm("Would you like to include uppercase letters? Click 'OK' for yes, 'Cancel' for no");
  passwordOpt.numberCase = confirm("Would you like to include numbers? Click 'OK' for yes, 'Cancel' for no")
  passwordOpt.specialCase = confirm("Would you like to include special characters (!, #, %, ^, *, +, -, _, ?, ., ~)? Click 'OK' for yes, 'Cancel' for no");
  if (passwordOpt.lowerCase === false && passwordOpt.upperCase === false && passwordOpt.numberCase === false && passwordOpt.specialCase === false) {
    chooseCond();
  }
}


// Character-generation functions

// Generate random password characters from the chosen character array
function charGen(arr) {
  charIndex = Math.floor(Math.random() * arr.length);
  charChoice = arr[charIndex];
  passwordTxt = passwordTxt.concat(charChoice);
}

// Initial character generation function: generates one character from each selected array
function initCharGen() {
  if (passwordOpt.lowerCase === true) {
    charGen(passwordOpt.lCase);
  }

  if (passwordOpt.upperCase === true) {
    charGen(passwordOpt.uCase);
  }

  if (passwordOpt.numberCase === true) {
    charGen(passwordOpt.numbers);
  }

  if (passwordOpt.specialCase === true) {
    charGen(passwordOpt.special);
  }
}

// Random character generator function
function charAdd() {
  keyChoice = Math.floor(Math.random() * 4);
  switch (keyChoice) {
    case 0:
      if (passwordOpt.lowerCase === true) {
        charGen(passwordOpt.lCase);
      } else {
        charAdd();
      }
      break;
    case 1:
      if (passwordOpt.upperCase === true) {
        charGen(passwordOpt.uCase);
      } else {
        charAdd();
      }
      break;
    case 2:
      if (passwordOpt.numberCase === true) {
        charGen(passwordOpt.numbers);
      } else {
        charAdd();
      }
      break;
    case 3:
      if (passwordOpt.specialCase === true) {
        charGen(passwordOpt.special);
      } else {
        charAdd();
      }
      break;
    default:
      console.log(keyChoice);
  }
}

// Create password
function createPassword() {
  while (passwordTxt.length < passwordLength) {
    initCharGen();
    charAdd();
  }
  return passwordTxt;
}


// Prompts user to choose password length and character sets
passwordLength = prompt("How many characters? min 8 max 128");
defineLength();
chooseCond();


// Call createPassword() upon button click & write password to text field
generate.addEventListener("click", function () {
  createPassword();
  document.getElementById("password").innerHTML = passwordTxt;
});