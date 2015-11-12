/*

Array and Functions Bonus Material
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

*/

var maxOfTwoNumbers = function(a,b) {
	if (a > b) {
	return a;
} else {
	return b;
}
}

/* 

Define a function maxOfThree that takes three numbers as arguments and returns the largest of them

*/

var maxOfThree = function(a,b,c) {
	if (a > b && a > c) {
		return a;
	} else if (b > a && b > c) {
		return b;
	} else {
		return c;
	}
}

/*

Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

*/

var a;
var e;
var i;
var o;
var u;

var vowelOrNot = function(x) {
	if (x === 'a' || x === 'e' || x ===  'i' || x ===  'o' || x ===  'u') {
		return true;
	} else {
		return false;
	}
}


/*

Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

*/

var sum = function(array) {
  var length = array.length;
  var total = 0;
  for (i = 0; i < length; i++) {
    total += array[i];
  }
  return total;
};

var multiply = function(array) {
  var length = array.length;
  var total = 1;
  for (i = 0; i < length;  i++) {
    total *= array[i];
  }
  return total;
};

