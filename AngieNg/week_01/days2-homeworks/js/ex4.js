/*
Verbing

Create a function called verbing. It should take a single argument, a string. 
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

verbing('swim'): 'swimming'
verbing('swimming'): 'swimmingly'
verbing('go'): 'go'

*/

var verbing = function(string) {
var verbResult = string;
var finalThreeChar = string.substring(string.length - 3); 

	if (string.length >= 3) {
		if (finalThreeChar.endsWith('ing')){		//substring the final three char and check against whether are 'ing'
		
			return verbResult = string +'ly';
		
		} else {	//if not 'ing' at final three char
	
			// Check verbing rules 
			if (checkVerbingRules(string)){		

				return verbResult = string + string.substring(string.length - 1) +'ing';	
			
			} else {
			
				return verbResult = string.substring(0,string.length-1) + 'ing';
			}
		}

	} else {			
		
		return verbResult;
	}		
}

// Verbing Rules function - If the verb ends in a consonant + vowel + consonant, we double the final consonant and add ING		
var checkVerbingRules = function (verbString) {

	var vowel = ['a','e','i','o','u'];
	var tempFinalSecondChar = verbString.substring(verbString.length - 2);	//The final second character
	var finalSecondChar = tempFinalSecondChar.charAt(tempFinalSecondChar);	

	var doubleFinalConsonant = false;

	for (var i = 0; i < vowel.length; i++) {
	//	console.log("i===> " + i + "vowel[i] ==> " +vowel[i] + " finalSecondChar = " +finalSecondChar);
		if (vowel[i].indexOf(finalSecondChar) > -1) {	//if the string match to array value
		
			return doubleFinalConsonant = true;
		}
	}
	return doubleFinalConsonant;
}

console.log(verbing('swim'));
console.log(verbing('log'));
console.log(verbing('give'))
console.log(verbing('swimming'));
console.log(verbing('go'));