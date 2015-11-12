/*
FixStart

Create a function called fixStart. It should take a single argument, 
a string, and return a version where all occurences of its first character have been replaced with '*', 
except for the first character itself. You can assume that the string is at least one character long. For example:
fixStart('babble'): 'ba**le'
*/

var fixStart = function(string) {
	var firstChar = string.charAt(0).toLowerCase();	//Extract first char in the string and convert all to lower case
	var resultString = "";

	for (i = 0; i < string.length; i++) {
		if (i === 0) {						//Maintain the FIRST char
			resultString = string[i];
		} else {
			if (string[i].match(firstChar)) {		//When subsequent char of the string is matching to FIRST char
				resultString = resultString + '*';
			} else {								
				resultString = resultString + string[i];
			}
		}
	}	
	console.log(resultString);
}


fixStart('babble');
fixStart('pabble');
fixStart('Giggle');
fixStart('Element')