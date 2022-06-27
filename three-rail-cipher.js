// Script created based on “Impractical Python Projects” by Lee Vaughan that
// codes and decodes messages using three-rail rail fence cipher. Exercise
// made to learn JS.

// Function that takes a String (str) and returns a coded message

function threeRailCode(str) {
	let newStr = str.split(' ').join('').toUpperCase();
	let arr1 = [];
	let arr2 = [];
	let arr3 = [];

	for (let i = 0; i < newStr.length; i+=3) {
			arr1.push(newStr[i]);
	}
	for (let i = 1; i < newStr.length; i+=3) {
			arr2.push(newStr[i]);
	}
	for (let i = 2; i < newStr.length; i+=3) {
			arr3.push(newStr[i]);
	}

	let codedMessage = arr1.concat(arr2).concat(arr3).join('');

	return codedMessage.match(/.{1,5}/g).join(' ');
}

// Function that takes a String (str) and returns a decoded message

function threeRailDecode(str) {
	let newArr = str.split(' ').join('').split('');
	let firstThirdIndex = Math.ceil(newArr.length / 3);
	let decodedArr = [];

	for (let i = 0; i < firstThirdIndex; i++) {
		decodedArr.push(newArr[i]);
		decodedArr.push(newArr[i + firstThirdIndex]);
		decodedArr.push(newArr[i + (firstThirdIndex * 2)])
	}

	return decodedArr.join('');
}
