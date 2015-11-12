/* 
The Plurizer

Write a function named pluralize that:

takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".

*/

var pluralize = function(noun, number){

	if (number === 1) {
		noun = noun;
	} else {
		noun = noun + 's';
	}

	console.log(number +" "+ noun);
};

/** Joel version 
var result = number + ' ' + noun;
	if (number === 1) {
		return result;
	} else {
		return result + 's';
	}

*/
pluralize('sheep', 2);
pluralize('cat', 1);
pluralize('cat', 0);