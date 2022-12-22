// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
	const characterSets = [];

	const passwordLength = parseInt(
		prompt("Please provide a password length between 8 and 128 inclusive")
	);
	if (passwordLength < 8 || passwordLength > 128) {
		alert("You must select a value between 8 and 128 for the password length.");
		return "Error: Invalid Parameters";
	}

	if (confirm("Would you like to include lowercase letters?"))
		characterSets.push("abcdefghijklmnopqrstuvwxyz");
	if (confirm("Would you like to include uppercase letters?"))
		characterSets.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
	if (confirm("Would you like to include numbers?"))
		characterSets.push("0123456789");
	if (confirm("Would you like to include special characters?"))
		characterSets.push("!@#$%^&*()_+-=[]{}\\|/?.>,<:;'\"`~");

	if (characterSets.length === 0) {
		alert("You must select atleast 1 character type to include.");
		return "Error: Invalid Parameters";
	}
}
