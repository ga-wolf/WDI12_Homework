/*
https://gist.github.com/ga-wolf/9de7dbf52ff627d33846

 We need a function that takes a year
	. Lets call that isLeap year

Check to see a bunch of things:
	- Is the year divisible by 4
	- If the year is divisible by 100, it needs to be divisible by 400 as well
*/

/*** Step 1

var isLeapYear = function(year) {
	if (year % 4 === 0){
		
		if (year % 100 !== 0 || year % 400 === 0) {
			console.log("Yes");
		} else {
			console.log("No");
		}

	} else {
		console.log("No");
	}
}	
*/

/*** Step 2 ***/
var isLeapYear = function(year) {
	if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
		
		console.log("Yes");

	} else {

		console.log("No");
	
	}
}	


isLeapYear(1997);
isLeapYear(1996);
isLeapYear(1900);
isLeapYear(2000);