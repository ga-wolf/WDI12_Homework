/* 
What's bigger number?

Write a function named greaterNum that:

takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

*/

var greaterNum = function(num1, num2) {
var biggerNum;

	if (num1 > num2) {
		biggerNum = num1;
	} else {
		biggerNum = num2;
	}

	console.log('The greater number of ' + num1 + ' and ' + num2 + ' is ' + biggerNum);
};

greaterNum(4,8);
greaterNum(9,2);