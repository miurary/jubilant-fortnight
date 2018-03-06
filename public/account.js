// check given email address
function checkEmail(email) {
	var ex1 = /([A-Z]|[a-z]|[0-9]|(!|#|\$|%|\^|&|\*))+@(?!.*@)([A-Z]|[a-z]|[0-9])+[.](edu|com|gov)$/;

	return ex1.test(email);
}

// check given password
function checkPassword(pass) {
	var ex2 = /([A-Z]|[a-z]|[0-9]|[!@#\$%\^&\*])*(?=.{5,})/;

	return ex2.test(pass);
}

// check if both passwords are the same
function compPasswords(pass1, pass2) {
	return (pass1 == pass2);
}

//check form data
function validateAccountCreate() {
	// create variables and get values from form data
	var email = document.createAccount.email.value;
	var password = document.createAccount.pass.value;
	var passConfirm = document.createAccount.passconfirm.value;

	// check the email
	if (checkEmail(email) != true){
		document.getElementById("error").innerHTML = "Must enter a valid email address.";
		return false;
	}

	// check the password
	if (checkPassword(password) != true){
		document.getElementById("error").innerHTML = "Password must be at least 5 characters in length.";
		return false;
	}

	// check that passConfirm is the same as password
	if (compPasswords(password, passConfirm) != true) {
		document.getElementById("error").innerHTML = "Passwords must match.";
		return false;
	}

	// if reaches here return true
	return true;
}

//check account email to look up in database
function validateAccountEmail() {
	// create variable and get value from form data
	var email = document.passRecover.email.value;

	// check the email
	if (checkEmail(email) != true){
		document.getElementById("error").innerHTML = "Must enter a valid email address.";
		return false;
	}

	// if reaches here return true
	return true;
}

// check the new password for account
//check form data
function validateNewPassword() {
	// create variables and get values from form data
	var password = document.newPassword.pass.value;
	var passConfirm = document.newPassword.passconfirm.value;

	// check the password
	if (checkPassword(password) != true){
		document.getElementById("error").innerHTML = "Password must be at least 5 characters in length.";
		return false;
	}

	// check that passConfirm is the same as password
	if (compPasswords(password, passConfirm) != true) {
		document.getElementById("error").innerHTML = "Passwords must match.";
		return false;
	}

	// if reaches here return true
	return true;
}