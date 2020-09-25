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
var passwordTxt = "";

var passwordOpt = {
  lowerCase: true,
  lCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: true,
  uCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numberCase: true,
  numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  specialCase: true,
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

// this needs a recursive loop
passwordLength = prompt("How many characters? min 8 max 128");
defineLength();

passwordOpt.lowerCase = confirm("Would you like to include lowercase letters? Click 'OK' for yes, 'Cancel' for no");

passwordOpt.upperCase = confirm("Would you like to include uppercase letters? Click 'OK' for yes, 'Cancel' for no");

passwordOpt.numberCase = confirm("Would you like to include numbers? Click 'OK' for yes, 'Cancel' for no")

passwordOpt.specialCase = confirm("Would you like to include special characters (!, #, %, ^, *, +, -, _, ?, ., ~)? Click 'OK' for yes, 'Cancel' for no");




// This needs to
// 1. choose a random key
// 2. randomly choose an index from the array of that key BUT
// 3. make sure each selected array is used at least once
// 4. record the value at that index
// 5. repeat as many times as user told it to
// 6. spit out all of the values in the order chosen as the password



// generate lowercase letters function
function lowerGen() {
  lowerIndex = Math.floor(Math.random() * 26);
  lowerChoice = passwordOpt.lCase[lowerIndex];
  console.log(lowerChoice);
  passwordTxt = passwordTxt.concat(lowerChoice);
}


// generate uppercase letters function
function upperGen() {
  upperIndex = Math.floor(Math.random() * 26);
  upperChoice = passwordOpt.uCase[upperIndex];
  console.log(upperChoice);
  passwordTxt = passwordTxt.concat(upperChoice);
}


// generate numbers function
function numberGen() {
  numIndex = Math.floor(Math.random() * 10);
  numChoice = passwordOpt.numbers[numIndex];
  console.log(numChoice);
  passwordTxt = passwordTxt.concat(numChoice);
}


// generate special characters function
function specialGen() {
  specIndex = Math.floor(Math.random() * 10);
  specChoice = passwordOpt.special[specIndex];
  console.log(specChoice);
  passwordTxt = passwordTxt.concat(specChoice);
}



// initial character generation function
function charGen() {
  if (passwordOpt.lowerCase === true) {
    lowerGen();
  } else if (passwordOpt.upperCase === true) {
    upperGen();
  } else if (passwordOpt.numberCase === true) {
    numberGen();
  } else if (passwordOpt.specialCase === true) {
    specialGen();
  }
}

// random character generator function
  function charAdd() {
    keyChoice = Math.floor(Math.random() * 4);
    if (keyChoice === 0) {
      if (passwordOpt.lowerCase === true) {
        lowerGen();
      } else if (passwordOpt.lowercase === false) {
        charAdd();
      }
    } else if (keyChoice === 1) {
      if (passwordOpt.upperCase === true) {
      upperGen();
      } else if (passwordOpt.upperCase === false) {
        charAdd();
      }
    } else if (keyChoice === 2) {
      if (passwordOpt.numberCase === true) {
      numberGen();
      } else if (passwordOpt.numberCase === false) {
        charAdd();
      }
    } else if (keyChoice === 3)
      if (passwordOpt.specialCase === true) {
      specialGen();
      } else if (passwordOpt.specialCase === false) {
        charAdd();
      }
  }

// password-writer function
// must include loop
  function writePassword() {
    while (passwordTxt.length < passwordLength){
    //for (var i = 0; i < passwordLength; i++) {
      charAdd();
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

