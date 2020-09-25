// Assignment Code
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }



// Global variables

var passwordLength = 1;
var lowerCase = true;
var upperCase = true;
var numberCase = true;
var specialCase = true;
var passwordTxt = "";

var passwordOpt = {
  lCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  special: ["!", "#", "%", "^", "*", "+", "-", "_", "?", ".", "~"],
}



// user inputs
function defineLength() {
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
  } else {
    passwordLength = prompt("Please enter a number between 8 and 128.");
    defineLength();
  }
}

passwordLength = prompt("How many characters? min 8 max 128");
defineLength();

lowercase = confirm("Would you like to include lowercase letters?")
  if (lowercase === true ){

  } else if (lowercase === false) {

  }

uppercase = confirm("Would you like to include uppercase letters?")
  if (uppercase === true ){

  } else if (uppercase === false) {

  }

numbers = confirm("Would you like to include numbers?")
  if (numbers === true ){

  } else if (numbers === false) {

  }

special = confirm("Would you like to include special characters (!, #, %, ^, *, +, -, _, ?, ., ~)?");
  if (special === true ){

  } else if (special === false) {

  }




// This needs to
// 1. choose a random key
// 2. randomly choose an index from the array of that key BUT
// 3. make sure each selected array is used at least once
// 4. record the value at that index
// 5. repeat as many times as user told it to
// 6. spit out all of the values in the order chosen as the password


// random character generator function
  function charGen() {
    keyChoice = Math.floor(Math.random() * 4);
      if (keyChoice === 0) {
        lowerIndex = Math.floor(Math.random() * 25);
        lowerChoice = passwordOpt.lCase[lowerIndex];
        console.log(lowerChoice);
        passwordTxt = passwordTxt.concat(lowerChoice);
      } else if (keyChoice === 1) {
        upperIndex = Math.floor(Math.random() * 25);
        upperChoice = passwordOpt.uCase[upperIndex];
        console.log(upperChoice);
        passwordTxt = passwordTxt.concat(upperChoice);
      } else if (keyChoice === 2) {
        numIndex = Math.floor(Math.random() * 9);
        numChoice = passwordOpt.numbers[numIndex];
        console.log(numChoice);
        passwordTxt = passwordTxt.concat(numChoice);
      } else if (keyChoice === 3) {
        specIndex = Math.floor(Math.random() * 10);
        specChoice = passwordOpt.special[specIndex];
        console.log(specChoice);
        passwordTxt = passwordTxt.concat(specChoice);
      }
  }

// password-writer function
// must include loop
  function writePassword() {
    for (var i = 0; i < passwordLength; i++) {
      charGen();
  }
  return passwordTxt;
}


// clear text function
// function clearText() {
//   generate.addEventListener("click", function(){
//     document.getElementById("password").innerHTML = null;
//   })
// }

// call password-writer function upon button click
// write password to text field
generate.addEventListener("click", function(){
  // clearText();
  writePassword();
  document.getElementById("password").innerHTML = passwordTxt;
});

