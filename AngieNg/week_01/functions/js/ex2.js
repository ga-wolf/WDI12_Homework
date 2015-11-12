/*

The Age Calculator

Forgot how old someone is? Calculate it!

Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.

*/

var ageCalc = function(birthYear) {
	var currYear = new Date().getFullYear();
	var age1 = currYear - birthYear;
	var age2 = age1 - 1;

	var ageCalc = 'They are either ' + age2 + ' or ' + age1 ;

	console.log(ageCalc);
	
	return ageCalc;
}

ageCalc(1980);
