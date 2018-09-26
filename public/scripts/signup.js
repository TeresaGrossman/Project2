console.log("hello!");

$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var firstNameInput = $("input#firstName-input");
  var lastNameInput = $("input#lastName-input");
  var userNameInput = $("input#userName-input");

  // When the signup button is clicked, we validate the none of the input fields blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      userName: userNameInput.val().trim()
    };

    if (
      !userData.email ||
      !userData.password ||
      !userData.firstName ||
      !userData.lastName ||
      !userData.userName
    ) {
      return;
    }
    // If all of the input fields have data run the signUpUser function
    signUpUser(
      userData.email,
      userData.password,
      userData.firstName,
      userData.lastName,
      userData.userName
    );
    emailInput.val("");
    passwordInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");
    userNameInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, firstName, lastName, userName) {
    $.post("/api/user", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      userName: userName
    })
      .then(function(data) {
        window.location.replace(data);

        //If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }
  console.log(lastNameInput);
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
