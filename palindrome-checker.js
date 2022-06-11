// Function that takes a String and returns a boolean depending on
// if the String is a palindrome or not. Part of FreeCodeCamp projects.

function palindrome(str) {
  let arr = str.toLowerCase().split('');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[a-z0-9]/g)) {
      newArr.push(arr[i]);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== newArr[(newArr.length - 1) - i]) {
      return false;
    }
  }
  return true;
}
