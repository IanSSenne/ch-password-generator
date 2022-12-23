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

	// prompt for password length
	const passwordLength = parseInt(
		prompt("Please provide a password length between 8 and 128 inclusive")
	);

	// validate password length meets the specificiation.
	if (passwordLength < 8 || passwordLength > 128) {
		alert("You must select a value between 8 and 128 for the password length.");
		return "Error: Invalid Parameters";
	}

	// prompt user for character categorys and add them to the characterSets array
	if (confirm("Would you like to include lowercase letters?"))
		characterSets.push("abcdefghijklmnopqrstuvwxyz");
	if (confirm("Would you like to include uppercase letters?"))
		characterSets.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
	if (confirm("Would you like to include numbers?"))
		characterSets.push("0123456789");
	if (confirm("Would you like to include special characters?"))
		characterSets.push("!@#$%^&*()_+-=[]{}\\|/?.>,<:;'\"`~");

	// validate atleast one character set is picked
	if (characterSets.length === 0) {
		alert("You must select atleast 1 character type to include.");
		return "Error: Invalid Parameters";
	}

	// generate password
	let password = "";
	const usableCharacters = characterSets.join("").split("");
	for (let i = 0; i < passwordLength; i++) {
		password +=
			usableCharacters[Math.floor(Math.random() * usableCharacters.length)];
	}
	return password;
}
