/*
Array and Functions Bonus Material
*/

//************************************************************
// Define a function maxOfTwoNumbers that takes two numbers as 
// arguments and returns the largest of them. 
// Use the if-then-else construct available in Javascript. 
// You'll have to remember your pre-work, or do some googling 
// to figure this out.
//*************************************************************

var maxOfTwoNumbers = function(num1, num2) {
	return Math.max(num1, num2);
}
console.log(maxOfTwoNumbers(54, 23));

//*************************************************************
// Define a function maxOfThree that takes 
// three numbers as arguments and returns the largest of them.
//*************************************************************

var maxOfThree = function(num1, num2, num3) {
	return Math.max(num1, num2, num3);
}

console.log(maxOfThree(2, 34, 43));

//***************************************************************
//  Write a function that takes a character (i.e. a string of 
//  length 1) and returns true if it is a vowel, false otherwise.
//***************************************************************

var defineVowelChar = function(char) {
	var vowel = ['a','e','i','o','u'];
	var isVowel = false;

	for (var i = 0; i < vowel.length; i++) {
		if (char.indexOf(vowel[i]) > -1) {
			return isVowel = true;
		}		
	}
	return isVowel;
}

console.log(defineVowelChar('a'));

//*******************************************************
// Define a function sumArray and a function multiplyArray 
// that sums and multiplies (respectively) all the numbers 
// in an array of numbers. For example, sumArray([1,2,3,4]) 
// should return 10, and multiplyArray([1,2,3,4]) should 
// return 24.
//******************************************************* 

var sumArray = function() {
	var sArray = [1, 2, 3, 4];
	var total = 0;

	for (var i = 0; i < sArray.length; i++) {
		total = total + sArray[i];
	}
	console.log('The Sum is ' + total);
}

sumArray();

//******************************************************
// Bonus

// Define a function reverseString that computes the 
// reversal of a string. For example, 
// reverseString("jag testar") should return the string 
// "ratset gaj".
//******************************************************


var reverseString = function() {
//	var stringArray = ['Hi mate', 'Morning, everyone'];
	var string = "Hi mate";
	var reverseStr = "";

//	for (var i = 0; i < stringArray.length; i++) {
//		var eachArrLength = stringArray[i]length;

		for (var j = string.length - 1; j >= 0; j--) {
			reverseStr = reverseStr + string[j];
		}

//	}
	console.log('Result = ' +reverseStr);
} 

reverseString();

//******************************************************
// Write a function findLongestWord that takes an array 
// of words and returns the length of the longest one.
//******************************************************

var findLongestWord = function () {
	var arrString = ['maximum', 'chit-chat', 'hello'];
	var tempLongestLength = 0;
	var longestWord;

	for (var i=0; i < arrString.length; i++) {
		if (arrString[i].length > tempLongestLength) {
			tempLongestLength = arrString[i].length;		//temporary longest length
			longestWord = arrString[i];						//input the longest word
		}
	}
	return longestWord; 
}

console.log(findLongestWord());


//*******************************************************
// Write a function filterLongWords that takes an array of 
// words and an number i and returns the array of words 
// that are longer than i.
//******************************************************
var filterLongWords = function(number) {
	var arrString = ['Sold', 'Welcome', 'Afternoon'];
	var arrNewString = [];

	for (var i = 0; i < arrString.length; i ++) {
		if (arrString[i].length > number) {
			arrNewString.push(arrString[i]);
		}
	}
	console.log(arrNewString);
}

filterLongWords(5);

