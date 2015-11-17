/*
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

var tellFortune = function (numOfChildren, partnerName, geoLocation, jobTitle) {
	var fortune =  "You will be a " + jobTitle + " in " + geoLocation + ", and married to " 
					+ partnerName + " with " + numOfChildren + " kids.";
	console.log(fortune); //much better to put in "console.log" inside rather than out side of the function.
	return fortune; // anything after "return" does not work. fucntion just ignore it. retrun should be last line.
} 


tellFortune(2, 'Mylan', 'Tokyo', 'CTO');
tellFortune(10, 'Mike', 'USA', 'CEO');