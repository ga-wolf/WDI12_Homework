//Pling Plang Plong  https://gist.github.com/ga-wolf/ee1e153de4a4f67d3c0d

// We need a a function, called convert and receive a number
// 3 - we want to output "Pling"
// 5 - we want to output "Plang"
// 7 - we want to output "Plong"

// if number is not divisible by those, turn the number into a string


var convert = function (num) {
	console.log(num);
	var str = "";

	if (num % 3 === 0) {
		str += "Pling ";
	}

	if (num % 5 === 0) {
		str += "Plang ";
	}

	if (num % 7 === 0) {
		str += "Plong ";
	}

	if (str.length === 0) {
		return num + "";
	}
	console.log(str);
}

convert(4);