// Leap Year Warmup Exercise
// Do this in HTML and JS!

// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:

// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!

// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
// How to structure it...

// We want a custom function called isLeapYear
// Bonus!

// Ask the user what number they want to test
// Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE

// Jack code

// We need a function that a year. Lets call that isLeapYear

// Checks to see a bunch of things:
// - Is the year divisible by 4
// - If the year is divisible by 100, it needs to be divisible by 400 as well.

var isLeapYear = function (year) {
	
		if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ) 
		
		{
			
			console.log ('yes');

	} else {

			console.log ('no');

	}
}

isLeapYear( 1997 );
isLeapYear( 1990 );
isLeapYear( 1900 );
isLeapYear( 2000 );

// var = prompt("What number would you like to test?")


// var isLeapYear = function (num) {
// 	console.log (num);
// 	var str = "";

// 	if ( num % 4 === 0 ) {
// 		str += "true";
	
// 	} else {

// 		return str += "false";
	
// 	}	

// 	if ( num % 100 === 0 ) {
// 		str += "true";
	
// 	} else {

// 		return str += "false";
	
// 	}	

// 	if ( num % 400 === 0 ) {
// 		str += "true";
	
// 	} else {

// 		return str += "false";
	
// 	}

// 	if ( str.length == 0) {
// 		console.log ( num + " ");
// 			return num + " ";
			
// 	}


// 		console.log( str );
// 			return str;

// 	}


