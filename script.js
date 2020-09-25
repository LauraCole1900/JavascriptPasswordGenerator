// Assignment Code
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }



// Global variables

var passwordLength = 12;
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
var textArea = document.getElementById("password").parentElement;
var cardBody = textArea.parentElement;
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
var formSubmit = document.createElement("input");


// add inputs
cardBody.appendChild(userInput);

// password length
userInput.appendChild(formLabelLgth);
formLabelLgth.setAttribute("for", "pwordLength");
formLabelLgth.textContent = ("How many characters? Min 8 Max 128");
userInput.appendChild(charLength);
charLength.setAttribute("type", "text");
charLength.setAttribute("id", "pwordLength");
charLength.setAttribute("name", "pwordLength");

// lowercase
userInput.appendChild(formLabelLower);
formLabelLower.textContent = ("Use lowercase?");
formLabelLower.setAttribute("for", "lowercase");
userInput.appendChild(useLower);
useLower.setAttribute("type", "checkbox");
useLower.setAttribute("id", "lowercase");
useLower.setAttribute("name", "characters");

// uppercase
userInput.appendChild(formLabelUpper);
formLabelUpper.textContent = ("Use uppercase?");
formLabelUpper.setAttribute("for", "uppercase");
userInput.appendChild(useUpper);
useUpper.setAttribute("type", "checkbox");
useUpper.setAttribute("id", "uppercase");
useUpper.setAttribute("name", "characters");

// numbers
userInput.appendChild(formLabelNum);
formLabelNum.textContent = ("Use numbers?");
formLabelNum.setAttribute("for", "numbers");
userInput.appendChild(useNum);
useNum.setAttribute("type", "checkbox");
useNum.setAttribute("id", "numbers");
useNum.setAttribute("name", "characters");

// special characters
userInput.appendChild(formLabelSpec);
formLabelSpec.textContent = ("Use special characters?");
formLabelSpec.setAttribute("for", "specialChar");
userInput.appendChild(useSpec);
useSpec.setAttribute("type", "checkbox");
useSpec.setAttribute("id", "specialChar");
useSpec.setAttribute("name", "characters");

// submit form
userInput.appendChild(formSubmit);
formSubmit.setAttribute("type", "submit");
formSubmit.setAttribute("value", "submit");




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

