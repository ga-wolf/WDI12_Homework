// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.


var maxOfTwoNumbers = function (a, b){
	if (a > b) {
		console.log(a);
		return a;
	}else{
		console.log(b);
		return b;
	}
};
	maxOfTwoNumbers(2,3);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

var maxOfThree = function (a, b ,c){
	var max = Math.max(a, b, c);
	console.log(max);
};
maxOfThree(3,7,5);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var vowe = function (letter){
	var vowels = ["a", "e", "i", "o", "u"];

    for(var i = 0; i < vowels.length; i++){ 
        if(letter === vowels[i]){
            return true;
         }
    }

    return false;
};


vowe("e");

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var sumArray = function (ary){

	var result = 0;
	for (var i = 0; i< ary.length; i++) {
	result += ary[i];
	
	};

console.log(result)
};

var ary = [1,3,2,6];
sumArray(ary);


var multiplyArray = function (ary){
	var result = 1;
	for (var i = 0; i< ary.length; i++) {
	result = result * ary[i];
	
	};
console.log(result)
};

var ary1 = [1,3,2,6];
multiplyArray(ary1);


// Bonus

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

var reverseString = function(word){
	var reversed = word.split('').reverse().join('');
	console.log(reversed);
  	return reversed;
};

reverseString("word");



// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

// var findLongestWord = function (array){


//     var str = array.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     console.log(word)
//     return word;
// };

var findLongestWord = function(array) {
  var elements = array.length;
  var count = 0;
  for (i = 0; i < elements; i++) {
    if (array[i].length > count) 
      count = array[i].length;
  }
  return count;
}

var test = ["house", "coffee", "car"];
findLongestWord(test);




// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.



var filterLongWords = function(array, int){
  var length = array.length;
  var longestWords = [];
  for (i = 0; i < length; i++) {
    if (array[i].length > int) {
      longestWords[longestWords.length] = array[i];
    }
  }
  console.log(longestWords);
  return longestWords;
};

var testArray = ["car", "numerus", "fundamentals", "doctypes"];
var testInt = 7
filterLongWords (testArray, testInt);



