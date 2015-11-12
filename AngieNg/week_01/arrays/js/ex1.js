/* 
Your top choices
Create an array to hold your top choices (colors, presidents, whatever).
For each choice, log to the screen a string like: "My #1 choice is blue."
Bonus: Change it to log "My 1st choice, 
"My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

*/

var choices = ['white', 'purple', 'pink', 'blue'];
var sequence = ['1st', '2nd', '3rd', '4th'];

for (i = 0; i < choices.length; i++) {
	var statement = "My #" + (i + 1) +" choice is " + choices[i];
	var statement2 = "My " + sequence[i] + " choice is " + choices[i];
	
	//console.log(statement);	
	console.log(statement2);
}


/** Joel version 

var guitars = ['Frender Bass VI', 'Jackson 7 String', 'Ovation 12 String'];

for (var i = 0; i < guitars.length - 1; i++) {
	console.log("My # " + (i + 1) + guitars[i] + ".");
}
*/



