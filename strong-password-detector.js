// Function that takes a String and returns a Boolean depending on if the String
// is a strong password (min eight characters long, uppercase and lowercase, min
// one digit and min one special character) or not. Exercise made to learn JS.

function strongPassword(str) {
  let eightChar = /.{8,}/;
  let upper = /[A-Z]/;
  let lower = /[a-z]/;
  let digit = /\d/;
  let special = /\W/;

  if (eightChar.test(str) && upper.test(str) && lower.test(str) && digit.test(str) && special.test(str)) {
    return true;
  } else return false;

}
