// Function that takes a String and returns a Boolean depending on if the String
// is a strong password (min eight characters long, uppercase and lowercase, min
// one digit and min one special character) or not. Exercise made to learn JS.

function strongPassword(str) {

  if (/.{8,}/.test(str) && /[A-Z]/.test(str) && /[a-z]/.test(str) && /\d/.test(str) && /\W|_/.test(str)) {
    return true;
  } else return false;

}
