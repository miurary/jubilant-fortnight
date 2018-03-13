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
//document.getElementById('filter-search-button').addEventListener('click',titleUpdate);

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
//document.getElementById('filter-search-button').addEventListener('click',dateUpdate);

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
//document.getElementById('filter-search-button').addEventListener('click', seriousUpdate);

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

function hasher (password) {

    var hash = 0;
    if (password.length == 0) {
        return hash;
    }
    for (var i = 0; i < password.length; i++) {
        char = password.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function newUser (username, password, email) {
  var request = new XMLHttpRequest();
  var requestURL = '/newUser';
  request.open('POST', requestURL);

  var hashPass = hasher(password);

  var userOb = {
    user: username,
    pass: hashPass,
    email: email
  };

  var body = JSON.stringify(userOb);
  request.setRequestHeader('Content-Type', 'application/json');

  request.send(body);
}

function showModal () {

  var modal = document.getElementById('modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  modal.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');
}

function showPostModal () {
  var modal = document.getElementById('post-event-modal');
  var backdrop = document.getElementById('modal-backdrop');

  modal.classList.remove('hidden');
  backdrop.classList.remove('hidden');
}

function hidePostModal () {
  var modal = document.getElementById('post-event-modal');
  var backdrop = document.getElementById('modal-backdrop');

  modal.classList.add('hidden');
  backdrop.classList.add('hidden');

  clearPostInputs();
}

function hideModal () {

  var modal = document.getElementById('modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  modal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');

  clearModalInputs();
}

function clearModalInputs() {

  var inputs = [
    document.getElementById('username-field'),
    document.getElementById('email-field'),
    document.getElementById('password-field'),
    document.getElementById('confirm-password-field')
  ];

  inputs.forEach(function (input) {
    input.value = '';
  });

}

function addUser() {
  var username = document.getElementById('username-field').value;
  var password = document.getElementById('password-field').value;
  var email = document.getElementById('email-field').value;
  var conPassword = document.getElementById('confirm-password-field').value;

  if (!username || !password || !email || !conPassword || password != conPassword) {
    alert("Haha!");
  }

  else {
    newUser(username, password, email);
    hideModal();
  }
}

function successfulLogIn() {
  /*var request = new XMLHttpRequest();
  console.log(document.body);
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.body.innerHTML = this.responseText;
    }
  };
  var requestURL = '/home';
  request.open("GET", requestURL, true);

  request.send();*/
  location.assign("http://os1.engr.oregonstate.edu:3001/home");
}

function goSportsPage() {
  /*var request = new XMLHttpRequest();

  var sportOb = {
    name: sport
  };

  var body = JSON.stringify(sportOb);

  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.body.innerHTML = this.responseText;
    }
  };
  var requestURL = '/sport';
  request.open("GET", requestURL, true);

  request.send(body);
  */

  var sport = event.target.id;
  var url = "http://os1.engr.oregonstate.edu:3001/sport/";
  var full = url.concat(sport);
  location.assign(full);
}

function verifyLogIn(username, password) {
  var request = new XMLHttpRequest();
  var requestURL = '/verifyLogIn';
  request.open('POST', requestURL);

  var hashPass = hasher(password);

  var logInOb = {
    user: username,
    pass: hashPass
  };

  var body = JSON.stringify(logInOb);
  request.setRequestHeader('Content-Type', 'application/json');

  request.addEventListener('load', function(event) {
    if (event.target.status !== 200) {
      var message = event.target.response;
      alert ("error checking log in");
    }
    else {
      successfulLogIn();
    }
  });

  request.send(body);
}

function setupLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (username && password) {
    verifyLogIn(username, password);
  }
}

function keyPress(e) {
  var keyCode = e.keyCode;
  if (keyCode == 13) {
    console.log("==enter pressed");
    setupLogin();
  }
}

function viewPost() {
  //make modal pop up
  //fill modal with info
}

function postEvent() {
  showPostModal();
}

function clearPostInputs() {

  var inputs = [
    document.getElementById('popup-title-input'),
    document.getElementById('popup-day'),
    document.getElementById('popup-month'),
    document.getElementById('popup-year')
  ];

  inputs.forEach(function (input) {
    input.value = '';
  });

}

function postAccept() {
  var title = document.getElementById('popup-title-input').value;
  var day  = document.getElementById('popup-day').value;
  var month = document.getElementById('popup-month').value;
  var year = document.getElementById('popup-year').value;
  var serious = document.getElementById('popup-serious-input').value;
  var post = document.getElementById('grab-this');
  console.log(post);
  var sport = post.getAttribute('data-name');
  console.log("Sport:", sport);
  var temp = "-collection";
  var collection = sport.concat(temp);

  addPost(title, day, month, year, serious, collection);

  hidePostModal();
  clearPostInputs();
}

function insertTitle() {
  var appendTitle = Handlebars.templates.sportTitle();
  var sportsPage = document.getElementById('sports-page-content');
  sportsPage.insertAdjacentHTML('afterbegin', appendTitle);
}

function insertPost(postOb) {
  var appendPost = Handlebars.templates.insertPost(postOb);
  var posts = document.getElementById('results');
  posts.insertAdjacentHTML('beforeend', appendPost);
}

function addPost(title, day, month, year, serious, collection) {
  var request = new XMLHttpRequest();
  var requestURL = '/addPost';
  request.open('POST', requestURL);

  var postOb = {
    title: title,
    day: day,
    month: month,
    year: year,
    seriousness: serious,
    username: "none",
    collection: collection
  };

  var body = JSON.stringify(postOb);
  request.setRequestHeader('Content-Type', 'application/json');

  request.addEventListener('load', function(event) {
    if (event.target.status !== 200) {
      var message = event.target.response;
      alert("Error storing post");
    }
    else {
      insertPost(postOb);
    }
  });

  request.send(body);
}

function forgotPassword() {
  var username = document.getElementById('username').value;
  if (username == "") {
    alert("Please enter a username!");
  }
  else {
    changePassword();
  }
}

function changePassword() {
  location.assign("http://os1.engr.oregonstate.edu:3001/passChange");
}

function saveNewPass() {
  console.log("hi");
}

window.addEventListener('DOMContentLoaded', function() {

  var signUpButton = document.getElementById('signup-button');
  if (signUpButton) {
    signUpButton.addEventListener('click', showModal);
  }

  var hideModalButton = document.getElementById('modal-close');
  if (hideModalButton) {
    hideModalButton.addEventListener('click', hideModal);
  }

  var createAccountButton = document.getElementById('confirm-button');
  if (createAccountButton) {
    createAccountButton.addEventListener('click', addUser);
  }

  var sportsButton = document.getElementsByClassName('sport-button');
  for (var i = 0; i < sportsButton.length; i++) {
    sportsButton[i].addEventListener('click', goSportsPage);
  }

  /*var postButton = document.getElementsByClassName('');
  for (var i = 0; i < postButton.length; i++) {
    postButton[i].addEventListener('click', viewPost);
  }*/

  var postEventButton = document.getElementById('filter-post-button');
  if (postEventButton) {
    postEventButton.addEventListener('click', postEvent);
  }

  var postCloseButton = document.getElementById('popup-x');
  if (postCloseButton) {
    postCloseButton.addEventListener('click', hidePostModal);
  }

  var addPostButton = document.getElementById('post-video-button');
  if (addPostButton) {
    addPostButton.addEventListener('click', postAccept);
  }

  var sportsPage = document.getElementById('sports-page-content');
  if (sportsPage) {
    //insertTitle();
  }

  var forgotPass = document.getElementById('forgot-update-button');
  if (forgotPass) {
    forgotPass.addEventListener('click', forgotPassword);
  }

  var changePassButton = document.getElementById('change-pass-button');
  if (changePassButton) {
    changePassButton.addEventListener('click', saveNewPass);
  }

  window.addEventListener('keypress', keyPress);

});
