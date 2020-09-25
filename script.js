// Assignment Code
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }



// Variables

var passwordLength = 9;
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
// input variables
var userInput = document.createElement("form");
var charLength = document.createElement("input");
var useLower = document.createElement("input");
var useUpper = document.createElement("input");
var useNum = document.createElement("input");
var useSpec = document.createElement("input");
var formLabelLgth = document.createElement("label");
var formLabelLower = document.createElement("label");
var formLabelUpper = document.createElement("label");
var formLabelNum = document.createElement("label");
var formLabelSpec = document.createElement("label");


// add inputs
card-body.appendChild(userInput);

// password length
card-body.userInput.appendChild(formLabelLgth);
formLabelLgth.setAttribute("for", "pwordLength");
formLabelLgth.textContent = ("How many characters? Min 8 Max 128");
card-body.userInput.appendChild(charLength);
charLength.setAttribute("type", "text");
charLength.setAttribute("id", "pwordLength");
charLength.setAttribute("name", "pwordLength");

// lowercase
card-body.userInput.appendChild(formLabelLower);
formLabelLower.textContent = ("Use lowercase?");
formLabelLower.setAttribute("for", "lowercase");
card-body.userInput.appendChild(useLower);
useLower.setAttribute("type", "checkbox");
useLower.setAttribute("id", "lowercase");
useLower.setAttribute("name", "lowercase");

// uppercase
card-body.userInput.appendChild(formLabelUpper);
formLabelUpper.textContent = ("Use uppercase?");
formLabelUpper.setAttribute("for", "uppercase");
card-body.userInput.appendChild(useUpper);
useUpper.setAttribute("type", "text");
useUpper.setAttribute("id", "uppercase");
useUpper.setAttribute("name", "uppercase");

// numbers
card-body.userInput.appendChild(formLabelNum);
formLabelNum.textContent = ("Use numbers?");
formLabelNum.setAttribute("for", "numbers");
card-body.userInput.appendChild(useNum);
useNum.setAttribute("type", "checkbox");
useNum.setAttribute("id", "numbers");
useNum.setAttribute("name", "numbers");

// special characters
card-body.userInput.appendChild(formLabelSpec);
formLabelSpec.textContent = ("Use special characters?");
formLabelSpec.setAttribute("for", "specialChar");
card-body.userInput.appendChild(useSpec);
useSpec.setAttribute("type", "checkbox");
useSpec.setAttribute("id", "specialChar");
useSpec.setAttribute("name", "specialChar");




// This needs to
// 1. choose a random key
// 2. randomly choose an index from the array of that key
// 3. record the value at that index
// 4. repeat as many times as user told it to
// 5. spit out all of the values in the order chosen as the password


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

