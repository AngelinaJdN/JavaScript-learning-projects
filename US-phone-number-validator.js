// Function that takes a String and returns a Boolean depending on if the
// String is a valid US phone number or not. Part of FreeCodeCamp projects.

function telephoneCheck(str) {
  let withoutParenthesis = /^(1 ?)?([0-9]{3}(-| )?)([0-9]{3}(-| )?)([0-9]{4})$/;
  let withParenthesis = /^(1 ?)?[(]([0-9]{3}[)](-| )?)([0-9]{3}(-| )?)([0-9]{4})$/;

  if (withoutParenthesis.test(str) || withParenthesis.test(str)) {
    return true;
  }
  else return false;
}
