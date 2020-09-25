// global variables

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



// user inputs

// password length recursive function
function defineLength() {
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
  } else {
    passwordLength = prompt("Please enter a number between 8 and 128.");
    defineLength();
  }
}

// password conditions recursive function
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

// this needs a recursive function - write above
passwordLength = prompt("How many characters? min 8 max 128");
defineLength();

// what if the user doesn't choose at least one condition? also needs a recursive function - write above
chooseCond();



// This needs to
// 1. choose a random key AND
// 2. randomly choose an index from the array of that key AND
// 3. record the value at that index AND
// 4. repeat until the password contains the desired number of characters AND
// 5. make sure each selected key is used at least once AND
// 6. spit out all of the values as the password


// generate lowercase letters function
function lowerGen() {
  lowerIndex = Math.floor(Math.random() * passwordOpt.lCase.length);
  lowerChoice = passwordOpt.lCase[lowerIndex];
  passwordTxt = passwordTxt.concat(lowerChoice);
}

// generate uppercase letters function
function upperGen() {
  upperIndex = Math.floor(Math.random() * passwordOpt.uCase.length);
  upperChoice = passwordOpt.uCase[upperIndex];
  passwordTxt = passwordTxt.concat(upperChoice);
}

// generate numbers function
function numberGen() {
  numIndex = Math.floor(Math.random() * passwordOpt.numbers.length);
  numChoice = passwordOpt.numbers[numIndex];
  passwordTxt = passwordTxt.concat(numChoice);
}

// generate special characters function
function specialGen() {
  specIndex = Math.floor(Math.random() * passwordOpt.special.length);
  specChoice = passwordOpt.special[specIndex];
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
      charAdd();
      charGen();
  }
  return passwordTxt;
}



// call password-writer function upon button click
// write password to text field
generate.addEventListener("click", function(){
  writePassword();
  document.getElementById("password").innerHTML = passwordTxt;
});

