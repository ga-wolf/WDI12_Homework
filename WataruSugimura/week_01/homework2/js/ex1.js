/*
Array and Functions Bonus Material

Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
Use the if-then-else construct available in Javascript. 
You'll have to remember your pre-work, or do some googling to figure this out.
*/

	var maxOfTwoNumbers = function(x, y){  //x,yの数字としての宣言いるの？
		if(x > y){
			console.log(x)
		}else{
			console.log(y)
		}
	}

	maxOfTwoNumbers(1, 5);
/*
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
var maxOfThree = function(a, b, c){
	console.log(Math.max(a, b, c));
}

maxOfThree(1, 2, 3);

/*/*
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/

	var vowelChecker = function(str){ 
		if(str.charAt(1)=== "a" || str.charAt(1)=== "i" || str.charAt(1)==="u" 
								|| str.charAt(1)==="e" || str.charAt(1)==="o"){
			console.log(!true);
		}else{
			console.log(!false);
		}
	}

	vowelChecker("apple");
	vowelChecker("Wataru");
	vowelChecker("eight");


/*
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers 
in an array of numbers.
For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

var array = [1, 2, 3, 4];

var sumArray = function(array){

	var sum = 0 // Declare a sum value
	for (i=0; i < array.length; i++){
	
	sum = sum + array[i] // add to that sum
	}

	console.log(sum); // Return the sum after loop
}

sumArray(array);


var array = [1, 2, 3, 4];

var multiplyArray = function(array){
	var mul = 1;
	for (i=0; i < array.length; i++){
	mul = mul*array[i];
	}

	console.log(mul); 
}

multiplyArray(array);

/*
Bonus
Define a function reverseString that computes the reversal of a string. 
For example, reverseString("jag testar") should return the string "ratset gaj".

*/

var reverseString = function(str){ //一文字づつ配列にばらして、その配列を反転して、文字列として結合。
	console.log(str.split("").reverse().join(""));
}

reverseString("Wataru");
reverseString("Wataru Sugimura");
reverseString("jag testar");

/*
Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
var arrayOfWords = ["beer", "coffee", "espressomartini"]

var findLongestWord = function(arrayOfWords){
	var length = 0;
	for(i=0; i < arrayOfWords.length; i++){
	length = arrayOfWords[i].length;
}
console.log(Math.max(length));
}

findLongestWord(arrayOfWords);

/*
Write a function filterLongWords that takes an array of words and an number i 
and returns the array of words that are longer than i.
*/
var array = ["beer", "coffee", "espressomartini"]

var filterLongWords = function(array, i){

	for (x=0; x < array.length; x++){
		if(array[x].length > i){
			console.log(array[x]);
		}else{
			
		}
	}
}

filterLongWords(array, 3);

