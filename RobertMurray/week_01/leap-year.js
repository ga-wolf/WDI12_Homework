///////////////////////////////
// Leap Year Warmup Exercise //
///////////////////////////////

// What this program does:
// It will take any given year and return whether it is a leap year or not. 

// It considers the following:
// • Every year that is evenly divisible by 4
// • Except if it is evenly divisible by 100...
// • Unless it is also divisible by 400
// • Test Data... Make sure it is working!

// We want a custom function called isLeapYear
// Bonus:
// Ask the user what number they want to test

// Get current year
var getCurrentYear = function () {
	var getDate = new Date();
	var getYear = getDate.getFullYear();
	return getYear;
}
var currentYear = getCurrentYear();

// Check yearInput is a leap year
var leapCheck = function (yearInput) {
	var	isleap;
	var getYear = yearInput;
	// Check flags
	var divisableBy4 = getYear % 4;
	var divisibleBy100 = getYear % 100;
	var divisibleBy400 = getYear % 400;
	// Checking Function
	if (!divisableBy4 && (divisibleBy100 || !divisibleBy400)) {
		isleap = true;
		console.log(getYear + " is a leap year");
	} else {
		isleap = false;
		console.log(getYear + " is not a leap year")
	}
	return isleap; 
}

// Test cases
leapCheck(currentYear);
leapCheck(1997);
leapCheck(1996);
leapCheck(1900);
leapCheck(2000);



