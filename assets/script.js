
var lowerString = "abcdefghijklmnopqrstuvwkyz"
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numString = "1234567890"
var specialString = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

function generatePassword(){
  var length = window.prompt("Choose password length between 8 and 128")
  var useLower = window.confirm ("Do you want to use lowercase letters?")
  var useUpper = window.confirm ("Do you want to use uppercase letters?")
  var useNumber = window.confirm ("Do you want to use numbers?")
  var useSpecial = window.confirm ("Do you want to use special characters?")

  var selectedCharacters = "";

  if (useLower) {
    selectedCharacters += lowerString;
  }
  if (useUpper) {
    selectedCharacters += upperString;
  }
  if (useNumber) {
    selectedCharacters += numString;
  }
  if (useSpecial) {
    selectedCharacters += specialString;
  }

  passwordText = ""
   for(i=0;i < length; i++){
    passwordText += selectedCharacters.charAt(Math.floor(Math.random() * selectedCharacters.length));
   }
   return passwordText
  };

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);


