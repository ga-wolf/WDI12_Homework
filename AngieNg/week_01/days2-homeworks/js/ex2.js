/*
Mix Up

Create a function called mixUp. It should take in two strings, and return 
the concatenation of the two strings (separated by a space) slicing out and swapping 
the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!

*/

var mixUp = function(string1, string2) {
	var extractString1 = string1.substring(0,2);			//Extract first two characters for String1
	var extractString2 = string2.substring(0,2);			//Extract first two characters for String2

	//Concatenate the strings
	var resultString1 = extractString2 + string1.substring(2,string1.length);
	var resultString2 = extractString1 + string2.substring(2,string2.length);

	console.log(resultString1 + " " +resultString2);
}

mixUp("mix", "pod");
mixUp("dog", "dinner");


/** Another complicated solution 

var mixUp = function(string1, string2) {
var extractString1 = string1.substring(0,2);	//Extract first two characters for String1
var extractString2 = string2.substring(0,2);	//Extract first two characters for String2

// Call getString function
var resultString1 = getString(string1, extractString2);
var resultString2 = getString(string2, extractString1);

console.log(resultString1 + " " +resultString2);
}

var getString = function(inputString, extractChar) {
var resultString = "";

for (i = 1; i < inputString.length; i++) {	//Skip checking first character (i = 0)
if (i === 1) {
resultString = resultString + extractChar; 
} else {
resultString = resultString + inputString[i];
}
}
return resultString;
}

mixUp("mix", "pod");
mixUp("dog", "dinner");

**/