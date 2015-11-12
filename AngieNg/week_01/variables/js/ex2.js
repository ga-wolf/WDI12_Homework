/*

The Age Calculator

Forgot how old someone is? Calculate it!

Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.

*/

var currYear = 2015;
var birthYear = 1979;

var calcX = currYear - birthYear;		//Birthday
var calcY = (currYear - birthYear) - 1;  //Before birthday

var ageCalc = 'They are either ' + calcX + ' or ' + calcY + ', substituting the values.';

console.log(ageCalc);
