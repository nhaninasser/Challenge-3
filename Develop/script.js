// // Assignment code here
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialcharacters = [ '~','!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '`', '|','(', ')', '{', '}', '[', ']', ':', ';','<', '>', ',', '.', '?', '/'];
var numbers = ['1','2','3','4','5','6','7','8','9','0']
var password = '';
var pswgen = '';

// // Get references to the #generate element
var generateBtn = document.querySelector('#generate');


function generatePassword(){
  

var passwordlength = prompt('How many charachters would you like your password to contain 8-128?')


if (passwordlength >= 8 && passwordlength <= 128) {
  console.log(passwordlength)
}

else {
  alert('Your password must be at least 8, but no more than 128, characters.')
  return '';
}


var qrylowercase = confirm('Click OK to conifrm lower case letters in your password')


var qryuppercase = confirm('Click OK to confirm upper case letters in your password')


var qrynumbers = confirm('Click OK to confirm numbers in your password?')


var qryspecialcharacters = confirm('Click OK to confirm special characters letters in your password')

if (qrylowercase) {
  pswgen += lowercase
}


if (qryuppercase) {
  pswgen += uppercase
}


if (qrynumbers) {
  pswgen += numbers
}

if (qryspecialcharacters) {
  pswgen += specialcharacters
}

if (
  !qrylowercase && !qryuppercase && !qrynumbers && !qryspecialcharacters
) {
  return alert('Please select at least one criteria!');
  
}

for (let i = 0; i < passwordlength; i++) {
  password +=pswgen[Math.floor(Math.random () * pswgen.length)];
}
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);