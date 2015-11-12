/*
DrEvil
Create a function called DrEvil. 
It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' 
at the end if the amount is 1 million. For example:

*/

var DrEvil = function(amount) {
	var result = amount + " dollars";

	if (amount >= 1000000) {
		return result + " (pinky)"; 
	} else {
		return result;
	}
};

console.log(DrEvil(10));
console.log(DrEvil(1000000));