// Script created based on “Impractical Python Projects” by Lee Vaughan that
// codes and decodes messages using two-rail rail fence cipher. Exercise
// made to learn JS.

// Function that takes a String (str) and returns a coded message

function twoRailCode(str) {
	let newStr = str.split(' ').join('').toUpperCase();
	let arrEven = [];
	let arrOdd = [];

	for (let i = 0; i < newStr.length; i++) {
		if (i % 2 === 0) {
			arrEven.push(newStr[i]);
			} else {
				arrOdd.push(newStr[i]);
			}
	}

	let codedMessage = arrEven.concat(arrOdd).join('');
	
	return codedMessage.match(/.{1,5}/g).join(' ');
}

// Function that takes a String (str) and returns a decoded message

function twoRailDecode(str) {
	let newArr = str.split(' ').join('').split('');
	let middleIndex = Math.ceil(newArr.length / 2);
	let decodedArr = [];

	for (let i = 0; i < middleIndex; i++) {
		decodedArr.push(newArr[i]);
		decodedArr.push(newArr[i + middleIndex]);
	}

	return decodedArr.join('');
}
