// Function that takes an integer Number and returns a String
// with its roman equivalent. Part of FreeCodeCamp projects.

function convertToRoman(num) {
  let arrNum = num.toString().split('')
  let unit = arrNum[arrNum.length - 1];
  let ten = arrNum[arrNum.length - 2] + '0';
  let hundred = arrNum[arrNum.length - 3] + '00';
  let thousand = arrNum[arrNum.length - 4] + '000';

  let romUnit = unit
    .replace(1, 'I').replace(2, 'II').replace(3, 'III')
    .replace(4, 'IV').replace(5, 'V').replace(6, 'VI')
    .replace(7, 'VII').replace(8, 'VIII').replace(9, 'IX');

  let romTen = ten
    .replace(10, 'X').replace(20, 'XX').replace(30, 'XXX')
    .replace(40, 'XL').replace(50,'L').replace(60, 'LX')
    .replace(70, 'LXX').replace(80, 'LXXX').replace(90, 'XC');

  let romHundred = hundred
    .replace(100, 'C').replace(200, 'CC').replace(300, 'CCC')
    .replace(400, 'CD').replace(500, 'D').replace(600, 'DC')
    .replace(700, 'DCC').replace(800, 'DCCC').replace(900, 'CM');

  let romThousand = thousand
    .replace(1000, 'M').replace(2000, 'MM').replace(3000, 'MMM');

  return (romThousand + romHundred + romTen + romUnit)
    .match(/I|V|X|L|C|D|M/g).join('');

}
