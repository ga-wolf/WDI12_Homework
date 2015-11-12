// Bonus

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.


console.log("lorem ipsum")

var listOfWords = ["cheese", "giblet", "and", "snuff"]

var reverseString = function (string) {
	var reversed = []
	for (var i = string.length - 1; i >= 0; i--) {
		reversed.push(string[i])
	};
	return reversed.join("")
};

var findLongestWord = function (array) {
	var currentLongest = null;
	for (var i = 0; i < array.length; i++) {
		if ( currentLongest < array[i].length ) {
			currentLongest = array[i].length;
		};
	};
	return currentLongest;
};

var filterLongWords = function (array, i) {
		var longWords = [];
	for (var j = 0; j < array.length; j++) {
		if ( i < array[j].length ) {
			longWords.push(array[j]);
		};
	};
	return longWords.join(", ");
};