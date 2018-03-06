function titleUpdate(event){
  var input, result, text, i, title;
  console.log('tjetjo');
  input = document.getElementById('filter-title');
  if(input != ''){
    result = document.getElementsByClassName('post-result');
    text = input.value.toLowerCase();
    for(i = 0; i < result.length; i++){
      // title = result[i].getElementsByTagName('a')[0];
      title = result[i].getElementsByClassName('result-title')[0];
      console.log('title:', title);
      if(title.innerHTML.toLowerCase().indexOf(text) == -1){
        console.log("fajei: ", title.innerHTML.toLowerCase().indexOf(text));
        result[i].remove();
        i--;
      }
    }
  }
}
document.getElementById('filter-search-button').addEventListener('click',titleUpdate);

function dateUpdate(event){
  var date, day, month, year, i, input1, input2, input3;

  if(document.getElementById('filter-day').value != ''){
    input1 = document.getElementById('filter-day').value;
    input1 = parseInt(input1);
  }else{input1 = 0;}
  if(document.getElementById('filter-month').value != ''){
    input2 = document.getElementById('filter-month').value;
    input2 = parseInt(input2);
  }else{input2 = 0;}
  if(document.getElementById('filter-year').value != ''){
    input3 = document.getElementById('filter-year').value;
    input3 = parseInt(input3);
  }else{input3 = 0;}
console.log(input1, input2, input3);
  if(input1 != '' && input2 != '' && input3 != ''){
    result = document.getElementsByClassName('post-result');
    console.log(result.length);
    for(i = 0; i < result.length; i++){
  // price = item[i].getAttribute.('data-price');
      day = result[i].getAttribute('event-day');
      day = parseInt(day);
      month = result[i].getAttribute('event-month');
      month = parseInt(month);
      year = result[i].getAttribute('event-year');
      year = parseInt(year);
      if(day != input1 || month != input2 || year != input3){
        result[i].remove();
        i--;
      }
    }
  }
}
document.getElementById('filter-search-button').addEventListener('click',dateUpdate);

function seriousUpdate(event){
  var input, result, i, serious;
  input = document.getElementById('filter-serious').value.toLowerCase();
  console.log(input);
  if(input != ''){
    result = document.getElementsByClassName('post-result');
    console.log("fjaoife", result.length);
    for(i = 0; i < result.length; i++){
      console.log("fjaoe");
      serious = result[i].getAttribute('event-seriousness').toLowerCase();
      console.log(serious);
      if(input != serious){
        result[i].remove();
        i--
      }
    }
  }
}
document.getElementById('filter-search-button').addEventListener('click', seriousUpdate);

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

function openCreateEvent() {
	window.open("post_event.html", "", "width=500,height=400");
}
